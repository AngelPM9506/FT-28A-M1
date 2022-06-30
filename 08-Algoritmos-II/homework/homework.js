'use strict'
// No cambies los nombres de las funciones.


function particionQuick(array, inicioIndex, finalIndex) {
  var arrayOrder = array;
  const pivoteVal = arrayOrder[finalIndex]; /**valor del pivote */
  let index = inicioIndex;
  /**reacomodo del array */
  for (let i = index; i < finalIndex; i++) {
    if (arrayOrder[i] < pivoteVal) {
      [arrayOrder[i], arrayOrder[index]] = [arrayOrder[index], arrayOrder[i]];
      index += 1;
    }
  }
  /**regresar el valor del pivote a la parte media del index */
  [arrayOrder[index], arrayOrder[finalIndex]] = [arrayOrder[finalIndex], arrayOrder[index]]
  return index;
}

function quickSort(array, inicioIndex = 0, finalIndex = (array.length - 1)) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /**caso en que el que el inicio del index sea menor o igual funal
   * es decir que solo se cuene con un elemento o ya solo quede un elemento
  */
  var arrayOrder = array;
  if (inicioIndex >= finalIndex) {
    return;
  }
  /**obteniendo el punto medio y el valor pivote*/
  let puntoMedio = particionQuick(arrayOrder, inicioIndex, finalIndex);

  /**aplicando lo metodos recursivos**/
  quickSort(arrayOrder, inicioIndex, puntoMedio - 1);
  quickSort(arrayOrder, puntoMedio + 1, finalIndex);
  return arrayOrder;
}
/**************************************************************************************************** */
function particionMerge(izquierda, derecha) {
  /**array ordenada */
  let arrayOrder = [];
  /**agrupación de derecha e izquierda en el array ordenado */
  while (izquierda.length && derecha.length) {
    if (izquierda[0] < derecha[0]) {
      arrayOrder.push(izquierda.shift());
    } else {
      arrayOrder.push(derecha.shift());
    }
  }
  /**si queda el array es inpar quedara un elemento ya sea en izquierda o derecha por lo que
   * se unificarará todo en un solo array para retornar;
   */
  return [...arrayOrder, ...izquierda, ...derecha];
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arrayOrder = array;
  const puntoMedio = arrayOrder.length / 2;
  /**en caso de tener solo un elemento en el array retornamos el aray antes de continuar */
  if (arrayOrder.length <= 1) {
    return arrayOrder;
  }
  const L = arrayOrder.splice(0, puntoMedio);
  const R = arrayOrder;
  /**retorna la union y acomodo de la particion de los array */
  return particionMerge(mergeSort(L), mergeSort(R));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
