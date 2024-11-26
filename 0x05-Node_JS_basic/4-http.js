const http = require('http');

const app = http.createServer((req ,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end('Hello new world');
});
app.listen(12545);
module.exports = app;