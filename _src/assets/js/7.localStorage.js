/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const formContainer = document.querySelector('.js-form');

const getDataObj = function () {
  const inputPalleteChecked = document.querySelector(
    'input[name="palette"]:checked'
  );
  const data = {
    name: inputNameElement.value,
    job: inputJobElement.value,
    linkedin: inputLinkedinElement.value,
    github: inputGithubElement.value,
    email: inputEmailElement.value,
    phone: inputTelElement.value,
    palette: parseInt(inputPalleteChecked.value),
    photo: picture
  };
  return data;
};

const setToLocalStorage = function () {
  const lsData = getDataObj();
  localStorage.setItem('userData', JSON.stringify(lsData));
};

const getFromLocalStorage = function () {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputNameElement.value = userData.name;
    inputJobElement.value = userData.job;
    inputLinkedinElement.value = userData.linkedin;
    inputGithubElement.value = userData.github;
    inputEmailElement.value = userData.email;
    inputTelElement.value = userData.phone;
    picture = userData.photo;
    document.querySelector(
      `input[name="palette"][value="${userData.palette}"]`
    ).checked = true;
  }
};

getFromLocalStorage();
doAll();
