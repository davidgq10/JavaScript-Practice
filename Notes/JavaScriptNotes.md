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

//Operadores modernos

//OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
```

Operadores modernos (SPREAD and REST operators): _[Ver más](/09-Data-Structures-and-Modern-Operators/4-modernOperators.js)_


#### **<font color=yellowgreen> Short Circuiting </font>**
```js
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');
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

Métodos de un array (from MDN): _[Ver más](/Notes/Arrays/ArraysMethods.md)_

Destructurando Arrays: _[Ver más](/09-Data-Structures-and-Modern-Operators/1-destructuringArrays.js)_



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

Destructurando objetos: _[Ver más](/09-Data-Structures-and-Modern-Operators/2-destructuringObjects.js)_

### **<font color=orangered> Set </font>**  _[🌐](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)_

Set es básicamente una colección de valores únicos.

Para declararlo se utiliza la siguiente sintáxis:

```js
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // output: { 'Pasta', 'Pizza', 'Risotto' }

//En los SET el orden NO importa, por lo que NO se puede utilizar como array, ejemplo: ordersSet[1] = undefined
```

`Set` tiene varios métodos, al igual que un array, como por ejemplo: `has`, `add`, `delete`.

Ejemplos de operaciones con `Set`: _[Ver más](/09-Data-Structures-and-Modern-Operators/5-Set%20data%20structure.js)_

### **<font color=orangered> Map </font>**  _[🌐](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)_

Para declararlo se utiliza la siguiente sintáxis:

```js
//To create a new map we use the next sentense
const rest = new Map();
```
Con `Map` las claves pueden ser cualquier tipo de valor
```js
//Then we can add new elements to the map with SET method
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

//When we use set method also returns the map, and we can print it.
console.log(rest.set(2, 'Lisbon, Portugal'));
/*Output:
0: {"name" => "Classico Italiano"}
1: {1 => "Firenze, Italy"}
2: {2 => "Lisbon, Portugal"}*/
```

Ejemplos de operaciones con `Map`: _[Ver más](/09-Data-Structures-and-Modern-Operators/6-Map%20data%20structure.js)_