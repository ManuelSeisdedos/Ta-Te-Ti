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
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.22/+esm'
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
salajugador1.innerHTML = ""
salajugador2.innerHTML = ""
nombreusuario.value = ""
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
    if (helper.jugadores.jugador1 !== "" && helper.jugadores.jugador2 !== "") {
        return Swal.fire({
            title: "Espere su turno", 
            icon: 'error',
            text:"Se esta jugando una partida"
        })
    }
    let combo = [socket.id, nombreusuario.value]
    socket.emit('play:jugar', combo)
})

socket.on('play:jugar', (data) => {
    let jugador = helper.jugar(data)

  if (jugador === "jugador1"){
    nombreusuario.value = ""
    salajugador1.innerHTML = data[1]
  } else if (jugador === "jugador2") {
    nombreusuario.value = ""
   salajugador2.innerHTML = data[1]
  }
})
