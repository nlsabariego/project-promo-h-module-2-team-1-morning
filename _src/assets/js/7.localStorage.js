'use strict';

const formContainer = document.querySelector('.js-form');

const getDataObj = function() {
  //obtenemos solamente el input de tipo radio que está selecionado buscando por su nombre
  //y para buscar con querySelector una propiedad es con :checked
  const inputPalleteChecked = document.querySelector(
    'input[name="palette"]:checked'
  );
  const data = {
    name: inputNameElement.value,
    job: inputJobElement.value,
    linkedin: inputLinkedinElement.value,
    github: inputGithubElement.value,
    email: inputEmailElement.value,
    tel: inputTelElement.value,
    palette: parseInt(inputPalleteChecked.value),
    photo: picture
  };
  return data;
};

const setToLocalStorage = function() {
  const lsData = getDataObj();
  localStorage.setItem('userData', JSON.stringify(lsData));
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
    picture = userData.photo;
    //buscamos el radio que tiene el mismo valor que hemos guardado en la localStorage y
    //lo checkeamos (usamos checked como propiedad)
    document.querySelector(
      `input[name="palette"][value="${userData.palette}"]`
    ).checked = true;
  }
};

//duda Miguel?
//entramos en el evento cuando levantamos la tecla
// window.addEventListener('keyup', handleDataInput);
//entramos en el evento cuando cambiamos de campo por lo que los cambios
//solo se guardan en la caché cuando cambiamos de input
// window.addEventListener('change', handleDataInput);

getFromLocalStorage();
doAll();
