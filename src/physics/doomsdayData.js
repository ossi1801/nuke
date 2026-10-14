/**
 * Real-World Nuclear Arsenal Database & Global Doomsday Exchange Engine
 * 
 * Based on FAS (Federation of American Scientists 2024-2025 Nuclear Notebook),
 * SIPRI Strategic Yearbook, and ICAN strategic deterrence reports.
 */

export const NUCLEAR_NATIONS = [
  {
    id: 'usa',
    name: 'United States',
    flag: 'US',
    color: '#00c8ff',
    totalWarheads: 5044,
    strategicRockets: 640, // 400 Minuteman III silos + 240 Trident II D5 SLBMs
    avgYieldKt: 350,
    speedMach: 23,
    missileTypes: ['LGM-30G Minuteman III', 'UGM-133A Trident II D5'],
    launchBases: [
      { name: 'Minot AFB Silo Field, ND', lat: 48.41, lon: -101.35 },
      { name: 'Malmstrom AFB Silo Field, MT', lat: 47.50, lon: -111.18 },
      { name: 'F.E. Warren AFB Silo Field, WY', lat: 41.14, lon: -104.86 },
      { name: 'North Atlantic SSBN Patrol (Ohio-class)', lat: 56.50, lon: -32.00 },
      { name: 'North Pacific SSBN Patrol (Ohio-class)', lat: 48.00, lon: -155.00 },
      { name: 'Norwegian Sea SSBN Patrol', lat: 68.00, lon: 2.00 }
    ]
  },
  {
    id: 'russia',
    name: 'Russian Federation',
    flag: 'RU',
    color: '#ff3344',
    totalWarheads: 5580,
    strategicRockets: 512, // ~320 ICBMs (Yars, Sarmat, Topol-M) + ~192 SLBMs (Bulava, Sineva)
    avgYieldKt: 550,
    speedMach: 22,
    missileTypes: ['RS-24 Yars', 'RS-28 Sarmat', 'RSM-56 Bulava', 'Topol-M'],
    launchBases: [
      { name: 'Plesetsk Cosmodrome / Silos', lat: 62.92, lon: 40.57 },
      { name: 'Teykovo Missile Division', lat: 56.88, lon: 40.55 },
      { name: 'Tatishchevo Missile Base', lat: 51.67, lon: 45.71 },
      { name: 'Novosibirsk ICBM Division', lat: 55.00, lon: 82.93 },
      { name: 'Dombarovsky Silo Complex', lat: 51.05, lon: 59.86 },
      { name: 'Barents Sea SSBN Bastion (Borei-class)', lat: 72.00, lon: 38.00 },
      { name: 'Sea of Okhotsk SSBN Bastion (Delta-IV)', lat: 54.00, lon: 150.00 }
    ]
  },
  {
    id: 'china',
    name: 'People\'s Republic of China',
    flag: 'CN',
    color: '#ffaa00',
    totalWarheads: 500,
    strategicRockets: 310, // DF-41, DF-31AG, DF-5B/C, JL-2/JL-3 SLBMs
    avgYieldKt: 350,
    speedMach: 25,
    missileTypes: ['DF-41 Mobile ICBM', 'DF-31AG', 'DF-5B Silo', 'JL-3 SLBM'],
    launchBases: [
      { name: 'Yumen Silo Field, Gansu', lat: 40.25, lon: 97.05 },
      { name: 'Hami Silo Complex, Xinjiang', lat: 42.82, lon: 93.51 },
      { name: 'Shaanxi Mobile ICBM Base', lat: 34.26, lon: 108.94 },
      { name: 'South China Sea SSBN Patrol (Type 094)', lat: 14.50, lon: 114.00 },
      { name: 'Henan Rocket Brigade', lat: 33.88, lon: 113.50 }
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: 'FR',
    color: '#0088ff',
    totalWarheads: 290,
    strategicRockets: 64, // M51.1 / M51.2 / M51.3 SLBMs on 4 Triomphant SSBNs
    avgYieldKt: 150,
    speedMach: 25,
    missileTypes: ['M51.2 SLBM (TNO Warhead)'],
    launchBases: [
      { name: 'Île Longue Submarine Base', lat: 48.30, lon: -4.50 },
      { name: 'Bay of Biscay SSBN Patrol', lat: 45.00, lon: -6.00 },
      { name: 'North Atlantic Deep Patrol', lat: 52.00, lon: -20.00 }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: 'UK',
    color: '#44aaff',
    totalWarheads: 225,
    strategicRockets: 48, // Trident II D5 SLBMs on Vanguard-class
    avgYieldKt: 100,
    speedMach: 24,
    missileTypes: ['Trident II D5 (Vanguard SSBN)'],
    launchBases: [
      { name: 'HMNB Clyde / Faslane', lat: 56.06, lon: -4.81 },
      { name: 'North Atlantic CASD Patrol', lat: 58.50, lon: -18.00 }
    ]
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    flag: 'PK',
    color: '#00dd77',
    totalWarheads: 170,
    strategicRockets: 60, // Shaheen-III, Shaheen-II, Ghauri
    avgYieldKt: 35,
    speedMach: 18,
    missileTypes: ['Shaheen-III MRBM', 'Shaheen-II', 'Ghauri'],
    launchBases: [
      { name: 'Sargodha Central Ammunition Base', lat: 32.08, lon: 72.67 },
      { name: 'Gujranwala Mobile Missile Base', lat: 32.18, lon: 74.19 },
      { name: 'Balochistan Tactical Site', lat: 28.50, lon: 65.50 }
    ]
  },
  {
    id: 'india',
    name: 'India',
    flag: 'IN',
    color: '#ff8822',
    totalWarheads: 172,
    strategicRockets: 60, // Agni-V, Agni-IV, K-15 SLBMs
    avgYieldKt: 50,
    speedMach: 24,
    missileTypes: ['Agni-V ICBM', 'Agni-IV', 'K-15 Sagarika SLBM'],
    launchBases: [
      { name: 'Dr. Abdul Kalam Island (Wheeler)', lat: 20.75, lon: 87.08 },
      { name: 'Rajasthan Strategic Command', lat: 26.91, lon: 71.90 },
      { name: 'Bay of Bengal SSBN Patrol (INS Arihant)', lat: 15.00, lon: 85.00 }
    ]
  },
  {
    id: 'israel',
    name: 'Israel',
    flag: 'IL',
    color: '#66bbff',
    totalWarheads: 90,
    strategicRockets: 30, // Jericho-III ICBM / Jericho-II
    avgYieldKt: 150,
    speedMach: 22,
    missileTypes: ['Jericho III ICBM', 'Jericho II'],
    launchBases: [
      { name: 'Sdot Micha Airbase Silos', lat: 31.70, lon: 34.91 },
      { name: 'Eastern Mediterranean Patrol (Dolphin-class)', lat: 33.00, lon: 33.50 }
    ]
  },
  {
    id: 'north_korea',
    name: 'North Korea',
    flag: 'KP',
    color: '#dd2222',
    totalWarheads: 50,
    strategicRockets: 30, // Hwasong-17, Hwasong-15, Hwasong-18
    avgYieldKt: 80,
    speedMach: 22,
    missileTypes: ['Hwasong-18 Solid ICBM', 'Hwasong-17 Heavy'],
    launchBases: [
      { name: 'Sunan Strategic Airfield, Pyongyang', lat: 39.20, lon: 125.67 },
      { name: 'Chagang Province Silo/Tunnel Complex', lat: 40.50, lon: 126.50 },
      { name: 'Kusong Testing Grounds', lat: 39.98, lon: 125.24 }
    ]
  }
];

// Calculate total global rockets across all nuclear states
export const TOTAL_GLOBAL_ROCKETS = NUCLEAR_NATIONS.reduce((sum, n) => sum + n.strategicRockets, 0); // 1,754

/**
 * Major Target Nations and High-Value Strategic Cities Worldwide
 * Realistic multi-continent distribution representing global superpowers & strategic hubs.
 */
export const GLOBAL_TARGET_POWERS = [
  // United States
  { country: 'United States', city: 'Washington D.C. (Pentagon / White House)', lat: 38.89, lon: -77.03, population: 690000, strategicWeight: 3 },
  { country: 'United States', city: 'New York City (Financial / Harbor)', lat: 40.71, lon: -74.00, population: 8400000, strategicWeight: 3 },
  { country: 'United States', city: 'Los Angeles (Ports / Aerospace)', lat: 34.05, lon: -118.24, population: 3900000, strategicWeight: 2 },
  { country: 'United States', city: 'Chicago (Midwest Transport Hub)', lat: 41.87, lon: -87.62, population: 2700000, strategicWeight: 2 },
  { country: 'United States', city: 'Omaha / Offutt AFB (US STRATCOM HQ)', lat: 41.11, lon: -95.91, population: 490000, strategicWeight: 3 },
  { country: 'United States', city: 'Norfolk Naval Station (Atlantic Fleet)', lat: 36.94, lon: -76.30, population: 240000, strategicWeight: 3 },
  { country: 'United States', city: 'Cheyenne Mountain / NORAD Bunker, CO', lat: 38.74, lon: -104.84, population: 150000, strategicWeight: 3 },
  { country: 'United States', city: 'Seattle / Kitsap SSBN Base, WA', lat: 47.71, lon: -122.72, population: 750000, strategicWeight: 3 },
  { country: 'United States', city: 'Houston (Energy Grid & Petrochemical)', lat: 29.76, lon: -95.36, population: 2300000, strategicWeight: 2 },
  { country: 'United States', city: 'San Francisco / Silicon Valley', lat: 37.77, lon: -122.41, population: 880000, strategicWeight: 2 },
  { country: 'United States', city: 'Minot AFB Missile Wing, ND', lat: 48.41, lon: -101.35, population: 50000, strategicWeight: 3 },
  { country: 'United States', city: 'Kings Bay Submarine Base, GA', lat: 30.79, lon: -81.53, population: 35000, strategicWeight: 3 },

  // Russia
  { country: 'Russia', city: 'Moscow (Kremlin / Command Bunkers)', lat: 55.75, lon: 37.61, population: 13000000, strategicWeight: 3 },
  { country: 'Russia', city: 'St. Petersburg (Baltic Fleet / Port)', lat: 59.93, lon: 30.33, population: 5600000, strategicWeight: 3 },
  { country: 'Russia', city: 'Severomorsk (Northern Fleet HQ)', lat: 69.06, lon: 33.41, population: 60000, strategicWeight: 3 },
  { country: 'Russia', city: 'Novosibirsk (Siberian Industry & Science)', lat: 55.00, lon: 82.93, population: 1600000, strategicWeight: 2 },
  { country: 'Russia', city: 'Yekaterinburg (Ural Heavy Industry)', lat: 56.83, lon: 60.61, population: 1500000, strategicWeight: 2 },
  { country: 'Russia', city: 'Vladivostok (Pacific Fleet HQ)', lat: 43.11, lon: 131.87, population: 600000, strategicWeight: 3 },
  { country: 'Russia', city: 'Chelyabinsk (Nuclear Weapons Production)', lat: 55.16, lon: 61.43, population: 1200000, strategicWeight: 3 },
  { country: 'Russia', city: 'Plesetsk Cosmodrome, Arkhangelsk', lat: 62.92, lon: 40.57, population: 30000, strategicWeight: 3 },
  { country: 'Russia', city: 'Nizhny Novgorod (Defense Industrial Hub)', lat: 56.32, lon: 44.00, population: 1250000, strategicWeight: 2 },

  // China
  { country: 'China', city: 'Beijing (Central Military Commission)', lat: 39.90, lon: 116.40, population: 21800000, strategicWeight: 3 },
  { country: 'China', city: 'Shanghai (Commercial Port / East Sea Fleet)', lat: 31.23, lon: 121.47, population: 26000000, strategicWeight: 3 },
  { country: 'China', city: 'Guangzhou (Southern Theater Command)', lat: 23.12, lon: 113.26, population: 15000000, strategicWeight: 2 },
  { country: 'China', city: 'Chengdu (Western Theater / Aircraft Industry)', lat: 30.57, lon: 104.06, population: 16500000, strategicWeight: 2 },
  { country: 'China', city: 'Wuhan (Central Logistics & Transport)', lat: 30.59, lon: 114.30, population: 11000000, strategicWeight: 2 },
  { country: 'China', city: 'Qingdao (North Sea Fleet Submarine Base)', lat: 36.06, lon: 120.38, population: 9000000, strategicWeight: 3 },
  { country: 'China', city: 'Yalong Bay Naval Base, Hainan', lat: 18.21, lon: 109.65, population: 100000, strategicWeight: 3 },

  // United Kingdom
  { country: 'United Kingdom', city: 'London (Whitehall / Financial Center)', lat: 51.50, lon: -0.12, population: 8900000, strategicWeight: 3 },
  { country: 'United Kingdom', city: 'HMNB Clyde / Faslane (Trident SSBN Base)', lat: 56.06, lon: -4.81, population: 40000, strategicWeight: 3 },
  { country: 'United Kingdom', city: 'Manchester (Industrial Heartland)', lat: 53.48, lon: -2.24, population: 2700000, strategicWeight: 2 },

  // France
  { country: 'France', city: 'Paris (Élysée Palace / Strategic Command)', lat: 48.85, lon: 2.35, population: 2160000, strategicWeight: 3 },
  { country: 'France', city: 'Brest / Île Longue (SSBN Submarine Port)', lat: 48.38, lon: -4.48, population: 140000, strategicWeight: 3 },
  { country: 'France', city: 'Toulon (Mediterranean Naval Fleet)', lat: 43.12, lon: 5.92, population: 175000, strategicWeight: 2 },

  // Germany
  { country: 'Germany', city: 'Berlin (Government Center)', lat: 52.52, lon: 13.40, population: 3700000, strategicWeight: 2 },
  { country: 'Germany', city: 'Ramstein Air Base (NATO Air Command HQ)', lat: 49.43, lon: 7.60, population: 35000, strategicWeight: 3 },
  { country: 'Germany', city: 'Frankfurt (European Banking / Data Hub)', lat: 50.11, lon: 8.68, population: 760000, strategicWeight: 2 },

  // Japan
  { country: 'Japan', city: 'Tokyo (Capital / Greater Metro)', lat: 35.67, lon: 139.65, population: 14000000, strategicWeight: 3 },
  { country: 'Japan', city: 'Yokosuka (US 7th Fleet Naval HQ)', lat: 35.28, lon: 139.67, population: 390000, strategicWeight: 3 },
  { country: 'Japan', city: 'Okinawa / Kadena Air Base', lat: 26.35, lon: 127.76, population: 300000, strategicWeight: 3 },

  // India
  { country: 'India', city: 'New Delhi (Cabinet Command)', lat: 28.61, lon: 77.20, population: 16700000, strategicWeight: 3 },
  { country: 'India', city: 'Mumbai (Western Naval Command / Finance)', lat: 19.07, lon: 72.87, population: 12500000, strategicWeight: 2 },

  // Pakistan
  { country: 'Pakistan', city: 'Islamabad / Rawalpindi (GHQ Military HQ)', lat: 33.68, lon: 73.04, population: 2100000, strategicWeight: 3 },
  { country: 'Pakistan', city: 'Karachi (Main Port & Economic Hub)', lat: 24.86, lon: 67.00, population: 16000000, strategicWeight: 2 },

  // Israel
  { country: 'Israel', city: 'Tel Aviv (Kirya Defense Ministry)', lat: 32.08, lon: 34.78, population: 460000, strategicWeight: 3 },
  { country: 'Israel', city: 'Dimona (Negev Nuclear Research Center)', lat: 31.07, lon: 35.03, population: 35000, strategicWeight: 3 },

  // Iran
  { country: 'Iran', city: 'Tehran (Capital Command)', lat: 35.68, lon: 51.38, population: 9000000, strategicWeight: 3 },
  { country: 'Iran', city: 'Natanz / Isfahan (Nuclear Enrichment Complex)', lat: 33.51, lon: 51.72, population: 500000, strategicWeight: 3 },

  // South Korea
  { country: 'South Korea', city: 'Seoul (Metropolitan Center)', lat: 37.56, lon: 126.97, population: 9700000, strategicWeight: 3 },
  { country: 'South Korea', city: 'Osan / Pyeongtaek (US Forces Korea HQ)', lat: 37.09, lon: 127.02, population: 200000, strategicWeight: 3 },

  // North Korea
  { country: 'North Korea', city: 'Pyongyang (Government & Missile Command)', lat: 39.03, lon: 125.76, population: 3000000, strategicWeight: 3 },

  // Australia
  { country: 'Australia', city: 'Sydney (Major Economic Port)', lat: -33.86, lon: 151.20, population: 5300000, strategicWeight: 2 },
  { country: 'Australia', city: 'Pine Gap (Joint Satellite Intelligence Facility)', lat: -23.79, lon: 133.73, population: 15000, strategicWeight: 3 },

  // Canada
  { country: 'Canada', city: 'Ottawa / Montreal (Eastern Corridor)', lat: 45.42, lon: -75.69, population: 2000000, strategicWeight: 2 },

  // Other Major Powers
  { country: 'Turkey', city: 'Ankara / Incirlik Air Base (NATO B61 Vaults)', lat: 36.99, lon: 35.42, population: 150000, strategicWeight: 3 },
  { country: 'Saudi Arabia', city: 'Riyadh (Capital / Energy Grid)', lat: 24.71, lon: 46.67, population: 7600000, strategicWeight: 2 },
  { country: 'Ukraine', city: 'Kyiv (Capital Center)', lat: 50.45, lon: 30.52, population: 2900000, strategicWeight: 2 },
  { country: 'Poland', city: 'Warsaw / Redzikowo Aegis Ashore Site', lat: 54.47, lon: 17.11, population: 1800000, strategicWeight: 3 },
  { country: 'Italy', city: 'Rome / Aviano Air Base', lat: 41.90, lon: 12.49, population: 2800000, strategicWeight: 2 }
];

/**
 * Builds the complete strategic flight roster for all 1,754 missiles
 * Staggered across multiple tactical salvo phases for dramatic simulation.
 */
export function generateDoomsdayFlightRoster() {
  const flights = [];
  let globalIndex = 0;

  NUCLEAR_NATIONS.forEach(nation => {
    // Determine potential target countries for this nation
    // (Every nation targets adversaries and random big countries worldwide)
    const validTargets = GLOBAL_TARGET_POWERS.filter(t => t.country !== nation.name);

    for (let i = 0; i < nation.strategicRockets; i++) {
      // Pick launch base (cycle through bases)
      const launchBase = nation.launchBases[i % nation.launchBases.length];
      
      // Add slight jitter to launch coordinates (within ~25-50km) to represent individual silos / mobile TELs / submarines
      const jitterLat = (Math.random() - 0.5) * 0.45;
      const jitterLon = (Math.random() - 0.5) * 0.45;
      const launchCoords = {
        lat: launchBase.lat + jitterLat,
        lon: launchBase.lon + jitterLon,
        name: `${launchBase.name} (#${(i % 50) + 1})`
      };

      // Select target: weighted random selection favoring high-value strategic targets
      const target = selectTargetForNation(nation.id, validTargets, i);
      const targetJitterLat = (Math.random() - 0.5) * 0.15;
      const targetJitterLon = (Math.random() - 0.5) * 0.15;
      const targetCoords = {
        lat: target.lat + targetJitterLat,
        lon: target.lon + targetJitterLon,
        city: target.city,
        country: target.country,
        population: target.population
      };

      // Staggered launch schedule in 4 distinct tactical waves:
      // Wave 1 (0-6s): Surprise first strike / SLBM forward depression trajectory (15% of rockets)
      // Wave 2 (6-16s): Launch on Warning ICBM mass counter-force salvo (50% of rockets)
      // Wave 3 (16-28s): Secondary retaliation / SSBN submarine triad release (25% of rockets)
      // Wave 4 (28-40s): Final counter-value / reserve salvo (10% of rockets)
      let launchDelay;
      const roll = Math.random();
      if (roll < 0.15) {
        launchDelay = Math.random() * 6.0; // Wave 1
      } else if (roll < 0.65) {
        launchDelay = 6.0 + Math.random() * 10.0; // Wave 2
      } else if (roll < 0.90) {
        launchDelay = 16.0 + Math.random() * 12.0; // Wave 3
      } else {
        launchDelay = 28.0 + Math.random() * 12.0; // Wave 4
      }

      // Flight duration: ICBMs typically take 25-30 minutes real time (~15-25 seconds simulated flight)
      const flightDuration = 14.0 + Math.random() * 8.0;

      flights.push({
        id: globalIndex++,
        nationId: nation.id,
        nationName: nation.name,
        nationColor: nation.color,
        launch: launchCoords,
        target: targetCoords,
        yieldKt: nation.avgYieldKt * (0.85 + Math.random() * 0.3), // realistic yield variance
        speedMach: nation.speedMach,
        launchDelaySec: launchDelay,
        flightDurationSec: flightDuration,
        progress: 0,
        status: 'pending', // 'pending' | 'in_flight' | 'detonated'
        detonationCoords: null
      });
    }
  });

  return flights;
}

/**
 * Intelligent strategic targeting:
 * - USA targets Russia, China, North Korea, Iran
 * - Russia targets USA, NATO Europe, UK, France, Germany, Japan
 * - China targets USA, Japan, India, Australia, Pacific bases
 * - UK / France target Russia & strategic hubs
 * - Pakistan & India target each other + regional powers
 * - Israel targets Middle East / Iran
 * - North Korea targets USA, Japan, South Korea
 */
function selectTargetForNation(nationId, validTargets, index) {
  let primaryCountries = [];

  switch (nationId) {
    case 'usa':
      primaryCountries = ['Russia', 'China', 'North Korea', 'Iran'];
      break;
    case 'russia':
      primaryCountries = ['United States', 'United Kingdom', 'France', 'Germany', 'Japan', 'Poland', 'Turkey'];
      break;
    case 'china':
      primaryCountries = ['United States', 'Japan', 'India', 'Australia', 'South Korea'];
      break;
    case 'uk':
    case 'france':
      primaryCountries = ['Russia', 'Iran', 'China'];
      break;
    case 'pakistan':
      primaryCountries = ['India', 'Israel', 'United States'];
      break;
    case 'india':
      primaryCountries = ['Pakistan', 'China'];
      break;
    case 'israel':
      primaryCountries = ['Iran', 'Saudi Arabia', 'Syria', 'Pakistan'];
      break;
    case 'north_korea':
      primaryCountries = ['United States', 'South Korea', 'Japan', 'Australia'];
      break;
    default:
      primaryCountries = ['United States', 'Russia', 'China'];
  }

  // 75% of weapons target primary adversary countries; 25% target other random big countries worldwide
  if (Math.random() < 0.75) {
    const adversaryTargets = validTargets.filter(t => primaryCountries.includes(t.country));
    if (adversaryTargets.length > 0) {
      return adversaryTargets[Math.floor(Math.random() * adversaryTargets.length)];
    }
  }

  // Random big country target
  return validTargets[Math.floor(Math.random() * validTargets.length)];
}

/**
 * Climatology and Nuclear Winter Model
 * Based on Robock et al. (2007, 2019) and Toon et al. global soot injection models.
 * 
 * @param {number} detonatedYieldKt Total detonated yield in kilotons
 * @param {number} detonationCount Total number of detonations
 * @returns {object} Nuclear winter & casualty telemetry
 */
export function calculateDoomsdayImpacts(detonatedYieldKt, detonationCount) {
  const totalMt = detonatedYieldKt / 1000;

  // Atmospheric black carbon / soot injection into stratosphere (Teragrams / Tg)
  // Robock standard: ~150 Tg soot generated by full strategic exchange (~4,000 Mt urban firestorms)
  // Scaling: ~0.038 Tg per Megaton in mixed urban/military counter-value strikes
  const sootTg = Math.min(185, totalMt * 0.042);

  // Surface temperature anomaly (°C)
  // 5 Tg -> ~ -1.5°C
  // 50 Tg -> ~ -6.5°C
  // 150 Tg -> ~ -14.5°C global cooling (Little Ice Age / Year Without Summer)
  const tempDropC = Math.min(16.5, Math.log10(1 + sootTg * 1.8) * 6.2);

  // Prompt blast, thermal, and lethal radiation casualties
  // Scaling based on target population densities and overlapping blast waves
  // Each strategic warhead in urban center averages ~120,000 to ~350,000 prompt fatalities
  const avgPromptCasualtiesPerDetonation = 185000;
  const promptCasualties = Math.round(detonationCount * avgPromptCasualtiesPerDetonation * (0.9 + Math.sin(detonationCount) * 0.1));

  // Global agricultural collapse index (0 to 100%)
  const agriCollapsePercent = Math.min(98.5, (sootTg / 120) * 100);

  // Stratospheric ozone layer depletion (%)
  const ozoneDepletionPercent = Math.min(75, sootTg * 0.48);

  return {
    totalMegatons: totalMt,
    sootTg,
    tempDropC,
    promptCasualties,
    agriCollapsePercent,
    ozoneDepletionPercent
  };
}
