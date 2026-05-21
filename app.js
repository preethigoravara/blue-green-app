const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1 style="color:pink">Blue version - v5.0</h1>');
});
server.listen(80, () => console.log('Server running on port 80'));
