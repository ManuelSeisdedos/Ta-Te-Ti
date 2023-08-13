//DOM Elements
let message = document.getElementById('mensaje')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')
const botonesTateti = document.querySelectorAll(".ubicacion");
const botonReiniciar = document.getElementById('reiniciar')
const botonJugar = document.getElementById('jugar')
const salajugador1 = document.getElementById('sala-jugador-1')
const salajugador2 = document.getElementById('sala-jugador-2')
let nombreusuario = document.getElementById('usuario1')

import helper from './helpers.js'

const socket = io();

botonesTateti.forEach(boton => {
    let jugador = document.getElementById(boton.id)
    boton.addEventListener('click', () => {
       helper.botones(socket,jugador)
    })
})

botonReiniciar.addEventListener('click', function () {
    socket.emit('play:reiniciar')
})

socket.on('play:reiniciar', () => {
helper.reinicio(botonesTateti)
})

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    })
})

socket.on('chat:message', function(data) {
    actions.innerHTML = ''
    output.innerHTML += `<p>
    <strong> ${data.username} </strong>: ${data.message}
    </p>`
})

message.addEventListener('keypress', function() {
    socket.emit('chat:typing', username.value)
})

socket.on('chat:typing', function (data) {
    actions.innerHTML = `<p><em> ${data} esta escrbiendo un mensaje.. </em></p>`
})

socket.on('play:click', function (data) {
    let jugador = document.getElementById(data[1].jugador)
    helper.click(jugador,data[0])})

botonJugar.addEventListener('click', () => {
    let combo = [socket.id, nombreusuario.value]
    socket.emit('play:jugar', combo)
})

socket.on('play:jugar', (data) => {
    let jugador = helper.jugar(data)
      if (jugador === null) return console.log("ya hay un juego empezado")
  if (jugador === "jugador1"){
    salajugador1.innerHTML = data[1]
  } else if (jugador === "jugador2") {
   salajugador2.innerHTML = data[1]
  }
})
