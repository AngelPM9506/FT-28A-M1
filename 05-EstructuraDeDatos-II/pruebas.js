const { log } = require("console");
const { lstat } = require("fs");
const { isFunction } = require("util");

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

function LinkedList() {
    this.head = null;
    this._elementos = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    var newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
    } else {
        var current = this.head
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this._elementos++
    }
    return current;
}

LinkedList.prototype.remove = function () {
    var lastValue;
    if (!this.head) {
        lastValue = null;
    } else {
        var current = this.head;
        if (current.next === null) {
            lastValue = current;
            this.head = null;
        } else {
            while (current.next.next) {
                current = current.next;
            }
            lastValue = current.next;
            current.next = null;
            this._elementos--
        }
    }
    return lastValue;
}

LinkedList.prototype.search = function (val) {
    if (!this.head) { return 'lista vacia'; }
    var confi = false;
    var curr = this.head;
    if (curr.value === val) { confi = true; }
    if (typeof (val) === 'function') {
        if (val(curr.value)) { confi = true; }
        while (!confi && curr.next) {
            curr = curr.next;
            console.log(curr.value.name);
            if (val(curr.value)) {
                confi = true;
                console.log(curr.value.name);
                console.log(confi);
            }
        }
    };
    while (!confi && curr.next !== null) {
        curr = curr.next;
        console.log(curr.value);
        if (curr.value == val) {
            confi = true;
        }
    }

    console.log(curr.value);
    if (confi) {
        console.log(curr.value);
        return curr.value;
    } else {
        return null;
    }
}

/**ejecución */
const lista1 = new LinkedList();

for (let i = 1; i <= 5; i++) {
    lista1.add(i);
}

console.log(lista1.search(5));
console.log(lista1.remove());
console.log(lista1.search(5));
console.log(lista1);
