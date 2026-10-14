/**
 * Nuclear Blast Physics and Current-Day Missile Specifications
 * 
 * Blast scaling laws based on Glasstone & Dolan ("The Effects of Nuclear Weapons", 1977)
 * and Alex Wellerstein's NUKEMAP calibration formulas.
 */

export const EARTH_RADIUS_KM = 6371.0;

export const MISSILE_PRESETS = [
  {
    id: 'minuteman-3',
    name: 'LGM-30G Minuteman III',
    country: 'United States',
    type: 'Silo-based ICBM',
    yieldKt: 475, // W87 warhead
    warheadName: 'W87-1 RV',
    speedMach: 23, // ~28,200 km/h
    rangeKm: 13000,
    apogeeKm: 1120,
    defaultLaunch: { name: 'Minot AFB, USA', lat: 48.41, lon: -101.35 },
    defaultTarget: { name: 'Target Alpha', lat: 55.75, lon: 37.62 }, // Moscow coords as strategic reference
    description: 'The backbone of the US land-based nuclear triad. Carries single or multiple W78/W87 thermonuclear warheads at hypersonic re-entry speeds.'
  },
  {
    id: 'trident-2',
    name: 'UGM-133A Trident II (D5)',
    country: 'USA / UK',
    type: 'Submarine-launched SLBM',
    yieldKt: 455, // W88 warhead
    warheadName: 'W88 MIRV',
    speedMach: 24,
    rangeKm: 12000,
    apogeeKm: 1000,
    defaultLaunch: { name: 'North Atlantic SSBN Patrol', lat: 58.0, lon: -25.0 },
    defaultTarget: { name: 'Strategic Command Center', lat: 55.75, lon: 37.62 },
    description: 'Primary sea-based strategic deterrence deployed on Ohio-class and Vanguard-class ballistic missile submarines with near-undetectable launch capability.'
  },
  {
    id: 'sarmat',
    name: 'RS-28 Sarmat ("Satan II")',
    country: 'Russia',
    type: 'Heavy Silo-based ICBM',
    yieldKt: 750, // per MIRV (can carry 10-15 MIRVs or single 10+ Mt)
    warheadName: 'Avangard / MIRV',
    speedMach: 20.7,
    rangeKm: 18000,
    apogeeKm: 1350,
    defaultLaunch: { name: 'Plesetsk Cosmodrome, RUS', lat: 62.92, lon: 40.57 },
    defaultTarget: { name: 'Norfolk Naval Base, USA', lat: 36.94, lon: -76.30 },
    description: 'Super-heavy thermonuclear liquid-fueled ICBM capable of circumpolar trajectories over either South or North poles to evade missile defense shields.'
  },
  {
    id: 'topol-m',
    name: 'RT-2PM2 Topol-M / RS-24 Yars',
    country: 'Russia',
    type: 'Road-Mobile ICBM',
    yieldKt: 800, // single 800kt warhead
    warheadName: 'Single 800kt Thermonuclear',
    speedMach: 22,
    rangeKm: 11000,
    apogeeKm: 1050,
    defaultLaunch: { name: 'Teykovo Missile Division, RUS', lat: 56.88, lon: 40.55 },
    defaultTarget: { name: 'Pentagon / Washington DC, USA', lat: 38.87, lon: -77.05 },
    description: 'Road-mobile solid-propellant ICBM with rapid boost phase designed to minimize vulnerability to boost-phase interception.'
  },
  {
    id: 'df-41',
    name: 'DF-41 (Dongfeng-41)',
    country: 'China',
    type: 'Road-Mobile / Silo ICBM',
    yieldKt: 500,
    warheadName: 'MIRV Warhead',
    speedMach: 25,
    rangeKm: 15000,
    apogeeKm: 1200,
    defaultLaunch: { name: 'Shaanxi Base, CHN', lat: 34.26, lon: 108.94 },
    defaultTarget: { name: 'Los Angeles, USA', lat: 34.05, lon: -118.24 },
    description: 'China’s fourth-generation solid-fuel road-mobile strategic missile capable of reaching any point in North America within 30 minutes.'
  },
  {
    id: 'm51',
    name: 'M51 SLBM',
    country: 'France',
    type: 'Submarine-launched SLBM',
    yieldKt: 150, // TNO warhead
    warheadName: 'TNO (Tête Nucléaire Océanique)',
    speedMach: 25,
    rangeKm: 10000,
    apogeeKm: 900,
    defaultLaunch: { name: 'Bay of Biscay SSBN, FRA', lat: 45.0, lon: -5.0 },
    defaultTarget: { name: 'Designated Target', lat: 55.75, lon: 37.62 },
    description: 'Submarine-launched missile of the Force Océanique Stratégique, carried on Triomphant-class nuclear ballistic submarines.'
  },
  {
    id: 'b83',
    name: 'B83 Thermonuclear Bomb',
    country: 'United States',
    type: 'Strategic Gravity Bomb / ALCM',
    yieldKt: 1200, // 1.2 Mt
    warheadName: 'Variable Yield 1.2 Mt',
    speedMach: 2.2,
    rangeKm: 3000,
    apogeeKm: 350,
    defaultLaunch: { name: 'Whiteman AFB (B-2 Spirit), USA', lat: 38.73, lon: -93.55 },
    defaultTarget: { name: 'Target Bravo', lat: 55.75, lon: 37.62 },
    description: 'The highest-yield nuclear weapon currently remaining in active service in the US arsenal (1.2 Megatons), designed for hardened bunker destruction.'
  },
  {
    id: 'tsar-bomba',
    name: 'RDS-220 Tsar Bomba (Historic)',
    country: 'USSR',
    type: 'Super-Heavy Test Weapon',
    yieldKt: 50000, // 50 Mt
    warheadName: '50 Megaton Hydrogen Bomb',
    speedMach: 1.5,
    rangeKm: 4000,
    apogeeKm: 250,
    defaultLaunch: { name: 'Olenya Air Base, RUS', lat: 68.15, lon: 33.46 },
    defaultTarget: { name: 'Novaya Zemlya Test Site', lat: 73.85, lon: 54.50 },
    description: 'The most powerful nuclear weapon ever created and detonated in human history (October 30, 1961), with an explosive energy equivalent to 50 million tons of TNT.'
  },
  {
    id: 'little-boy',
    name: 'Little Boy (Historic 1945)',
    country: 'USA',
    type: 'Gun-type Fission Bomb',
    yieldKt: 15,
    warheadName: 'U-235 Fission Weapon',
    speedMach: 0.5,
    rangeKm: 1500,
    apogeeKm: 50,
    defaultLaunch: { name: 'Tinian Island, Marianas', lat: 14.96, lon: 145.62 },
    defaultTarget: { name: 'Hiroshima, Japan', lat: 34.39, lon: 132.45 },
    description: 'The first nuclear weapon used in warfare, with an explosive yield of approximately 15 kilotons.'
  }
];

export const PRESET_LOCATIONS = [
  { name: 'Washington D.C., USA', lat: 38.9072, lon: -77.0369 },
  { name: 'New York City, USA', lat: 40.7128, lon: -74.0060 },
  { name: 'Los Angeles, USA', lat: 34.0522, lon: -118.2437 },
  { name: 'Minot AFB, USA (ICBM Silos)', lat: 48.4167, lon: -101.3580 },
  { name: 'Whiteman AFB, USA (B-2 Base)', lat: 38.7303, lon: -93.5478 },
  { name: 'London, United Kingdom', lat: 51.5074, lon: -0.1278 },
  { name: 'Paris, France', lat: 48.8566, lon: 2.3522 },
  { name: 'Berlin, Germany', lat: 52.5200, lon: 13.4050 },
  { name: 'Moscow, Russia', lat: 55.7558, lon: 37.6173 },
  { name: 'Plesetsk Cosmodrome, Russia', lat: 62.9271, lon: 40.5764 },
  { name: 'Novosibirsk, Russia', lat: 55.0084, lon: 82.9357 },
  { name: 'Beijing, China', lat: 39.9042, lon: 116.4074 },
  { name: 'Taiyuan Satellite Base, China', lat: 38.8491, lon: 111.6080 },
  { name: 'Tokyo, Japan', lat: 35.6762, lon: 139.6503 },
  { name: 'Seoul, South Korea', lat: 37.5665, lon: 126.9780 },
  { name: 'Pyongyang, North Korea', lat: 39.0392, lon: 125.7625 },
  { name: 'New Delhi, India', lat: 28.6139, lon: 77.2090 },
  { name: 'Islamabad, Pakistan', lat: 33.6844, lon: 73.0479 },
  { name: 'Tel Aviv, Israel', lat: 32.0853, lon: 34.7818 },
  { name: 'Tehran, Iran', lat: 35.6892, lon: 51.3890 },
  { name: 'Sydney, Australia', lat: -33.8688, lon: 151.2093 }
];

/**
 * Calculates nuclear detonation damage radii in kilometers
 * @param {number} yieldKt Yield in kilotons (kt)
 * @param {boolean} isAirburst Whether detonation is optimized airburst or surface burst
 * @returns {object} Calculated radii, areas, and effects
 */
export function calculateNuclearEffects(yieldKt, isAirburst = true) {
  const Y = Math.max(0.1, yieldKt);
  const airMod = isAirburst ? 1.0 : 0.85;

  // 1. Fireball Radius (km)
  // Glasstone: R ≈ 0.07 * Y^0.4 km (airburst), surface burst spreads slightly wider on ground: 0.088 * Y^0.4
  const fireballRadius = (isAirburst ? 0.075 : 0.088) * Math.pow(Y, 0.4);

  // 2. Heavy Blast Damage (20 psi overpressure)
  // Heavily built concrete structures demolished, 100% fatalities for exposed individuals
  // Glasstone scaling: R_20psi = 0.28 * Y^(1/3) km (surface), 0.35 * Y^(1/3) (airburst)
  const heavyBlastRadius = (isAirburst ? 0.35 : 0.28) * Math.pow(Y, 1 / 3);

  // 3. Prompt Ionizing Radiation (500 rem / 5 Sv dose)
  // 50-90% mortality without medical care within 2-4 weeks
  // Strongly attenuated by atmosphere: R ≈ 1.25 * Y^0.19 km (for Y < 1000kt), saturates near 3.5-4.5 km
  const rawRadiation = 1.25 * Math.pow(Y, 0.19);
  const radiationRadius = Math.min(rawRadiation, 4.5);

  // 4. Moderate Blast Damage (5 psi overpressure)
  // Most residential buildings collapse, widespread fatalities and universal severe injuries
  // R_5psi = 0.64 * Y^(1/3) (surface), 0.89 * Y^(1/3) (airburst)
  const moderateBlastRadius = (isAirburst ? 0.89 : 0.64) * Math.pow(Y, 1 / 3);

  // 5. Thermal Radiation (3rd degree burns)
  // Severe, full-thickness burns to all exposed skin, ignites wood, paper, gasoline
  // R_thermal = 0.67 * Y^0.41 (surface), 0.85 * Y^0.41 (airburst)
  const thermalRadius = (isAirburst ? 0.85 : 0.67) * Math.pow(Y, 0.41);

  // 6. Light Blast Damage (1 psi overpressure)
  // Glass windows shatter with violent high-velocity shards, causing serious lacerations
  // R_1psi = 1.61 * Y^(1/3) (surface), 2.2 * Y^(1/3) (airburst)
  const lightBlastRadius = (isAirburst ? 2.20 : 1.61) * Math.pow(Y, 1 / 3);

  // 7. Mushroom Cloud Characteristics
  // Height top (km) and cloud cap diameter (km)
  const cloudHeightKm = Math.min(65, 3.8 * Math.pow(Y, 0.25));
  const cloudCapDiameterKm = Math.min(95, 2.8 * Math.pow(Y, 0.28));

  // 8. Surface Crater Diameter (surface burst only)
  const craterDiameterKm = isAirburst ? 0 : 0.045 * Math.pow(Y, 0.3);



  const zones = [];

  // Crater Zone (Surface Burst only)
  if (!isAirburst && craterDiameterKm > 0.01) {
    const craterR = craterDiameterKm / 2;
    zones.push({
      id: 'crater',
      name: 'Ground Crater Lip',
      color: '#36220f',
      borderColor: '#82542a',
      radiusKm: craterR,
      radiusMiles: craterR * 0.621371,
      areaSqKm: Math.PI * Math.pow(craterR, 2),
      overpressurePsi: 'Crater Cavity',
      description: 'Excavated earth and bedrock pulverized by kinetic shock and instant vaporization. Forms a deep radioactive crater basin.',
      visualHeight: 1.05
    });
  }

  zones.push(
    {
      id: 'fireball',
      name: 'Fireball Vaporization',
      color: '#fff275',
      borderColor: '#ffffff',
      radiusKm: fireballRadius,
      radiusMiles: fireballRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(fireballRadius, 2),
      overpressurePsi: '> 100+ psi',
      description: 'Vaporization point. Core temperatures exceed 100,000,000°C (hotter than the sun). Absolute disintegration of all matter.',
      visualHeight: 1.0
    },
    {
      id: 'heavy_blast',
      name: 'Heavy Blast (20 psi)',
      color: '#ff2233',
      borderColor: '#ff6677',
      radiusKm: heavyBlastRadius,
      radiusMiles: heavyBlastRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(heavyBlastRadius, 2),
      overpressurePsi: '20 psi (Demolition)',
      description: 'Heavily built reinforced concrete structures destroyed. Fatalities approach 100%. Extreme tornado-velocity hurricane winds in excess of 800 km/h.',
      visualHeight: 0.95
    },
    {
      id: 'radiation',
      name: 'Ionizing Radiation (500 rem)',
      color: '#00ff66',
      borderColor: '#88ffaa',
      radiusKm: radiationRadius,
      radiusMiles: radiationRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(radiationRadius, 2),
      overpressurePsi: '500 rem / 5 Sv',
      description: 'Lethal acute radiation dose. 50% to 90% mortality without immediate medical treatment within 2 to 4 weeks.',
      visualHeight: 0.9
    },
    {
      id: 'moderate_blast',
      name: 'Moderate Blast (5 psi)',
      color: '#ff8800',
      borderColor: '#ffbb44',
      radiusKm: moderateBlastRadius,
      radiusMiles: moderateBlastRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(moderateBlastRadius, 2),
      overpressurePsi: '5 psi (Collapse)',
      description: 'Standard residential structures completely collapse. Universal severe injuries and widespread secondary conflagrations.',
      visualHeight: 0.85
    },
    {
      id: 'thermal',
      name: 'Thermal Radiation (3rd° Burns)',
      color: '#ff00aa',
      borderColor: '#ff66cc',
      radiusKm: thermalRadius,
      radiusMiles: thermalRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(thermalRadius, 2),
      overpressurePsi: '8-10 cal/cm²',
      description: 'Full-thickness third-degree burns across exposed line of sight. Spontaneous combustion of dry wood, clothing, and hydrocarbons.',
      visualHeight: 0.8
    },
    {
      id: 'light_blast',
      name: 'Light Blast (1 psi)',
      color: '#00c8ff',
      borderColor: '#88e0ff',
      radiusKm: lightBlastRadius,
      radiusMiles: lightBlastRadius * 0.621371,
      areaSqKm: Math.PI * Math.pow(lightBlastRadius, 2),
      overpressurePsi: '1 psi (Shallow Shock)',
      description: 'Windows violently shatter inwards creating high-velocity laceration projectiles. Widespread minor blast trauma and thermal dazzle.',
      visualHeight: 0.75
    }
  );

  return {
    yieldKt: Y,
    isAirburst,
    zones,
    mushroomCloud: {
      heightKm: cloudHeightKm,
      heightMiles: cloudHeightKm * 0.621371,
      capDiameterKm: cloudCapDiameterKm,
      craterDiameterKm: craterDiameterKm
    }
  };
}

/**
 * Converts Geographic (Lat, Lon) to 3D Cartesian coordinates on a sphere of radius R
 * @param {number} lat Latitude in degrees [-90, 90]
 * @param {number} lon Longitude in degrees [-180, 180]
 * @param {number} radius Sphere radius
 * @returns {object} {x, y, z}
 */
export function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return { x, y, z };
}

/**
 * Converts 3D Cartesian coordinates on sphere to (Lat, Lon)
 * @param {object} v Vector3 {x, y, z}
 * @returns {object} {lat, lon}
 */
export function vector3ToLatLon(v) {
  const r = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  const phi = Math.acos(Math.max(-1, Math.min(1, v.y / r)));
  const theta = Math.atan2(v.z, -v.x);

  const lat = 90 - (phi * 180 / Math.PI);
  let lon = (theta * 180 / Math.PI) - 180;
  if (lon < -180) lon += 360;
  if (lon > 180) lon -= 360;

  return { lat, lon };
}

/**
 * Calculates Great-Circle distance in km between two lat/lon points
 */
export function greatCircleDistanceKm(lat1, lon1, lat2, lon2) {
  const R = EARTH_RADIUS_KM;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
