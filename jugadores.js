class CJugador {
    constructor(nombre, pos, edad, est, p, nac) {
        this.nombre = nombre;
        this.pos = pos;
        this.edad = edad;
        this.est = est;
        this.p = p;
        this.nac = nac;
    }
}

let jugadores = [
    new CJugador('Fábio1', 'G', 43, 1.88, 86, 'Brasil'),
    new CJugador('Marlon4', 'D', 28, 1.83, 78, 'Brasil'),
    new CJugador('Marcelo12', 'D', 35, 1.73, 72, 'Brasil'),
    new CJugador('Nino33', 'D', 26, 1.88, 82, 'Brasil'),
    new CJugador('John Kennedy9', 'A', 21, 1.73, 71, 'Brasil'),
    new CJugador('Keno11', 'A', 34, 1.78, 72, 'Brasil'),
    new CJugador('Germán Cano14', 'A', 35, 1.78, 81, 'Argentina')
];

let jugadoresArgentinos = jugadores.filter(jugador => jugador.nac === 'Argentina');
console.log('Jugadores Argentinos:', jugadoresArgentinos);

let jugadoresPeso = jugadores.filter(jugador => jugador.p >= 75 && jugador.p <= 80);
console.log('Jugadores con peso entre 75 y 80 kg:', jugadoresPeso);

let jugadorMasAlto = jugadores.reduce((alto, jugador) => alto.est > jugador.est ? alto : jugador);
console.log('El jugador más alto:', jugadorMasAlto);
