import { MISSILE_PRESETS, PRESET_LOCATIONS, calculateNuclearEffects } from '../physics/nuclearPhysics.js';
import { sound } from '../audio/sound.js';

export class SimulationHUD {
  constructor(app) {
    this.app = app;
    this.pickingMode = null; // 'launch' | 'target' | null
    this.initDOM();
  }

  initDOM() {
    const container = document.getElementById('app-hud');
    container.innerHTML = `
      <!-- Top Navigation & Status -->
      <header class="hud-header">
        <div class="hud-brand">
          <div class="defcon-badge">DEFCON 1</div>
          <div>
            <h1>THERMONUCLEAR BALLISTIC SIMULATOR</h1>
            <span class="hud-sub">PHYSICALLY SCALED GLASSTONE-DOLAN & NUKEMAP EFFECT RADIUS ENGINE</span>
          </div>
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
              <button class="ts-btn pause-btn" id="btn-pause">⏸</button>
            </div>
          </div>

          <!-- Audio & Fullscreen -->
          <button id="btn-audio" class="hud-btn-icon" title="Toggle Audio">🔊</button>
          <button id="btn-help" class="hud-btn-icon" title="Toggle Manual">ℹ️</button>
        </div>
      </header>

      <!-- Main Tactical Layout -->
      <div class="hud-body">
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
                <span>🚀 LAUNCH SPOT</span>
                <button class="pick-btn" id="pick-launch-btn">🎯 Click on Globe</button>
              </div>
              <select id="launch-preset-select" class="hud-select mini-select"></select>
              <div class="coord-inputs">
                <input type="number" id="launch-lat" class="coord-input" step="0.01" placeholder="Lat">
                <input type="number" id="launch-lon" class="coord-input" step="0.01" placeholder="Lon">
              </div>
            </div>

            <div class="coord-block">
              <div class="coord-title">
                <span>🎯 DETONATION / TARGET</span>
                <button class="pick-btn" id="pick-target-btn">🎯 Click on Globe</button>
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
            <button class="action-btn launch-btn" id="btn-launch">⚡ LAUNCH MISSILE</button>
            <button class="action-btn detonate-btn" id="btn-instant-detonate">💥 INSTANT DETONATION</button>
            <button class="action-btn reset-btn" id="btn-reset">↺ RESET</button>
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

      <!-- Bottom Floating Camera Bar -->
      <nav class="hud-bottom-bar">
        <span class="cam-label">CAMERA:</span>
        <button class="cam-btn active" data-cam="orbit">🌐 Free Orbit</button>
        <button class="cam-btn" data-cam="missile">🚀 Follow Missile</button>
        <button class="cam-btn" data-cam="target">🎯 Regional View</button>
        <button class="cam-btn" data-cam="city">🏙️ City Close-Up</button>
        <button class="cam-btn" data-cam="blast">💥 Blast Overview</button>
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
        document.getElementById('btn-pause').textContent = '⏸';
      });
    });

    // Pause button
    const btnPause = document.getElementById('btn-pause');
    btnPause.addEventListener('click', () => {
      const isPaused = this.app.togglePause();
      btnPause.textContent = isPaused ? '▶' : '⏸';
      btnPause.classList.toggle('active', isPaused);
    });

    // Audio toggle
    const btnAudio = document.getElementById('btn-audio');
    btnAudio.addEventListener('click', () => {
      const muted = sound.toggleMute();
      btnAudio.textContent = muted ? '🔇' : '🔊';
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

    // Row click listeners to display zone detail card
    const rows = tbody.querySelectorAll('.zone-row');
    rows.forEach(row => {
      row.addEventListener('click', () => {
        rows.forEach(r => r.classList.remove('active'));
        row.classList.add('active');
        const idx = parseInt(row.dataset.zoneIdx, 10);
        this.showZoneDetail(effects.zones[idx]);
      });
    });

    // Default to fireball
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
    el.textContent = `STATUS: ${text}`;
    el.className = `status-indicator ${type}`;
  }

  updateProgress(progress) {
    const fill = document.getElementById('flight-progress-fill');
    if (fill) {
      fill.style.width = `${(progress * 100).toFixed(1)}%`;
    }
  }
}
