# Tres en Linea 

¡Bienvenidos! Este es un proyecto que he desarrollado como parte de mi aprendizaje en programación web con HTML, CSS y JavaScript. En este proyecto, he recreado el clásico juego "Tres en Linea", también conocido como "Ta-Te-Ti"

## Descripción del Juego

El "Ta-Te-Ti" es un juego sencillo que enfrenta a dos jugadores en una cuadrícula de 3x3 casillas. En donde los jugadores se turnan para colocar su símbolo (El jugador 1 la "X" y el jugador 2 la "O") en una casilla vacía. El objetivo principal del juego es lograr una línea de tres de tus propios símbolos, ya sea en vertical, horizontal o diagonal, antes que tu oponente. Aunque el juego parece simple a primera vista, en realidad involucra estrategia y planificación para bloquear a tu oponente y crear oportunidades para ti mismo.

## Características del Proyecto

Interfaz amigable: He diseñado una interfaz de usuario intuitiva y agradable utilizando HTML y CSS, basado en la simpleza y el uso la paleta de color azul. La cuadrícula del juego es fácil de entender y las casillas muestran los símbolos de los jugadores de manera clara.

Funcionalidad con JavaScript: La parte central del proyecto se basa en JavaScript, donde he desarrollado la lógica del juego. El código asegura que los jugadores solo puedan hacer movimientos válidos y verifica si se ha alcanzado una victoria o un empate.

Juego en Línea y Chat en Tiempo Real con Socket.IO: Además de recrear el juego clásico "Ta-Te-Ti", llevé mi proyecto al siguiente nivel al incorporar funcionalidades en línea. Utilicé la potente librería Socket.IO para permitir a los jugadores enfrentarse en tiempo real desde diferentes dispositivos y ubicaciones.

Juego Multijugador: Con Socket.IO, los jugadores pueden jugar una partida de "Ta-Te-Ti" uno contra otro en tiempo real. Cada movimiento se sincroniza instantáneamente en ambos tableros, lo que crea una experiencia de juego fluida y emocionante, incluso si los jugadores están separados por distancias físicas.

Chat Integrado: Además de jugar, los jugadores pueden comunicarse entre sí mediante un chat en línea. Socket.IO facilita la comunicación en tiempo real, lo que permite a los jugadores enviar mensajes y reacciones mientras juegan, mejorando la interacción y la diversión en general.

Esta incorporación de Socket.IO para el juego en línea y el chat representa un paso adelante en mi proyecto, ya que ahora los usuarios pueden disfrutar de una experiencia de juego social y en tiempo real. La implementación exitosa de estas características ha fortalecido mi comprensión de la programación web y me ha proporcionado habilidades valiosas en el desarrollo de aplicaciones interactivas y colaborativas.
## Como jugar

### Clonar el repositorio

```bash
  git clone https://github.com/ManuelSeisdedos/Ta-Te-Ti.git
```

### Dirigirse a la carpeta del juego

```bash
    Abrir con su editor de texto favorito
```

### Instalar las dependencias

```bash
  npm install
```

### Ejecutar el servidor

```bash
  npm start
```

### Conectarse desde otro dispositivo

```bash
    Para hacerlo se debe conectar a (ip del dispositivo de servidor):3000 
    Ejemplo: xxx.x.x.xx:3000
```


## Demo

https://www.youtube.com/watch?v=y6U2aJcluqg&ab_channel=OttoProgramacion