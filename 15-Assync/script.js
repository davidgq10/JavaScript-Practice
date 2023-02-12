'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const req = new XMLHttpRequest();
  req.addEventListener('load', reqListener);
  req.open('GET', `https://restcountries.com/v2/name/${country}`);
  req.send();

  function reqListener() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const card = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.nativeName}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(0)}m people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0].nativeName
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('afterend', card);
    countriesContainer.style.opacity = 1;
  }
};

getCountryData('peru');
getCountryData('costa rica');
getCountryData('japan');
getCountryData('china');
getCountryData('russia');
getCountryData('usa');
