/**
 * NEXUS AI BROWSER - APPLICATION LOGIC
 * Manages search, matrix filters, bookmarking, dossier inspection, 
 * and full 3D interactive holographic cards with Touch Gestures & Mouse Tilt.
 */

// Application State
const state = {
  searchQuery: '',
  selectedCategory: 'all',
  selectedPricing: 'all',
  sortBy: 'rating',
  favoritesOnly: false,
  favorites: JSON.parse(localStorage.getItem('nexus_favorites') || '[]'),
  activeModalTool: null,
  viewMode: localStorage.getItem('nexus_view_mode') || '3d' // '3d' or 'grid'
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCategories();
  initEventListeners();
  renderTools();
  nexusAssistant.init();
  updateTelemetry();
  startTelemetryPulse();

  // Restore audio mute state UI
  if (cyberAudio.muted) {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) audioBtn.textContent = 'AUDIO: MUTED';
  }

  // Restore scanline preference
  if (localStorage.getItem('nexus_scanlines_off') === 'true') {
    document.body.classList.add('scanlines-off');
    const scanBtn = document.getElementById('scanline-toggle-btn');
    if (scanBtn) scanBtn.textContent = 'SCANLINES: OFF';
  }
});

// Render Category Filter Matrix
function initCategories() {
  const container = document.getElementById('category-filter-matrix');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button 
      class="category-chip cyber-cut ${state.selectedCategory === cat.id ? 'active' : ''}"
      data-category="${cat.id}"
      onclick="setCategoryFilter('${cat.id}')"
      onmouseenter="cyberAudio.hover()"
    >
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
      <span class="chip-count">(${cat.count})</span>
    </button>
  `).join('');
}

// Global Filter Setters
function setCategoryFilter(catId) {
  state.selectedCategory = catId;
  cyberAudio.tab();
  document.querySelectorAll('.category-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === catId);
  });
  renderTools();
}

function setPricingFilter(pricing) {
  state.selectedPricing = pricing;
  const select = document.getElementById('pricing-select');
  if (select) select.value = pricing;
  renderTools();
}

function setViewMode(mode) {
  state.viewMode = mode;
  localStorage.setItem('nexus_view_mode', mode);
  cyberAudio.tab();

  document.querySelectorAll('.view-mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });

  renderTools();
}

// Render Filtered & Sorted Tools
function renderTools() {
  const grid = document.getElementById('tools-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  // Filter pipeline
  let filtered = AI_TOOLS_DATA.filter(tool => {
    // Category check
    if (state.selectedCategory !== 'all' && tool.category !== state.selectedCategory) {
      return false;
    }

    // Pricing check
    if (state.selectedPricing !== 'all') {
      const p = tool.pricing.toLowerCase();
      if (state.selectedPricing === 'Free' && !p.includes('free') && !p.includes('open')) return false;
      if (state.selectedPricing === 'Freemium' && !p.includes('freemium')) return false;
      if (state.selectedPricing === 'Paid' && !p.includes('paid')) return false;
      if (state.selectedPricing === 'Open Source' && !p.includes('open source')) return false;
    }

    // Favorites check
    if (state.favoritesOnly && !state.favorites.includes(tool.id)) {
      return false;
    }

    // Search query check
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchTagline = tool.tagline.toLowerCase().includes(q);
      const matchSummary = tool.summary.toLowerCase().includes(q);
      const matchTags = tool.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchTagline && !matchSummary && !matchTags) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (state.sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (state.sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (state.sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Update UI count
  if (countEl) {
    countEl.textContent = `DISPLAYING ${filtered.length} OF ${AI_TOOLS_DATA.length} NODES`;
  }

  // Render cards or empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card cyber-cut">
        <h3>◈ ZERO SIGNALS DETECTED</h3>
        <p>No AI tools matched your query: "${escapeHtml(state.searchQuery || state.selectedCategory)}".</p>
        <button class="cyber-btn cyber-btn-cyan cyber-cut" style="margin-top: 16px;" onclick="resetAllFilters()">
          RESET FILTERS
        </button>
      </div>
    `;
    return;
  }

  // Render based on selected View Mode
  if (state.viewMode === '3d') {
    render3DCards(filtered, grid);
  } else {
    renderClassicCards(filtered, grid);
  }
}

// --------------------------------------------------------------------------
// 3D PERSPECTIVE HOLOGRAPHIC CARDS (With Touch Gestures & Mouse Parallax)
// --------------------------------------------------------------------------
function render3DCards(tools, grid) {
  grid.innerHTML = tools.map(tool => {
    const isPinned = state.favorites.includes(tool.id);
    const bgImage = tool.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';

    return `
      <div class="card-3d-wrapper" id="wrap-${tool.id}">
        <div 
          class="cyber-card-3d" 
          id="card-3d-${tool.id}"
          onmousemove="handleCardMouseMove(event, this)"
          onmouseleave="handleCardMouseLeave(this)"
          ontouchstart="handleCardTouchStart(event, this)"
          ontouchmove="handleCardTouchMove(event, this)"
          ontouchend="handleCardTouchEnd(this)"
          ontouchcancel="handleCardTouchEnd(this)"
        >
          <!-- Background Image Layer (Depth -20px) -->
          <img 
            src="${bgImage}" 
            alt="${escapeHtml(tool.name)}" 
            class="card-3d-bg-img"
            loading="lazy"
          >

          <!-- Gradient Overlay Layer -->
          <div class="card-3d-gradient"></div>

          <!-- Foreground 3D Floating HUD (Depth +40px) -->
          <div class="card-3d-hud">
            <!-- Top Glassmorphism Header -->
            <div>
              <div class="card-3d-glass-header">
                <div style="flex: 1; min-width: 0;">
                  <div class="card-3d-cat-badge">${tool.category.toUpperCase()}</div>
                  <h3 class="card-3d-title">${escapeHtml(tool.name)}</h3>
                  <p class="card-3d-desc">${escapeHtml(tool.tagline)}</p>
                </div>
                <button 
                  class="pin-btn ${isPinned ? 'pinned' : ''}" 
                  onclick="toggleFavorite('${tool.id}')"
                  title="${isPinned ? 'Unpin from favorites' : 'Pin to favorites'}"
                  style="flex-shrink: 0;"
                >
                  ${isPinned ? '★' : '☆'}
                </button>
              </div>

              <!-- Price & Rating Pills -->
              <div class="card-3d-meta-pill">
                <span class="pill-tier">${tool.pricing}</span>
                <span class="pill-rating">★ ${tool.rating}</span>
              </div>
            </div>

            <!-- Bottom Floating Cyber Actions -->
            <div class="card-3d-bottom-actions">
              <!-- Tags Strip -->
              <div class="card-3d-tags-strip">
                ${tool.tags.slice(0, 3).map(tag => `<span class="card-3d-tag">#${tag}</span>`).join('')}
              </div>

              <!-- Action Buttons Row -->
              <div class="card-3d-btn-row">
                <a 
                  href="${tool.url}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-3d-action btn-3d-launch"
                  onclick="cyberAudio.teleport()"
                >
                  LAUNCH ↗
                </a>
                <button 
                  class="btn-3d-action btn-3d-dossier"
                  onclick="openToolDossier('${tool.id}')"
                  onmouseenter="cyberAudio.hover()"
                >
                  DOSSIER ℹ
                </button>
                <button 
                  class="btn-3d-action btn-3d-ai"
                  onclick="nexusAssistant.explainTool(AI_TOOLS_DATA.find(t => t.id === '${tool.id}'))"
                  onmouseenter="cyberAudio.hover()"
                >
                  ⚡ EXPLAIN WITH AI
                </button>
              </div>

              <!-- Pagination Telemetry Dots -->
              <div class="card-3d-dots" aria-hidden="true">
                <div class="card-3d-dot active"></div>
                <div class="card-3d-dot"></div>
                <div class="card-3d-dot"></div>
                <div class="card-3d-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 3D TILT CALCULATION (Mouse & Touch Gestures)
// --------------------------------------------------------------------------
function calculate3DTilt(cardEl, clientX, clientY, maxDeg = 10) {
  const rect = cardEl.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  // Normalized offsets clamped to [-1, 1]
  const normX = Math.max(-1, Math.min(1, (x - rect.width / 2) / (rect.width / 2)));
  const normY = Math.max(-1, Math.min(1, (y - rect.height / 2) / (rect.height / 2)));

  const rotateX = normY * -maxDeg; // Inverted for natural visual depth
  const rotateY = normX * maxDeg;

  cardEl.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
  cardEl.style.transition = 'transform 0.08s ease-out';
}

function handleCardMouseMove(e, cardEl) {
  calculate3DTilt(cardEl, e.clientX, e.clientY, 10);
}

function handleCardMouseLeave(cardEl) {
  cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  cardEl.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
}

// Touch Gestures for Mobile & Tablet
function handleCardTouchStart(e, cardEl) {
  if (e.touches && e.touches.length > 0) {
    cardEl.classList.add('touch-active');
    cyberAudio.hover();
    const touch = e.touches[0];
    calculate3DTilt(cardEl, touch.clientX, touch.clientY, 12);
  }
}

function handleCardTouchMove(e, cardEl) {
  if (e.touches && e.touches.length > 0) {
    const touch = e.touches[0];
    calculate3DTilt(cardEl, touch.clientX, touch.clientY, 12);
  }
}

function handleCardTouchEnd(cardEl) {
  cardEl.classList.remove('touch-active');
  cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  cardEl.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
}

// --------------------------------------------------------------------------
// CLASSIC TACTICAL GRID CARDS
// --------------------------------------------------------------------------
function renderClassicCards(tools, grid) {
  grid.innerHTML = tools.map(tool => {
    const isPinned = state.favorites.includes(tool.id);
    return `
      <article class="cyber-card cyber-cut" id="card-${tool.id}">
        <div>
          <div class="card-top-row">
            <span class="card-category-badge">${tool.category}</span>
            <div class="card-top-actions">
              <span class="card-rating-badge">★ ${tool.rating}</span>
              <button 
                class="pin-btn ${isPinned ? 'pinned' : ''}" 
                onclick="toggleFavorite('${tool.id}')"
                title="${isPinned ? 'Unpin from favorites' : 'Pin to favorites'}"
              >
                ${isPinned ? '★' : '☆'}
              </button>
            </div>
          </div>

          <h3 class="card-title">${escapeHtml(tool.name)}</h3>
          <p class="card-tagline">${escapeHtml(tool.tagline)}</p>

          <div class="card-tags-list">
            <span class="tool-tag text-cyan">${tool.pricing}</span>
            ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="card-footer-actions">
          <a 
            href="${tool.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="card-btn card-btn-launch cyber-cut"
            onclick="cyberAudio.teleport()"
          >
            LAUNCH ↗
          </a>
          <button 
            class="card-btn card-btn-dossier cyber-cut"
            onclick="openToolDossier('${tool.id}')"
            onmouseenter="cyberAudio.hover()"
          >
            DOSSIER ℹ
          </button>
          <button 
            class="card-btn card-btn-ai-explain cyber-cut"
            onclick="nexusAssistant.explainTool(AI_TOOLS_DATA.find(t => t.id === '${tool.id}'))"
            onmouseenter="cyberAudio.hover()"
          >
            ⚡ EXPLAIN WITH AI
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Reset filters
function resetAllFilters() {
  state.searchQuery = '';
  state.selectedCategory = 'all';
  state.selectedPricing = 'all';
  state.favoritesOnly = false;
  
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';
  
  const pricingSelect = document.getElementById('pricing-select');
  if (pricingSelect) pricingSelect.value = 'all';

  const favBtn = document.getElementById('fav-toggle-btn');
  if (favBtn) favBtn.classList.remove('active');

  initCategories();
  renderTools();
  cyberAudio.click();
}

// Bookmark / Favorite toggling
function toggleFavorite(toolId) {
  cyberAudio.click();
  const idx = state.favorites.indexOf(toolId);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    showCyberToast('NODE UNPINNED FROM NEURAL FAVORITES');
  } else {
    state.favorites.push(toolId);
    showCyberToast('NODE PINNED TO NEURAL FAVORITES');
  }
  localStorage.setItem('nexus_favorites', JSON.stringify(state.favorites));
  renderTools();
}

function toggleFavoritesOnly() {
  state.favoritesOnly = !state.favoritesOnly;
  const btn = document.getElementById('fav-toggle-btn');
  if (btn) btn.classList.toggle('active', state.favoritesOnly);
  cyberAudio.tab();
  renderTools();
}

// Tactical Dossier Modal
function openToolDossier(toolId) {
  const tool = AI_TOOLS_DATA.find(t => t.id === toolId);
  if (!tool) return;
  state.activeModalTool = tool;

  const modal = document.getElementById('tool-dossier-modal');
  const content = document.getElementById('modal-dossier-content');
  if (!modal || !content) return;

  cyberAudio.dossierOpen();

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-left">
        <span class="card-category-badge">${tool.category.toUpperCase()}</span>
        <h2 class="modal-title">${escapeHtml(tool.name)}</h2>
      </div>
      <button class="modal-close-btn cyber-cut" onclick="closeToolDossier()" title="Close Dossier">✕</button>
    </div>

    <div class="modal-body">
      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <span class="modal-meta-label">PRICING MODEL</span>
          <span class="text-cyan">${escapeHtml(tool.pricingDetail)}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">CYBERNETIC RATING</span>
          <span class="text-lime font-mono">★ ${tool.rating} / 10.0</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">DOMAIN / UPLINK</span>
          <a href="${tool.url}" target="_blank" class="text-pink font-mono" style="text-decoration:none">${tool.url.replace('https://', '')}</a>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">TACTICAL MISSION OVERVIEW</h4>
        <p class="modal-text">${escapeHtml(tool.whatItIs)}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">SUPERPOWERS & ADVANTAGES</h4>
        <ul class="modal-bullet-list">
          ${tool.strengths.map(s => `<li><span class="bullet-cyan">▸</span> ${escapeHtml(s)}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">SYSTEM VULNERABILITIES & LIMITS</h4>
        <ul class="modal-bullet-list">
          ${tool.weaknesses.map(w => `<li><span class="bullet-pink">▸</span> ${escapeHtml(w)}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">OPTIMAL FIELD DEPLOYMENT</h4>
        <p class="modal-text" style="background: rgba(0,255,102,0.06); padding: 12px; border-left: 2px solid var(--neon-lime);">
          ${escapeHtml(tool.bestFor)}
        </p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">RECOMMENDED PROMPT INJECTION</h4>
        <div class="starter-prompt-box">
          <code>${escapeHtml(tool.starterPrompt)}</code>
          <button class="ai-copy-btn" onclick="navigator.clipboard.writeText('${tool.starterPrompt.replace(/'/g, "\\'")}'); showCyberToast('PROMPT COPIED TO CLIPBOARD'); cyberAudio.click();">
            COPY
          </button>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button class="cyber-btn cyber-btn-pink cyber-cut" onclick="nexusAssistant.explainTool(state.activeModalTool); closeToolDossier();">
        ⚡ ASK AI ASSISTANT ABOUT THIS
      </button>
      <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="cyber-btn cyber-btn-cyan cyber-cut" onclick="cyberAudio.teleport()">
        ACCESS TOOL PORTAL ↗
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeToolDossier() {
  const modal = document.getElementById('tool-dossier-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
  cyberAudio.click();
}

// Toast Notifications
let toastTimer = null;
function showCyberToast(msg) {
  const toast = document.getElementById('cyber-toast');
  if (!toast) return;
  toast.textContent = `[!] ${msg}`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Telemetry Updates
function updateTelemetry() {
  const nodeCountEl = document.getElementById('telemetry-node-count');
  if (nodeCountEl) {
    nodeCountEl.textContent = `ACTIVE NODES: ${AI_TOOLS_DATA.length}`;
  }
}

function startTelemetryPulse() {
  const pingEl = document.getElementById('telemetry-ping');
  if (!pingEl) return;
  setInterval(() => {
    const jitter = Math.floor(10 + Math.random() * 8);
    pingEl.textContent = `LATENCY: ${jitter}ms`;
  }, 4000);
}

// Event Listeners Setup
function initEventListeners() {
  // Search Input
  const searchInput = document.getElementById('main-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      if (clearBtn) {
        clearBtn.classList.toggle('active', state.searchQuery.length > 0);
      }
      renderTools();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.remove('active');
        renderTools();
        searchInput.focus();
      }
    });
  }

  // Pricing Select
  const pricingSelect = document.getElementById('pricing-select');
  if (pricingSelect) {
    pricingSelect.addEventListener('change', (e) => {
      state.selectedPricing = e.target.value;
      cyberAudio.tab();
      renderTools();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      cyberAudio.tab();
      renderTools();
    });
  }

  // Audio Toggle
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const isMuted = cyberAudio.toggleMute();
      audioBtn.textContent = isMuted ? 'AUDIO: MUTED' : 'AUDIO: ON';
      showCyberToast(isMuted ? 'AUDIO SYSTEMS MUTED' : 'AUDIO SYNTHESIZER ONLINE');
    });
  }

  // Scanline Toggle
  const scanBtn = document.getElementById('scanline-toggle-btn');
  if (scanBtn) {
    scanBtn.addEventListener('click', () => {
      cyberAudio.click();
      const isOff = document.body.classList.toggle('scanlines-off');
      localStorage.setItem('nexus_scanlines_off', isOff);
      scanBtn.textContent = isOff ? 'SCANLINES: OFF' : 'SCANLINES: ON';
      showCyberToast(isOff ? 'CRT SCANLINES DEACTIVATED' : 'CRT SCANLINES ACTIVE');
    });
  }

  // AI Drawer Form Submit
  const aiForm = document.getElementById('ai-query-form');
  const aiInput = document.getElementById('ai-query-input');
  if (aiForm && aiInput) {
    aiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      nexusAssistant.handleUserQuery(aiInput.value);
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Esc closes modal or drawer
    if (e.key === 'Escape') {
      const modal = document.getElementById('tool-dossier-modal');
      if (modal && modal.classList.contains('active')) {
        closeToolDossier();
        return;
      }
      if (nexusAssistant.isOpen) {
        nexusAssistant.close();
        return;
      }
    }

    // Ctrl+K opens AI assistant
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      nexusAssistant.toggle();
      return;
    }

    // '/' focuses search if not typing in input
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // Modal Backdrop Click
  const modal = document.getElementById('tool-dossier-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeToolDossier();
      }
    });
  }
}

// String escape utility
function escapeHtml(str) {
  if (!str) return '';
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
