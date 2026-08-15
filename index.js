const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Ankush Amar</title></head>');
        res.write('<body><h1>Welcome Home!</h1></body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Ankush Amar</title></head>');
        res.write('<body><h1>Check out some products</h1></body>');
        res.write('</html>');
        return res.end();
    }else if(req.url === '/mens'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Ankush Amar</title></head>');
        res.write('<body><h1>Hello I am Ankush Amar</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Ankush Amar</title></head>');
    res.write('<body><h1>Hello I am Ankush Amar</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});