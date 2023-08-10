let fichas = ["X", "O", "X", "O", "X", "O", "X","O","X"]
let tablero = [1,2,3,4,5,6,7,8,9]
let termino = 0;
let sonido = new Audio("Ficha.mp3");
let jugadores = {
    jugador1: "",
    jugador2: ""
}

let usuarios = {
    usuario1:false,
    usuario2:false
}

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

function reinicio (botonesTateti) {
    jugadores.jugador1 = ""
    jugadores.jugador2 = ""
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

function click (jugador) {
    
    if(typeof tablero[jugador.id - 1] !== "number" || termino === 1 ) return
        sonido.play()
        jugador.innerHTML = fichas[0]
        ponerFicha(jugador.id)
        if (terminoElJuego() !== undefined) {
            let jugador = terminoElJuego().slice(-1)
            termino = 1
            contador(jugador)
            return setTimeout(() => alert(terminoElJuego()), 100)
}
}

function jugar(data) {
    console.log(usuarios.usuario1)
    if (usuarios.usuario1 && usuarios.usuario2) return console.log("Se esta jugando una partida")
    jugadores.jugador1 === "" ? jugadores.jugador1 = data[0] : jugadores.jugador2 = data[0]
    if (usuarios.usuario1 === data[0] || usuarios.usuario2 === data[0]) console.log("ya estas en sala")
    if (usuarios.usuario1 === false) {
        usuarios.usuario1 = data[0]
        return "jugador1"
    } if (usuarios.usuario2 === false) {
        usuarios.usuario2 = data[0]
        return "jugador2"
    }
   

}

function botones (socket,jugador ) {
    if(socket.id === jugadores.jugador1 || socket.id === jugadores.jugador2) {
        socket.emit('play:click', {
            jugador: jugador.id,
        })
    } else {
        return console.log("No eres jugador de la sala.")
    }
   
}

export default {
    ponerFicha,
    contador,
    terminoElJuego,
    reinicio,
    jugarTateti,
    click,
    jugar,
    botones
}