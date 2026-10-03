/**
 * NEXUS-AI TACTICAL CYBERNETIC ASSISTANT
 * Delivers streamlined, high-yield tactical intelligence on AI tools without screen clutter.
 */
class NexusAIAssistant {
  constructor() {
    this.drawerEl = null;
    this.bodyEl = null;
    this.inputEl = null;
    this.statusEl = null;
    this.currentTool = null;
    this.activeTypewriterTimer = null;
    this.geminiApiKey = localStorage.getItem('nexus_gemini_key') || '';
    this.isOpen = false;
  }

  init() {
    this.drawerEl = document.getElementById('ai-assistant-drawer');
    this.bodyEl = document.getElementById('ai-response-stream');
    this.inputEl = document.getElementById('ai-query-input');
    this.statusEl = document.getElementById('ai-status-indicator');

    // Load initial greeting if empty
    if (this.bodyEl && this.bodyEl.children.length === 0) {
      this.renderWelcome();
    }
  }

  open(tool = null) {
    this.isOpen = true;
    if (this.drawerEl) {
      this.drawerEl.classList.add('active');
    }
    document.body.classList.add('ai-drawer-active');
    if (tool) {
      this.explainTool(tool);
    }
    cyberAudio.dossierOpen();
    if (this.inputEl) {
      this.inputEl.focus();
    }
  }

  close() {
    this.isOpen = false;
    if (this.drawerEl) {
      this.drawerEl.classList.remove('active');
    }
    document.body.classList.remove('ai-drawer-active');
    cyberAudio.click();
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  clear() {
    if (this.activeTypewriterTimer) {
      clearInterval(this.activeTypewriterTimer);
      this.activeTypewriterTimer = null;
    }
    this.bodyEl.innerHTML = '';
    this.renderWelcome();
    cyberAudio.click();
  }

  renderWelcome() {
    this.bodyEl.innerHTML = `
      <div class="ai-msg-card ai-welcome-card">
        <div class="ai-msg-header">
          <span class="ai-agent-badge">◈ NEXUS-7 CORE</span>
          <span class="ai-timestamp">${new Date().toLocaleTimeString()}</span>
        </div>
        <p class="ai-lead-text">
          Operational. I am your <strong>tactical cybernetic advisor</strong>. Select any AI node or execute an interrogation query below.
        </p>
        <div class="ai-quick-actions">
          <button class="ai-chip-btn" onclick="nexusAssistant.runPresetQuery('best-coding')">⚡ Best for Coding</button>
          <button class="ai-chip-btn" onclick="nexusAssistant.runPresetQuery('best-free')">⚡ Best Free Tools</button>
          <button class="ai-chip-btn" onclick="nexusAssistant.runPresetQuery('compare-leaders')">⚡ Top LLM Showdown</button>
          <button class="ai-chip-btn" onclick="nexusAssistant.runPresetQuery('best-video')">⚡ High-End Video Gen</button>
        </div>
      </div>
    `;
  }

  explainTool(tool, perspective = 'tactical') {
    this.currentTool = tool;
    this.open();

    let title = `ANALYSIS // ${tool.name.toUpperCase()}`;
    let content = '';

    if (perspective === 'tactical') {
      content = `
        <div class="ai-dossier-grid">
          <div class="ai-stat-row">
            <span class="ai-label">CLASSIFICATION:</span>
            <span class="ai-val text-cyan">${tool.category.toUpperCase()} // ${tool.pricing.toUpperCase()}</span>
          </div>
          <div class="ai-stat-row">
            <span class="ai-label">CYBER-RATING:</span>
            <span class="ai-val text-neon">${tool.rating}/10.0</span>
          </div>
        </div>

        <div class="ai-block">
          <div class="ai-block-title">TACTICAL MISSION & SUMMARY</div>
          <p class="ai-text">${tool.whatItIs}</p>
        </div>

        <div class="ai-block">
          <div class="ai-block-title">CORE ADVANTAGES</div>
          <ul class="ai-bullet-list">
            ${tool.strengths.map(s => `<li><span class="bullet-cyan">▸</span> ${s}</li>`).join('')}
          </ul>
        </div>

        <div class="ai-block">
          <div class="ai-block-title">PRIMARY COMBAT DEPLOYMENT (BEST FOR)</div>
          <p class="ai-text ai-highlight-box">${tool.bestFor}</p>
        </div>

        <div class="ai-block">
          <div class="ai-block-title">TACTICAL PROMPT MATRIX</div>
          <div class="ai-prompt-box">
            <code>${tool.starterPrompt}</code>
            <button class="ai-copy-btn" onclick="navigator.clipboard.writeText('${tool.starterPrompt.replace(/'/g, "\\'")}'); showCyberToast('PROMPT COPIED TO CLIPBOARD'); cyberAudio.click();">
              COPY PROMPT
            </button>
          </div>
        </div>

        <div class="ai-actions-row">
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="cyber-btn-sm cyber-btn-primary" onclick="cyberAudio.teleport()">
            LAUNCH NODE ↗
          </a>
          <button class="cyber-btn-sm cyber-btn-secondary" onclick="nexusAssistant.compareWithAlternatives('${tool.id}')">
            COMPARE RIVALS ⇄
          </button>
        </div>
      `;
    }

    this.appendStreamMessage(title, content);
  }

  compareWithAlternatives(toolId) {
    const targetTool = AI_TOOLS_DATA.find(t => t.id === toolId);
    if (!targetTool) return;

    const peers = AI_TOOLS_DATA.filter(t => t.category === targetTool.category && t.id !== targetTool.id).slice(0, 3);

    let content = `
      <p class="ai-text">Analyzing market alternatives in the <strong>${targetTool.category.toUpperCase()}</strong> vector compared to <strong>${targetTool.name}</strong>:</p>
      <div class="ai-rival-table">
        <div class="ai-rival-row primary-node">
          <div><strong>${targetTool.name}</strong> <span class="badge-cyan">FOCAL POINT</span></div>
          <div class="ai-sub">${targetTool.tagline}</div>
          <div class="ai-meta">Tier: ${targetTool.pricing} | Score: ${targetTool.rating}/10</div>
        </div>
        ${peers.map(peer => `
          <div class="ai-rival-row">
            <div><strong>${peer.name}</strong></div>
            <div class="ai-sub">${peer.tagline}</div>
            <div class="ai-meta">Tier: ${peer.pricing} | Score: ${peer.rating}/10</div>
            <div class="ai-rival-actions">
              <button class="ai-mini-btn" onclick="nexusAssistant.explainTool(AI_TOOLS_DATA.find(t => t.id === '${peer.id}'))">Analyze</button>
              <a href="${peer.url}" target="_blank" class="ai-mini-link">Launch ↗</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.appendStreamMessage(`COMPARATIVE INTEL // ${targetTool.name}`, content);
  }

  handleUserQuery(query) {
    if (!query || !query.trim()) return;
    const cleanQuery = query.trim();
    if (this.inputEl) this.inputEl.value = '';

    // Render user speech card
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg-card user-msg-card';
    userMsg.innerHTML = `
      <div class="ai-msg-header">
        <span class="user-badge">OPERATOR // YOU</span>
        <span class="ai-timestamp">${new Date().toLocaleTimeString()}</span>
      </div>
      <p class="user-query-text">${this.escapeHtml(cleanQuery)}</p>
    `;
    this.bodyEl.appendChild(userMsg);
    this.scrollToBottom();

    // Check if live Gemini API key is configured
    if (this.geminiApiKey) {
      this.queryGeminiLive(cleanQuery);
    } else {
      // High-performance cyber heuristic reasoning engine
      setTimeout(() => {
        this.processLocalIntelligence(cleanQuery);
      }, 350);
    }
  }

  processLocalIntelligence(query) {
    const q = query.toLowerCase();

    // Specific search patterns
    if (q.includes('code') || q.includes('coding') || q.includes('developer') || q.includes('program')) {
      const devTools = AI_TOOLS_DATA.filter(t => t.category === 'coding');
      const response = `
        <p class="ai-text">Recommended tactical stack for <strong>Software Engineering & Development</strong>:</p>
        <ul class="ai-bullet-list">
          <li><strong>Cursor AI</strong>: Unrivaled for multi-file refactoring, autonomous code generation, and whole-codebase comprehension.</li>
          <li><strong>Claude 3.5 Sonnet</strong>: Gold-standard frontier reasoning for tricky algorithms, system design, and live interactive HTML/React Artifacts.</li>
          <li><strong>v0 by Vercel</strong>: Best-in-class generative UI builder for Tailwind and shadcn/ui components.</li>
          <li><strong>Bolt.new / Lovable</strong>: Lightning-fast for spinning up complete full-stack web applications in a browser sandbox.</li>
        </ul>
        <div class="ai-actions-row">
          <button class="cyber-btn-sm cyber-btn-primary" onclick="setCategoryFilter('coding')">Filter Dev Tools Grid</button>
        </div>
      `;
      this.appendStreamMessage('INTEL REPORT // CODE ENGINES', response);
      return;
    }

    if (q.includes('free') || q.includes('cost') || q.includes('cheap') || q.includes('open source')) {
      const freeTools = AI_TOOLS_DATA.filter(t => t.pricing.toLowerCase().includes('free') || t.pricing.toLowerCase().includes('open'));
      const response = `
        <p class="ai-text">Top-tier high-potency tools with <strong>Free / Open Source tiers</strong>:</p>
        <ul class="ai-bullet-list">
          <li><strong>DeepSeek (V3 & R1)</strong>: Cutting-edge reasoning and math with free web chat and open weights.</li>
          <li><strong>Google NotebookLM</strong>: 100% free with unlimited grounded document uploads and viral Audio Overviews.</li>
          <li><strong>FLUX.1 Schnell</strong>: Open-weights image generation rivaling Midjourney with readable text.</li>
          <li><strong>n8n AI (Community)</strong>: Free self-hostable agent and automation workflow runner.</li>
        </ul>
        <div class="ai-actions-row">
          <button class="cyber-btn-sm cyber-btn-primary" onclick="setPricingFilter('Free')">Filter Free Tools</button>
        </div>
      `;
      this.appendStreamMessage('INTEL REPORT // ZERO-CREDIT STACK', response);
      return;
    }

    if (q.includes('video') || q.includes('animation') || q.includes('3d') || q.includes('movie')) {
      const response = `
        <p class="ai-text">Tactical breakdown for <strong>Next-Gen Video & 3D Synthesis</strong>:</p>
        <ul class="ai-bullet-list">
          <li><strong>Runway Gen-3 Alpha</strong>: Superior cinematic camera motion (pans, tilts, zooms) and motion brush targeting.</li>
          <li><strong>Kling AI</strong>: Superior motion physics simulation (fluid human bodies, eating food, actions) and up to 2-minute clips.</li>
          <li><strong>Luma Dream Machine</strong>: Incredible 3D orbital camera maneuvers and keyframe-to-keyframe transitions.</li>
          <li><strong>Meshy 3D</strong>: Instantly converts 2D art into textured PBR 3D meshes for Unreal Engine and Blender.</li>
        </ul>
        <div class="ai-actions-row">
          <button class="cyber-btn-sm cyber-btn-primary" onclick="setCategoryFilter('video')">Filter Video Nodes</button>
        </div>
      `;
      this.appendStreamMessage('INTEL REPORT // CINEMATIC & 3D', response);
      return;
    }

    if (q.includes('image') || q.includes('art') || q.includes('photo') || q.includes('draw')) {
      const response = `
        <p class="ai-text">Visual synthesis vanguard:</p>
        <ul class="ai-bullet-list">
          <li><strong>Midjourney v6.1</strong>: Peerless photorealism, artistic lighting, textures, and aesthetic atmosphere.</li>
          <li><strong>FLUX.1</strong>: Best-in-class text spelling in images and accurate hand/finger anatomy.</li>
          <li><strong>Recraft.ai</strong>: Specialist vector AI that exports clean, editable SVG code and consistent brand icon kits.</li>
        </ul>
        <div class="ai-actions-row">
          <button class="cyber-btn-sm cyber-btn-primary" onclick="setCategoryFilter('image')">Filter Image Nodes</button>
        </div>
      `;
      this.appendStreamMessage('INTEL REPORT // VISUAL SYNTHESIS', response);
      return;
    }

    // Direct tool lookup check
    const matchedTool = AI_TOOLS_DATA.find(t => 
      q.includes(t.id.toLowerCase()) || 
      q.includes(t.name.toLowerCase().split(' ')[0])
    );

    if (matchedTool) {
      this.explainTool(matchedTool);
      return;
    }

    // Default synthesis
    const defaultResponse = `
      <p class="ai-text">Query analyzed: <em>"${this.escapeHtml(query)}"</em></p>
      <p class="ai-text">The NEXUS index contains <strong>${AI_TOOLS_DATA.length} frontline AI nodes</strong> across Reasoning, Code, Image, Video, Audio, Agents, and Research.</p>
      <p class="ai-text">To receive a tactical breakdown, you can:</p>
      <ul class="ai-bullet-list">
        <li>Click <strong>[EXPLAIN WITH AI]</strong> on any tool card in the grid</li>
        <li>Ask for comparisons: e.g. <em>"Compare Claude vs ChatGPT"</em> or <em>"Best tools for research"</em></li>
        <li>Filter by capability using the Cyber Matrix tags above</li>
      </ul>
      <div class="ai-actions-row">
        <button class="cyber-btn-sm cyber-btn-secondary" onclick="nexusAssistant.openApiKeyModal()">
          ⚙ Connect Live Gemini Neural Link
        </button>
      </div>
    `;
    this.appendStreamMessage('SYSTEM TELEMETRY', defaultResponse);
  }

  async queryGeminiLive(prompt) {
    this.setStatus('CONNECTING NEURAL LINK...');
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.geminiApiKey}`;
      const payload = {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are NEXUS-7, a sharp, elite cyberpunk AI systems advisor. Provide crisp, structured, tactical guidance on AI tools and technology without fluff. Avoid wall-of-text responses. Use clean bullet points and tactical headers. User query: ${prompt}`
              }
            ]
          }
        ]
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Neural link rejected: HTTP ${res.status}`);
      }

      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response data received from model.';
      
      // Format markdown bullets into clean HTML
      const formatted = this.formatMarkdown(rawText);
      this.appendStreamMessage('GEMINI 1.5 // SATELLITE UPLINK', formatted);
      this.setStatus('ONLINE // READY');
    } catch (err) {
      this.setStatus('UPLINK OFFLINE');
      this.appendStreamMessage('UPLINK ALERT', `
        <div class="ai-alert-box">
          <strong>NEURAL LINK ERROR:</strong> ${err.message}. 
          Falling back to internal cyber intelligence.
        </div>
      `);
      this.processLocalIntelligence(prompt);
    }
  }

  appendStreamMessage(title, htmlContent) {
    cyberAudio.aiVoiceStream();
    const card = document.createElement('div');
    card.className = 'ai-msg-card ai-response-card';
    card.innerHTML = `
      <div class="ai-msg-header">
        <span class="ai-agent-badge">◈ ${title}</span>
        <div class="ai-header-controls">
          <span class="ai-timestamp">${new Date().toLocaleTimeString()}</span>
          <button class="ai-mini-close-btn" onclick="this.closest('.ai-msg-card').remove(); cyberAudio.click();" title="Dismiss Card">×</button>
        </div>
      </div>
      <div class="ai-content-body">${htmlContent}</div>
    `;

    this.bodyEl.appendChild(card);
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.bodyEl) {
      this.bodyEl.scrollTop = this.bodyEl.scrollHeight;
    }
  }

  setStatus(statusText) {
    if (this.statusEl) {
      this.statusEl.textContent = statusText;
    }
  }

  runPresetQuery(type) {
    switch (type) {
      case 'best-coding':
        this.handleUserQuery('What are the best tools for coding and software engineering?');
        break;
      case 'best-free':
        this.handleUserQuery('Show me the best free and open source AI tools');
        break;
      case 'compare-leaders':
        this.handleUserQuery('Compare Claude 3.5 Sonnet, ChatGPT GPT-4o, and DeepSeek R1');
        break;
      case 'best-video':
        this.handleUserQuery('What is the best AI video generator for cinematic clips?');
        break;
    }
  }

  openApiKeyModal() {
    const key = prompt('ENTER GEMINI API KEY (Optional for live satellite uplink):', this.geminiApiKey);
    if (key !== null) {
      this.geminiApiKey = key.trim();
      localStorage.setItem('nexus_gemini_key', this.geminiApiKey);
      showCyberToast(this.geminiApiKey ? 'NEURAL LINK KEY SAVED' : 'KEY CLEARED // USING LOCAL ENGINE');
    }
  }

  formatMarkdown(text) {
    return text
      .replace(/^### (.*$)/gim, '<div class="ai-block-title">$1</div>')
      .replace(/^## (.*$)/gim, '<div class="ai-block-title">$1</div>')
      .replace(/^# (.*$)/gim, '<div class="ai-block-title">$1</div>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li><span class="bullet-cyan">▸</span> $1</li>')
      .replace(/\n\n/gim, '<br>')
      .replace(/(<li>.*<\/li>)/gims, '<ul class="ai-bullet-list">$1</ul>');
  }

  escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

const nexusAssistant = new NexusAIAssistant();
