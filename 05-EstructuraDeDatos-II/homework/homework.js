"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
/**Clase de lista */
class LinkedList {
  constructor() {
    this.long = 0;
    this.head = null;
  }
  /**agregando un nuevo nodo */
  add(val) {
    const newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newnode;
    }
    this.long++
  }
  /**Buscando nodo */
  search(val) {
    if (!this.head) { return 'lista vacia'; }
    var curr = this.head;
    var confi = false;
    if (curr.value == val) { confi = true; }
    if (typeof (val) === 'function') {
      while (!confi && curr.next !== null) {
        if (val(curr.value)) {
          confi = true;
          return curr.value;
        }
        curr = curr.next;
        if (val(curr.value)) { confi = true; }
      }
    };
    while (!confi && curr.next !== null) {
      curr = curr.next;
      if (curr.value == val) {
        confi = true;
      }
    }
    if (confi) {
      return curr.value;
    } else {
      return null;
    }
  }
  /**Eliminando nodo */
  remove() {
    var lasCurr;
    if (!this.head) {
      lasCurr = null;
    } else {
      let curr = this.head;
      if (curr.next === null) {
        lasCurr = curr.value;
        this.head = null;
        this.long--;
      } else {
        while (curr.next.next !== null) {
          curr = curr.next
        }
        lasCurr = curr.next.value;
        curr.next = null;
        this.long--;
      }
    }
    return lasCurr;
  }
}
/**Clase nodo */
function Node(valor) {
  this.value = valor;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
}
HashTable.prototype.hash = function (value) {
  var sumatoria = 0;
  for (let i = 0; i < value.length; i++) {
    sumatoria += value.charCodeAt(i);
  }
  return sumatoria % this.numBuckets;
}
HashTable.prototype.set = function (key, value) {
  if (typeof (key) === 'string') {
    let hashedKey = this.hash(key);
    if (this[hashedKey] === undefined) {
      this[hashedKey] = [];
    }
    this[hashedKey][key] = value;
    return this[hashedKey][key];
  } else {
    throw new TypeError('Keys must be strings')
  }
}
HashTable.prototype.get = function (key) {
  let hashedKey = this.hash(key);
  return this[hashedKey][key];
}
HashTable.prototype.hasKey = function (key) {
  let hashedKey = this.hash(key);
  console.log(this[hashedKey]);
  if (this[hashedKey] !== undefined) {
    if (this[hashedKey][key] !== undefined) {
      return true;
    }
  }
  return false;
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
