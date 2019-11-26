'use strict';

//NOMBRE Y PROFESIÓN

//constantes para nombre y profesión

const defaultName = 'Nombre Apellido';
const defaultJob = 'Front-end developer';
const cardNameElement = document.querySelector('.js-card-name');
const inputNameElement = document.querySelector('.js-form-name');
const cardJobElement = document.querySelector('.js-card-job');
const inputJobElement = document.querySelector('.js-form-job');

//constante para el botón reset

const resetButton = document.querySelector('.js-reset-button');

function resetButtonHandler() {
  const formFill = document.querySelector('#js-form-fill');
  const formDesign = document.querySelector('#js-form-design');
  formFill.reset();
  formDesign.reset();
  nameData();
  jobData();
  paintPalette(1);
}

//Función para cambiar de color el botón de share
const shareButton = document.querySelector('.js-share-button');
const form = document.querySelector('.js-form');
function checkForm() {
  if (form.checkValidity() === true) {
    shareButton.classList.remove('js-button--filter');
  } else {
    shareButton.classList.add('js-button--filter');
  }
}

//Función handler que reparte

function doAll() {
  paintPalette();
  nameData();
  jobData();
  formIcon();
  checkForm();
}

resetButton.addEventListener('click', resetButtonHandler);

//función handler pintar nombre

function nameData() {
  const nameValue = inputNameElement.value;
  if (nameValue) {
    cardNameElement.innerHTML = nameValue;
  } else {
    cardNameElement.innerHTML = defaultName;
  }
}

//función handler para pintar profesión
function jobData() {
  const jobValue = inputJobElement.value;
  if (jobValue) {
    cardJobElement.innerHTML = jobValue;
  } else {
    cardJobElement.innerHTML = defaultJob;
  }
}

//función listeners para pintar nombre y profesión

inputNameElement.addEventListener('keyup', doAll);
inputJobElement.addEventListener('keyup', doAll);

//ICONOS

//constantes para enlazar con los links de los iconos

const inputLinkedinElement = document.querySelector('.js-form-linkedin');
const linkedin = document.querySelector('.js-card-linkedin');
const inputGithubElement = document.querySelector('.js-form-github');
const github = document.querySelector('.js-card-github');
const inputEmailElement = document.querySelector('.js-form-email');
const email = document.querySelector('.js-card-email');
const inputTelElement = document.querySelector('.js-form-tel');
const tel = document.querySelector('.js-card-tel');

//constantes para añadir o quitar el filtro de los iconos

const filter = document.querySelector('.js-items--filter');
const iconLinkedin = document.querySelector('.js-linkedin');
const iconGithub = document.querySelector('.js-github');
const iconEmail = document.querySelector('.js-email');
const iconTel = document.querySelector('.js-tel');

//función handler para enlazar links iconos y añadir filtros color

function formIcon() {
  //función enlazar los links
  const linkedinValue = inputLinkedinElement.value;
  //linkedin.href=linkedin+linkedinValue; ANA?? ver Main
  linkedin.href += linkedinValue;
  const githubValue = inputGithubElement.value;
  github.href += githubValue;
  const emailValue = inputEmailElement.value;
  email.href += emailValue;
  const telValue = inputTelElement.value;
  tel.href = telValue;

  //condiciones para añadir-quitar filtros de color ¿podríamos separarlas???
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

//funciones listener de los iconos

inputLinkedinElement.addEventListener('keyup', doAll);
inputGithubElement.addEventListener('keyup', doAll);
inputEmailElement.addEventListener('keyup', doAll);
inputTelElement.addEventListener('keyup', doAll);
