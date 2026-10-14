/**
 * Web Audio API procedural sound synthesizer for nuclear simulation
 * No external audio files needed; runs 100% in-browser.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playLaunch() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Noise buffer for rocket thrust
    const bufferSize = this.ctx.sampleRate * 2.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(150, t);
    filter.frequency.exponentialRampToValueAtTime(1200, t + 1.2);
    filter.frequency.exponentialRampToValueAtTime(300, t + 2.5);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + 2.5);
  }

  playDetonation() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // 1. Initial Flash crack/zap
    const zapOsc = this.ctx.createOscillator();
    const zapGain = this.ctx.createGain();
    zapOsc.type = 'sawtooth';
    zapOsc.frequency.setValueAtTime(800, t);
    zapOsc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
    zapGain.gain.setValueAtTime(0.3, t);
    zapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    zapOsc.connect(zapGain);
    zapGain.connect(this.ctx.destination);
    zapOsc.start(t);
    zapOsc.stop(t + 0.35);

    // 2. Sub-bass blast rumble (deep low frequency shockwave)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(95, t);
    subOsc.frequency.exponentialRampToValueAtTime(25, t + 3.0);

    subGain.gain.setValueAtTime(0.01, t);
    subGain.gain.linearRampToValueAtTime(0.65, t + 0.08);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 4.5);

    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start(t);
    subOsc.stop(t + 4.5);

    // 3. Turbulent ground rumble noise
    const bufferSize = this.ctx.sampleRate * 4.0;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(200, t);
    noiseFilter.frequency.linearRampToValueAtTime(80, t + 3.5);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 4.0);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + 4.0);
  }
}

export const sound = new SoundSystem();
