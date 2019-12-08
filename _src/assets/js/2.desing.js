/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

//constantes para campos "diseña"

'use strict';

const inputPalette1 = document.querySelector('.js-form-palette1');
const inputPalette2 = document.querySelector('.js-form-palette2');
const inputPalette3 = document.querySelector('.js-form-palette3');
const inputPalette4 = document.querySelector('.js-form-palette4');
const card = document.querySelector('.js-card');

//función handler para pintar paletas

function paintPalette() {
  debugger;
  card.classList.remove('js-card-palette1');
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette3');
  card.classList.remove('js-card-palette4');
  const number = document.querySelector('.design__form--radio:checked').value;
  card.classList.add('js-card-palette' + number);
}

//funciones listener para pintar paletas

inputPalette1.addEventListener('click', doAll);
inputPalette2.addEventListener('click', doAll);
inputPalette3.addEventListener('click', doAll);
inputPalette4.addEventListener('click', doAll);
