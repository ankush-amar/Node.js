const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    if(req.url === '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>Ankush Amar</title></head>');
        res.write('<body><h1>Enter your details</h1></body>');

        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholer="Enter your name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="female">female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<br><input type="submit" value="Submit"></br>');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');
        return res.end();

    }else if(req.url.toLowerCase() === '/submit-details' && req.method == 'POST' ){

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        });

        fs.writeFileSync('user.txt', 'Ankush Amar');
        res.statusCode = 302;
        res.setHeader('Location' , '/');

    }
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Ankush Amar</title></head>');
    res.write('<body><h1>Hello I am Ankush Amar</h1></body>');
    res.write('</html>')
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});