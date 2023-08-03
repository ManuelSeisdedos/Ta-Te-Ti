const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http')

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');
const app = express();
let server = http.createServer(app)

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});

// IO = comunicacion directa con el servidor.
let io = socketIO(server)

// websockets
io.on('connection', (socket) => {
    console.log('New connection', socket.id)

    socket.on('chat:message', (data) => {
      io.sockets.emit('chat:message', data)
    })

    socket.on('chat:typing', (data) => {
      socket.broadcast.emit('chat:typing', data)
    })
});
