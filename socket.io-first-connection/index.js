//CommonJS is a module formatting system. It is a standard for structuring and organizing JavaScript code.
// CommonJS wraps each module in a function called ‘require’, and includes an object called ‘module.exports’, which exports code for availability to be required by other modules
// Link:https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46
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
appUtil(app, express);
// soket
socket(io);

// app.use(testMiddleware);

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
