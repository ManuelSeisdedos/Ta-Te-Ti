//DOM Elements
let message = document.getElementById('mensaje')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')
const botonesTateti = document.querySelectorAll(".ubicacion");
const botonReiniciar = document.getElementById('reiniciar')
const botonJugar = document.getElementById('jugar')

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
    let jugador = document.getElementById(data.jugador)
    helper.click(jugador)})

botonJugar.addEventListener('click', () => {
    socket.emit('play:jugar', socket.id)
})

botonJugar.addEventListener('click', () => {
    console.log(nombreusuario.value)
    socket.emit('play:sala', nombreusuario.value)
})

socket.on('play:jugar', (socket) => {
    
    helper.jugar(socket)
})

socket.on('play:sala', (data) => {
  let jugador = helper.sala(data)

  if (jugador === null) return console.log("ya hay un juego empezado")
  if (jugador === "jugador1"){
    salajugador1.innerHTML = data
  } else{
    console.log(salajugador2)
    salajugador2.innerHTML = data
  }
})



const salajugador1 = document.getElementById('sala-jugador-1')
const salajugador2 = document.getElementById('sala-jugador-2')
let nombreusuario = document.getElementById('usuario1')
console.log(salajugador2)