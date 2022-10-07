# JS Notes
## Fundamentals Part 1

### **<font color=orangered> Vinculando las scripts en nuestro HTML </font>**

Se debe colocar las scripts justo antes de la etiqueta de cierre del `</body>`;
esto permite que se cargue primero la página y luego las scripts. Esto es
especialmente importante si utiliza grandes librerías de js.

A condinuación se muestra un ejemplo de la colocación de la script, :

```html
<body>
  <!-- mi código html -->
  <script src="script.js"></script>
</body>
```

### **<font color=orangered> Alcance de variables (Scope) </font>**

- Las variables declaradas con `var` tienen un alcance global.
- Las variables `let` y `const` tienen un alcance de bloque.
- Un bloque se utiliza para agrupar sentencias, para defirnir un bloque se utilizan las corcheter ` {...} ` _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/block#:~:text=Una%20sentencia%20block%20se%20utiliza,por%20un%20par%20de%20llaves.)_
- Las variables con alcance de bloque solo podrán ser utilizadas dentro del bloque que fueron declaradas

<img src="https://pbs.twimg.com/media/EeVw-DOXgAAMtKk.jpg" alt="Variables scope" style="height: 250px; width:300px;"/>

#### **<font color=yellowgreen> Conversión y Cohersión </font>**
La conversión de variables se da cuando a travén de código se realiza la conversión de un tipo de variable a otro, por ejemplo:

```js
let myVar = "David" 
typeOf(myVar) // String
Boolean(myVar) // return True
Boolean('') // return False
Number("30") // return number 30
String(true)  // return 'true'
```
Mientras que que la coerción es la conversión automática que realiza JavaScript en funciones matemáticas y expresiones.

```js
alert( "6" / "2" + 2 ) //retunr 5
```

### **<font color=orangered> Precedencia de operadores (Operators precedence) </font>**

La precedencia de los operadores hace referencia a la prioridad de ejecución de
un operador, por ejemplo una multiplicación se ejecutará primero que una suma:

```js
const = 5 + 10 * 2
//Output:25 --- const = 5 + 10 * 2 = 5 + 20 = 25
```

Al mismo tiempo es importante tener en cuenta la dirección de ejecusión del
operador, ya que algunos se ejecutan de izquierda a derecha => y otros de
derecha a izquier <=. _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tabla)_

### **<font color=orangered> Truthy and Falsy Values </font>**

En JavaScript Todos los valores son verdaderos a menos que se definan como `false`. _[Ver más](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)_



En JavaScript los falsy values son:
 _[Ver más](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)_
```js
false; 
0;  //Cero
""; //Cadena vacía
null; 
undefined; 
NaN
```

### **<font color=orangered> Operadores lógicos y comparación </font>**  _[🌐](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tabla)_
```js
//Lógicos
&& //And 
|| //Or
!..//Not

//Comparación
== //Equality: two equality values
=== //Equality: two equals values and data types
>, <, >=, <=, in ...
```
### **<font color=orangered> Nullish coalescing operator (??) </font>** _[🌐](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)_


Este operador devolverá lo que se encuentre a la derecha si el valor de la izquierda es `null` o `undefined`, por ejemplo:

```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

const baz = 5 > 0 ?? 42;
console.log(baz);
// expected output: true
```
Para convinarlo con otros operadores lógicos se debe anidar con paréntesis lo que esté a la izquierda, ejemplo:

```js
const age = (null || undefined) ?? 5; // returns 5
```

### **<font color=orangered> El operador condicional ternario ( condición ? true expr : false expr ) </font>** _[🌐](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)_

Este operador se utiliza comunmente como un atajo para el `if`, por ejemplo:
```js
const Cuota = "La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");
//También es muy común utilizarlo con template literals
console.log(`El horario es: ${ isWeekDays ? '10am-10pm' : '9am-12pm'}`)
```
### **<font color=orangered> Declaracion de funciones </font>** _[🌐](https://es.javascript.info/function-expressions#:~:text=En%20JavaScript%2C%20una%20funci%C3%B3n%20no,un%20tipo%20de%20valor%20especial.&text=Existe%20otra%20sintaxis%20para%20crear,llama%20una%20Expresi%C3%B3n%20de%20Funci%C3%B3n.)_

Existen varias formas de declarar funciones en JavaScript y cada función constituye un bloque, la varibles declaradas dentro de una función estarán disponibles únicamente dentro del ámbito que fueron declaradas. Es importante tener en cuenta que en JavaScript toda función no es más que un valor especial.

#### **<font color=yellowgreen> Declaracion de función </font>**

- Son creadas por el motor de JavaScript
- Deben utilizar la palabra clave `function`.
- Debe tener un nombre el cual se coloca luego de la palabra clave`function`.
- Entre paréntesis se definen los parámetros que requerirá la función, separados por comas.
- Entre llaves se definen las instrucciones que deberá ejecutar la función o método.
- Para retornar un valor se debe utilicar la palabra clave `return`.
- Es importante tener claridad que una función **podrá devolver solo una cosa**, si se desea obtener más de un valor se deberá simular el comportamiento con un array u objeto con lo indica este artículo: _[Ver más](https://www.neoguias.com/devolver-multiples-valores-javascript/)_

Ejemplos:

```js

function NombreFunción1 (Parámetro1, Parámetro2){
  - instrucciones
  return something
}

//No requiere parámetros
function NombreFunción2 (){
  - instrucciones
  return valorRetornar
}

//No devolverá ningún valor
function NombreFunción3 (parametro1,parametro2){
  - instrucciones
}

//Llamada a la función y almacenamiento de valor retornado

miVariable1 = NombreFunción1(a,b)
miVariable2 = NombreFunción2()

//Solo llamada a función
NombreFunción1(5,B)
NombreFunción2()
NombreFunción3(miVarible,true)

```
#### **<font color=yellowgreen> Expresión de función </font>**

- Es importante tener en cuenta que las expresiones de función son creadas cuando la ejecusión llegue a la declaración, por lo no podrá ser llamada antes de esto en el código ya que generaría un error.

La funciones pueden declararse como una expresión de función, como se muestra en el siguiente ejemplo:


```js
const Name = function(parameter1,parameter2){
  - instructions
  return ValueToReturn
}

//Se podría llamar de la siguiente forma:

Name(valor1,valor2)

```

#### **<font color=yellowgreen> Función de flecha </font>**

La función de flecha es otra forma moderna de realizar la declaración de una función, por ejemplo:

```js
const Name => (parameter1,parameter2,...){
  - declarations
  return ValueToReturn
}

//Se podría llamar de la siguiente forma:

Name(valor1)

```
Este tipo de función tiene propiedades muy importante, como por ejemplo:

- No tienen `this`
- No tienen `arguments`
- No se pueden llamar con `new`
- Tampoco tienen `super`
  
_[Ver más](https://es.javascript.info/arrow-functions)_


### **<font color=orangered> Arrays </font>**

Los arrays son objectos que pueden almacenar una serie de elementos de cualquier tipo en forma ordenada, los arrays son mutables y poseen una serie de métodos que permiten su mutación.

#### **<font color=yellowgreen> Declarando un array </font>**

Para declarar un array se utiliza la siguiente sintaxis:

```js
//Declarando un array vacío
const myArrName = []

/*Declarando un array con muchos tipos de valores 
(cada valor debe ir separado por comas) [String, number, null, true, object, function]*/
const myArrName = ["String", 5, null, true, {name:"David", lastname:"Garbanzo", age:26}, ()=>{alert("Hellow!")} ];
```
Para acceder a un valor específico de un array se utiliza la siguiente estructura:


```js

const myArrName = [2,5,8,9,()=>{consle.log("Hellow!")}];
//Se poner el valor del elemento entre paréntesis cuadrados
console.log(myArrName[1]) //imprime: 5
console.log(myArrName[4]()) //imprime: Hellow!
```

Métodos de un array (from MDN): _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#operaciones_habituales)_


| Método         | Descripción                                                                                                                                                                                                                                                                                             | MDN Link                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| at             | El método `at()` recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.                                                                                                  | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at )_              |
| concat         | El método `concat()` se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.                                                                                                                                                                  | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)_           |
| copyWithin     | El método `copyWithin()` transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.                                                                                                                               | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin )_      |
| entries        | El método `entries()` retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.                                                                                                                                                                          | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/entries )_         |
| every          | El método `every()` determina si todos los elementos en el array satisfacen una condición.                                                                                                                                                                                                              | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every )_           |
| fill           | El método `fill()` cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.                                                                                                | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/fill )_            |
| filter         | El método `filter()` crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.                                                                                                                                                                             | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at )_              |
| find           | El método `find()` devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.                                                                                                                                                                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find )_            |
| findIndex      | El método `findIndex()` devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.                                                                                                                                            | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex )_       |
| findLast       | El método `findLast()` devuelve el valor del último elemento de un array que cumpla con la función de prueba proporcionada, si ningún elemento cumple con el criterio devuelve `undefined`.                                                                                                             | _[Ver más](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)_      |
| findLastIndex  | El método `findLastIndex()` devuelve el índice del último elemento de un array que cumpla con la función de prueba proporcionada, si ningún elemento cumple con el criterio devuelve -1.                                                                                                                | _[Ver más](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)_ |
| flat     🧪     | El método `flat()` crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.                                                                                                                                                            | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)_             |
| flatMap    🧪   | El método `flatMap()` primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.         | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap )_         |
| forEach        | El método `forEach()` ejecuta la función indicada una vez por cada elemento del array.                                                                                                                                                                                                                  | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach )_         |
| from           | El método `Array.from()` crea una nueva instancia de Array a partir de un objeto iterable.                                                                                                                                                                                                              | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)_             |
| includes       | El método `includes()` determina si una matriz incluye un determinado elemento, devuelve `true` o `false` según corresponda.                                                                                                                                                                            | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes )_        |
| indexOf        | El método `indexOf()` retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.                                                                                                                                                 | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf )_         |
| isArray        | El método isArray() determina si el valor pasado es un Array.                                                                                                                                                                                                                                           | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray )_         |
| join           | El método `join()` une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.                                                                                                                                                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join )_            |
| keys           | El método `keys()` devuelve un nuevo objeto Array Iterator que contiene las claves de índice con las que acceder a cada elemento en el array.                                                                                                                                                           | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/keys )_            |
| lastIndexOf    | El método `lastIndexOf()` devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.                                                                | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf )_     |
| map            | El método `map()` crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.                                                                                                                                                                     | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map )_             |
| of             | El método `Array.of()` crea una nueva instancia Array con un número variable de elementos pasados como argumento, independientemente del número o del tipo.                                                                                                                                             | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/of )_              |
| pop            | El método `pop()` elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.                                                                                                                                                                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop )_             |
| push           | El método `push()` añade uno o más elementos al final de un array y devuelve la nueva longitud del array.                                                                                                                                                                                               | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push )_            |
| reduce         | El método `reduce()` ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.                                                                                                                                                                          | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce )_          |
| reduceRight    | El método `reduceRight()` Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.                                                                                                                                 | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight )_     |
| reverse        | El método `reverse()` invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.                                                                                                                                               | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse )_         |
| shift          | El método `shift()` elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.                                                                                                                                                                                      | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift )_           |
| slice          | El método `slice()` devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.                                                                                                                            | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice )_           |
| some           | El método `some()` comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.                                                                                                                                                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some )_            |
| sort           | El método `sort()` ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort )_            |
| splice         | El método `splice()` cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.                                                                                                                                                                                    | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice )_          |
| toLocaleString | El método `toLocaleString()` devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su método toLocaleString y dichos Strings son separados por un caracter específico para la localidad (como una coma para la separación de decimales “,”). | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString )_  |
| toString       | El método `toString()` devuelve una cadena de caracteres representando el array especificado y sus elementos.                                                                                                                                                                                           | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toString )_        |
| unshift        | El método `unshift()` agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.                                                                                                                                                                                           | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift )_         |
| values         | El método `values()` devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.                                                                                                                                                                                       | _[Ver más](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/values )_          |


### **<font color=orangered> Objetos </font>**  _[🌐](https://es.javascript.info/object-basics)_


Un objecto en JavaScript corresponde a una colección de propiedades y sus respectivos valores.


```js
//Declarando un objeto vacío
const myObj = {}
/*Declarando un objeto varias propiedades*/
const myObj = {Name:"David", "First Jop": "CRC",Age: calcAge(){this.2022-BirdYear}, Dogs: [{Name:"Jack", Color:"Black"},{Name:"Zeus", Color:"Black-White"}]}
```
Se puede acceder a los valores de un objeto de la siguiente manera:
```js
//Acceso a propiedades por medio de la notación de puntuación
console.log(myObj.Name) //output: David
console.log(myObj.Dogs[1].Name) //output: Zeus 
//Se poner el nombre de la propiedad entre paréntesis cuadrados
console.log(myObj['Name']) //output: David
console.log(myObj.Dogs[1]['Name']) //output: Zeus 
```
Se pueden añadir nuevas propiedades de la siguiente manera:

```js
myObj.Mail = "dgarbanzo@gmail.com" //OR
myObj['Mail'] = "dgarbanzo@gmail.com"
```
Se pueden eliminar propiedades de la siguiente manera

```js
delete myObj.Mail //OR
delete myObj['Mail']
```