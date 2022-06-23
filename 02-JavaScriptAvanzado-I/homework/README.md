
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
<!-- 
   10 // de la varibale local en la función c
   8  // del parámetro que se recibe al invocar la función c 
   8  // del parámetro que se recibe al invocar la función f dentro de c
   9  // del parámetro que se recibe al invocar la función c 
   10 // de la variable global b 
   1  // de la variable global x
 -->
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
<!-- 
   variable indefinida // no continua el código hasta que se defina la variable o se comente 
   variable indefinida // no continua el código hasta que se defina la variable o se comente 
   Hola! // imprime por consola el string designado por la fución  si se comentan las lines de arriba. 
 -->
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
<!-- 
   Franco // ya que es un re-declaración de la variable instructor dentro del if, dentro del contexto de ejecución en curso.
 -->
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
<!-- 
   Tony     //  imprime por consola la variable instructor previamente declarada como global
   Franco   //  imprime la variable declarada dentro de la función de closure o auto invocable, y no modifica la variable global ya que esta encapsulada por así decirlo
   Tony     //  imprime de nuevo por consola la la varaible global instructor
 -->
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
<!-- 
   The Flash     //  por la re-declaración en el if 
   Reverse Flash //  por la variable local del if
   The Flash     //  por la re-declaración del if
   Franco        //  por el alcance del let solo esta precente en su propio bloque de codigo. 
 -->
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        -> 2        // suma los valores relativos, transformando el string en int
"2" * "3"      -> 6        // suma ambos valores relativos transformando los string en int
4 + 5 + "px"   -> "9px"    // primero suma los valores y logo lo concatena
"$" + 4 + 5    -> "$45"    // toma todo como string y lo cancatena
"4" - 2        -> 2        // realiza al resta
"4px" - 2      -> NaN      // valor indeterminado, trata de restar 2 a una cadena 
7 / 0          -> infinity // cualquier valor dividido entre cero se indetermina pero cuando si son valores muy cercanos a 0 se tiende a infinito matemáticamente
{}[0]          -> {}[0]    // indefinido intenta buscar la posición dentro de un objeto vacio 
parseInt("09") -> 9        // convierte a entero un string con números 
5 && 2         -> 2        // operador de compuerta lógica And Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
2 && 5         -> 5        // operador de compuerta lógica And
5 || 0         -> 5        // operador de compuerta lógica Or Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
0 || 5         -> 5        // operador de compuerta lógica Or
[3]+[3]-[10]   -> 23       // concatena los 3 y le resta 10 por lo tanto qudaría "33"-10 = 23
3>2>1          -> false    // Operadores de mayor que...
[] == ![]      -> true     // prece ser que un array vacio es igual a su factorial?????'
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
<!--
   indefinido y luego 2, Ya que primero intenta imprimir la variable a pero aun no esta declarada luego busca la función y termina ambas funciones el memento del retorno del valor 2 e imprimiendo el valor retornado. 
-->
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
<!--
   retorna un error de indefinido ya que no hay una variable designada con el nombre que se quiere regresar y no imprime nada porque no se la instrucción 
-->
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
<!--
   primero imprime en la consola el nombre Aurelio de Rosa ya que es el argumento que se encuentra dentro del objeto prop: como fullname y es e valor que retornara, y después indefinido ya que existe la variable test con cierto valor asignado pero no una función. 
   tambien depende del interprete donde se haga
-->
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
<!-- 
     1
     4
     3
     2
     ya que primero imprime lo que está en secuencia concreta que seria 1 y 4 y logo imprime en el tiempo especificada cada función de setTimeout.
-->
```
