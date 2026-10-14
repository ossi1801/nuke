import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EarthGlobe, GLOBE_RADIUS, KM_TO_UNITS } from './scene/earth.js';
import { MissileSystem } from './scene/missile.js';
import { NuclearDetonation } from './scene/explosion.js';
import { DoomsdaySystem } from './scene/doomsdaySystem.js';
import { SimulationHUD } from './ui/hud.js';
import { sound } from './audio/sound.js';
import { vector3ToLatLon, latLonToVector3 } from './physics/nuclearPhysics.js';

class NuclearSimulationApp {
  constructor() {
    this.timescale = 1.0;
    this.isPaused = false;
    this.cameraMode = 'orbit'; // 'orbit' | 'missile' | 'salvo' | 'target' | 'city' | 'blast'
    this.currentYieldKt = 475;
    this.isAirburst = true;
    this.simulationMode = 'single'; // 'single' | 'doomsday'

    this.launchLatLon = { lat: 48.41, lon: -101.35 };
    this.targetLatLon = { lat: 55.75, lon: 37.62 };

    this.initThree();
    this.initStarfield();
    this.initSceneObjects();
    this.initInteraction();

    // Initialize HUD
    this.hud = new SimulationHUD(this);

    // Initial positioning
    this.setLaunchAndTarget(this.launchLatLon, this.targetLatLon);

    // Start loop
    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initThree() {
    const container = document.getElementById('canvas-container');
    this.scene = new THREE.Scene();

    // Camera (near plane 0.05 for extreme close-up city / damage inspection)
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.05,
      3000
    );
    this.camera.position.set(0, 80, 260);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    // OrbitControls: minDistance reduced to allow close-up zoom down to city level
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = GLOBE_RADIUS + 0.15; // ~10 km altitude above surface
    this.controls.maxDistance = 800;
    this.controls.rotateSpeed = 0.8;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x223344, 0.6);
    this.scene.add(ambientLight);

    // Sun directional light
    this.sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    this.sunLight.position.set(200, 60, 160);
    this.scene.add(this.sunLight);

    // Window resize handler
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  initStarfield() {
    const starCount = 3000;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 800 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const tint = Math.random();
      if (tint > 0.8) {
        colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 1.0;
      } else if (tint > 0.6) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 0.6;
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 1.0;
      }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);
  }

  initSceneObjects() {
    this.earth = new EarthGlobe(this.scene);
    this.missileSystem = new MissileSystem(this.scene);
    this.detonation = new NuclearDetonation(this.scene);
    this.doomsday = new DoomsdaySystem(this.scene);

    // Wire up Doomsday telemetry updates to the HUD
    this.doomsday.onTelemetryUpdate = (stats) => {
      if (this.hud) {
        this.hud.updateDoomsdayStats(stats);
      }
    };
  }

  initInteraction() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    const canvas = this.renderer.domElement;
    canvas.addEventListener('click', (event) => {
      if (!this.hud.pickingMode) return;

      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.earth.earthMesh);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        const latLon = vector3ToLatLon(point);
        this.hud.onGlobeClicked(latLon);
      }
    });
  }

  setSimulationMode(mode) {
    this.simulationMode = mode;
    if (mode === 'doomsday') {
      // Hide single missile target preview
      this.detonation.targetRingsGroup.visible = false;
      this.earth.launchPin.visible = false;
      this.earth.targetPin.visible = false;
      this.missileSystem.missileMesh.visible = false;
      this.missileSystem.trailLine.visible = false;
      if (this.missileSystem.trajectoryCurveMesh) {
        this.missileSystem.trajectoryCurveMesh.visible = false;
      }
    } else {
      // Restore single missile elements
      this.detonation.targetRingsGroup.visible = true;
      this.earth.launchPin.visible = true;
      this.earth.targetPin.visible = true;
      this.detonation.updateTargetPreview(this.targetLatLon, this.currentYieldKt, this.isAirburst);
    }
  }

  startDoomsdayExchange() {
    this.doomsday.startExchange();
  }

  resetDoomsdayExchange() {
    this.doomsday.reset();
  }

  setLaunchAndTarget(launch, target) {
    this.launchLatLon = { ...launch };
    this.targetLatLon = { ...target };

    this.earth.updatePinPosition('launch', launch.lat, launch.lon);
    this.earth.updatePinPosition('target', target.lat, target.lon);

    this.missileSystem.setCoordinates(launch, target);
    this.detonation.updateTargetPreview(this.targetLatLon, this.currentYieldKt, this.isAirburst);
  }

  setTimescale(ts) {
    this.timescale = ts;
    this.detonation.timeScale = ts;
    this.missileSystem.speedMultiplier = ts;
    this.doomsday.timeScale = ts;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    this.doomsday.isPaused = this.isPaused;
    return this.isPaused;
  }

  launchMissile() {
    this.detonation.reset();
    this.hud.setStatus('MISSILE IN FLIGHT', 'flight');
    sound.playLaunch();

    this.missileSystem.launch((targetCoords) => {
      this.onMissileImpact(targetCoords);
    });
  }

  onMissileImpact(targetCoords) {
    this.hud.setStatus('NUCLEAR DETONATION', 'detonated');
    sound.playDetonation();
    this.detonation.detonate(targetCoords, this.currentYieldKt, this.isAirburst);
    this.hud.updateDamageTable();
  }

  instantDetonation() {
    this.missileSystem.resetFlight();
    this.hud.setStatus('IMMEDIATE DETONATION', 'detonated');
    sound.playDetonation();
    this.detonation.detonate(this.targetLatLon, this.currentYieldKt, this.isAirburst);
    this.hud.updateDamageTable();
  }

  resetSimulation() {
    this.missileSystem.resetFlight();
    this.detonation.reset();
    this.hud.setStatus('STANDBY', 'ready');
    this.hud.updateProgress(0);
    this.detonation.updateTargetPreview(this.targetLatLon, this.currentYieldKt, this.isAirburst);
  }

  setCameraMode(mode) {
    this.cameraMode = mode;

    if (mode === 'orbit') {
      this.controls.enabled = true;
      this.controls.target.set(0, 0, 0);
    } else if (mode === 'salvo') {
      this.controls.enabled = true;
      // High orbital overview of the northern hemisphere / strategic exchange arcs
      this.camera.position.set(0, 190, 220);
      this.controls.target.set(0, 0, 0);
    } else if (mode === 'target' || mode === 'city' || mode === 'blast') {
      this.controls.enabled = true;
      const targetVec = latLonToVector3(this.targetLatLon.lat, this.targetLatLon.lon, GLOBE_RADIUS);
      const tPos = new THREE.Vector3(targetVec.x, targetVec.y, targetVec.z);
      const normal = tPos.clone().normalize();
      
      let distance;
      let camPos;
      if (mode === 'city') {
        distance = 2.5;
        let tangent = new THREE.Vector3(0, 1, 0).cross(normal);
        if (tangent.lengthSq() < 0.001) tangent = new THREE.Vector3(1, 0, 0).cross(normal);
        tangent.normalize();
        camPos = normal.clone().multiplyScalar(GLOBE_RADIUS + distance).add(tangent.clone().multiplyScalar(1.2));
      } else if (mode === 'target') {
        distance = 25;
        camPos = normal.clone().multiplyScalar(GLOBE_RADIUS + distance);
      } else {
        distance = 60;
        camPos = normal.clone().multiplyScalar(GLOBE_RADIUS + distance);
      }
      
      this.camera.position.copy(camPos);
      this.controls.target.copy(tPos);
    }
  }

  updateCamera() {
    if (this.cameraMode === 'missile' && this.missileSystem.isFlying) {
      this.controls.enabled = false;
      const missilePos = this.missileSystem.missileMesh.position;
      const earthNormal = missilePos.clone().normalize();

      const lookAhead = this.missileSystem.getPositionAt(Math.min(1, this.missileSystem.progress + 0.02));
      const flightDir = lookAhead.clone().sub(missilePos).normalize();

      const camOffset = flightDir.clone().multiplyScalar(-15).add(earthNormal.clone().multiplyScalar(10));
      const targetCamPos = missilePos.clone().add(camOffset);

      this.camera.position.lerp(targetCamPos, 0.1);
      this.camera.lookAt(missilePos);
    } else if (this.cameraMode === 'salvo' && this.doomsday.isRunning) {
      // Dynamic salvo camera tracking
      const salvoCenter = this.doomsday.getActiveSalvoCenter();
      if (salvoCenter) {
        this.controls.target.lerp(salvoCenter, 0.05);
      }
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const rawDelta = Math.min(this.clock.getDelta(), 0.1);
    const simDelta = rawDelta * (this.isPaused ? 0 : this.timescale);

    // Update Globe
    this.earth.update(simDelta, this.camera);

    // Update Single Missile System
    if (this.simulationMode === 'single') {
      this.missileSystem.update(simDelta);
      if (this.missileSystem.isFlying) {
        this.hud.updateProgress(this.missileSystem.progress);
      }
      this.detonation.update(simDelta);
    }

    // Update Doomsday System
    this.doomsday.update(simDelta);

    // Update Camera
    this.updateCamera();
    if (this.controls.enabled) {
      this.controls.update();
    }

    // Render
    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate application on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  window.app = new NuclearSimulationApp();
});
