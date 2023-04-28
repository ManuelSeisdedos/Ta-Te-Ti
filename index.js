const botonesTateti = document.querySelectorAll(".ubicacion");
let termino = 0;
const fichas = ["X", "O", "X", "O", "X", "O", "X","O","X"]

botonesTateti.forEach(boton => {
    let jugador = document.getElementById(boton.id)
    boton.addEventListener("click", () => {
        if(typeof tablero[jugador.id - 1] !== "number" || termino === 1 ) return
        jugador.innerHTML = fichas[0]
        ponerFicha(jugador.id)
        if (terminoElJuego() !== undefined) {
            termino = 1
            return setTimeout(() => alert(terminoElJuego()), 100)
        }
    })
})

const tablero = [
cuadrado1=1, 
cuadrado2=2,
cuadrado3=3,
cuadrado4=4,
cuadrado5=5,
cuadrado6=6,
cuadrado7=7,
cuadrado8=8,
cuadrado9=9,
]


function ponerFicha(id) {
    id = id - 1
    tablero[id] = fichas.shift()
}

function terminoElJuego() {
    
    if (tablero[0] === tablero[1] && tablero[1] === tablero[2]) {
        return `Ganó el jugador ${tablero[0]}`
    }
    if (tablero[3] === tablero[4] && tablero[4] === tablero[5]) {
        return `Ganó el jugador ${tablero[3]}`
    }
    if (tablero[6] === tablero[7] && tablero[7] === tablero[8]) {
        return `Ganó el jugador ${tablero[6]}`
    }
    if (tablero[0] === tablero[3] && tablero[3] === tablero[6]) {
        return `Ganó el jugador ${tablero[0]}`
    }
    if (tablero[1] === tablero[4] && tablero[4] === tablero[7]) {
        return `Ganó el jugador ${tablero[1]}`
    }
    if (tablero[2] === tablero[5] && tablero[5] === tablero[8]) {
        return `Ganó el jugador ${tablero[2]}`
    }
    if (tablero[0] === tablero[4] && tablero[4] === tablero[8]) {
        return `Ganó el jugador ${tablero[0]}`
    }
    if (tablero[6] === tablero[4] && tablero[4] === tablero[2]) {
        return `Ganó el jugador --> ${tablero[6]}`
    }
    if (fichas.length === 0) return "El juego terminó en empate"
}