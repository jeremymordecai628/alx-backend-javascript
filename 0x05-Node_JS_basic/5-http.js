const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        countStudents(process.argv[2])
            .then(() => res.end())
            .catch((err) => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(err.message);
            });
    }
});

app.listen(1245);
module.exports =app
