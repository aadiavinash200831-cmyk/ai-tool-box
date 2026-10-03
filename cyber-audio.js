/**
 * CYBER-AUDIO SYNTHESIZER
 * Pure Web Audio API synthetic telemetry and UI sound engine.
 * Zero external audio assets required; immune to 404s or network lag.
 */
class CyberAudio {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('nexus_audio_muted') === 'true';
    this.initialized = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('nexus_audio_muted', this.muted);
    if (!this.muted) {
      this.playBeep(880, 0.08, 'sine');
    }
    return this.muted;
  }

  playBeep(freq = 600, duration = 0.05, type = 'sine', volume = 0.05) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // AudioContext policy safe catch
    }
  }

  // UI Sounds
  hover() {
    this.playBeep(1200, 0.03, 'sine', 0.02);
  }

  click() {
    this.playBeep(940, 0.06, 'triangle', 0.06);
  }

  tab() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  teleport() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }

  dossierOpen() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(780, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) {}
  }

  aiVoiceStream() {
    this.playBeep(1400 + Math.random() * 400, 0.02, 'sine', 0.015);
  }
}

const cyberAudio = new CyberAudio();
