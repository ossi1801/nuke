import * as THREE from 'three';
import { calculateNuclearEffects, latLonToVector3, EARTH_RADIUS_KM } from '../physics/nuclearPhysics.js';
import { GLOBE_RADIUS, KM_TO_UNITS } from './earth.js';

export class NuclearDetonation {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.isActive = false;
    this.elapsedTime = 0;
    this.timeScale = 1.0;
    this.effectsData = null;
    this.tacticalBoost = true; // Boost visibility when viewing from full orbit

    // Detonation flash light
    this.flashLight = new THREE.PointLight(0xffffff, 0, 800);
    this.group.add(this.flashLight);

    // Target Preview Blast Rings (shown before launch / during target selection)
    this.targetRingsGroup = new THREE.Group();
    this.group.add(this.targetRingsGroup);
    this.previewZoneMeshes = [];

    // Active Detonation Blast Rings
    this.ringsGroup = new THREE.Group();
    this.group.add(this.ringsGroup);
    this.zoneMeshes = [];

    // Ground Scorch Decal Group (permanent post-detonation blast imprint)
    this.scorchGroup = new THREE.Group();
    this.group.add(this.scorchGroup);

    // Fireball 3D Mesh
    this.fireballMesh = this.createFireballMesh();
    this.group.add(this.fireballMesh);

    // Ground & Atmospheric Shockwave Rings
    this.shockwaveMesh = this.createShockwaveMesh();
    this.group.add(this.shockwaveMesh);

    // Volumetric 3D Mushroom Cloud Structure
    this.mushroomGroup = new THREE.Group();
    this.group.add(this.mushroomGroup);
    this.createMushroomCloudStructure();

    // Epicenter vectors
    this.epicenter = new THREE.Vector3(0, GLOBE_RADIUS, 0);
    this.normal = new THREE.Vector3(0, 1, 0);
  }

  createFireballMesh() {
    const geo = new THREE.SphereGeometry(1, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.visible = false;
    mesh.renderOrder = 25;
    return mesh;
  }

  createShockwaveMesh() {
    const geo = new THREE.RingGeometry(0.85, 1.25, 64);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x88f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.visible = false;
    mesh.renderOrder = 20;
    return mesh;
  }

  createMushroomCloudStructure() {
    // 1. Column Stem: stacked turbulent condensation puffs
    this.stemSpheres = [];
    const stemCount = 16;
    for (let i = 0; i < stemCount; i++) {
      const geo = new THREE.SphereGeometry(0.5, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x241508,
        roughness: 0.9,
        transparent: true,
        opacity: 0.88,
        depthWrite: false
      });
      const sphere = new THREE.Mesh(geo, mat);
      sphere.renderOrder = 22;
      this.stemSpheres.push(sphere);
      this.mushroomGroup.add(sphere);
    }

    // 2. Torus Anvil Cap (Stratospheric expansion)
    const capGeo = new THREE.TorusGeometry(1.2, 0.65, 16, 36);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x221307,
      roughness: 0.85,
      transparent: true,
      opacity: 0.88,
      depthWrite: false
    });
    this.cloudCap = new THREE.Mesh(capGeo, capMat);
    this.cloudCap.rotation.x = Math.PI / 2;
    this.cloudCap.renderOrder = 23;
    this.mushroomGroup.add(this.cloudCap);

    // 3. Incandescent Fiery Cloud Core
    const coreGeo = new THREE.SphereGeometry(0.9, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.cloudCore = new THREE.Mesh(coreGeo, coreMat);
    this.cloudCore.renderOrder = 24;
    this.mushroomGroup.add(this.cloudCore);

    // 4. Wilson Condensation Disc (horizontal pressure shock ring)
    const wilsonGeo = new THREE.RingGeometry(0.5, 1.8, 48);
    const wilsonMat = new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.wilsonRing = new THREE.Mesh(wilsonGeo, wilsonMat);
    this.wilsonRing.rotation.x = Math.PI / 2;
    this.wilsonRing.renderOrder = 22;
    this.mushroomGroup.add(this.wilsonRing);

    this.mushroomGroup.visible = false;
  }

  /**
   * Generates a curved spherical ground cap disk strictly conforming to Earth's curvature.
   * Constructed in local tangent space at the epicenter so scaling expands radially
   * outward along the surface without core displacement.
   */
  createSphericalGroundZone(epicenterVec, radiusKm, fillColor, strokeColor, layerOffset = 0.08, isPreview = false) {
    const group = new THREE.Group();
    group.position.copy(epicenterVec);

    const normal = epicenterVec.clone().normalize();
    const up = new THREE.Vector3(0, 0, 1);
    const quat = new THREE.Quaternion().setFromUnitVectors(up, normal);
    group.quaternion.copy(quat);

    // Angular radius theta in radians on Earth sphere
    const theta = Math.max(0.0001, radiusKm / EARTH_RADIUS_KM);
    const R = GLOBE_RADIUS + layerOffset;

    const segments = 96;
    const positions = [];
    const perimeterPoints = [];

    // Center point (local coordinates: origin (0, 0, 0))
    positions.push(0, 0, 0);

    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let i = 0; i <= segments; i++) {
      const phi = (i / segments) * Math.PI * 2;
      // In local coordinates: normal is +Z. Drop along -Z according to spherical curvature
      const lx = R * sinTheta * Math.cos(phi);
      const ly = R * sinTheta * Math.sin(phi);
      const lz = R * (cosTheta - 1.0); // Conforms to spherical curvature down from the tangent

      positions.push(lx, ly, lz);
      perimeterPoints.push(new THREE.Vector3(lx, ly, lz));
    }

    // Triangular fan indices
    const indices = [];
    for (let i = 1; i <= segments; i++) {
      indices.push(0, i, i + 1);
    }

    // Disk geometry
    const diskGeo = new THREE.BufferGeometry();
    diskGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    diskGeo.setIndex(indices);
    diskGeo.computeVertexNormals();

    const diskMat = new THREE.MeshBasicMaterial({
      color: fillColor,
      transparent: true,
      opacity: isPreview ? 0.18 : 0.28,
      side: THREE.DoubleSide,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -4
    });
    const diskMesh = new THREE.Mesh(diskGeo, diskMat);
    diskMesh.renderOrder = 10;
    group.add(diskMesh);

    // Glowing border line
    const borderGeo = new THREE.BufferGeometry().setFromPoints(perimeterPoints);
    const borderMat = new THREE.LineBasicMaterial({
      color: strokeColor,
      transparent: true,
      opacity: isPreview ? 0.8 : 0.95,
      linewidth: isPreview ? 2 : 3,
      depthWrite: false
    });
    const borderLine = new THREE.Line(borderGeo, borderMat);
    borderLine.renderOrder = 11;
    group.add(borderLine);

    // Cardinal tick markings
    const tickPoints = [];
    const tickLen = R * sinTheta * 0.08;
    for (let k = 0; k < 4; k++) {
      const angle = (k * Math.PI) / 2;
      const tx1 = R * sinTheta * Math.cos(angle);
      const ty1 = R * sinTheta * Math.sin(angle);
      const tz1 = R * (cosTheta - 1.0);

      const tx2 = (R * sinTheta + tickLen) * Math.cos(angle);
      const ty2 = (R * sinTheta + tickLen) * Math.sin(angle);
      const tz2 = R * (cosTheta - 1.0);

      tickPoints.push(new THREE.Vector3(tx1, ty1, tz1));
      tickPoints.push(new THREE.Vector3(tx2, ty2, tz2));
    }
    const tickGeo = new THREE.BufferGeometry().setFromPoints(tickPoints);
    const tickMat = new THREE.LineBasicMaterial({
      color: strokeColor,
      transparent: true,
      opacity: 0.75,
      depthWrite: false
    });
    const tickLines = new THREE.LineSegments(tickGeo, tickMat);
    tickLines.renderOrder = 11;
    group.add(tickLines);

    return {
      group,
      diskMesh,
      borderLine,
      tickLines,
      theta,
      radiusKm,
      fillColor,
      strokeColor
    };
  }

  /**
   * Updates real-time Target Assessment Blast Preview on the globe
   * Called whenever user changes target coords, yield slider, or burst type
   */
  updateTargetPreview(targetLatLon, yieldKt, isAirburst = true) {
    this.clearTargetPreview();
    const effects = calculateNuclearEffects(yieldKt, isAirburst);
    const p = latLonToVector3(targetLatLon.lat, targetLatLon.lon, GLOBE_RADIUS);
    const targetVec = new THREE.Vector3(p.x, p.y, p.z);

    // Sort zones largest to smallest so smaller inner zones layer cleanly on top
    const sortedZones = [...effects.zones].sort((a, b) => b.radiusKm - a.radiusKm);

    sortedZones.forEach((zone, idx) => {
      // Offset slightly above surface to prevent any z-fighting
      const offset = 0.06 + (sortedZones.length - idx) * 0.015;
      const zoneObj = this.createSphericalGroundZone(
        targetVec,
        zone.radiusKm,
        zone.color,
        zone.borderColor,
        offset,
        true // isPreview
      );
      zoneObj.zone = zone;
      this.targetRingsGroup.add(zoneObj.group);
      this.previewZoneMeshes.push(zoneObj);
    });

    this.targetRingsGroup.visible = true;
  }

  clearTargetPreview() {
    while (this.targetRingsGroup.children.length > 0) {
      const child = this.targetRingsGroup.children[0];
      this.targetRingsGroup.remove(child);
      if (child.traverse) {
        child.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
    }
    this.previewZoneMeshes = [];
  }

  /**
   * Triggers active nuclear detonation sequence
   */
  detonate(targetLatLon, yieldKt, isAirburst = true) {
    this.isActive = true;
    this.elapsedTime = 0;
    this.yieldKt = yieldKt;
    this.isAirburst = isAirburst;
    this.targetLatLon = targetLatLon;

    // Calculate physical effects
    this.effectsData = calculateNuclearEffects(yieldKt, isAirburst);

    // Epicenter coordinates
    const p = latLonToVector3(targetLatLon.lat, targetLatLon.lon, GLOBE_RADIUS);
    this.epicenter = new THREE.Vector3(p.x, p.y, p.z);
    this.normal = this.epicenter.clone().normalize();

    // Orient mushroom cloud and flash to epicenter
    this.flashLight.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(4)));
    this.flashLight.intensity = 300;
    this.flashLight.color.setHex(0xffffff);

    // Setup 3D Fireball
    const fireballZone = this.effectsData.zones.find(z => z.id === 'fireball') || this.effectsData.zones[0];
    this.fireballMaxUnits = fireballZone.radiusKm * KM_TO_UNITS;
    this.fireballMesh.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(this.fireballMaxUnits * 0.6)));
    this.fireballMesh.scale.set(0.01, 0.01, 0.01);
    this.fireballMesh.material.opacity = 1.0;
    this.fireballMesh.material.color.setHex(0xffffff);
    this.fireballMesh.visible = true;

    // Setup Shockwave Ring
    this.shockwaveMesh.position.copy(this.epicenter.clone().add(this.normal.clone().multiplyScalar(0.2)));
    const up = new THREE.Vector3(0, 0, 1);
    this.shockwaveMesh.quaternion.setFromUnitVectors(up, this.normal);
    this.shockwaveMesh.scale.set(0.01, 0.01, 0.01);
    this.shockwaveMesh.visible = true;
    const maxZone = this.effectsData.zones.reduce((max, z) => z.radiusKm > max.radiusKm ? z : max, this.effectsData.zones[0]);
    this.shockwaveMaxKm = maxZone.radiusKm * 1.25;

    // Setup Mushroom Cloud
    this.cloudHeightUnits = this.effectsData.mushroomCloud.heightKm * KM_TO_UNITS;
    this.cloudCapUnits = (this.effectsData.mushroomCloud.capDiameterKm / 2) * KM_TO_UNITS;
    this.mushroomGroup.position.copy(this.epicenter);
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.normal);
    this.mushroomGroup.quaternion.copy(quat);
    this.mushroomGroup.visible = true;

    // Build Ground Blast Rings for Detonation
    this.clearBlastRings();
    const sortedZones = [...this.effectsData.zones].sort((a, b) => b.radiusKm - a.radiusKm);

    sortedZones.forEach((zone, idx) => {
      const offset = 0.08 + (sortedZones.length - idx) * 0.015;
      const zoneObj = this.createSphericalGroundZone(
        this.epicenter,
        zone.radiusKm,
        zone.color,
        zone.borderColor,
        offset,
        false
      );
      zoneObj.zone = zone;
      // Start at 0 scale at the epicenter; expands outward as shockwave propagates
      zoneObj.group.scale.set(0.001, 0.001, 1.0);
      this.ringsGroup.add(zoneObj.group);
      this.zoneMeshes.push(zoneObj);
    });

    // Create Ground Zero Permanent Thermal Scorch Decal
    this.createThermalScorchDecal(this.epicenter, fireballZone.radiusKm * 1.5);

    // Hide target preview while detonation FX is playing
    this.targetRingsGroup.visible = false;

    return this.effectsData;
  }

  createThermalScorchDecal(epicenterVec, radiusKm) {
    this.clearScorch();
    const group = new THREE.Group();
    group.position.copy(epicenterVec);

    const normal = epicenterVec.clone().normalize();
    const up = new THREE.Vector3(0, 0, 1);
    group.quaternion.setFromUnitVectors(up, normal);

    const theta = Math.max(0.0001, radiusKm / EARTH_RADIUS_KM);
    const R = GLOBE_RADIUS + 0.04;
    const segments = 48;
    const positions = [];
    const colors = [];

    positions.push(0, 0, 0);
    colors.push(0.05, 0.02, 0.01); // charred charcoal core

    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let i = 0; i <= segments; i++) {
      const phi = (i / segments) * Math.PI * 2;
      const lx = R * sinTheta * Math.cos(phi);
      const ly = R * sinTheta * Math.sin(phi);
      const lz = R * (cosTheta - 1.0);

      positions.push(lx, ly, lz);
      colors.push(0.12, 0.05, 0.02);
    }

    const indices = [];
    for (let i = 1; i <= segments; i++) {
      indices.push(0, i, i + 1);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 8;
    group.add(mesh);
    this.scorchGroup.add(group);
  }

  clearScorch() {
    while (this.scorchGroup.children.length > 0) {
      const child = this.scorchGroup.children[0];
      this.scorchGroup.remove(child);
      if (child.traverse) {
        child.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
    }
  }

  clearBlastRings() {
    while (this.ringsGroup.children.length > 0) {
      const child = this.ringsGroup.children[0];
      this.ringsGroup.remove(child);
      if (child.traverse) {
        child.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
    }
    this.zoneMeshes = [];
  }

  reset() {
    this.isActive = false;
    this.elapsedTime = 0;
    this.flashLight.intensity = 0;
    this.fireballMesh.visible = false;
    this.shockwaveMesh.visible = false;
    this.mushroomGroup.visible = false;
    this.clearBlastRings();
    this.clearScorch();
    this.targetRingsGroup.visible = true;
  }

  update(deltaSec) {
    // Pulse target preview rings gently when idle/targeting
    if (this.targetRingsGroup.visible && this.previewZoneMeshes.length > 0) {
      const pulseTime = performance.now() * 0.003;
      this.previewZoneMeshes.forEach((item, idx) => {
        if (item.borderLine && item.borderLine.material) {
          item.borderLine.material.opacity = 0.7 + 0.3 * Math.sin(pulseTime + idx * 0.8);
        }
      });
    }

    if (!this.isActive) return;

    this.elapsedTime += deltaSec * this.timeScale;
    const t = this.elapsedTime;

    // 1. Nuclear Flash (0s - 2.5s)
    if (t < 0.12) {
      this.flashLight.intensity = 400;
      this.flashLight.color.setHex(0xffffff);
    } else if (t < 2.0) {
      const flashFade = 1.0 - (t - 0.12) / 1.88;
      this.flashLight.intensity = 400 * Math.pow(flashFade, 2.5);
      this.flashLight.color.setHex(0xffeebb);
    } else {
      this.flashLight.intensity = Math.max(0, 20 * (1.0 - (t - 2.0) / 6.0));
      this.flashLight.color.setHex(0xff4400);
    }

    // 2. 3D Fireball Expansion & Incandescent Cooling (0s - 8s)
    if (t < 8.0) {
      const expandProgress = t < 1.2 ? Math.pow(t / 1.2, 0.5) : 1.0;
      const currentRadius = THREE.MathUtils.lerp(0.01, this.fireballMaxUnits, expandProgress);
      this.fireballMesh.scale.set(currentRadius, currentRadius, currentRadius);

      if (t < 0.8) {
        this.fireballMesh.material.color.setHex(0xffffff);
        this.fireballMesh.material.opacity = 0.98;
      } else if (t < 2.5) {
        this.fireballMesh.material.color.setHex(0xffdd44);
        this.fireballMesh.material.opacity = 0.92;
      } else if (t < 5.0) {
        this.fireballMesh.material.color.setHex(0xff5500);
        this.fireballMesh.material.opacity = 0.8;
      } else {
        const fade = 1.0 - (t - 5.0) / 3.0;
        this.fireballMesh.material.color.setHex(0x331206);
        this.fireballMesh.material.opacity = fade * 0.65;
      }
    } else {
      this.fireballMesh.visible = false;
    }

    // 3. Shockwave Surface Ring (0s - 5.5s)
    if (t < 5.5) {
      const waveProgress = Math.pow(t / 5.5, 0.65);
      const waveRadiusUnits = (this.shockwaveMaxKm * KM_TO_UNITS) * waveProgress;
      this.shockwaveMesh.scale.set(waveRadiusUnits, waveRadiusUnits, 1);
      this.shockwaveMesh.material.opacity = (1.0 - waveProgress) * 0.9;
    } else {
      this.shockwaveMesh.visible = false;
    }

    // 4. Ground Blast Zones Growth & Propagation
    // Rings expand radially from epicenter along the surface as the blast front arrives
    const shockFrontKm = Math.pow(Math.min(1.0, t / 4.0), 0.7) * this.shockwaveMaxKm;
    this.zoneMeshes.forEach((item) => {
      if (shockFrontKm >= item.zone.radiusKm * 0.4) {
        const currentScale = item.group.scale.x;
        const targetScale = 1.0;
        const newScale = Math.min(targetScale, currentScale + deltaSec * 3.5 * this.timeScale);
        item.group.scale.set(newScale, newScale, 1.0);
      }
    });

    // 5. Mushroom Cloud Growth (0.4s - 18s)
    if (t > 0.4) {
      const cloudRise = Math.min(1.0, Math.pow((t - 0.4) / 9.0, 0.68));
      const currentHeight = this.cloudHeightUnits * cloudRise;
      const currentCapWidth = this.cloudCapUnits * cloudRise;

      // Stem spheres position & turbulence
      const stemCount = this.stemSpheres.length;
      for (let i = 0; i < stemCount; i++) {
        const hRatio = (i + 1) / stemCount;
        const sphereY = currentHeight * hRatio;
        const sphereRadius = Math.max(0.25, (currentCapWidth * 0.38) * (1.0 - 0.28 * Math.sin(hRatio * Math.PI)));
        this.stemSpheres[i].position.set(
          Math.sin(t * 1.8 + i) * 0.12 * sphereRadius,
          sphereY,
          Math.cos(t * 1.8 + i) * 0.12 * sphereRadius
        );
        this.stemSpheres[i].scale.set(sphereRadius, sphereRadius * 1.25, sphereRadius);
      }

      // Torus Cap
      this.cloudCap.position.y = currentHeight;
      this.cloudCap.scale.set(currentCapWidth, currentCapWidth, currentCapWidth * 0.65);
      this.cloudCap.rotation.z += deltaSec * 0.18 * this.timeScale;

      // Fiery Core inside Cap
      this.cloudCore.position.y = currentHeight;
      const coreSize = currentCapWidth * 0.52;
      this.cloudCore.scale.set(coreSize, coreSize * 0.55, coreSize);
      this.cloudCore.material.opacity = Math.max(0, 0.85 * (1.0 - t / 12.0));

      // Wilson Ring Condensation
      if (t < 4.0) {
        const ringProgress = t / 4.0;
        const ringRadius = currentCapWidth * 1.8 * ringProgress;
        this.wilsonRing.position.y = currentHeight * 0.45;
        this.wilsonRing.scale.set(ringRadius, ringRadius, 1);
        this.wilsonRing.material.opacity = (1.0 - ringProgress) * 0.7;
      } else {
        this.wilsonRing.visible = false;
      }
    }
  }
}
