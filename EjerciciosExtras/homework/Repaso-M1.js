const { isNumber } = require('util');
const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array, sumatoria = 0) {
    // Tu código aca:
    if (array.length <= 1) {
        return array[0];
    } else {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                sumatoria += countArray(array[i]);
            } else {
                sumatoria += array[i];
            }
        }
    }
    return sumatoria;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj, sumatoria = 0) {
    // Tu código aca:
    if (Array.isArray(obj)) {
        return sumatoria;
    } else {
        for (const key in obj) {
            ++sumatoria;
            if (typeof (obj[key]) === 'object') {
                sumatoria += countProps(obj[key]);
            }
        }
    }
    return sumatoria;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
    // Tu código aca:
    var count = 0;
    if (!this.head) {
        return 'lista vacia';
    }
    var current = this.head;
    if (isNaN(parseInt(current.value)) && typeof(current.value) === 'string') {
        current.value = 'Kiricocho';
        count++;
    }
    while (current.next) {
        current = current.next
        if (isNaN(parseInt(current.value)) && typeof(current.value) === 'string') {
            current.value = 'Kiricocho';
            count++;
        }
    }
    return count;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
    // Tu código aca:
    /**merge unir, la union en este caso seria ir uno de cada lado */
    var newQueue;
    let arr = [];
    let one = [...queueOne.array];
    let two = [...queueTwo.array];
    /**union */
    while (one.length || two.length) {
        if (one.length > 0) {
            arr.push(one.shift());
        }
        if (two.length > 0) {
            arr.push(two.shift());
        }
    }
    /**retornar nuevo Queue */
    newQueue = new Queue();
    for (let i = 0; i < arr.length; i++) {
        newQueue.enqueue(arr[i]);
    }
    return newQueue;
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
    // Tu código aca:
    this.num = multiplier;
    return newNum =>{
        return this.num * newNum;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
    // Tu código aca:
    var node = this;
    if (!node.right && !node.left) {
        return node.value;
    }
    if (!node.left) {
        return node.value + node.right.sum();
    }
    if (!node.right) {
        return node.value + node.left.sum();
    }
    return node.value + node.left.sum() + node.right.sum();
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}