export const data = [
  {
    question: "¿En qué año salió Pac-Man?",
    choices: ["1975", "1980", "1995"],
    answer: "1980",
  },

  {
    question: "¿Quién fue el creador de Pac-Man?",
    choices: ["Toru Iwatani", "shigeru miyamoto", "akiko Torishigua"],
    answer: "Toru Iwatani",
  },

  {
    question: "¿Por qué Pac-Man fue tan exitoso?",
    choices: ["porque se trataba de un juego no violento que todos podian disfrutar", "porque era similar a space invaders", "ninguna de las ateriores"],
    answer: "porque se trataba de un juego no violento que todos podian disfrutar",
  },

  {
    question: "¿Qué significa Pac-Man?",
    choices: ["hombre cometodo", "la bola amarilla", "proviene del paku, el sonido que se produce al abrir la boca"],
    answer: "proviene del paku, el sonido que se produce al abrir la boca",
  },

  {
    question:
      "¿Cómo se conoce coloquialmente a este juego en España?",
    choices: [
      "comecocos",
      "comemounstros",
      "comefantasmas",
    ],
    answer: "comemounstros",
  },

  {
    question: "¿De qué colores son los fantasmas?",
    choices: ["rojo, rosa, azul, naranja", "rojo, morado, verde azul", "rojo, verde, naranja, amarillo"],
    answer: "rojo, rosa, azul, naranja",
  },

  {
    question: "¿Qué simbolizan los puntos que devora Pac-Man?",
    choices: ["frituras", "pequeñas pizzas", "galletas"],
    answer: "galletas",
  },

  {
    question: "¿Con cuántos puntos cuenta cada nivel para devorar?",
    choices: ["500", "240", "180"],
    answer: "240",
  },

  {
    question: "en que esta basado pac-man",
    choices: ["un trozo de pizza", "logo de Namco", "un dibujo sin terminar"],
    answer: "un trozo de pizza",
  },

  {
    question: "cual es el nombre original de pac-man",
    choices: ["puck-man", "ball-man", "pac-man"],
    answer: "puck-man",
  },

  {
    question: "cual es la distribuidora de pac-man en Norteamerica",
    choices: ["midway", "atari", "namco"],
    answer: "midway",
  },

  {
    question: "cual es la distribuidora de pac-man en japon",
    choices: ["Willy", "nintendo", "namco"],
    answer: "namco",
  },

  {
    question: "que tipo de juego es pac-man",
    choices: ["accion", "arcade", "destreza"],
    answer: "arcade",
  },

  {
    question: "como se llama el fantasma rojo?",
    choices: [
      "Pinky", "Inky", "Blinky"],
    answer:
      "Blinky",
  },

  {
    question: "como se llama el fantasma cian?",
    choices: ["Clyde", "Inky", "Pinky"],
    answer: "Inky",
  },

  {
    question: "como se llama el fantasma rosa?",
    choices: ["Inky", "Clyde", "Pinky"],
    answer: "Pinky",
  },

  {
    question: "como se llama el fantasma naranja?",
    choices: ["Clyde", "Inky", "Pinky"],
    answer: "Clyde",
  },

  {
    question: "cual es el premio de pac-man al llegar al nivel 13?",
    choices: [
      "uvas",
      "fresas",
      "llaves",
    ],
    answer: "llaves",
  },

  {
    question:
      "Cuando fue el 30 aniversario de pac-man?",
    choices: ["22 de mayo 2010", "22 de agosto 2012", "22 de junio del 2010"],
    answer: "22 de mayo 2010",
  },

  {
    question:
      "cuantos niveles tiene?",
    choices: ["300", "255", "256"],
    answer: "255",
  },

  {
    question:
      "En el juego Ms. Pac-Man (la versión original) apareció un fantasma diferente reemplazando al color naranja (Clyde). Este fantasma era de color morado y fue llamada?",
    choices: ["Sue", "vue", "jui"],
    answer: "Sue",
  },

  {
    question:
      "mexicano que se llevo el campeonato en 2017?",
    choices: ["Daniel borrego", "Daniel Ramirez", "Daniel Morales"],
    answer: "Daniel borrego",
  },

  {
    question:
      "nivel con un bug y un laberinto sin fin?",
    choices: ["255", "230", "256"],
    answer: "256",
  },

  {
    question:
      "Quien es el esposo/a de Robin?",
    choices: ["Jr. Pac-Man", "pac-man", "Dr. Pac-Man"],
    answer: "Jr. Pac-Man",
  },

  {
    question:
      "que se realizo al celebrar el 40 aniversario?",
    choices: ["Una tienda con el videojuego", "Una furgoneta", "una cancion"],
    answer: "Una tienda de acampar",
  },

  {
    question:
      "cuantas horas acomulo el mini juego de pacman en google?",
    choices: ["5M de horas", "10M de horas", "2M de horas"],
    answer: "5M de horas",
  }
  
];

export function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

fisherYatesShuffle(data);
