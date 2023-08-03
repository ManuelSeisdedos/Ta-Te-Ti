const socket = io()
const botonesTateti = document.querySelectorAll(".ubicacion");
const botonJuego = document.getElementById('juego');

let fichas = ["X", "O", "X", "O", "X", "O", "X","O","X"]
let tablero = [1,2,3,4,5,6,7,8,9]
let termino = 0;
let sonido = new Audio("Ficha.mp3");
let jugadores = {
    jugador1: "",
    jugador2: ""
}

botonesTateti.forEach(boton => {
    let jugador = document.getElementById(boton.id)
    boton.addEventListener('click', () => {
        socket.emit('play:click', {
            jugador: jugador.id,
        })
    })
})

function ponerFicha(id) {
    id = id - 1
    tablero[id] = fichas.shift()
}


function contador(jugador) {
if (jugador === "X") {
document.getElementById("jugador1").innerHTML++
} else {
document.getElementById("jugador2").innerHTML++
}}

function terminoElJuego() {
    if (tablero[0] === tablero[1] && tablero[1] === tablero[2]) {
        return `Ganó el jugador --> ${tablero[0]}`
    }
    if (tablero[3] === tablero[4] && tablero[4] === tablero[5]) {
        return `Ganó el jugador --> ${tablero[3]}`
    }
    if (tablero[6] === tablero[7] && tablero[7] === tablero[8]) {
        return `Ganó el jugador --> ${tablero[6]}`
    }
    if (tablero[0] === tablero[3] && tablero[3] === tablero[6]) {
        return `Ganó el jugador --> ${tablero[0]}`
    }
    if (tablero[1] === tablero[4] && tablero[4] === tablero[7]) {
        return `Ganó el jugador --> ${tablero[1]}`
    }
    if (tablero[2] === tablero[5] && tablero[5] === tablero[8]) {
        return `Ganó el jugador --> ${tablero[2]}`
    }
    if (tablero[0] === tablero[4] && tablero[4] === tablero[8]) {
        return `Ganó el jugador --> ${tablero[0]}`
    }
    if (tablero[6] === tablero[4] && tablero[4] === tablero[2]) {
        return `Ganó el jugador --> ${tablero[6]}`
    }
    if (fichas.length === 0) return "El juego terminó en empate"
}

function reinicio () {
    fichas = ["X", "O", "X", "O", "X", "O", "X","O","X"]
    tablero = [1,2,3,4,5,6,7,8,9]
    termino = 0;
    botonesTateti.forEach(boton => {
        boton.innerHTML = "";
    })
}

function jugarTateti() {
    if (jugadores.jugador1 !== "" && jugadores.jugador2 !== "") {
        "No hay espacio disponible"
    }
    if (jugadores.jugador1 === "") jugadores.jugador1 === socket.id
    if (jugadores.jugador2 === "") jugadores.jugador2 === socket.id
}

//DOM Elements
let message = document.getElementById('mensaje')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    })
    console.log(username.value, message.value)
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
    console.log(data)
    actions.innerHTML = `<p><em> ${data} esta escrbiendo un mensaje.. </em></p>`
})

socket.on('play:click', function (data) {
    let jugador = document.getElementById(data.jugador)
    if(typeof tablero[jugador.id - 1] !== "number" || termino === 1 ) return
        sonido.play()
        jugador.innerHTML = fichas[0]
        ponerFicha(jugador.id)
        if (terminoElJuego() !== undefined) {
            let jugador = terminoElJuego().slice(-1)
            termino = 1
            contador(jugador)
            return setTimeout(() => alert(terminoElJuego()), 100)
}})