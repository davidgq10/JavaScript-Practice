# JS Notes
## Fundamentals Part 1

### **<font color=orangered> Vinculando las scripts </font>**

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

