import * as THREE from 'three';
import { GLOBE_RADIUS, KM_TO_UNITS } from './earth.js';
import { latLonToVector3, greatCircleDistanceKm, EARTH_RADIUS_KM } from '../physics/nuclearPhysics.js';
import { generateDoomsdayFlightRoster, calculateDoomsdayImpacts, TOTAL_GLOBAL_ROCKETS, NUCLEAR_NATIONS } from '../physics/doomsdayData.js';
import { sound } from '../audio/sound.js';

export class DoomsdaySystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.isRunning = false;
    this.isPaused = false;
    this.elapsedTime = 0;
    this.timeScale = 1.0;

    // Flight roster
    this.flights = [];
    this.flightCount = 0;

    // Telemetry state
    this.stats = {
      launched: 0,
      inFlight: 0,
      detonated: 0,
      totalMegatons: 0,
      promptCasualties: 0,
      sootTg: 0,
      tempDropC: 0,
      agriCollapsePercent: 0,
      ozoneDepletionPercent: 0,
      nationStats: {}
    };

    this.onTelemetryUpdate = null;

    // Audio throttling
    this.lastAudioDetonationTime = 0;
    this.audioDetonationInterval = 0.18; // limit audio hits to avoid audio buffer saturation

    // Pre-allocated visual structures
    this.initVisualEngine();
  }

  initVisualEngine() {
    // 1. InstancedMesh for 1,754 Missile Heads
    const maxMissiles = TOTAL_GLOBAL_ROCKETS;
    const missileGeo = new THREE.ConeGeometry(0.28, 1.4, 6);
    missileGeo.rotateX(Math.PI / 2); // point along +Z for easy lookAt orientation
    const missileMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95
    });

    this.instancedMissiles = new THREE.InstancedMesh(missileGeo, missileMat, maxMissiles);
    this.instancedMissiles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.group.add(this.instancedMissiles);

    // Hide all instances initially
    const zeroMatrix = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < maxMissiles; i++) {
      this.instancedMissiles.setMatrixAt(i, zeroMatrix);
    }
    this.instancedMissiles.instanceMatrix.needsUpdate = true;

    // 2. Trajectory Curves Multi-Line Geometry
    // We will build dynamic line segments for active missiles
    this.pointsPerArc = 32;
    this.maxLines = maxMissiles;
    const linePositions = new Float32Array(this.maxLines * (this.pointsPerArc - 1) * 2 * 3);
    const lineColors = new Float32Array(this.maxLines * (this.pointsPerArc - 1) * 2 * 3);

    this.trajectoryGeo = new THREE.BufferGeometry();
    this.trajectoryGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    this.trajectoryGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    this.trajectoryMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.trajectoryLines = new THREE.LineSegments(this.trajectoryGeo, this.trajectoryMat);
    this.group.add(this.trajectoryLines);

    // 3. Detonation Blast Shockwave Ring Pool (50 reusable ring meshes)
    this.maxDetonationPool = 50;
    this.detonationPool = [];
    const ringGeo = new THREE.RingGeometry(0.2, 0.8, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff6622,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    for (let i = 0; i < this.maxDetonationPool; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat.clone());
      ring.visible = false;
      ring.userData = { active: false, age: 0, maxAge: 1.8, normal: new THREE.Vector3(), targetScale: 3.5 };
      this.detonationPool.push(ring);
      this.group.add(ring);
    }

    // 4. Detonation Flash PointLight Pool
    this.flashLight = new THREE.PointLight(0xffeedd, 0, 500);
    this.group.add(this.flashLight);

    // 5. Ground Scorch / Fallout Craters Group (permanent crater decals on surface)
    this.scorchGroup = new THREE.Group();
    this.group.add(this.scorchGroup);
    this.maxScorchMarks = 400; // limit to preserve high framerate
    this.scorchMarksCount = 0;

    // 6. Atmospheric Nuclear Winter Soot Shroud
    const sootGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.018, 64, 32);
    this.sootMat = new THREE.MeshStandardMaterial({
      color: 0x050403,
      roughness: 0.95,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.sootSphere = new THREE.Mesh(sootGeo, this.sootMat);
    this.group.add(this.sootSphere);

    // Pre-allocated scratch objects for garbage-free animation loop
    this._dummyObj = new THREE.Object3D();
    this._tempPos = new THREE.Vector3();
    this._tempLook = new THREE.Vector3();
    this._tempColor = new THREE.Color();
  }

  /**
   * Initializes and begins the All-Out Global Nuclear Exchange
   */
  startExchange() {
    this.reset();
    this.isRunning = true;
    this.elapsedTime = 0;

    // Generate complete 1,754 missile flight roster
    this.flights = generateDoomsdayFlightRoster();
    this.flightCount = this.flights.length;

    // Precalculate 3D trajectory curves for all missiles
    this.flights.forEach((flight, idx) => {
      flight.curve = this.createBallisticCurve(flight.launch, flight.target);
      flight.color = new THREE.Color(flight.nationColor);
    });

    // Initialize per-nation statistics
    NUCLEAR_NATIONS.forEach(n => {
      this.stats.nationStats[n.id] = {
        name: n.name,
        color: n.color,
        total: n.strategicRockets,
        launched: 0,
        detonated: 0
      };
    });

    // Initial siren / launch sound
    sound.playLaunch();
    this.updateLinesBuffer();
  }

  stopExchange() {
    this.isRunning = false;
  }

  reset() {
    this.isRunning = false;
    this.elapsedTime = 0;
    this.flights = [];
    this.flightCount = 0;

    this.stats = {
      launched: 0,
      inFlight: 0,
      detonated: 0,
      totalMegatons: 0,
      promptCasualties: 0,
      sootTg: 0,
      tempDropC: 0,
      agriCollapsePercent: 0,
      ozoneDepletionPercent: 0,
      nationStats: {}
    };

    // Reset instanced meshes
    const zeroMatrix = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < TOTAL_GLOBAL_ROCKETS; i++) {
      this.instancedMissiles.setMatrixAt(i, zeroMatrix);
    }
    this.instancedMissiles.instanceMatrix.needsUpdate = true;

    // Clear trajectory lines
    const posAttr = this.trajectoryGeo.attributes.position;
    posAttr.array.fill(0);
    posAttr.needsUpdate = true;

    const colAttr = this.trajectoryGeo.attributes.color;
    colAttr.array.fill(0);
    colAttr.needsUpdate = true;

    // Clear detonation rings
    this.detonationPool.forEach(ring => {
      ring.visible = false;
      ring.userData.active = false;
    });

    // Clear scorch craters
    while (this.scorchGroup.children.length > 0) {
      const obj = this.scorchGroup.children[0];
      obj.geometry.dispose();
      obj.material.dispose();
      this.scorchGroup.remove(obj);
    }
    this.scorchMarksCount = 0;

    // Reset soot shroud
    this.sootMat.opacity = 0.0;

    if (this.onTelemetryUpdate) {
      this.onTelemetryUpdate(this.stats);
    }
  }

  /**
   * Builds an exoatmospheric Great-Circle ballistic curve with realistic apogee
   */
  createBallisticCurve(launchCoords, targetCoords) {
    const startVec = latLonToVector3(launchCoords.lat, launchCoords.lon, GLOBE_RADIUS);
    const endVec = latLonToVector3(targetCoords.lat, targetCoords.lon, GLOBE_RADIUS);

    const p0 = new THREE.Vector3(startVec.x, startVec.y, startVec.z);
    const p3 = new THREE.Vector3(endVec.x, endVec.y, endVec.z);

    const distKm = greatCircleDistanceKm(launchCoords.lat, launchCoords.lon, targetCoords.lat, targetCoords.lon);

    // Apogee height scales with distance: minimum 180 km up to 1,350 km for transcontinental ICBMs
    const apogeeKm = Math.min(1450, Math.max(180, distKm * 0.11));
    const apogeeUnits = apogeeKm * KM_TO_UNITS;

    // Midpoint elevated by apogee
    const chordMid = p0.clone().add(p3).multiplyScalar(0.5);
    const normal = chordMid.clone().normalize();
    const apex = normal.clone().multiplyScalar(GLOBE_RADIUS + apogeeUnits);

    // Quadratic / cubic control points
    const p1 = p0.clone().lerp(apex, 0.55).normalize().multiplyScalar(GLOBE_RADIUS + apogeeUnits * 0.85);
    const p2 = p3.clone().lerp(apex, 0.55).normalize().multiplyScalar(GLOBE_RADIUS + apogeeUnits * 0.85);

    return new THREE.CubicBezierCurve3(p0, p1, p2, p3);
  }

  update(delta) {
    if (!this.isRunning || this.isPaused || this.flightCount === 0) return;

    const simDelta = delta * this.timeScale;
    this.elapsedTime += simDelta;

    let activeLaunched = 0;
    let activeInFlight = 0;
    let activeDetonated = 0;
    let totalDetonatedYieldKt = 0;

    const dummy = this._dummyObj;
    const tempPos = this._tempPos;
    const tempLook = this._tempLook;

    let lineIndex = 0;
    const posArr = this.trajectoryGeo.attributes.position.array;
    const colArr = this.trajectoryGeo.attributes.color.array;

    for (let i = 0; i < this.flightCount; i++) {
      const flight = this.flights[i];
      const curve = flight.curve;
      const c = flight.color;

      if (this.elapsedTime < flight.launchDelaySec) {
        // Pending launch
        dummy.position.set(0, 0, 0);
        dummy.scale.set(0, 0, 0);
        dummy.updateMatrix();
        this.instancedMissiles.setMatrixAt(i, dummy.matrix);
        continue;
      }

      // Missile is launched or detonated
      activeLaunched++;
      const timeInFlight = this.elapsedTime - flight.launchDelaySec;
      const rawProgress = timeInFlight / flight.flightDurationSec;

      if (rawProgress >= 1.0) {
        // Impact / Detonated
        activeDetonated++;
        totalDetonatedYieldKt += flight.yieldKt;

        if (flight.status !== 'detonated') {
          flight.status = 'detonated';
          flight.progress = 1.0;
          this.triggerDetonation(flight);

          if (this.stats.nationStats[flight.nationId]) {
            this.stats.nationStats[flight.nationId].detonated++;
          }
        }

        // Hide missile mesh
        dummy.position.set(0, 0, 0);
        dummy.scale.set(0, 0, 0);
        dummy.updateMatrix();
        this.instancedMissiles.setMatrixAt(i, dummy.matrix);

        // Keep faint burnt-out trajectory line visible
        if (lineIndex < this.maxLines) {
          this.writeTrajectorySegments(lineIndex, curve, 0, 1.0, c.r * 0.2, c.g * 0.2, c.b * 0.2, posArr, colArr);
          lineIndex++;
        }
      } else {
        // Currently In Flight
        activeInFlight++;
        flight.status = 'in_flight';
        flight.progress = rawProgress;

        if (flight.status === 'in_flight' && !flight.hasRecordedLaunch) {
          flight.hasRecordedLaunch = true;
          if (this.stats.nationStats[flight.nationId]) {
            this.stats.nationStats[flight.nationId].launched++;
          }
        }

        // Position along ballistic curve
        curve.getPoint(flight.progress, tempPos);
        const lookAheadProgress = Math.min(1.0, flight.progress + 0.015);
        curve.getPoint(lookAheadProgress, tempLook);

        dummy.position.copy(tempPos);
        dummy.lookAt(tempLook);
        dummy.scale.set(1.0, 1.0, 1.0);
        dummy.updateMatrix();
        this.instancedMissiles.setMatrixAt(i, dummy.matrix);
        this.instancedMissiles.setColorAt(i, c);

        // Draw glowing active trajectory line trailing behind the missile
        if (lineIndex < this.maxLines) {
          this.writeTrajectorySegments(lineIndex, curve, 0, flight.progress, c.r, c.g, c.b, posArr, colArr);
          lineIndex++;
        }
      }
    }

    // Zero out any remaining line segments
    const remainingStart = lineIndex * (this.pointsPerArc - 1) * 2 * 3;
    if (remainingStart < posArr.length) {
      posArr.fill(0, remainingStart);
      colArr.fill(0, remainingStart);
    }

    this.instancedMissiles.instanceMatrix.needsUpdate = true;
    if (this.instancedMissiles.instanceColor) {
      this.instancedMissiles.instanceColor.needsUpdate = true;
    }
    this.trajectoryGeo.attributes.position.needsUpdate = true;
    this.trajectoryGeo.attributes.color.needsUpdate = true;

    // Update active detonation rings
    this.updateDetonations(simDelta);

    // Update Telemetry & Climatology
    const impacts = calculateDoomsdayImpacts(totalDetonatedYieldKt, activeDetonated);
    this.stats.launched = activeLaunched;
    this.stats.inFlight = activeInFlight;
    this.stats.detonated = activeDetonated;
    this.stats.totalMegatons = impacts.totalMegatons;
    this.stats.promptCasualties = impacts.promptCasualties;
    this.stats.sootTg = impacts.sootTg;
    this.stats.tempDropC = impacts.tempDropC;
    this.stats.agriCollapsePercent = impacts.agriCollapsePercent;
    this.stats.ozoneDepletionPercent = impacts.ozoneDepletionPercent;

    // Progressively darken Earth's atmosphere with soot shroud
    // Max opacity ~0.55 when soot approaches 150 Tg
    this.sootMat.opacity = Math.min(0.62, (this.stats.sootTg / 160) * 0.62);

    if (this.onTelemetryUpdate) {
      this.onTelemetryUpdate(this.stats);
    }
  }

  writeTrajectorySegments(lineIdx, curve, startP, endP, r, g, b, posArr, colArr) {
    const pointsCount = this.pointsPerArc;
    let ptr = lineIdx * (pointsCount - 1) * 2 * 3;

    let prevPoint = curve.getPoint(startP);
    for (let s = 1; s < pointsCount; s++) {
      const p = startP + (s / (pointsCount - 1)) * (endP - startP);
      const currPoint = curve.getPoint(p);

      // Vertex 1
      posArr[ptr] = prevPoint.x;
      posArr[ptr + 1] = prevPoint.y;
      posArr[ptr + 2] = prevPoint.z;
      colArr[ptr] = r;
      colArr[ptr + 1] = g;
      colArr[ptr + 2] = b;

      // Vertex 2
      posArr[ptr + 3] = currPoint.x;
      posArr[ptr + 4] = currPoint.y;
      posArr[ptr + 5] = currPoint.z;
      colArr[ptr + 3] = r;
      colArr[ptr + 4] = g;
      colArr[ptr + 5] = b;

      ptr += 6;
      prevPoint = currPoint;
    }
  }

  triggerDetonation(flight) {
    const impactPoint = flight.curve.getPoint(1.0);
    const normal = impactPoint.clone().normalize();

    // 1. Activate shockwave ring from pool
    const ring = this.detonationPool.find(r => !r.userData.active);
    if (ring) {
      ring.visible = true;
      ring.position.copy(impactPoint).add(normal.clone().multiplyScalar(0.08));
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      ring.scale.set(0.2, 0.2, 0.2);
      ring.userData.active = true;
      ring.userData.age = 0;
      ring.userData.maxAge = 1.4;
      ring.userData.targetScale = Math.min(8.0, 1.8 + (flight.yieldKt / 1000) * 4.5);
      ring.material.opacity = 0.95;
    }

    // 2. Flash light at impact point
    this.flashLight.position.copy(impactPoint).add(normal.clone().multiplyScalar(2.0));
    this.flashLight.intensity = Math.min(8.0, 3.0 + (flight.yieldKt / 1000) * 3.0);

    // 3. Add permanent scorched crater decal to globe surface
    if (this.scorchMarksCount < this.maxScorchMarks) {
      this.createGroundScorchDecal(impactPoint, normal, flight.yieldKt);
      this.scorchMarksCount++;
    }

    // 4. Sound effects (throttled)
    const now = this.elapsedTime;
    if (now - this.lastAudioDetonationTime > this.audioDetonationInterval) {
      this.lastAudioDetonationTime = now;
      sound.playDetonation();
    }
  }

  createGroundScorchDecal(impactPoint, normal, yieldKt) {
    // Radius scaled to yield (5 to 35 km in globe units)
    const radius = Math.min(1.4, 0.35 + Math.pow(yieldKt, 0.33) * 0.045);
    const geo = new THREE.CircleGeometry(radius, 12);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x140a05, // scorched charcoal
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.88,
      depthWrite: false
    });

    const decal = new THREE.Mesh(geo, mat);
    decal.position.copy(impactPoint).add(normal.clone().multiplyScalar(0.04));
    decal.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    this.scorchGroup.add(decal);
  }

  updateDetonations(delta) {
    // Fade flash light
    if (this.flashLight.intensity > 0.05) {
      this.flashLight.intensity *= Math.max(0, 1 - delta * 4.5);
    } else {
      this.flashLight.intensity = 0;
    }

    // Animate expanding shockwave rings
    for (let i = 0; i < this.detonationPool.length; i++) {
      const ring = this.detonationPool[i];
      if (!ring.userData.active) continue;

      ring.userData.age += delta;
      const progress = ring.userData.age / ring.userData.maxAge;

      if (progress >= 1.0) {
        ring.userData.active = false;
        ring.visible = false;
      } else {
        const s = progress * ring.userData.targetScale;
        ring.scale.set(s, s, s);
        ring.material.opacity = (1 - progress) * 0.9;
      }
    }
  }

  /**
   * Returns coordinate of densest in-flight missile group for camera tracking
   */
  getActiveSalvoCenter() {
    let sumX = 0, sumY = 0, sumZ = 0;
    let count = 0;
    const tempPos = this._tempPos;

    for (let i = 0; i < this.flightCount; i++) {
      const flight = this.flights[i];
      if (flight.status === 'in_flight') {
        flight.curve.getPoint(flight.progress, tempPos);
        sumX += tempPos.x;
        sumY += tempPos.y;
        sumZ += tempPos.z;
        count++;
      }
    }

    if (count > 0) {
      return new THREE.Vector3(sumX / count, sumY / count, sumZ / count);
    }
    return null;
  }
}
