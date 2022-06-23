/**primer ejemplo */
function prime() {
    var otracos = "México";
    return function () {
        var algo = 'Mondragon';
        console.log(algo + ' vive en ' + otracos);
    }
}
prime();// solo retorna laa funcion
var algo = prime();
algo(); /**primero se almacena y luego se invoca por medion de la variable */
/** segundo ejemplo*/
function saludar(saludo) {
    return function (nombre) {
        console.log(saludo + '! ' + nombre + '!!!');
    }
}
var saludando = saludar('hola');
saludando('Angel');
/** tercer ejemplo ejemplo*/
function saludar2(saludo) {
    return function nombre(nombre) {
        console.log(saludo + '! ' + nombre + '!!!');
    }
}
var saludando2 = saludar2('hola');
saludando2('Miguel');

/**ejemplo closers */
var crearFuncion = function () {
    var arreglo = [];
    for (let i = 0; i < 3; i++) {
        arreglo.push(
            (function (j) {
                return function () { console.log(j); }
            }(i + 1))
        );
    }
    return arreglo;
}

var arr = crearFuncion();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]());
}

/**ejemplo bind */
const persona = {
    nombre: 'Angel',
    apellido: 'Mondragon'
}
var logNombre = function () {
    console.log(this.nombre);
}
var personaLogNombre = logNombre.bind(persona)();
/**bind indica el bloque de codigo de donde se obtendran los valores o al funcion */
/**segundo ejemplo de bind */
function multiplica(a, b) {
    return a * b;
}
var multiplicaPorDos = multiplica.bind(this, 3, 9);
console.log(multiplicaPorDos(5));
/**tercer ejemplo de bind */

const persona1 = {
    nombre: 'Angel',
    apellido: 'Mondragon'
}
const persona2 = {
    nombre: 'Dragon',
    apellido: 'rojo'
}
const persona3 = {
    nombre: 'Angel',
    apellido: 'azul'
}
var logNombre = function (param1, param2) {
    console.log(param1 + ' ' + this.nombre, ' ', this.apellido,);
}

/**ejersicio de tarea */
function counter() {
    var contador = 0
    return function() {
        contador += 1;
        return contador;
    }; 
}

nuevoConteo = new counter();
for (let i = 0; i < 3; i++) {
    console.log(counter()());
    console.log(nuevoConteo());
}

/** */

function sumador() {
    var contador = 0;
    return function() {
        contador += 1;
        return contador;
    }
}
let contando = sumador()
for (let i = 0; i < 3; i++) {
    console.log(contando());
}

/*** */

 const cb = function(x) {
    return x * 2;
};


function cacheFunction(cb) {
    var eventos = [];
    console.log(eventos);
    return function(valor) {
            let resultado = cb(valor);
            eventos[valor] = resultado;
            console.log(eventos);
            return resultado;
    }
  }
  var nuevoCache = cacheFunction();

  for (let i = 0; i < 5; i++) {
      console.log(nuevoCache(i));
  }

  console.log(nuevoCache(1));


 