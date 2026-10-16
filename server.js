const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;
const BASE_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/Marine_BESS_Tech_Deck_Immersion.html';
  }

  const filePath = path.join(BASE_DIR, reqUrl);

  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h2>404 File Not Found</h2><p><a href="/Marine_BESS_Tech_Deck_Immersion.html">Go to Tech Deck</a></p><p><a href="/Marine_BESS_Immersion_Web_App.html">Go to Master Web App</a></p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log('----------------------------------------------------');
  console.log(' MARINE BESS LOCAL SERVER RUNNING');
  console.log('----------------------------------------------------');
  console.log(` > On this PC:        http://localhost:${PORT}/`);
  console.log(` > Master Web App:    http://localhost:${PORT}/Marine_BESS_Immersion_Web_App.html`);
  console.log(` > On your Wi-Fi/LAN: http://${localIp}:${PORT}/`);
  console.log('----------------------------------------------------');
});
