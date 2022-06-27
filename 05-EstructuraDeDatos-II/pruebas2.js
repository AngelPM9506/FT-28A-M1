const { error } = require("console");
const { lstat } = require("fs");

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
        throw new TypeError('Keys must be strings');
    }
}
HashTable.prototype.get = function (key) {
    let hashedKey = this.hash(key);
    return this[hashedKey][key];
}
HashTable.prototype.hasKey = function (key) {
    var hashedKey = this.hash(key);
    if (this[hashedKey] !== undefined) {
        if (this[hashedKey][key] !== undefined) {
            return true
        }
    }
    return false;
}



var hashTable = new HashTable()
console.log(hashTable.hash('hola'));
hashTable.set('hola', 'Hola Mundo');
hashTable.set('olha', 'Hola Marte');
console.log(hashTable.get('hola'));
console.log(hashTable);
