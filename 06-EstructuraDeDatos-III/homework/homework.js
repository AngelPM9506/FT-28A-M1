"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
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
  /**busqueda de arboles*/
  contains(val) {
    var node = this;
    if (node.value === val) {
      return true;
    }
    if (!node.right && !node.left) {
      return false;
    }
    if (val > node.value) {
      if (!node.right) {
        return node.left.contains(val);

      } else {
        return node.right.contains(val);
      }
    }
    if (val < node.value) {
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

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
