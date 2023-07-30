import express from 'express';
import { config } from 'dotenv';
import { Server } from 'socket.io';
config()

const server = express();

const app = server.listen(process.env.PORT || 0, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
})

const io = new Server(app,{})


io.on("connection", (socket) => {
    console.log("Socket esta funcionando")
    socket.emit("hello", "world");
  });

io.on('pulsacion', (socket) => {
    console.log("pulsacion")
})