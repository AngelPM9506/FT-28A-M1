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
  insert(val) {
    /** Nueva instancia de arbol */
    var newTree = new BinarySearchTree(val);
    /**regresar falso si el valor ya se encuantra en algun lugar */
    if (val === this.value) {
      return false;
    } else {
      /**evaluar el tamaño de del valor a insertar
       * a la derecha si es mayor que el valor actual
       * a la izquierda si es menor que el valor actual
       */
      if (val > this.value) {
        if (!this.right) {
          /**si no hay nada en el lado izquierdo lo guardamos
           * di no seguimos buscando
           */
          this.right = newTree;
        } else {
          this.right.insert(val);
        }
      }
      if (val < this.value) {
        if (!this.left) {
          /**no hay nada en el lado derecho lo guardamos
           * si o seguimos buscando
           */
          this.left = newTree;
        } else {
          this.left.insert(val);
        }
      }
    }
    /**al final retornamos un tru para confirmar 
     * la insercion del valor
     */
    return true;
  }
  /**Tamaño */
  size() {
    /**comprobamos en que posiscion no encontrsmoa */
    var node = this;
    /**si no tenemos ningun valor en los nodos hijos 
     * simplemente retornamos un uno
     */
    if (!node.right && !node.left) {
      return 1;
    }
    /**si solo tenemos un valor de cualquiera de los lados 
     * retornamos un uno mas el valor que se tenga a cada 
     * lado
     */
    if (!node.left) {
      return 1 + node.right.size();
    }
    if (!node.right) {
      return 1 + node.left.size();
    }
    /**en el caso de que tengamos un valor a cada lado 
     * retornamos un uno con el valor que se tenga a cada lado
     */
    return 1 + node.left.size() + node.right.size();
  }
  /**busqueda de arboles*/
  contains(val) {
    /**Comprobamos nuestraposicion  */
    var node = this;
    /**retornamos un true si ya estamos en el valor que se decea*/
    if (node.value === val) {
      return true;
    }
    /**retornar un valor si llegamos al final y no se encontro nada */
    if (!node.right && !node.left) {
      return false;
    }
    /**si tenemos informacion que aun no se encuentra por ambos lados 
     * buscamos deacuerdo a la magnitud del valor deseado si es mayor 
     * que el valor que ene que nos encontramos buscamos a la derecha 
     * si es menor buscamos a la izquierda
     */
    if (val > node.value) {
      /**si no tenemos informacion a la derecha seguimos buscando a la
       * izquierda
       */
      if (!node.right) {
        return node.left.contains(val);

      } else {
        return node.right.contains(val);
      }
    }
    if (val < node.value) {
      if (!node.left) {
        /**si ya no tenemos valores a la derecha buscamos a la izquierda */
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
      /**Izquierda a derecha al final root */
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
      /**de derecha a izquierda pasando por root */
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
    /**
     * lectura por niveles
     * de izquierda a derecha 
     * analofia de pincipio a fin por capa
     */
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
      arr.shift().breadthFirstForEach(val, arr);
    }
  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
