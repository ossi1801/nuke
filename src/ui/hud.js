import { MISSILE_PRESETS, PRESET_LOCATIONS, calculateNuclearEffects } from '../physics/nuclearPhysics.js';
import { NUCLEAR_NATIONS, TOTAL_GLOBAL_ROCKETS } from '../physics/doomsdayData.js';
import { ICONS } from './icons.js';
import { sound } from '../audio/sound.js';

export class SimulationHUD {
  constructor(app) {
    this.app = app;
    this.currentMode = 'single'; // 'single' | 'doomsday'
    this.pickingMode = null; // 'launch' | 'target' | null
    this.initDOM();
  }

  initDOM() {
    const container = document.getElementById('app-hud');
    container.innerHTML = `
      <!-- Top Navigation & Status -->
      <header class="hud-header">
        <div class="hud-brand">
          <div class="defcon-badge" id="defcon-indicator">DEFCON 1</div>
          <div>
            <h1>THERMONUCLEAR STRATEGIC SIMULATOR</h1>
            <span class="hud-sub">PHYSICALLY SCALED GLASSTONE-DOLAN & GLOBAL DOOMSDAY ARSENAL ENGINE</span>
          </div>
        </div>

        <!-- Mode Switcher -->
        <div class="mode-switch-group">
          <button class="mode-btn active" id="btn-mode-single">
            ${ICONS.MISSILE_LAUNCH}
            <span>TACTICAL STRIKE</span>
          </button>
          <button class="mode-btn doomsday-tab" id="btn-mode-doomsday">
            ${ICONS.RADIATION}
            <span>GLOBAL DOOMSDAY</span>
          </button>
        </div>

        <div class="hud-top-controls">
          <!-- Timescale -->
          <div class="timescale-group">
            <span class="ctrl-label">TIMESCALE</span>
            <div class="timescale-btns">
              <button class="ts-btn" data-ts="0.1">0.1×</button>
              <button class="ts-btn" data-ts="0.5">0.5×</button>
              <button class="ts-btn active" data-ts="1">1×</button>
              <button class="ts-btn" data-ts="5">5×</button>
              <button class="ts-btn" data-ts="20">20×</button>
              <button class="ts-btn" data-ts="50">50×</button>
              <button class="ts-btn pause-btn" id="btn-pause" title="Pause / Resume">${ICONS.PAUSE}</button>
            </div>
          </div>

          <!-- Audio & Fullscreen -->
          <button id="btn-audio" class="hud-btn-icon" title="Toggle Audio">${ICONS.VOLUME}</button>
          <button id="btn-help" class="hud-btn-icon" title="Toggle Strategic Manual">${ICONS.INFO}</button>
        </div>
      </header>

      <!-- Main Tactical Layout -->
      <div class="hud-body">
        
        <!-- ================= MODE 1: SINGLE TACTICAL STRIKE ================= -->
        <div class="mode-container mode-single-container" id="container-single">
          <!-- Left Panel: Launch & Missile Config -->
          <aside class="hud-panel left-panel">
            <div class="panel-header">
              <h2>MISSILE CONFIGURATION</h2>
              <span class="status-indicator ready" id="system-status">STATUS: STANDBY</span>
            </div>

            <div class="panel-section">
              <label class="input-label" for="preset-select">WEAPON SYSTEM / MISSILE PRESET</label>
              <select id="preset-select" class="hud-select"></select>
              <p class="preset-desc" id="preset-description"></p>
            </div>

            <div class="panel-section">
              <div class="slider-header">
                <label class="input-label" for="yield-slider">EXPLOSIVE YIELD</label>
                <span class="value-readout" id="yield-readout">475 kt (0.48 Mt)</span>
              </div>
              <input type="range" id="yield-slider" class="hud-range" min="1" max="50000" step="1" value="475">
              <div class="burst-type-switch">
                <button class="burst-btn active" id="burst-air">OPTIMAL AIRBURST</button>
                <button class="burst-btn" id="burst-surface">SURFACE BURST</button>
              </div>
            </div>

            <div class="panel-section">
              <div class="slider-header">
                <label class="input-label" for="speed-slider">MISSILE FLY RATE / VELOCITY</label>
                <span class="value-readout" id="speed-readout">Mach 23 (~28,175 km/h)</span>
              </div>
              <input type="range" id="speed-slider" class="hud-range" min="1" max="50" step="1" value="23">
            </div>

            <div class="panel-section coordinates-box">
              <div class="coord-block">
                <div class="coord-title">
                  <span class="coord-tag">${ICONS.LAUNCH_SPOT} LAUNCH SPOT</span>
                  <button class="pick-btn" id="pick-launch-btn">${ICONS.CROSSHAIR} Pick on Globe</button>
                </div>
                <select id="launch-preset-select" class="hud-select mini-select"></select>
                <div class="coord-inputs">
                  <input type="number" id="launch-lat" class="coord-input" step="0.01" placeholder="Lat">
                  <input type="number" id="launch-lon" class="coord-input" step="0.01" placeholder="Lon">
                </div>
              </div>

              <div class="coord-block">
                <div class="coord-title">
                  <span class="coord-tag">${ICONS.TARGET} TARGET / ZERO</span>
                  <button class="pick-btn" id="pick-target-btn">${ICONS.CROSSHAIR} Pick on Globe</button>
                </div>
                <select id="target-preset-select" class="hud-select mini-select"></select>
                <div class="coord-inputs">
                  <input type="number" id="target-lat" class="coord-input" step="0.01" placeholder="Lat">
                  <input type="number" id="target-lon" class="coord-input" step="0.01" placeholder="Lon">
                </div>
              </div>
            </div>

            <!-- Flight Telemetry -->
            <div class="panel-section telemetry-box">
              <div class="telemetry-row">
                <span>GREAT-CIRCLE DISTANCE:</span>
                <strong id="tele-distance">0 km</strong>
              </div>
              <div class="telemetry-row">
                <span>ESTIMATED FLIGHT TIME:</span>
                <strong id="tele-time">0m 0s</strong>
              </div>
              <div class="telemetry-row">
                <span>EXOATMOSPHERIC APOGEE:</span>
                <strong id="tele-apogee">0 km</strong>
              </div>
              <div class="flight-progress-bar">
                <div class="progress-fill" id="flight-progress-fill"></div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="panel-actions">
              <button class="action-btn launch-btn" id="btn-launch">${ICONS.MISSILE_LAUNCH} LAUNCH MISSILE</button>
              <button class="action-btn detonate-btn" id="btn-instant-detonate">${ICONS.BLAST} INSTANT DETONATION</button>
              <button class="action-btn reset-btn" id="btn-reset">${ICONS.RESET} RESET</button>
            </div>
          </aside>

          <!-- Right Panel: Blast Damage Inspector & Physics Radii -->
          <aside class="hud-panel right-panel">
            <div class="panel-header">
              <h2>EFFECTIVE DAMAGE RADIUS</h2>
              <span class="hud-tag">GLASSTONE & NUKEMAP</span>
            </div>

            <div class="damage-summary-card">
              <div class="summary-stat">
                <span class="stat-label">EXPLOSIVE ENERGY</span>
                <strong class="stat-value" id="summary-yield">475 Kilotons</strong>
              </div>
              <div class="summary-stat">
                <span class="stat-label">TOTAL THERMAL AREA</span>
                <strong class="stat-value" id="summary-thermal-area">0 km²</strong>
              </div>
              <div class="summary-stat">
                <span class="stat-label">MUSHROOM TOP</span>
                <strong class="stat-value" id="summary-cloud-height">0 km</strong>
              </div>
            </div>

            <!-- Damage Zones Table -->
            <div class="zones-table-container">
              <table class="zones-table" id="zones-table">
                <thead>
                  <tr>
                    <th>ZONE</th>
                    <th>RADIUS</th>
                    <th>AREA</th>
                    <th>EFFECT</th>
                  </tr>
                </thead>
                <tbody id="zones-table-body"></tbody>
              </table>
            </div>

            <!-- Selected Zone Detail Card -->
            <div class="zone-detail-card" id="zone-detail-card">
              <h4 id="detail-zone-name">Fireball Zone</h4>
              <div class="detail-metric" id="detail-zone-metric">Radius: 0.85 km</div>
              <p id="detail-zone-desc">Vaporization point. Interior reaches millions of degrees.</p>
            </div>
          </aside>
        </div>


        <!-- ================= MODE 2: ALL-OUT GLOBAL DOOMSDAY ================= -->
        <div class="mode-container mode-doomsday-container hidden" id="container-doomsday">
          <!-- Left Panel: Global Arsenal Command -->
          <aside class="hud-panel left-panel doomsday-panel">
            <div class="panel-header">
              <h2>GLOBAL STRATEGIC ARSENAL</h2>
              <span class="status-indicator ready" id="doomsday-status">READY: ${TOTAL_GLOBAL_ROCKETS} ROCKETS</span>
            </div>

            <div class="doomsday-alert-banner">
              ${ICONS.SKULL}
              <div>
                <strong>MASSIVE MUTUAL ASSURED DESTRUCTION (MAD)</strong>
                <span>All 9 nuclear nations fire their entire operational strategic rocket arsenals at random major countries worldwide.</span>
              </div>
            </div>

            <div class="arsenal-summary-cards">
              <div class="arsenal-metric">
                <span class="metric-label">TOTAL ROCKETS</span>
                <strong class="metric-num">${TOTAL_GLOBAL_ROCKETS}</strong>
              </div>
              <div class="arsenal-metric">
                <span class="metric-label">NUCLEAR NATIONS</span>
                <strong class="metric-num">9</strong>
              </div>
              <div class="arsenal-metric">
                <span class="metric-label">EST. WARHEADS</span>
                <strong class="metric-num">~4,000+</strong>
              </div>
            </div>

            <div class="panel-section arsenal-roster-box">
              <span class="input-label">NATIONAL STRATEGIC ROCKET STOCKS</span>
              <div class="nations-list" id="nations-roster">
                ${NUCLEAR_NATIONS.map(n => `
                  <div class="nation-row" style="border-left-color: ${n.color}">
                    <div class="nation-info">
                      <span class="nation-name">${n.name}</span>
                      <span class="nation-sub">${n.missileTypes[0]}</span>
                    </div>
                    <div class="nation-count">
                      <strong>${n.strategicRockets}</strong>
                      <span>rockets</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Action Buttons for Doomsday -->
            <div class="panel-actions doomsday-actions">
              <button class="action-btn doomsday-btn-fire" id="btn-fire-doomsday">
                ${ICONS.SKULL} EXECUTE ALL-OUT DOOMSDAY
              </button>
              <button class="action-btn reset-btn" id="btn-reset-doomsday">
                ${ICONS.RESET} CEASEFIRE / RESET
              </button>
            </div>
          </aside>

          <!-- Right Panel: Global Fallout & Casualty Telemetry -->
          <aside class="hud-panel right-panel doomsday-panel">
            <div class="panel-header">
              <h2>DOOMSDAY IMPACT & FALLOUT</h2>
              <span class="hud-tag danger">NUCLEAR WINTER</span>
            </div>

            <div class="doomsday-live-telemetry">
              <!-- Rocket Status Counters -->
              <div class="telemetry-grid">
                <div class="tele-item launched">
                  <span class="tele-label">${ICONS.MISSILE_LAUNCH} LAUNCHED</span>
                  <strong class="tele-val" id="stat-launched">0</strong>
                </div>
                <div class="tele-item inflight">
                  <span class="tele-label">${ICONS.FLIGHT} IN FLIGHT</span>
                  <strong class="tele-val" id="stat-inflight">0</strong>
                </div>
                <div class="tele-item detonated">
                  <span class="tele-label">${ICONS.BLAST} DETONATED</span>
                  <strong class="tele-val" id="stat-detonated">0</strong>
                </div>
              </div>

              <!-- Severe Global Impacts Cards -->
              <div class="impact-cards-container">
                <div class="impact-card casualties">
                  <div class="impact-header">
                    ${ICONS.SKULL}
                    <span>PROMPT FATALITIES</span>
                  </div>
                  <strong class="impact-val" id="stat-casualties">0</strong>
                  <span class="impact-sub">Direct blast, thermal, and lethal radiation</span>
                </div>

                <div class="impact-card megatons">
                  <div class="impact-header">
                    ${ICONS.FIRE}
                    <span>TOTAL MEGATONNAGE</span>
                  </div>
                  <strong class="impact-val" id="stat-megatons">0 Mt</strong>
                  <span class="impact-sub">Cumulative thermonuclear yield detonated</span>
                </div>

                <div class="impact-card winter">
                  <div class="impact-header">
                    ${ICONS.FALLOUT}
                    <span>NUCLEAR WINTER COOLING</span>
                  </div>
                  <strong class="impact-val" id="stat-temp">-0.0 °C</strong>
                  <span class="impact-sub" id="stat-soot">0.0 Tg stratospheric soot injected</span>
                </div>

                <div class="impact-card biosphere">
                  <div class="impact-header">
                    ${ICONS.RADIATION}
                    <span>GLOBAL BIOSPHERE COLLAPSE</span>
                  </div>
                  <div class="biosphere-bars">
                    <div class="bio-bar-row">
                      <span>Agri Collapse:</span>
                      <strong id="stat-agri">0%</strong>
                    </div>
                    <div class="bio-bar-row">
                      <span>Ozone Loss:</span>
                      <strong id="stat-ozone">0%</strong>
                    </div>
                  </div>
                </div>
              </div>

              <!-- National Strike Breakdown Table -->
              <div class="doomsday-breakdown-box">
                <span class="input-label">NATION-BY-NATION STRIKE STATUS</span>
                <table class="strike-status-table">
                  <thead>
                    <tr>
                      <th>POWER</th>
                      <th>ARSENAL</th>
                      <th>LAUNCHED</th>
                      <th>IMPACTS</th>
                    </tr>
                  </thead>
                  <tbody id="strike-table-body">
                    ${NUCLEAR_NATIONS.map(n => `
                      <tr id="row-nation-${n.id}">
                        <td><span class="nation-badge" style="background:${n.color}"></span> ${n.name}</td>
                        <td>${n.strategicRockets}</td>
                        <td id="cell-launched-${n.id}">0</td>
                        <td id="cell-impacts-${n.id}">0</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>

      </div>

      <!-- Bottom Floating Camera Bar -->
      <nav class="hud-bottom-bar">
        <span class="cam-label">CAMERA:</span>
        <button class="cam-btn active" data-cam="orbit">${ICONS.ORBIT} Free Orbit</button>
        <button class="cam-btn" data-cam="missile" id="cam-btn-missile">${ICONS.FLIGHT} Follow Missile</button>
        <button class="cam-btn" data-cam="salvo" id="cam-btn-salvo">${ICONS.SALVO} Track Salvo</button>
        <button class="cam-btn" data-cam="target">${ICONS.RADAR} Regional View</button>
        <button class="cam-btn" data-cam="city">${ICONS.CITY} City Close-Up</button>
        <button class="cam-btn" data-cam="blast">${ICONS.BLAST_OVERVIEW} Blast Overview</button>
      </nav>

      <!-- Picking instructions banner (hidden by default) -->
      <div class="pick-banner" id="pick-banner">
        CLICK ANYWHERE ON THE GLOBE TO SET COORDINATES
        <button id="cancel-pick-btn" class="cancel-pick-btn">Cancel</button>
      </div>
    `;

    this.bindEvents();
    this.populatePresets();
    this.updateDamageTable();
  }

  bindEvents() {
    // Mode Switcher buttons
    const btnSingle = document.getElementById('btn-mode-single');
    const btnDoomsday = document.getElementById('btn-mode-doomsday');
    const containerSingle = document.getElementById('container-single');
    const containerDoomsday = document.getElementById('container-doomsday');
    const defconBadge = document.getElementById('defcon-indicator');

    btnSingle.addEventListener('click', () => {
      this.currentMode = 'single';
      btnSingle.classList.add('active');
      btnDoomsday.classList.remove('active');
      containerSingle.classList.remove('hidden');
      containerDoomsday.classList.add('hidden');
      defconBadge.textContent = 'DEFCON 1';
      defconBadge.className = 'defcon-badge';
      this.app.setSimulationMode('single');
    });

    btnDoomsday.addEventListener('click', () => {
      this.currentMode = 'doomsday';
      btnDoomsday.classList.add('active');
      btnSingle.classList.remove('active');
      containerDoomsday.classList.remove('hidden');
      containerSingle.classList.add('hidden');
      defconBadge.textContent = 'DOOMSDAY';
      defconBadge.className = 'defcon-badge doomsday-active';
      this.app.setSimulationMode('doomsday');
    });

    // Doomsday actions
    document.getElementById('btn-fire-doomsday').addEventListener('click', () => {
      this.app.startDoomsdayExchange();
      document.getElementById('doomsday-status').textContent = 'EXCHANGE IN PROGRESS';
      document.getElementById('doomsday-status').className = 'status-indicator flight';
      defconBadge.textContent = 'EXTINCTION EVENT';
      defconBadge.className = 'defcon-badge apocalyptic';
    });

    document.getElementById('btn-reset-doomsday').addEventListener('click', () => {
      this.app.resetDoomsdayExchange();
      document.getElementById('doomsday-status').textContent = `READY: ${TOTAL_GLOBAL_ROCKETS} ROCKETS`;
      document.getElementById('doomsday-status').className = 'status-indicator ready';
      defconBadge.textContent = 'DOOMSDAY';
      defconBadge.className = 'defcon-badge doomsday-active';
    });

    // Preset selection
    const presetSelect = document.getElementById('preset-select');
    presetSelect.addEventListener('change', (e) => {
      const selected = MISSILE_PRESETS.find(p => p.id === e.target.value);
      if (selected) {
        this.applyMissilePreset(selected);
      }
    });

    // Yield Slider
    const yieldSlider = document.getElementById('yield-slider');
    yieldSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      this.app.currentYieldKt = val;
      this.updateYieldReadout(val);
      this.updateDamageTable();
      this.app.detonation.updateTargetPreview(this.app.targetLatLon, this.app.currentYieldKt, this.app.isAirburst);
      if (this.app.detonation.isActive) {
        this.app.detonation.detonate(this.app.targetLatLon, this.app.currentYieldKt, this.app.isAirburst);
      }
    });

    // Burst type buttons
    const burstAir = document.getElementById('burst-air');
    const burstSurface = document.getElementById('burst-surface');
    burstAir.addEventListener('click', () => {
      burstAir.classList.add('active');
      burstSurface.classList.remove('active');
      this.app.isAirburst = true;
      this.updateDamageTable();
      this.app.detonation.updateTargetPreview(this.app.targetLatLon, this.app.currentYieldKt, true);
      if (this.app.detonation.isActive) {
        this.app.detonation.detonate(this.app.targetLatLon, this.app.currentYieldKt, true);
      }
    });
    burstSurface.addEventListener('click', () => {
      burstSurface.classList.add('active');
      burstAir.classList.remove('active');
      this.app.isAirburst = false;
      this.updateDamageTable();
      this.app.detonation.updateTargetPreview(this.app.targetLatLon, this.app.currentYieldKt, false);
      if (this.app.detonation.isActive) {
        this.app.detonation.detonate(this.app.targetLatLon, this.app.currentYieldKt, false);
      }
    });

    // Speed Slider
    const speedSlider = document.getElementById('speed-slider');
    speedSlider.addEventListener('input', (e) => {
      const mach = parseInt(e.target.value, 10);
      this.app.missileSystem.speedMach = mach;
      const kmh = Math.round(mach * 1225);
      document.getElementById('speed-readout').textContent = `Mach ${mach} (~${kmh.toLocaleString()} km/h)`;
      this.updateTelemetry();
    });

    // Timescale buttons
    const tsBtns = document.querySelectorAll('.ts-btn:not(.pause-btn)');
    tsBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tsBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const ts = parseFloat(btn.dataset.ts);
        this.app.setTimescale(ts);
        document.getElementById('btn-pause').innerHTML = ICONS.PAUSE;
      });
    });

    // Pause button
    const btnPause = document.getElementById('btn-pause');
    btnPause.addEventListener('click', () => {
      const isPaused = this.app.togglePause();
      btnPause.innerHTML = isPaused ? ICONS.PLAY : ICONS.PAUSE;
      btnPause.classList.toggle('active', isPaused);
    });

    // Audio toggle
    const btnAudio = document.getElementById('btn-audio');
    btnAudio.addEventListener('click', () => {
      const muted = sound.toggleMute();
      btnAudio.innerHTML = muted ? ICONS.MUTE : ICONS.VOLUME;
      btnAudio.classList.toggle('muted', muted);
    });

    // Launch & Instant Detonate & Reset
    document.getElementById('btn-launch').addEventListener('click', () => {
      this.app.launchMissile();
    });
    document.getElementById('btn-instant-detonate').addEventListener('click', () => {
      this.app.instantDetonation();
    });
    document.getElementById('btn-reset').addEventListener('click', () => {
      this.app.resetSimulation();
    });

    // Coordinate picking
    document.getElementById('pick-launch-btn').addEventListener('click', () => {
      this.startGlobePicking('launch');
    });
    document.getElementById('pick-target-btn').addEventListener('click', () => {
      this.startGlobePicking('target');
    });
    document.getElementById('cancel-pick-btn').addEventListener('click', () => {
      this.stopGlobePicking();
    });

    // Coordinate inputs
    const lLat = document.getElementById('launch-lat');
    const lLon = document.getElementById('launch-lon');
    const tLat = document.getElementById('target-lat');
    const tLon = document.getElementById('target-lon');

    const updateCoordsFromInputs = () => {
      const launch = { lat: parseFloat(lLat.value) || 0, lon: parseFloat(lLon.value) || 0 };
      const target = { lat: parseFloat(tLat.value) || 0, lon: parseFloat(tLon.value) || 0 };
      this.app.setLaunchAndTarget(launch, target);
      this.updateTelemetry();
    };

    lLat.addEventListener('change', updateCoordsFromInputs);
    lLon.addEventListener('change', updateCoordsFromInputs);
    tLat.addEventListener('change', updateCoordsFromInputs);
    tLon.addEventListener('change', updateCoordsFromInputs);

    // Location preset selectors
    document.getElementById('launch-preset-select').addEventListener('change', (e) => {
      const loc = PRESET_LOCATIONS.find(l => l.name === e.target.value);
      if (loc) {
        lLat.value = loc.lat.toFixed(2);
        lLon.value = loc.lon.toFixed(2);
        updateCoordsFromInputs();
      }
    });
    document.getElementById('target-preset-select').addEventListener('change', (e) => {
      const loc = PRESET_LOCATIONS.find(l => l.name === e.target.value);
      if (loc) {
        tLat.value = loc.lat.toFixed(2);
        tLon.value = loc.lon.toFixed(2);
        updateCoordsFromInputs();
      }
    });

    // Camera view switcher
    const camBtns = document.querySelectorAll('.cam-btn');
    camBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        camBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.app.setCameraMode(btn.dataset.cam);
      });
    });
  }

  populatePresets() {
    const presetSelect = document.getElementById('preset-select');
    presetSelect.innerHTML = MISSILE_PRESETS.map(p => `
      <option value="${p.id}">${p.name} (${p.country} - ${p.yieldKt >= 1000 ? (p.yieldKt/1000)+' Mt' : p.yieldKt+' kt'})</option>
    `).join('');

    const launchPresetSelect = document.getElementById('launch-preset-select');
    const targetPresetSelect = document.getElementById('target-preset-select');

    const locationOptions = `<option value="">-- Choose Preset Location --</option>` +
      PRESET_LOCATIONS.map(l => `<option value="${l.name}">${l.name}</option>`).join('');

    launchPresetSelect.innerHTML = locationOptions;
    targetPresetSelect.innerHTML = locationOptions;

    // Apply default preset
    this.applyMissilePreset(MISSILE_PRESETS[0]);
  }

  applyMissilePreset(preset) {
    document.getElementById('preset-select').value = preset.id;
    document.getElementById('preset-description').textContent = `${preset.type} | ${preset.warheadName}. ${preset.description}`;

    // Yield
    const yieldSlider = document.getElementById('yield-slider');
    yieldSlider.value = preset.yieldKt;
    this.app.currentYieldKt = preset.yieldKt;
    this.updateYieldReadout(preset.yieldKt);

    // Speed
    const speedSlider = document.getElementById('speed-slider');
    speedSlider.value = preset.speedMach;
    this.app.missileSystem.speedMach = preset.speedMach;
    const kmh = Math.round(preset.speedMach * 1225);
    document.getElementById('speed-readout').textContent = `Mach ${preset.speedMach} (~${kmh.toLocaleString()} km/h)`;

    // Coordinates
    document.getElementById('launch-lat').value = preset.defaultLaunch.lat.toFixed(2);
    document.getElementById('launch-lon').value = preset.defaultLaunch.lon.toFixed(2);
    document.getElementById('target-lat').value = preset.defaultTarget.lat.toFixed(2);
    document.getElementById('target-lon').value = preset.defaultTarget.lon.toFixed(2);

    this.app.setLaunchAndTarget(preset.defaultLaunch, preset.defaultTarget);
    this.updateTelemetry();
    this.updateDamageTable();
  }

  updateYieldReadout(val) {
    const readout = document.getElementById('yield-readout');
    if (val >= 1000) {
      readout.textContent = `${val.toLocaleString()} kt (${(val / 1000).toFixed(2)} Megatons)`;
    } else {
      readout.textContent = `${val} Kilotons`;
    }
  }

  updateTelemetry() {
    const distKm = Math.round(this.app.missileSystem.distanceKm);
    const distMiles = Math.round(distKm * 0.621371);
    document.getElementById('tele-distance').textContent = `${distKm.toLocaleString()} km (${distMiles.toLocaleString()} mi)`;

    const speedKmSec = (this.app.missileSystem.speedMach * 1225) / 3600;
    const flightSec = Math.round(distKm / speedKmSec);
    const mins = Math.floor(flightSec / 60);
    const secs = flightSec % 60;
    document.getElementById('tele-time').textContent = `~${mins}m ${secs}s (real) / ~12s (sim)`;

    const apogeeKm = Math.round(this.app.missileSystem.apogeeUnits / (100 / 6371));
    document.getElementById('tele-apogee').textContent = `${apogeeKm.toLocaleString()} km (Exoatmospheric)`;
  }

  updateDamageTable() {
    const effects = calculateNuclearEffects(this.app.currentYieldKt, this.app.isAirburst);
    const tbody = document.getElementById('zones-table-body');

    document.getElementById('summary-yield').textContent = effects.yieldKt >= 1000
      ? `${(effects.yieldKt / 1000).toFixed(2)} Megatons`
      : `${effects.yieldKt} Kilotons`;

    const thermalZone = effects.zones.find(z => z.id === 'thermal');
    if (thermalZone) {
      document.getElementById('summary-thermal-area').textContent = `${Math.round(thermalZone.areaSqKm).toLocaleString()} km²`;
    }

    document.getElementById('summary-cloud-height').textContent = `${effects.mushroomCloud.heightKm.toFixed(1)} km (${effects.mushroomCloud.heightMiles.toFixed(1)} mi)`;

    tbody.innerHTML = effects.zones.map((zone, idx) => `
      <tr class="zone-row" data-zone-idx="${idx}">
        <td>
          <span class="zone-color-dot" style="background:${zone.color}; box-shadow: 0 0 8px ${zone.color}"></span>
          <strong>${zone.name}</strong>
        </td>
        <td>${zone.radiusKm < 1 ? (zone.radiusKm * 1000).toFixed(0) + ' m' : zone.radiusKm.toFixed(2) + ' km'}</td>
        <td>${Math.round(zone.areaSqKm).toLocaleString()} km²</td>
        <td><span class="zone-tag">${zone.overpressurePsi}</span></td>
      </tr>
    `).join('');

    const rows = tbody.querySelectorAll('.zone-row');
    rows.forEach(row => {
      row.addEventListener('click', () => {
        rows.forEach(r => r.classList.remove('active'));
        row.classList.add('active');
        const idx = parseInt(row.dataset.zoneIdx, 10);
        this.showZoneDetail(effects.zones[idx]);
      });
    });

    if (effects.zones.length > 0) {
      this.showZoneDetail(effects.zones[0]);
    }
  }

  showZoneDetail(zone) {
    document.getElementById('detail-zone-name').textContent = zone.name;
    document.getElementById('detail-zone-name').style.color = zone.color;
    document.getElementById('detail-zone-metric').textContent = `Radius: ${zone.radiusKm.toFixed(2)} km (${zone.radiusMiles.toFixed(2)} miles) | Area: ${Math.round(zone.areaSqKm).toLocaleString()} km²`;
    document.getElementById('detail-zone-desc').textContent = `${zone.description} (Pressure: ${zone.overpressurePsi})`;
  }

  /**
   * Updates live Doomsday telemetry display
   */
  updateDoomsdayStats(stats) {
    const elLaunched = document.getElementById('stat-launched');
    const elInflight = document.getElementById('stat-inflight');
    const elDetonated = document.getElementById('stat-detonated');
    const elCasualties = document.getElementById('stat-casualties');
    const elMegatons = document.getElementById('stat-megatons');
    const elTemp = document.getElementById('stat-temp');
    const elSoot = document.getElementById('stat-soot');
    const elAgri = document.getElementById('stat-agri');
    const elOzone = document.getElementById('stat-ozone');

    if (elLaunched) elLaunched.textContent = stats.launched.toLocaleString();
    if (elInflight) elInflight.textContent = stats.inFlight.toLocaleString();
    if (elDetonated) elDetonated.textContent = stats.detonated.toLocaleString();
    if (elCasualties) elCasualties.textContent = stats.promptCasualties.toLocaleString();
    if (elMegatons) elMegatons.textContent = `${stats.totalMegatons.toFixed(1)} Mt`;
    if (elTemp) elTemp.textContent = `-${stats.tempDropC.toFixed(1)} °C`;
    if (elSoot) elSoot.textContent = `${stats.sootTg.toFixed(1)} Tg soot shroud in stratosphere`;
    if (elAgri) elAgri.textContent = `${stats.agriCollapsePercent.toFixed(1)}%`;
    if (elOzone) elOzone.textContent = `${stats.ozoneDepletionPercent.toFixed(1)}%`;

    // Update nation-by-nation cells
    if (stats.nationStats) {
      for (const [nid, nstat] of Object.entries(stats.nationStats)) {
        const cellL = document.getElementById(`cell-launched-${nid}`);
        const cellI = document.getElementById(`cell-impacts-${nid}`);
        if (cellL) cellL.textContent = `${nstat.launched} / ${nstat.total}`;
        if (cellI) cellI.textContent = nstat.detonated;
      }
    }
  }

  startGlobePicking(mode) {
    this.pickingMode = mode;
    const banner = document.getElementById('pick-banner');
    banner.classList.add('active');
    banner.innerHTML = `CLICK ON THE GLOBE TO SET <strong>${mode.toUpperCase()}</strong> LOCATION <button id="cancel-pick-btn" class="cancel-pick-btn">Cancel</button>`;
    document.getElementById('cancel-pick-btn').addEventListener('click', () => this.stopGlobePicking());
  }

  stopGlobePicking() {
    this.pickingMode = null;
    document.getElementById('pick-banner').classList.remove('active');
  }

  onGlobeClicked(latLon) {
    if (!this.pickingMode) return;

    if (this.pickingMode === 'launch') {
      document.getElementById('launch-lat').value = latLon.lat.toFixed(2);
      document.getElementById('launch-lon').value = latLon.lon.toFixed(2);
      this.app.setLaunchAndTarget(latLon, this.app.targetLatLon);
    } else if (this.pickingMode === 'target') {
      document.getElementById('target-lat').value = latLon.lat.toFixed(2);
      document.getElementById('target-lon').value = latLon.lon.toFixed(2);
      this.app.setLaunchAndTarget(this.app.launchLatLon, latLon);
    }

    this.updateTelemetry();
    this.stopGlobePicking();
  }

  setStatus(text, type = 'ready') {
    const el = document.getElementById('system-status');
    if (el) {
      el.textContent = `STATUS: ${text}`;
      el.className = `status-indicator ${type}`;
    }
  }

  updateProgress(progress) {
    const fill = document.getElementById('flight-progress-fill');
    if (fill) {
      fill.style.width = `${(progress * 100).toFixed(1)}%`;
    }
  }
}
