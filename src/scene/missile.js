import * as THREE from 'three';
import { latLonToVector3, greatCircleDistanceKm } from '../physics/nuclearPhysics.js';
import { GLOBE_RADIUS, KM_TO_UNITS } from './earth.js';

export class MissileSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.progress = 0; // 0 to 1
    this.isFlying = false;
    this.isDetonated = false;
    this.speedMach = 23; // Default Mach 23
    this.speedMultiplier = 1.0; // User timescale
    this.onDetonateCallback = null;

    // Launch & Target coordinates
    this.launchLatLon = { lat: 48.41, lon: -101.35 };
    this.targetLatLon = { lat: 55.75, lon: 37.62 };

    // Create 3D missile model
    this.missileMesh = this.createMissileModel();
    this.missileMesh.visible = false;
    this.group.add(this.missileMesh);

    // Rocket thruster light & flame
    this.thrusterLight = new THREE.PointLight(0xffaa22, 3, 20);
    this.missileMesh.add(this.thrusterLight);

    // Trajectory arc visual line
    this.trajectoryCurveMesh = null;

    // Smoke trail points
    this.trailMaxPoints = 120;
    this.trailPoints = [];
    this.trailLine = this.createTrailLine();
    this.group.add(this.trailLine);

    // Compute initial trajectory curve
    this.recalculateTrajectory();
  }

  createMissileModel() {
    const missile = new THREE.Group();

    // Body cylinder
    const bodyGeo = new THREE.CylinderGeometry(0.35, 0.45, 3.2, 16);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.6,
      roughness: 0.3
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    missile.add(bodyMesh);

    // Nose cone / Re-entry vehicle (RV)
    const noseGeo = new THREE.ConeGeometry(0.35, 1.2, 16);
    noseGeo.translate(0, 2.2, 0);
    const noseMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.8,
      roughness: 0.2
    });
    const noseMesh = new THREE.Mesh(noseGeo, noseMat);
    missile.add(noseMesh);

    // Warhead stripe (tactical marking)
    const stripeGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.4, 16);
    stripeGeo.translate(0, 1.2, 0);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xff3300 });
    const stripeMesh = new THREE.Mesh(stripeGeo, stripeMat);
    missile.add(stripeMesh);

    // Stabilizing fins
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.7, -0.6);
    finShape.lineTo(0.7, -1.2);
    finShape.lineTo(0, -1.0);
    finShape.closePath();

    const extrudeSettings = { depth: 0.05, bevelEnabled: false };
    const finGeo = new THREE.ExtrudeGeometry(finShape, extrudeSettings);
    const finMat = new THREE.MeshStandardMaterial({ color: 0x333333 });

    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(finGeo, finMat);
      fin.rotation.y = (i * Math.PI) / 2;
      fin.position.y = -0.6;
      missile.add(fin);
    }

    // Rocket exhaust flame cone
    const flameGeo = new THREE.ConeGeometry(0.35, 1.8, 12);
    flameGeo.translate(0, -2.5, 0);
    flameGeo.rotateX(Math.PI);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.flameMesh = new THREE.Mesh(flameGeo, flameMat);
    missile.add(this.flameMesh);

    // Initial scale
    missile.scale.set(0.7, 0.7, 0.7);

    return missile;
  }

  createTrailLine() {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.trailMaxPoints * 3);
    const colors = new Float32Array(this.trailMaxPoints * 3);

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });

    return new THREE.Line(geo, mat);
  }

  setCoordinates(launchLatLon, targetLatLon) {
    this.launchLatLon = { ...launchLatLon };
    this.targetLatLon = { ...targetLatLon };
    this.recalculateTrajectory();
  }

  recalculateTrajectory() {
    const p1 = latLonToVector3(this.launchLatLon.lat, this.launchLatLon.lon, GLOBE_RADIUS);
    const p2 = latLonToVector3(this.targetLatLon.lat, this.targetLatLon.lon, GLOBE_RADIUS);

    this.vStart = new THREE.Vector3(p1.x, p1.y, p1.z);
    this.vEnd = new THREE.Vector3(p2.x, p2.y, p2.z);

    // Calculate great-circle angle and distance
    this.distanceKm = greatCircleDistanceKm(
      this.launchLatLon.lat, this.launchLatLon.lon,
      this.targetLatLon.lat, this.targetLatLon.lon
    );

    // Apogee altitude in km based on range (Keplerian ballistic ICBM arc)
    // Intercontinental flights (>8000km) reach ~1100-1400km apogee
    const maxApogeeKm = Math.min(1450, Math.max(120, this.distanceKm * 0.12));
    this.apogeeUnits = maxApogeeKm * KM_TO_UNITS;

    // Normal axis for slerp rotation
    const normal = new THREE.Vector3().crossVectors(this.vStart, this.vEnd).normalize();
    // In case launch and target are antipodal or identical
    if (normal.lengthSq() < 0.001) {
      normal.set(0, 1, 0);
    }
    this.flightAxis = normal;
    this.totalAngle = this.vStart.angleTo(this.vEnd);

    // Draw trajectory guidance path
    this.updateTrajectoryCurveVisualization();

    // Reset flight state
    this.resetFlight();
  }

  updateTrajectoryCurveVisualization() {
    if (this.trajectoryCurveMesh) {
      this.group.remove(this.trajectoryCurveMesh);
      this.trajectoryCurveMesh.geometry.dispose();
      this.trajectoryCurveMesh.material.dispose();
    }

    const segments = 100;
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      points.push(this.getPositionAt(t));
    }

    const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
    const curveMat = new THREE.LineDashedMaterial({
      color: 0x00f0ff,
      dashSize: 1.5,
      gapSize: 0.8,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.trajectoryCurveMesh = new THREE.Line(curveGeo, curveMat);
    this.trajectoryCurveMesh.computeLineDistances();
    this.group.add(this.trajectoryCurveMesh);
  }

  /**
   * Computes 3D position vector on sub-orbital ballistic arc at progress t [0, 1]
   */
  getPositionAt(t) {
    // Slerp along spherical great circle
    const quat = new THREE.Quaternion().setFromAxisAngle(this.flightAxis, this.totalAngle * t);
    const sphericalPoint = this.vStart.clone().applyQuaternion(quat);

    // Ballistic parabolic altitude curve: peak in the middle of exoatmospheric space
    // Parabolic profile: 4 * t * (1 - t)
    const altFactor = 4 * t * (1 - t);
    const altitude = this.apogeeUnits * altFactor;

    // Radius from Earth center
    const totalRadius = GLOBE_RADIUS + altitude;
    return sphericalPoint.normalize().multiplyScalar(totalRadius);
  }

  launch(onDetonateCallback) {
    this.progress = 0;
    this.isFlying = true;
    this.isDetonated = false;
    this.missileMesh.visible = true;
    this.trailPoints = [];
    this.onDetonateCallback = onDetonateCallback;
  }

  resetFlight() {
    this.progress = 0;
    this.isFlying = false;
    this.isDetonated = false;
    this.missileMesh.visible = false;
    this.trailPoints = [];
    this.updateTrail();
  }

  setFlyProgress(t) {
    this.progress = Math.max(0, Math.min(1, t));
    const pos = this.getPositionAt(this.progress);
    this.missileMesh.position.copy(pos);
    this.orientMissile(this.progress);
  }

  orientMissile(t) {
    // Look ahead along trajectory
    const dt = 0.005;
    const tNext = Math.min(1, t + dt);
    const pCurrent = this.getPositionAt(t);
    const pNext = this.getPositionAt(tNext);

    const dir = new THREE.Vector3().subVectors(pNext, pCurrent).normalize();
    if (dir.lengthSq() > 0.0001) {
      // Missile model's nose points along +Y
      const defaultDir = new THREE.Vector3(0, 1, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(defaultDir, dir);
      this.missileMesh.quaternion.copy(quat);
    }
  }

  updateTrail() {
    const posAttr = this.trailLine.geometry.attributes.position;
    const colAttr = this.trailLine.geometry.attributes.color;

    const count = this.trailPoints.length;
    for (let i = 0; i < this.trailMaxPoints; i++) {
      if (i < count) {
        const pt = this.trailPoints[count - 1 - i];
        posAttr.setXYZ(i, pt.x, pt.y, pt.z);

        // Gradient fade: orange-hot near missile to cooling white smoke
        const alpha = 1.0 - (i / this.trailMaxPoints);
        colAttr.setXYZ(i, 1.0, 0.4 + 0.6 * alpha, 0.2 + 0.8 * alpha);
      } else {
        // Degenerate remaining
        const last = count > 0 ? this.trailPoints[0] : this.vStart;
        posAttr.setXYZ(i, last.x, last.y, last.z);
        colAttr.setXYZ(i, 0, 0, 0);
      }
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    this.trailLine.geometry.setDrawRange(0, count);
  }

  update(deltaSec) {
    if (!this.isFlying) return;

    // Real-world Mach speed to simulation flight duration:
    // Speed: Mach number * ~1225 km/h. At Mach 23, speed is ~28,000 km/h (~7.8 km/s).
    // Total flight time in real physics: distanceKm / speedKmPerSec (typically 15-30 minutes).
    // In our simulation, baseline animation duration is ~12 seconds for full intercontinental flight,
    // scaled by speedMach / 23 and user speedMultiplier.
    const baseDurationSec = 12.0 * (Math.max(1500, this.distanceKm) / 10000);
    const speedFactor = (this.speedMach / 23.0) * this.speedMultiplier;
    const progressRate = (1.0 / Math.max(1.0, baseDurationSec)) * speedFactor;

    this.progress += progressRate * deltaSec;

    // Flame flicker
    if (this.flameMesh) {
      const flicker = 0.8 + 0.4 * Math.sin(performance.now() * 0.05);
      this.flameMesh.scale.set(flicker, 1 + flicker * 0.3, flicker);
      this.thrusterLight.intensity = 2.5 * flicker;
    }

    if (this.progress >= 1.0) {
      this.progress = 1.0;
      this.isFlying = false;
      this.isDetonated = true;
      this.missileMesh.visible = false;

      // Position exactly at target
      this.missileMesh.position.copy(this.vEnd);

      if (this.onDetonateCallback) {
        this.onDetonateCallback(this.targetLatLon);
      }
      return;
    }

    // Update position and rotation
    const currentPos = this.getPositionAt(this.progress);
    this.missileMesh.position.copy(currentPos);
    this.orientMissile(this.progress);

    // Record trail point
    this.trailPoints.push(currentPos.clone());
    if (this.trailPoints.length > this.trailMaxPoints) {
      this.trailPoints.shift();
    }
    this.updateTrail();
  }
}
