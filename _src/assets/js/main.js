'use strict';


//DESIGN//

const inputPalette1 = document.querySelector('.js-form-palette1');
const inputPalette2 = document.querySelector('.js-form-palette2');
const inputPalette3 = document.querySelector('.js-form-palette3');
const card = document.querySelector('.js-card');

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

inputPalette1.addEventListener('click', paintPalette1);
inputPalette2.addEventListener('click', paintPalette2);
inputPalette3.addEventListener('click', paintPalette3);



// console.log('>> Ready :)');

const defaultName = 'Nombre Apellido';
const defaultJob = 'Front-end developer';
// const isNotFilled = '';
const cardNameElement = document.querySelector('.js-card-name');
const inputNameElement = document.querySelector('.js-form-name');
const cardJobElement = document.querySelector('.js-card-job');
const inputJobElement = document.querySelector('.js-form-job');
//validador función


//funcion pintar nombre y profesion

function formData() {
  const nameValue = inputNameElement.value;
  const jobValue = inputJobElement.value;
  // si nameValue es = a '', sería truthy
  if (nameValue) {
    cardNameElement.innerHTML = nameValue;
  } else {
    cardNameElement.innerHTML = defaultName;
  }
  if (jobValue) {
    cardJobElement.innerHTML = jobValue;
  } else {
    cardJobElement.innerHTML = defaultJob;
  }

}

///¿POR QUÉ METEMOS APELLIDO DENTRO DEL EVENTO SI NO LO UTILIZAMOS EN EL
//EVENTO DEL NAME?

inputNameElement.addEventListener('keyup', formData);
inputJobElement.addEventListener('keyup', formData);


//funcion iconos

const inputLinkedinElement = document.querySelector('.js-form-linkedin');
const linkedin = document.querySelector('.js-card-linkedin');
const inputGithubElement = document.querySelector('.js-form-github');
const github = document.querySelector('.js-card-github');
const inputEmailElement = document.querySelector('.js-form-email');
const email = document.querySelector('.js-card-email');
const inputTelElement = document.querySelector('.js-form-tel')
const tel = document.querySelector('.js-card-tel');


//para añadir o quitar el filtro
const filter = document.querySelector('.js-items--filter');

const iconLinkedin = document.querySelector('.js-linkedin');
const iconGithub = document.querySelector('.js-github');
const iconEmail = document.querySelector('.js-email');
const iconTel = document.querySelector('.js-tel');


///¿PODRÍAMOS METER HREF COMO VARIABLES Y LUEGO SUMARLE EL VALOR DEL INPUT?
//PORQUE DEL OTRO MODO LO AÑADE SI ESCRIBIMOS MÁS DE LA CUENTA

//const linkedin=(https//ww../)

function formIcon() {
  const linkedinValue = inputLinkedinElement.value;
  //linkedin.href=linkedin+linkedinValue;
  linkedin.href += linkedinValue;
  const githubValue = inputGithubElement.value;
  github.href += githubValue;
  const emailValue = inputEmailElement.value;
  email.href += emailValue;
  const telValue = inputTelElement.value;
  tel.href = telValue;


  if (linkedinValue) {
    iconLinkedin.classList.remove('js-items--filter');
  } else {
    iconLinkedin.classList.add('js-items--filter');
  }

  if (githubValue) {
    iconGithub.classList.remove('js-items--filter');
  } else {
    iconGithub.classList.add('js-items--filter');
  }

  if (emailValue) {
    iconEmail.classList.remove('js-items--filter');
  } else {
    iconEmail.classList.add('js-items--filter');
  }
  if (telValue) {
    iconTel.classList.remove('js-items--filter');
  } else {
    iconTel.classList.add('js-items--filter');
  }

}

inputLinkedinElement.addEventListener('keyup', formIcon);
inputGithubElement.addEventListener('keyup', formIcon);
inputEmailElement.addEventListener('keyup', formIcon);
inputTelElement.addEventListener('keyup', formIcon);







//funcion collapsable - para el sprint no hace falta que se cierren los demás


const collapsableTriggers = document.querySelectorAll('.js-collapsable--trigger');

function updateCollapsable(event) {
  const currentCollapsable = event.currentTarget.parentElement;

  currentCollapsable.classList.toggle('js-collapsable-open');
};

for (const item of collapsableTriggers) {
  item.addEventListener('click', updateCollapsable);
}
