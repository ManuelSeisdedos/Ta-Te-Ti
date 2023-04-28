const botonesTateti = document.querySelectorAll(".ubicacion");

const fichas = [
    "x", "o", "x", "o", "x", "o", "x","o","x"
]

botonesTateti.forEach(boton => {
    let jugador = document.getElementById(boton.id)
    boton.addEventListener("click", () => {
        jugador.innerHTML = fichas[0]
        ponerFicha(jugador.id)
        
    })
})

const tablero = [
cuadrado1="", 
cuadrado2="",
cuadrado3="",
cuadrado4="",
cuadrado5="",
cuadrado6="",
cuadrado7="",
cuadrado8="",
cuadrado9="",
]


function ponerFicha(id) {
    let cuadrado = tablero[id]
    tablero[id] = fichas.shift()
}