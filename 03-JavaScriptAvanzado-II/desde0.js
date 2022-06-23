var cb = function (x) {
    return x * 2;
}
function cacheFunction() {
    var eventos = {};
    console.log(eventos);
    return valor => {
        if (!eventos.hasOwnProperty(valor)) {
            eventos[valor] = cb(valor);
            console.log(eventos);
            return eventos[valor];
        }
        console.log(eventos)
        return eventos[valor];
    }
}
var nuevoCache = cacheFunction();


for (let i = 0; i <= 15; i++) {
    console.log(nuevoCache(i));
}
console.log(nuevoCache(17));

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, '*', '*');
let textoGuiones = crearCadena.bind(this, '-', '-');
let textoUnderscore = crearCadena.bind(this, '_', '_');

console.log(textoAsteriscos('hola'));
console.log(textoGuiones('hola'));
console.log(textoUnderscore('hola'));