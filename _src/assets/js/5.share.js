'use strict';

// CAMBIAR COLOR BOTÓN SHARE

//Función para cambiar de color el botón de share
const shareButton = document.querySelector('.js-share-button');
const form = document.querySelector('.js-form');
function checkForm() {
  if (form.checkValidity() === true) {
    shareButton.classList.remove('js-button--filter');
    shareButton.removeAttribute('disabled');
  } else {
    shareButton.classList.add('js-button--filter');
    shareButton.setAttribute('disabled', true);
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
    // console.log("entroooo");
    // fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card", {
    //   method: "POST",
    //   body: JSON.stringify(getDataObj),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .catch(error => console.error("Error:", error))
    //   .then(response => console.log("Success:", response));
  } else {
    twitterContainer.classList.add('js-share--url');
  }
}

//función listener
shareButtonOk.addEventListener('click', showUrlTwitter);
