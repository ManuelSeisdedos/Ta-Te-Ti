import express from 'express';
import path from 'path';
import * as socketIO from 'socket.io';
import { resolve } from 'path';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const publicPath = resolve(__dirname, '../public/index.html');
const app = express();
let server = createServer(app)

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});

// IO = comunicacion directa con el servidor.
let io = new socketIO.Server(server)

// websockets
io.on('connection', (socket) => {
    console.log('New connection', socket.id)

    socket.on('chat:message', (data) => {
      io.sockets.emit('chat:message', data)
    })

    socket.on('chat:typing', (data) => {
      socket.broadcast.emit('chat:typing', data)
    })

    socket.on('play:click', (data) => {
      io.sockets.emit('play:click', data)
    })

    socket.on('play:reiniciar', (data) => {
      io.sockets.emit('play:reiniciar')
    })

    socket.on('play:jugar', (data) => {
     
      io.sockets.emit('play:jugar', data)
    })
});
