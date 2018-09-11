const http = require("http"),
app = require("./app/app");

const server = http.createServer( app );

const PORT = process.env.PORT || 5000;

server.listen(PORT);