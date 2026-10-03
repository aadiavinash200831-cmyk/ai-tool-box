/**
 * NEXUS AI BROWSER — Express Server
 * Serves the static frontend and provides a health-check API endpoint.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json());

// Serve all static files from the project root
app.use(express.static(path.join(__dirname)));

// ── API Routes ──────────────────────────────────────────────────────────────

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    server: 'NEXUS AI Browser',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime().toFixed(2) + 's'
  });
});

// Fallback: serve index.html for any unmatched route (SPA support)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗');
  console.log('  ████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝');
  console.log('  ██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗');
  console.log('  ██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║');
  console.log('  ██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║');
  console.log('  ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝');
  console.log('');
  console.log(`  🚀 NEXUS AI Browser running at: http://localhost:${PORT}`);
  console.log(`  🔌 API health check:             http://localhost:${PORT}/api/health`);
  console.log(`  📁 Serving static files from:    ${__dirname}`);
  console.log('');
  console.log('  Press Ctrl+C to stop the server.');
  console.log('');
});
