//constantes para campos "diseña"

'use strict';

const inputPalette1 = document.querySelector('.js-form-palette1');
const inputPalette2 = document.querySelector('.js-form-palette2');
const inputPalette3 = document.querySelector('.js-form-palette3');
const card = document.querySelector('.js-card');

//funciones handler para pintar paletas

// function paintPalette1() {
//   card.classList.add('js-card-palette1');
//   card.classList.remove('js-card-palette2');
//   card.classList.remove('js-card-palette3');
// }

// function paintPalette2() {
//   card.classList.add('js-card-palette2');
//   card.classList.remove('js-card-palette1');
//   card.classList.remove('js-card-palette3');
// }

// function paintPalette3() {
//   card.classList.add('js-card-palette3');
//   card.classList.remove('js-card-palette2');
//   card.classList.remove('js-card-palette1');
// }

// eslint-disable-next-line no-unused-vars
function paintPalette() {
  card.classList.remove('js-card-palette1');
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette3');
  const number = document.querySelector('.design__form--radio:checked').value;
  card.classList.add('js-card-palette' + number);
}

//funciones listener para pintar paletas

inputPalette1.addEventListener('click', doAll);
inputPalette2.addEventListener('click', doAll);
inputPalette3.addEventListener('click', doAll);
