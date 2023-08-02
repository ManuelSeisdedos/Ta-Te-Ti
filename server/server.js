const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http')

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');

const app = express();
let server = http.createServer(app)

app.use(express.static(publicPath));

// IO = comunicacion directa con el servidor.
let io = socketIO(server)


io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("hello", (arg) => {
      console.log(arg); // world
    });
});


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

