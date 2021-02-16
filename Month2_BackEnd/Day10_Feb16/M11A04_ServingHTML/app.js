const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 4001;

const handleRequest = (request, response) => {
    fs.readFile(`${__dirname}/index.html`, (error, data) => {
        if (error) throw error;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}...`);
});
  