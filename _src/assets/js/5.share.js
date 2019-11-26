'use strict';

//URL Y TWITTER

//constantes
const shareButtonOk = document.querySelector('.js-share-button');
const twitterContainer = document.querySelector('.js-share--url');

//función handler
function showUrlTwitter() {
  if (form.checkValidity() === true) {
    twitterContainer.classList.remove('js-share--url');
  }
}

//función listener
shareButtonOk.addEventListener('click', showUrlTwitter);
