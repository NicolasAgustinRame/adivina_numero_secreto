const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número.");
    }else if (numeroAdivinado > numeroSecreto){
        console.log("El número secreto es menor.");
    }else if (numeroAdivinado < numeroSecreto){
        console.log("El número secreto es mayor.");
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
}
