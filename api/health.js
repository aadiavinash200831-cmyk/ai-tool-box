module.exports = (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    server: 'NEXUS AI Browser (Vercel Edge/Serverless)',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
};
