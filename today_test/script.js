"use-strict";

const div1 = document.createElement("div");
div1.innerHTML = `<span style="background-color: lime;font-size:200px">Last element</span>`;

// ✅ Insert element as last in body
document.body.appendChild(div1);

// ✅ Insert element as first in body
document.body.insertAdjacentElement("afterbegin", div2);

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
