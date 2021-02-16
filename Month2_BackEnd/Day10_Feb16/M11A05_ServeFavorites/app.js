const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const handleRequestHome = (req, res) => {
    const path = req.url;
    
    if (path === "/index") {
        return fs.readFile(`${__dirname}/${path}.html`, (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.send(data);
        });
    };
};

const server = http.createServer(handleRequestHome);

server.listen(PORT, ()=> {
    console.log(`Server is listening on PORT: ${PORT}...`);
});