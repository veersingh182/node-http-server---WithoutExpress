const http = require('http');

const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req,res) =>{

    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end('<html><body><h1>hello world</h1></body></html>')

});

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`);
});