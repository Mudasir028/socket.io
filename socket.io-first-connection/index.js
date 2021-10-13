const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;

const appUtil = require('./app/index');
const socket = require('./socket/socket')

// app
appUtil(app);
// soket
socket(io);


// app.use(testMiddleware);

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
