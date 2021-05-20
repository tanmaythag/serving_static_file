const fs = require('fs');
const http = require('http');


http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/example.jpg');
    res.writeHead(200,{'Content-type': 'image/jpg'});
    readStream.pipe(res);


}).listen(3000)