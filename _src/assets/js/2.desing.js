//constantes para campos "diseña" 

const inputPalette1 = document.querySelector('.js-form-palette1');
const inputPalette2 = document.querySelector('.js-form-palette2');
const inputPalette3 = document.querySelector('.js-form-palette3');
const card = document.querySelector('.js-card');

//funciones handler para pintar paletas

function paintPalette1() {
  card.classList.add('js-card-palette1');
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette3');
}

function paintPalette2() {
  card.classList.add('js-card-palette2');
  card.classList.remove('js-card-palette1');
  card.classList.remove('js-card-palette3');
}

function paintPalette3() {
  card.classList.add('js-card-palette3');
  card.classList.remove('js-card-palette2');
  card.classList.remove('js-card-palette1');
}

//funciones listener para pintar paletas

inputPalette1.addEventListener('click', paintPalette1);
inputPalette2.addEventListener('click', paintPalette2);
inputPalette3.addEventListener('click', paintPalette3);