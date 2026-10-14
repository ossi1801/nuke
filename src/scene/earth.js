import * as THREE from 'three';
import { latLonToVector3, vector3ToLatLon, EARTH_RADIUS_KM } from '../physics/nuclearPhysics.js';

export const GLOBE_RADIUS = 100; // Three.js units for the Earth radius
export const KM_TO_UNITS = GLOBE_RADIUS / EARTH_RADIUS_KM; // ~0.015696 Three.js units per km

/**
 * Creates ultra-high-resolution (4096x2048) procedural Earth textures
 * Includes detailed continental coastlines, island chains, inland seas,
 * country borders, coordinate graticules, and night city lights.
 */
function createProceduralEarthTextures() {
  const width = 4096;
  const height = 2048;

  // 1. Day Canvas (surface geography & bathymetry)
  const dayCanvas = document.createElement('canvas');
  dayCanvas.width = width;
  dayCanvas.height = height;
  const dayCtx = dayCanvas.getContext('2d');

  // 2. Night Canvas (city light networks)
  const nightCanvas = document.createElement('canvas');
  nightCanvas.width = width;
  nightCanvas.height = height;
  const nightCtx = nightCanvas.getContext('2d');

  // 3. Specular Canvas (water reflectance)
  const specCanvas = document.createElement('canvas');
  specCanvas.width = width;
  specCanvas.height = height;
  const specCtx = specCanvas.getContext('2d');

  // Deep oceanic gradient
  const oceanGrad = dayCtx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#061324');
  oceanGrad.addColorStop(0.15, '#081a33');
  oceanGrad.addColorStop(0.5, '#0b2649');
  oceanGrad.addColorStop(0.85, '#081a33');
  oceanGrad.addColorStop(1, '#061324');
  dayCtx.fillStyle = oceanGrad;
  dayCtx.fillRect(0, 0, width, height);

  // Night: pitch black oceans
  nightCtx.fillStyle = '#010204';
  nightCtx.fillRect(0, 0, width, height);

  // Specular: bright reflective oceans
  specCtx.fillStyle = '#a0c4e8';
  specCtx.fillRect(0, 0, width, height);

  function toCanvasCoords(lon, lat) {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  }

  // Draw landmass polygon with coastal shelf and biome shading
  function drawLandmass(poly, baseColor = '#1d3f24', interiorColor = '#3c4e2c', coastalShelf = true) {
    if (!poly || poly.length < 3) return;

    // A. Coastal shallow shelf halo
    if (coastalShelf) {
      dayCtx.save();
      dayCtx.beginPath();
      const p0 = toCanvasCoords(poly[0][0], poly[0][1]);
      dayCtx.moveTo(p0.x, p0.y);
      for (let i = 1; i < poly.length; i++) {
        const p = toCanvasCoords(poly[i][0], poly[i][1]);
        dayCtx.lineTo(p.x, p.y);
      }
      dayCtx.closePath();
      dayCtx.strokeStyle = 'rgba(16, 75, 115, 0.85)';
      dayCtx.lineWidth = 12;
      dayCtx.lineJoin = 'round';
      dayCtx.stroke();
      dayCtx.strokeStyle = 'rgba(28, 110, 150, 0.45)';
      dayCtx.lineWidth = 22;
      dayCtx.stroke();
      dayCtx.restore();
    }

    // B. Continent interior fill
    dayCtx.beginPath();
    const p0 = toCanvasCoords(poly[0][0], poly[0][1]);
    dayCtx.moveTo(p0.x, p0.y);
    for (let i = 1; i < poly.length; i++) {
      const p = toCanvasCoords(poly[i][0], poly[i][1]);
      dayCtx.lineTo(p.x, p.y);
    }
    dayCtx.closePath();

    // Biome gradient
    const grad = dayCtx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0.1, '#2c4b31');
    grad.addColorStop(0.35, baseColor);
    grad.addColorStop(0.55, interiorColor);
    grad.addColorStop(0.75, baseColor);
    grad.addColorStop(0.9, '#e8f2f8');
    dayCtx.fillStyle = grad;
    dayCtx.fill();

    // Continent perimeter contour
    dayCtx.strokeStyle = 'rgba(90, 160, 110, 0.6)';
    dayCtx.lineWidth = 1.8;
    dayCtx.stroke();

    // Specular: non-reflective black land
    specCtx.beginPath();
    specCtx.moveTo(p0.x, p0.y);
    for (let i = 1; i < poly.length; i++) {
      const p = toCanvasCoords(poly[i][0], poly[i][1]);
      specCtx.lineTo(p.x, p.y);
    }
    specCtx.closePath();
    specCtx.fillStyle = '#020508';
    specCtx.fill();
  }

  // --- Detailed Continental Outlines (High-Density Vector Coordinates) ---
  const northAmerica = [
    [-168, 65], [-164, 60], [-158, 56], [-152, 59], [-140, 59], [-135, 57],
    [-130, 54], [-125, 49], [-124, 44], [-122, 38], [-117, 32], [-114, 30],
    [-110, 28], [-106, 23], [-105, 20], [-98, 16], [-92, 16], [-88, 19],
    [-90, 21], [-83, 10], [-79, 8], [-77, 8], [-80, 13], [-83, 15],
    [-87, 21], [-90, 25], [-97, 26], [-97, 29], [-94, 29], [-90, 30],
    [-85, 30], [-81, 25], [-80, 27], [-81, 31], [-75, 35], [-76, 38],
    [-74, 40], [-71, 42], [-66, 44], [-64, 46], [-60, 46], [-63, 48],
    [-60, 52], [-56, 52], [-61, 56], [-64, 60], [-74, 62], [-80, 63],
    [-82, 58], [-85, 54], [-90, 53], [-92, 57], [-95, 60], [-95, 69],
    [-105, 69], [-115, 69], [-125, 69], [-135, 69], [-145, 70], [-155, 71],
    [-165, 71], [-168, 65]
  ];

  const southAmerica = [
    [-77, 8], [-72, 11], [-67, 12], [-62, 10], [-58, 7], [-52, 4],
    [-48, -1], [-44, -2], [-39, -3], [-35, -5], [-35, -9], [-37, -12],
    [-39, -15], [-40, -22], [-44, -24], [-48, -28], [-53, -33], [-58, -37],
    [-65, -42], [-66, -46], [-68, -52], [-66, -55], [-72, -55], [-75, -50],
    [-74, -45], [-72, -40], [-71, -30], [-73, -20], [-76, -14], [-80, -9],
    [-81, -5], [-80, 0], [-77, 8]
  ];

  const eurasia = [
    [-9, 43], [-9, 36], [-6, 36], [-2, 37], [3, 42], [8, 43], [10, 44],
    [13, 46], [14, 45], [14, 41], [16, 38], [18, 40], [20, 37], [24, 38],
    [26, 40], [29, 41], [30, 31], [34, 32], [36, 36], [43, 41], [40, 41],
    [48, 30], [53, 25], [56, 26], [59, 23], [66, 25], [70, 21], [73, 16],
    [77, 9], [80, 13], [85, 20], [89, 22], [92, 18], [98, 10], [103, 1],
    [105, 4], [108, 12], [109, 19], [116, 22], [120, 26], [121, 32],
    [119, 36], [124, 40], [129, 35], [131, 42], [135, 47], [140, 52],
    [142, 58], [155, 59], [162, 56], [164, 62], [178, 66], [180, 68],
    [-170, 66], [180, 71], [165, 70], [150, 72], [140, 75], [120, 74],
    [105, 77], [85, 74], [70, 72], [60, 69], [50, 68], [40, 66],
    [32, 70], [28, 71], [20, 70], [15, 68], [8, 62], [5, 58],
    [10, 54], [12, 56], [18, 55], [24, 59], [30, 60], [25, 65],
    [20, 63], [15, 56], [10, 54], [6, 53], [2, 51], [-1, 49],
    [-4, 48], [-5, 44], [-9, 43]
  ];

  const britishIsles = [
    [-5, 50], [1, 51], [1.5, 52.5], [0, 53.5], [-1, 55], [-2, 58],
    [-5, 58.5], [-6, 56], [-4.5, 54], [-3, 51.5], [-5, 50]
  ];

  const ireland = [
    [-6, 53], [-6, 55], [-8, 55], [-10, 54], [-10, 52], [-8, 51.5], [-6, 53]
  ];

  const japan = [
    [130, 31], [132, 33], [135, 34], [137, 35], [140, 36], [141, 39],
    [141, 43], [144, 44], [142, 45], [140, 42], [137, 37], [132, 34], [130, 31]
  ];

  const africa = [
    [-17, 32], [-10, 36], [-2, 35], [10, 37], [11, 33], [19, 32],
    [25, 32], [32, 31], [34, 28], [37, 22], [43, 13], [51, 12],
    [48, 5], [42, -2], [40, -10], [36, -18], [33, -25], [28, -32],
    [26, -34], [18, -34], [16, -29], [12, -18], [12, -6], [9, 4],
    [5, 4], [2, 6], [-4, 5], [-8, 4], [-13, 9], [-17, 15],
    [-17, 21], [-16, 26], [-17, 32]
  ];

  const madagascar = [
    [49, -12], [50, -15], [48, -20], [47, -25], [44, -25], [44, -18], [47, -14], [49, -12]
  ];

  const australia = [
    [114, -22], [118, -20], [122, -17], [128, -15], [136, -12], [142, -11],
    [144, -14], [147, -19], [152, -25], [153, -29], [150, -35], [147, -38],
    [140, -38], [136, -35], [131, -32], [125, -33], [118, -35], [115, -34],
    [113, -26], [114, -22]
  ];

  const greenland = [
    [-55, 60], [-45, 60], [-35, 65], [-20, 70], [-18, 77], [-25, 82],
    [-40, 83], [-55, 82], [-68, 77], [-60, 70], [-55, 60]
  ];

  const antarctica = [
    [-180, -72], [180, -72], [180, -90], [-180, -90]
  ];

  // Draw Continents and Islands
  drawLandmass(northAmerica, '#284d2e', '#4f5e38');
  drawLandmass(southAmerica, '#1e4f25', '#305c2a');
  drawLandmass(eurasia, '#2c532f', '#526039');
  drawLandmass(britishIsles, '#2b5830', '#3b6a40');
  drawLandmass(ireland, '#2b5830', '#3b6a40');
  drawLandmass(japan, '#2b5230', '#3e6342');
  drawLandmass(africa, '#5c5632', '#786937');
  drawLandmass(madagascar, '#2f5532', '#456a48');
  drawLandmass(australia, '#6d5535', '#82643a');
  drawLandmass(greenland, '#e8f3fa', '#d6e8f5', false);
  drawLandmass(antarctica, '#f2f8fd', '#e1effa', false);

  // Inland Seas / Lakes (Black Sea, Caspian, Great Lakes)
  function drawInlandWater(poly) {
    dayCtx.beginPath();
    const p0 = toCanvasCoords(poly[0][0], poly[0][1]);
    dayCtx.moveTo(p0.x, p0.y);
    for (let i = 1; i < poly.length; i++) {
      const p = toCanvasCoords(poly[i][0], poly[i][1]);
      dayCtx.lineTo(p.x, p.y);
    }
    dayCtx.closePath();
    dayCtx.fillStyle = '#0a223f';
    dayCtx.fill();
    dayCtx.strokeStyle = 'rgba(18, 70, 110, 0.7)';
    dayCtx.lineWidth = 1.2;
    dayCtx.stroke();
  }

  const caspianSea = [[50, 46], [54, 46], [54, 40], [52, 37], [48, 38], [50, 42], [50, 46]];
  const blackSea = [[30, 46], [36, 46], [41, 44], [40, 41], [34, 42], [28, 42], [30, 46]];
  const greatLakes = [[-88, 48], [-84, 48], [-80, 46], [-82, 42], [-87, 43], [-88, 48]];
  drawInlandWater(caspianSea);
  drawInlandWater(blackSea);
  drawInlandWater(greatLakes);

  // Topographic Mountain Shading (Himalayas, Andes, Rockies, Alps, Urals)
  const mountainRidges = [
    // Himalayas
    [[75, 35], [80, 32], [85, 29], [92, 28], [97, 29]],
    // Andes
    [[-70, 5], [-75, -2], [-76, -14], [-70, -22], [-69, -32], [-71, -45]],
    // Rockies
    [[-122, 54], [-115, 48], [-110, 42], [-106, 36], [-103, 30]],
    // Alps
    [[5, 45], [8, 46], [12, 46], [15, 47]],
    // Urals
    [[60, 66], [60, 60], [59, 54], [58, 50]]
  ];

  dayCtx.save();
  mountainRidges.forEach(ridge => {
    dayCtx.beginPath();
    const p0 = toCanvasCoords(ridge[0][0], ridge[0][1]);
    dayCtx.moveTo(p0.x, p0.y);
    for (let i = 1; i < ridge.length; i++) {
      const p = toCanvasCoords(ridge[i][0], ridge[i][1]);
      dayCtx.lineTo(p.x, p.y);
    }
    dayCtx.strokeStyle = 'rgba(230, 240, 250, 0.45)';
    dayCtx.lineWidth = 4;
    dayCtx.stroke();
    dayCtx.strokeStyle = 'rgba(160, 140, 110, 0.7)';
    dayCtx.lineWidth = 10;
    dayCtx.stroke();
  });
  dayCtx.restore();

  // High-Resolution Graticule & Coordinate Grid (Tactical Overlay)
  dayCtx.save();
  // Minor Latitudes every 10 degrees
  for (let lat = -80; lat <= 80; lat += 10) {
    const y = ((90 - lat) / 180) * height;
    dayCtx.beginPath();
    dayCtx.moveTo(0, y);
    dayCtx.lineTo(width, y);
    dayCtx.strokeStyle = (lat === 0) ? 'rgba(0, 240, 255, 0.45)' : (Math.abs(lat) === 23.5 ? 'rgba(255, 170, 0, 0.35)' : 'rgba(0, 240, 255, 0.12)');
    dayCtx.lineWidth = (lat === 0) ? 2.0 : 0.8;
    dayCtx.stroke();
  }

  // Minor Longitudes every 15 degrees
  for (let lon = -180; lon <= 180; lon += 15) {
    const x = ((lon + 180) / 360) * width;
    dayCtx.beginPath();
    dayCtx.moveTo(x, 0);
    dayCtx.lineTo(x, height);
    dayCtx.strokeStyle = (lon === 0) ? 'rgba(0, 240, 255, 0.45)' : 'rgba(0, 240, 255, 0.12)';
    dayCtx.lineWidth = (lon === 0) ? 2.0 : 0.8;
    dayCtx.stroke();
  }
  dayCtx.restore();

  // Dense Night City Lights Network
  const majorMetros = [
    // North America
    { lon: -74, lat: 40.7, r: 40, count: 180 }, // NYC
    { lon: -77, lat: 38.9, r: 35, count: 140 }, // DC
    { lon: -87.6, lat: 41.8, r: 35, count: 150 }, // Chicago
    { lon: -118.2, lat: 34, r: 45, count: 200 }, // LA
    { lon: -122.4, lat: 37.7, r: 30, count: 120 }, // SF
    { lon: -95.3, lat: 29.7, r: 30, count: 110 }, // Houston
    { lon: -97, lat: 32.7, r: 28, count: 90 }, // Dallas
    { lon: -84.4, lat: 33.7, r: 26, count: 85 }, // Atlanta
    { lon: -80.2, lat: 25.7, r: 25, count: 80 }, // Miami
    { lon: -71, lat: 42.3, r: 24, count: 80 }, // Boston
    { lon: -79.4, lat: 43.6, r: 28, count: 95 }, // Toronto
    { lon: -99.1, lat: 19.4, r: 40, count: 160 }, // Mexico City
    // Europe
    { lon: 2.3, lat: 48.8, r: 42, count: 200 }, // Paris
    { lon: -0.1, lat: 51.5, r: 42, count: 210 }, // London
    { lon: 13.4, lat: 52.5, r: 35, count: 140 }, // Berlin
    { lon: 4.9, lat: 52.3, r: 30, count: 120 }, // Amsterdam/Benelux
    { lon: 8.5, lat: 50.1, r: 35, count: 130 }, // Rhine-Ruhr / Frankfurt
    { lon: 12.5, lat: 41.9, r: 30, count: 110 }, // Rome
    { lon: 9.2, lat: 45.4, r: 32, count: 120 }, // Milan / Po Valley
    { lon: -3.7, lat: 40.4, r: 30, count: 110 }, // Madrid
    { lon: 37.6, lat: 55.7, r: 48, count: 240 }, // Moscow
    { lon: 30.3, lat: 59.9, r: 32, count: 130 }, // St. Petersburg
    { lon: 30.5, lat: 50.4, r: 26, count: 90 }, // Kyiv
    { lon: 21.0, lat: 52.2, r: 26, count: 90 }, // Warsaw
    // East & South Asia
    { lon: 116.4, lat: 39.9, r: 50, count: 250 }, // Beijing
    { lon: 121.4, lat: 31.2, r: 52, count: 280 }, // Shanghai
    { lon: 113.2, lat: 23.1, r: 55, count: 300 }, // Pearl River Delta / Guangzhou / HK
    { lon: 104.0, lat: 30.6, r: 35, count: 140 }, // Chengdu
    { lon: 139.7, lat: 35.7, r: 58, count: 320 }, // Tokyo megalopolis
    { lon: 135.5, lat: 34.7, r: 40, count: 180 }, // Osaka/Kyoto
    { lon: 126.9, lat: 37.5, r: 42, count: 200 }, // Seoul
    { lon: 77.2, lat: 28.6, r: 45, count: 220 }, // Delhi
    { lon: 72.8, lat: 19.0, r: 45, count: 210 }, // Mumbai
    { lon: 88.3, lat: 22.5, r: 36, count: 150 }, // Kolkata
    { lon: 80.2, lat: 13.0, r: 32, count: 120 }, // Chennai
    { lon: 100.5, lat: 13.7, r: 35, count: 130 }, // Bangkok
    { lon: 106.8, lat: -6.2, r: 38, count: 150 }, // Jakarta
    { lon: 103.8, lat: 1.3, r: 25, count: 110 }, // Singapore
    // Middle East
    { lon: 55.3, lat: 25.2, r: 30, count: 120 }, // Dubai
    { lon: 46.7, lat: 24.7, r: 30, count: 110 }, // Riyadh
    { lon: 51.4, lat: 35.7, r: 35, count: 140 }, // Tehran
    { lon: 34.8, lat: 32.1, r: 28, count: 100 }, // Tel Aviv
    { lon: 31.2, lat: 30.0, r: 40, count: 170 }, // Cairo / Nile
    { lon: 28.9, lat: 41.0, r: 38, count: 160 }, // Istanbul
    // South America & Africa & Oceania
    { lon: -46.6, lat: -23.5, r: 45, count: 200 }, // São Paulo
    { lon: -43.2, lat: -22.9, r: 35, count: 140 }, // Rio de Janeiro
    { lon: -58.4, lat: -34.6, r: 36, count: 150 }, // Buenos Aires
    { lon: -70.6, lat: -33.4, r: 28, count: 100 }, // Santiago
    { lon: 28.0, lat: -26.2, r: 32, count: 120 }, // Johannesburg
    { lon: 3.4, lat: 6.5, r: 35, count: 130 }, // Lagos
    { lon: 151.2, lat: -33.8, r: 32, count: 130 }, // Sydney
    { lon: 144.9, lat: -37.8, r: 30, count: 110 } // Melbourne
  ];

  for (const metro of majorMetros) {
    const center = toCanvasCoords(metro.lon, metro.lat);
    for (let i = 0; i < metro.count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.pow(Math.random(), 1.6) * metro.r;
      const cx = center.x + Math.cos(angle) * dist;
      const cy = center.y + Math.sin(angle) * dist;

      const brightness = Math.random();
      const dotSize = 0.8 + Math.random() * 2.2;

      nightCtx.fillStyle = brightness > 0.6 ? '#fff1b8' : (brightness > 0.3 ? '#ffb74d' : '#ff7043');
      nightCtx.shadowColor = '#ffa726';
      nightCtx.shadowBlur = 4;
      nightCtx.beginPath();
      nightCtx.arc(cx, cy, dotSize, 0, Math.PI * 2);
      nightCtx.fill();
    }
  }

  const dayTexture = new THREE.CanvasTexture(dayCanvas);
  dayTexture.wrapS = THREE.RepeatWrapping;
  dayTexture.wrapT = THREE.ClampToEdgeWrapping;
  dayTexture.generateMipmaps = true;

  const nightTexture = new THREE.CanvasTexture(nightCanvas);
  nightTexture.wrapS = THREE.RepeatWrapping;
  nightTexture.wrapT = THREE.ClampToEdgeWrapping;
  nightTexture.generateMipmaps = true;

  const specTexture = new THREE.CanvasTexture(specCanvas);
  specTexture.wrapS = THREE.RepeatWrapping;
  specTexture.wrapT = THREE.ClampToEdgeWrapping;
  specTexture.generateMipmaps = true;

  return { dayTexture, nightTexture, specTexture };
}

/**
 * Creates custom atmosphere glow shader
 */
function createAtmosphereMesh(radius) {
  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vec3 viewDir = normalize(-vPosition);
      float intensity = pow(0.72 - dot(vNormal, viewDir), 2.6);
      vec3 atmosphereColor = vec3(0.2, 0.6, 1.0);
      gl_FragColor = vec4(atmosphereColor, intensity * 0.9);
    }
  `;

  const geometry = new THREE.SphereGeometry(radius * 1.035, 64, 64);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false
  });

  return new THREE.Mesh(geometry, material);
}

/**
 * Procedural dynamic cloud layer
 */
function createCloudMesh(radius) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 2048, 1024);

  // Soft organic cloud vortices
  for (let i = 0; i < 650; i++) {
    const x = Math.random() * 2048;
    const y = 140 + Math.random() * 744;
    const r = 25 + Math.random() * 75;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.22)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const cloudTexture = new THREE.CanvasTexture(canvas);
  cloudTexture.wrapS = THREE.RepeatWrapping;
  cloudTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Cloud sphere slightly above terrain (100.3) with depthWrite false
  const geometry = new THREE.SphereGeometry(radius * 1.003, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.35,
    blending: THREE.NormalBlending,
    depthWrite: false
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 2; // Keep below blast zones (renderOrder 10)
  return mesh;
}

/**
 * Main Earth class managing the globe, atmospheric shaders, cloud rotation, and coordinate pins
 */
export class EarthGlobe {
  constructor(scene) {
    this.scene = scene;
    this.radius = GLOBE_RADIUS;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Procedural baseline textures (4096x2048 ultra-res)
    const { dayTexture, nightTexture, specTexture } = createProceduralEarthTextures();
    this.dayTexture = dayTexture;
    this.nightTexture = nightTexture;
    this.specTexture = specTexture;

    // Earth Sphere Geometry (256x256 segments for smooth close-up curvature)
    const earthGeometry = new THREE.SphereGeometry(this.radius, 256, 256);
    
    // Shader material for realistic Day/Night blending and procedural micro-detail zoom
    this.earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: this.dayTexture },
        nightTexture: { value: this.nightTexture },
        specTexture: { value: this.specTexture },
        sunDirection: { value: new THREE.Vector3(1, 0.3, 0.8).normalize() },
        cameraPos: { value: new THREE.Vector3(0, 80, 260) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          vUv = uv;
          vNormal = normalize(mat3(modelMatrix) * normal);
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform sampler2D specTexture;
        uniform vec3 sunDirection;
        uniform vec3 cameraPos;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;

        // Hash function for procedural micro-detail
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        // 2D Value Noise
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                     mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
        }

        // Fractal Brownian Motion (fBm) for micro-terrain relief
        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 4; i++) {
            v += a * noise(p);
            p = p * 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 normal = normalize(vNormal);
          float sunDot = dot(normal, sunDirection);

          // Day / Night transition curve
          float dayFactor = smoothstep(-0.2, 0.25, sunDot);

          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv);
          vec4 specColor = texture2D(specTexture, vUv);

          // Distance to camera for progressive micro-detail zoom enhancement
          float camDist = length(cameraPos - vWorldPosition);
          float zoomFactor = smoothstep(120.0, 15.0, camDist);

          if (zoomFactor > 0.01) {
            // High-frequency procedural terrain micro-texture
            vec2 microUv = vUv * 600.0;
            float microDetail = fbm(microUv);
            
            // Subtle relief perturbation (highlights ridgelines and terrain variation)
            float landMask = 1.0 - specColor.r;
            vec3 terrainTint = vec3(microDetail * 0.18 - 0.09) * landMask;
            
            // Add subtle tactical metric grid lines when zoomed into city level
            if (camDist < 30.0) {
              vec2 gridUv = fract(vUv * 3600.0);
              float gridLine = (step(0.96, gridUv.x) + step(0.96, gridUv.y)) * 0.08 * landMask;
              terrainTint += vec3(gridLine * 0.4, gridLine * 0.8, gridLine);
            }

            dayColor.rgb = clamp(dayColor.rgb + terrainTint * zoomFactor, 0.0, 1.0);
          }

          // Add ambient sunlit tone
          vec3 sunlitDay = dayColor.rgb * (max(0.12, sunDot) * 1.15 + 0.1);

          // Specular reflection for water
          vec3 viewDir = normalize(cameraPos - vWorldPosition);
          vec3 reflectDir = reflect(-sunDirection, normal);
          float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * specColor.r * 0.85;

          vec3 finalColor = mix(nightColor.rgb * 1.5, sunlitDay + vec3(spec * 0.8, spec * 0.9, spec), dayFactor);

          // Subtle atmospheric rim
          float rim = 1.0 - max(dot(viewDir, normal), 0.0);
          finalColor += vec3(0.1, 0.35, 0.65) * pow(rim, 3.5) * max(0.2, dayFactor);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    this.earthMesh = new THREE.Mesh(earthGeometry, this.earthMaterial);
    this.earthMesh.renderOrder = 1;
    this.group.add(this.earthMesh);

    // Atmosphere halo
    this.atmosphereMesh = createAtmosphereMesh(this.radius);
    this.group.add(this.atmosphereMesh);

    // Cloud layer
    this.cloudMesh = createCloudMesh(this.radius);
    this.group.add(this.cloudMesh);

    // Pin markers for Launch and Target
    this.pinsGroup = new THREE.Group();
    this.group.add(this.pinsGroup);
    this.launchPin = this.createPin('#00f0ff', 'LAUNCH');
    this.targetPin = this.createPin('#ff3333', 'TARGET');
    this.pinsGroup.add(this.launchPin.mesh);
    this.pinsGroup.add(this.targetPin.mesh);

    // Load ultra-high-res NASA / Three.js textures in background if available
    this.loadHighResTextures();
  }

  loadHighResTextures() {
    const loader = new THREE.TextureLoader();
    // High-resolution NASA / Three.js official CDN mirrors
    const highResUrls = [
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_4096.jpg',
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
    ];
    const nightUrls = [
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png',
      'https://unpkg.com/three-globe/example/img/earth-night.jpg'
    ];
    
    const tryLoad = (urls, uniformName) => {
      if (urls.length === 0) return;
      const url = urls[0];
      loader.load(
        url,
        (tex) => {
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.ClampToEdgeWrapping;
          tex.anisotropy = 16;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.generateMipmaps = true;
          this.earthMaterial.uniforms[uniformName].value = tex;
        },
        undefined,
        () => {
          tryLoad(urls.slice(1), uniformName);
        }
      );
    };

    tryLoad(highResUrls, 'dayTexture');
    tryLoad(nightUrls, 'nightTexture');
  }

  createPin(colorHex, label) {
    const group = new THREE.Group();

    // Sleek ground pulse ring (smaller so it doesn't overpower blast zones)
    const ringGeo = new THREE.RingGeometry(0.2, 0.45, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    group.add(ringMesh);

    // Vertical beacon mast (thin tactical needle)
    const lineGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8);
    lineGeo.translate(0, 1.1, 0);
    const lineMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    group.add(lineMesh);

    // Glowing head sphere
    const headGeo = new THREE.SphereGeometry(0.25, 16, 16);
    headGeo.translate(0, 2.2, 0);
    const headMat = new THREE.MeshBasicMaterial({ color: colorHex });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    group.add(headMesh);

    group.renderOrder = 15;

    return {
      mesh: group,
      ringMat,
      color: colorHex,
      label
    };
  }

  setPinsVisible(visible) {
    this.pinsGroup.visible = visible;
  }

  setTargetPinVisible(visible) {
    if (this.targetPin && this.targetPin.mesh) {
      this.targetPin.mesh.visible = visible;
    }
  }

  updatePinPosition(pinType, lat, lon) {
    const pin = pinType === 'launch' ? this.launchPin : this.targetPin;
    const pos = latLonToVector3(lat, lon, this.radius);
    const vPos = new THREE.Vector3(pos.x, pos.y, pos.z);
    
    pin.mesh.position.copy(vPos);

    // Orient perpendicular to the globe surface
    const normal = vPos.clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const quat = new THREE.Quaternion().setFromUnitVectors(up, normal);
    pin.mesh.quaternion.copy(quat);

    // Orient ring flat against surface
    pin.mesh.children[0].rotation.x = Math.PI / 2;
  }

  update(deltaSec, camera) {
    // Pass camera position to shader for progressive micro-detail zoom calculation
    if (camera && this.earthMaterial.uniforms.cameraPos) {
      this.earthMaterial.uniforms.cameraPos.value.copy(camera.position);
    }

    // Subtle cloud rotation
    if (this.cloudMesh) {
      this.cloudMesh.rotation.y += deltaSec * 0.008;
    }

    // Pulse pins
    const time = performance.now() * 0.004;
    if (this.launchPin && this.launchPin.ringMat) {
      this.launchPin.ringMat.opacity = 0.5 + 0.4 * Math.sin(time);
      const scale = 1 + 0.25 * Math.sin(time);
      this.launchPin.mesh.children[0].scale.set(scale, scale, 1);
    }
    if (this.targetPin && this.targetPin.ringMat) {
      this.targetPin.ringMat.opacity = 0.6 + 0.4 * Math.cos(time * 1.5);
      const scale = 1 + 0.3 * Math.cos(time * 1.5);
      this.targetPin.mesh.children[0].scale.set(scale, scale, 1);
    }
  }
}
