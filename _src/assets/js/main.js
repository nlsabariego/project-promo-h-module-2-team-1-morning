'use strict';

// console.log('>> Ready :)');

const defaultName = 'Nombre Apellido';
const defaultJob = 'Front-end developer';
const isNotFilled = "";
const cardNameElement = document.querySelector('.js-card-name');
const inputNameElement = document.querySelector('.js-form-name');
const cardJobElement = document.querySelector('.js-card-job');
const inputJobElement = document.querySelector('.js-form-job');
//validador función


//funcion pintar nombre y profesion

function formData() {
  const nameValue = inputNameElement.value;
  const jobValue = inputJobElement.value;
  if (nameValue !== isNotFilled) {
    cardNameElement.innerHTML = nameValue;
  } else {
    cardNameElement.innerHTML = defaultName;
  }
  if (jobValue !== isNotFilled) {
    cardJobElement.innerHTML = jobValue;
  } else {
    cardJobElement.innerHTML = defaultJob;
  }

}


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


function formIcon() {
  const linkedinValue = inputLinkedinElement.value;
  linkedin.href += linkedinValue;
  const githubValue = inputGithubElement.value;
  github.href += githubValue;
  const emailValue = inputEmailElement.value;
  email.href += emailValue;
  const telValue = inputTelElement.value;
  tel.href = telValue;


  if (linkedinValue !== isNotFilled) {
    iconLinkedin.classList.remove('js-items--filter');
  } else {
    iconLinkedin.classList.add('js-items--filter');
  }

  if (githubValue !== isNotFilled) {
    iconGithub.classList.remove('js-items--filter');
  } else {
    iconGithub.classList.add('js-items--filter');
  }

  if (emailValue !== isNotFilled) {
    iconEmail.classList.remove('js-items--filter');
  } else {
    iconEmail.classList.add('js-items--filter');
  }
  if (telValue !== isNotFilled) {
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
