'use strict';

const formContainer = document.querySelector('.js-form');
const body = document.querySelector('body');

const handleDataInput = function() {
  const data = {
    name: inputNameElement.value,
    job: inputJobElement.value,
    linkedin: inputLinkedinElement.value,
    github: inputGithubElement.value,
    email: inputEmailElement.value,
    tel: inputTelElement.value
  };
  localStorage.setItem('userData', JSON.stringify(data));
};

const getFromLocalStorage = function() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputNameElement.value = userData.name;
    inputJobElement.value = userData.job;
    inputLinkedinElement.value = userData.linkedin;
    inputGithubElement.value = userData.github;
    inputEmailElement.value = userData.email;
    inputTelElement.value = userData.tel;
  }
};

body.addEventListener('keyup', handleDataInput);

getFromLocalStorage();
doAll();
