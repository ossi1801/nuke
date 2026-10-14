/**
 * Scalable Cyber-Tactical SVG Vector Icons
 * Replacing emojis with crisp, lightweight, military HUD-style vector icons.
 */

export const ICONS = {
  // Media controls
  PLAY: `<svg class="hud-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>`,
  PAUSE: `<svg class="hud-svg" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>`,
  
  // Audio controls
  VOLUME: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>`,
  MUTE: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
    <line x1="23" y1="9" x2="17" y2="15"/>
    <line x1="17" y1="9" x2="23" y2="15"/>
  </svg>`,

  // Info / Manual
  INFO: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>`,

  // Launch Spot / Silo
  LAUNCH_SPOT: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <polygon points="12 2 14.5 9 12 8 9.5 9" fill="currentColor"/>
  </svg>`,

  // Reticle / Pick on globe
  CROSSHAIR: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="8"/>
    <line x1="12" y1="2" x2="12" y2="6"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="6" y2="12"/>
    <line x1="18" y1="12" x2="22" y2="12"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>`,

  // Detonation / Target
  TARGET: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>`,

  // Missile Launch Action
  MISSILE_LAUNCH: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2c0 0-4 4-4 10 0 3 1.5 5 4 8 2.5-3 4-5 4-8 0-6-4-10-4-10z" fill="currentColor" fill-opacity="0.25"/>
    <path d="M8 12l-3 4v3l3-1 2-2"/>
    <path d="M16 12l3 4v3l-3-1-2-2"/>
    <circle cx="12" cy="10" r="1" fill="currentColor"/>
    <path d="M12 20v3M10 22h4"/>
  </svg>`,

  // Instant Detonation / Starburst
  BLAST: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 14.5 8.5 21 7 17 12 22 16 15 16.5 14 23 10 18 5 21 6.5 15 1 13 7 10 4 4 10.5 6.5" fill="currentColor" fill-opacity="0.3"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>`,

  // Reset / Refresh
  RESET: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>`,

  // Camera Orbit
  ORBIT: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="7"/>
    <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-30 12 12)"/>
  </svg>`,

  // Camera Follow Missile
  FLIGHT: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 20L19 5M19 5v7M19 5H12"/>
    <path d="M2 22l4-2-2-2z" fill="currentColor"/>
  </svg>`,

  // Camera Regional Radar
  RADAR: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 10 10"/>
    <line x1="12" y1="12" x2="20" y2="6"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>`,

  // Camera City Close-up
  CITY: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="8" width="5" height="13" rx="0.5"/>
    <rect x="7" y="3" width="7" height="18" rx="0.5"/>
    <rect x="14" y="9" width="8" height="12" rx="0.5"/>
    <line x1="9" y1="7" x2="12" y2="7"/>
    <line x1="9" y1="11" x2="12" y2="11"/>
    <line x1="9" y1="15" x2="12" y2="15"/>
    <line x1="16" y1="13" x2="20" y2="13"/>
    <line x1="16" y1="17" x2="20" y2="17"/>
    <line x1="4" y1="12" x2="5" y2="12"/>
    <line x1="4" y1="16" x2="5" y2="16"/>
  </svg>`,

  // Camera Blast Overview
  BLAST_OVERVIEW: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <circle cx="12" cy="12" r="7" stroke-dasharray="3 3"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>`,

  // Doomsday / Nuclear Radiation Trefoil
  RADIATION: `<svg class="hud-svg" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.5"/>
    <path d="M12,7.5 C13.3,7.5 14.5,7.9 15.5,8.6 L18,4.3 C16.2,3.2 14.2,2.5 12,2.5 C9.8,2.5 7.8,3.2 6,4.3 L8.5,8.6 C9.5,7.9 10.7,7.5 12,7.5 Z"/>
    <path d="M7.7,14 C7.2,13.4 6.9,12.7 6.9,12 C6.9,11.3 7.2,10.6 7.7,10 L3.3,7.5 C2.5,9 2,10.4 2,12 C2,13.6 2.5,15 3.3,16.5 L7.7,14 Z"/>
    <path d="M16.3,14 L20.7,16.5 C21.5,15 22,13.6 22,12 C22,10.4 21.5,9 20.7,7.5 L16.3,10 C16.8,10.6 17.1,11.3 17.1,12 C17.1,12.7 16.8,13.4 16.3,14 Z"/>
  </svg>`,

  // Doomsday Skull / Apocalypse
  SKULL: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2a8 8 0 0 0-8 8c0 3.3 2 6 4 7.2V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.8c2-1.2 4-3.9 4-7.2a8 8 0 0 0-8-8z" fill="currentColor" fill-opacity="0.15"/>
    <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
    <path d="M10 17v4M14 17v4"/>
  </svg>`,

  // Fallout / Soot Cloud
  FALLOUT: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    <line x1="8" y1="21" x2="8" y2="23"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="16" y1="21" x2="16" y2="23"/>
  </svg>`,

  // Fire / Thermal Heat
  FIRE: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.63-1.5-3.5-1.5-3.5s-1.5 1.87-1.5 3.5Z" fill="currentColor"/>
    <path d="M12 2c-4 5-8 8.5-8 13a8 8 0 0 0 16 0c0-4.5-4-8-8-13Z"/>
  </svg>`,

  // Globe / Strategic Map
  GLOBE: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>`,

  // Salvo Tracker
  SALVO: `<svg class="hud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 17l6-6 4 4 8-8"/>
    <path d="M14 7h7v7"/>
    <circle cx="9" cy="11" r="1" fill="currentColor"/>
    <circle cx="13" cy="15" r="1" fill="currentColor"/>
    <circle cx="21" cy="7" r="1.5" fill="currentColor"/>
  </svg>`
};
