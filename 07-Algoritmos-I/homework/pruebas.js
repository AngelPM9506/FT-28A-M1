// function factorear(num) {
//     // Factorear el número recibido como parámetro y devolver en un array
//     // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
//     // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
//     // Tu código:
//     /**Todos los números son divisores entre 1 */
//     var factores = [1];
//     /**empezamos a contar en 2 ya el módulo de dividir x / 1  siempre es 0 */
//     var factor = 2;
//     /**mientras no se encuentre que la variable no es igual 1 no detenemos el bucle */
//     while (num !== 1) {
//         if (num % factor === 0) {
//             num = num / factor;
//             factores.push(factor);
//         } else {
//             ++factor
//         }
//     }
//     return factores;
// }

//var facts = factorear(13);

//console.log(facts);

// function bubbleSort(array) {
//     // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
//     // el array recibido como parámetro
//     // Devolver el array ordenado resultante
//     // Tu código:
//     var arrOrder = array;
//     var inOrder = false;
//     while (!inOrder) {
//         inOrder = true;
//         for (let i = 0; i < arrOrder.length; i++) {
//             if (arrOrder[i] > arrOrder[i + 1]) {
//                 /**si la posicion actual es mayor que la actual se intercambian*/
//                 let actual = arrOrder[i];
//                 arrOrder[i] = arrOrder[i + 1];
//                 arrOrder[i + 1] = actual;
//                 /**termina ordenamiento e indicamos que no estaba en orden*/
//                 inOrder = false;
//             }
//         }
//     }
//     return arrOrder;
// }
//var arrayUnOrder = [-4, 5, -7, 6, 0, 9, -3, 7, 4, -6, 3];
// var arrayOrder = bubbleSort(arrayUnOrder);

// console.log(arrayOrder);

// function insertionSort(array) {
//     // Implementar el método conocido como insertionSort para ordenar de menor a mayor
//     // el array recibido como parámetro utilizando arreglos
//     // Devolver el array ordenado resultante
//     // Tu código:
//     var arrayInOrder = array;
//     for (let i = 1; i < arrayInOrder.length; i++) {
//         /**primero seleccionar el elemento en el primer index */
//         let actual = arrayInOrder[i], j;
//         for (j = i - 1; j >= 0 && arrayInOrder[j] > actual; j--) {
//             /**
//              * simpre que arrayInOrder[j] que el actual
//              * se movera arrayInOrder[j] a laderecha a la posicion arrayInOrder[j + 1]
//              */
//             arrayInOrder[j + 1] = arrayInOrder[j];
//         }
//         /**
//          * se coloca el elemento alcual en el indice 0 y junto al emeneto mas pequelo
//          */
//         arrayInOrder[j + 1] = actual;
//     }
//     return arrayInOrder;
// }
//var arrayUnOrder = [-4, 5, -7, 6, 0, 9, -3, 7, 4, -6, 3];

// var arrayOrder = insertionSort(arrayUnOrder);
// console.log(arrayOrder);
function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    /**
     * No utiliza el valor en la posición como los anteriores, utiliza la posición 
     * Este método utiliza aparte del array original un sub array */
    var arrayInOrder = array;
    for (let i = 0; i < arrayInOrder.length; i++) {
        /** Ee alimenta el subarray tomando el primer elemento como el mínimo*/
        let min = i;
        for (let j = i + 1; j < arrayInOrder.length; j++) {
            /** Una vez que tenemos el primer elemento buscamos en el resto de la cadena 
             * Si hay un elemento aún más pequeño para tomarlo como valor mínimo
            */
            if (arrayInOrder[j] < arrayInOrder[min]) {
                /** Si se encuenta un valor aún más pequeñoo se reemplaza */
                min = j
            }
        }
        /**Comprobamos si hay cambios en el valor mínimo */
        if (min !== i) {
            /**Si es diferente de i (valor mínimo) se intercambian elementos por posición*/
            let temp = arrayInOrder[i];
            arrayInOrder[i] = arrayInOrder[min];
            arrayInOrder[min] = temp;
        }
    }
    return arrayInOrder;
}
var arrayUnOrder = [-4, 5, -7, 6, 0, 9, -3, 7, 4, -6, 3];
var arrayInOrder = selectionSort(arrayUnOrder);
console.log(arrayInOrder);