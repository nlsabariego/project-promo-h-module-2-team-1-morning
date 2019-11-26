'use strict';

// CAMBIAR COLOR BOTÓN SHARE

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
//esta función la estamos llamando desde la DoAll, que está en el fill

//URL Y TWITTER

//constantes
const shareButtonOk = document.querySelector('.js-share-button');
const twitterContainer = document.querySelector('.js-share--url');

//función handler
function showUrlTwitter() {
  if (form.checkValidity() === true) {
    twitterContainer.classList.remove('js-share--url');
  } else {
    twitterContainer.classList.add('js-share--url');
  }
}

//función listener
shareButtonOk.addEventListener('click', showUrlTwitter);
