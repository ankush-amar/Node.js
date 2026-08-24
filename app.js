const http = require('http');

const userRequestHandeler = require('./index');
const server = http.createServer(userRequestHandeler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});