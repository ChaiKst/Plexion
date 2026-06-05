const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, file);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' };
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Plexion → http://localhost:${PORT}`);
  console.log('Ctrl+C to stop');
});
