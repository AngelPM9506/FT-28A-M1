"use strict";

const { exit } = require("process");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

/**
 * Mayores a la derecha 
 * Menores a la izquierda
 */

class BinarySearchTree {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
    /**insertar nuevos arboles */
    insert(val) {
        var newTree = new BinarySearchTree(val);
        if (val === this.value) {
            return false;
        } else {
            if (val > this.value) {
                if (!this.right) {
                    this.right = newTree;
                } else {
                    this.right.insert(val);
                }
            }
            if (val < this.value) {
                if (!this.left) {
                    this.left = newTree;
                } else {
                    this.left.insert(val);
                }
            }
        }
        return true;
    }
    /**Tamaño */
    size() {
        var node = this;
        console.log(node.value);
        if (!node.right && !node.left) {
            return 1;
        }
        if (!node.left) {
            return 1 + node.right.size();
        }
        if (!node.right) {
            return 1 + node.left.size();
        }
        return 1 + node.left.size() + node.right.size();
    }
    /**insertar nuevos arboles */
    altura() {
      /**primero saber ya estamos parados en el ultima secccion o solo tenemos un nodo */
      var node = this;
      if (!node.right && !node.left) {
        return 0;
      } else {
        /** si no tenemos algo a la derecha aplicamos de nuevo este metodo a la izquierda*/
        if (!node.right) {
          return node.left.altura() + 1;
        }
        /**si no tenemos nada a la izquierda aplicamos este mismo metodo a la derecha*/
         else if (!node.left) {
          return node.right.altura() + 1;
        }
  
        /**
         * si se tiene algo en ambos puntos se aplicara de nuevo este metodo a ambos lados
         * y se retornara el valor maximo lo cual nos dira cuantos niveles tiene el arvol
         */
        else {
          return Math.max(node.left.altura() + 1, node.right.altura() + 1);
        }
      }
    }
    /**busqueda de arboles*/
    contains(val) {
        var node = this;
        console.log(node.value);
        console.log(val);
        if (node.value === val) {
            console.log(val);
            return true;
        }
        if (!node.right && !node.left) {
            return false;
        }
        if (val > node.value) {
            console.log(node.value);
            if (!node.right) {
                return node.left.contains(val);
            } else {
                return node.right.contains(val);
            }
        }
        if (val < node.value) {
            console.log(node.value);
            if (!node.left) {
                return node.right.contains(val);
            } else {
                return node.left.contains(val);
            }
        }
    }
    /**DFS */
    depthFirstForEach(val, sec = 'in-order') {
        var node = this;
        console.log(node.value);
        if (sec === 'pre-order') {
            /**raiz de izquierda a derecha */
            val(node.value);
            if (node.left) {
                node.left.depthFirstForEach(val, sec);
            }
            if (node.right) {
                node.right.depthFirstForEach(val, sec);
            }
        }
        if (sec === 'post-order') {
            /**raiz de izquierda a derecha */
            if (node.left) {
                node.left.depthFirstForEach(val, sec);
            }
            if (node.right) {
                node.right.depthFirstForEach(val, sec);
            }
            val(node.value);
        }
        if (sec === 'in-order') {
            /**raiz de izquierda a derecha */
            if (node.left) {
                node.left.depthFirstForEach(val, sec);
            }
            val(node.value);
            if (node.right) {
                node.right.depthFirstForEach(val, sec);
            }
        }
    }
    /**BFS */
    breadthFirstForEach(val, arr = []) {
        var node = this;
        console.log(node.value);
        if (node.left) {
            arr.push(node.left);
        }
        if (node.right) {
            arr.push(node.right);
        }
        val(node.value);
        if (arr.length > 0) {
            arr.shift().breadthFirstForEach(val,arr);
        }
    }

}
var nuevoArbol = new BinarySearchTree(5);
console.log(nuevoArbol);

for (let i = 0; i < 100; i++) {
    nuevoArbol.insert(Math.round(Math.random() *(Math.E *  6.63) * Math.PI - i))
}
console.log(nuevoArbol.altura());
console.log(nuevoArbol);

const arryPrueba = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
var arrySalida = [];
var NAB = new BinarySearchTree(20);
arryPrueba.forEach(value => {
    NAB.insert(value);
});

NAB.depthFirstForEach(value => {
    arrySalida.push(value);
}, 'pre-order');
console.log(arrySalida);
var arrySalida = [];

NAB.depthFirstForEach(value => {
    arrySalida.push(value);
}, 'post-order');
console.log(arrySalida);
var arrySalida = [];

NAB.depthFirstForEach(value => {
    arrySalida.push(value);
}, 'in-order');
console.log(arrySalida);
var arrySalida = [];

NAB.depthFirstForEach(value => {
    arrySalida.push(value);
});
console.log(arrySalida);
var arrySalida = [];

NAB.breadthFirstForEach(value => {
    arrySalida.push(value);
});
console.log(arrySalida);
var arrySalida = [];
console.log(NAB);

/*BinarySearchTree.prototype.depthFirstForEach = function (f, p = 'in-order') {
    if (p === 'pre-order') {
        // f(this.value);
        // if (this.left !== null) this.left.depthFirstForEach(f, p);
        // if (this.right !== null) this.right.depthFirstForEach(f, p);
    }
    if (p === 'post-order') {
        if (this.left !== null) this.left.depthFirstForEach(f, p);
        if (this.right !== null) this.right.depthFirstForEach(f, p);
        f(this.value);
    }
    if (p === 'in-order') {
        if (this.left !== null) this.left.depthFirstForEach(f, p);
        f(this.value);
        if (this.right !== null) this.right.depthFirstForEach(f, p);
    }
}*/

//console.log(NAB.size());
// console.log(NAB.value);
// console.log(NAB.contains(35));

// NAB.insert(15);
// //console.log(NAB.size());
// console.log(NAB.left.value);

// NAB.insert(25);
// //console.log(NAB.size());
// console.log(NAB.right.value);

// NAB.insert(5);
// //console.log(NAB.size());
// console.log(NAB.left.left.value);

// NAB.insert(17);
// //console.log(NAB.size());

// NAB.insert(21);
// //console.log(NAB.size());

// NAB.insert(28);
// //console.log(NAB.size());

// NAB.insert(0);
// //console.log(NAB.size());

// NAB.insert(14);
// //console.log(NAB.size());

// NAB.insert(50);
// //console.log(NAB.size());

// NAB.insert(1);
// //console.log(NAB.size());

// NAB.insert(45);
// //console.log(NAB.size());

// NAB.insert(13);
// //console.log(NAB.size());

// NAB.insert(12);
// //console.log(NAB.size());

// NAB.insert(11);
// //console.log(NAB.size());
// console.log(NAB.left.left.right.left.left.left.value);
// NAB.insert(30);
// //console.log(NAB.size());
// NAB.insert(35);
// //console.log(NAB.size());
// NAB.insert(33);
// //console.log(NAB.size());
// NAB.insert(31);
// //console.log(NAB.size());
// NAB.insert(34);
// //console.log(NAB.size());
// console.log(NAB.right.right.right.left.left.right.left.right.value);
// console.log(NAB.size());
// //console.log(NAB.contains(30));
// console.log(NAB.contains(0));
// /***
//  * 
//  */
// NAB.insert(60);
// console.log(NAB.breadthFirstForEach());
// console.log(NAB.depthFirstForEach());
// console.log(NAB.depthFirstForEach(30, 'pre-order'));
// /*for (let i = 0; i <= 1; i++) {
//     let x = Math.round(Math.random() * (100 - 1 + 1) + 1);
//     nuevoArbolBusqueda.insert(x);
// }*/