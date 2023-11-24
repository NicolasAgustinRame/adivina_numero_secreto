const readlineSync = require("readline-sync");
const {generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    const numero = readlineSync.question('Ingresa un numero: ');
    return parseInt(numero);
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido al juego de adivinar el numero secreto!');
    console.log('Intenta adivinar el numero del 1 al 100.\n')

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();