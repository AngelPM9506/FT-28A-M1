const { log } = require("console");
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

class LinkedList {
    constructor() {
        this._elementos = 0;
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
        this._elementos++
        return newnode.value;
    }
    search(val) {
        if (!this.head) { return 'lista vacia'; }
        var confi = false;
        var curr = this.head;
        if (curr.value === val) { confi = true; }
        if (typeof(val) === 'function') {
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
    remove() {
        var lasCurr;
        if (!this.head) {
            lasCurr = null;
        } else {
            let curr = this.head;
            if (curr.next === null) {
                console.log(curr);
                lasCurr = curr.value;
                this.head = null;
                this._elementos--;
            } else {
                while (curr.next.next !== null) {
                    curr = curr.next
                }
                lasCurr = curr.next.value;
                console.log(curr.value);
                curr.next = null;
                this._elementos--;
            }
        }
        console.log(lasCurr);
        return lasCurr;
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
/**ejecución */
const lista1 = new LinkedList();
/*lista1.add('prueba de add 1');
lista1.add('prueba de add 2');
lista1.add('prueba de add 3');
lista1.remove();
lista1.remove();

lista1.add('one')
lista1.add('two')

console.log(lista1.search(function(nodeValue) {
    return nodeValue === 'two';
  }));*/

function UserNode(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
}

lista1.add(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
lista1.add(new UserNode('David', 'david@fs.com', 'New York'))
lista1.add(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

console.log(lista1.search(function (userNode) {
    return userNode.name === 'Nimit';
}).email);
console.log(lista1.search(function (userNode) {
    return userNode.email === 'david@fs.com';
}).city);
console.log(lista1.search(function (userNode) {
    return userNode.city === 'Mountain View';
}).name);

//console.log(lista1.search('prueba de add 1'));

console.log(lista1);
