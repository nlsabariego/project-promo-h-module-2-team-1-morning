/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const fr = new FileReader();

const uploadBtn = document.querySelector('.js-uploadBtn');
const fileField = document.querySelector('.js-file-input');
const profileImage = document.querySelector('.js-image-profile');
const profilePreview = document.querySelector('.js-preview');
// const defaultImage = profileImage.style.backgroundImage =

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', setImage);
  fr.readAsDataURL(myFile);
}

let picture = '';
function setImage() {
  picture = fr.result;
  doAll();
}

function previewImage() {
  if (picture === '') {
    profileImage.style.backgroundImage =
      'url(http://localhost:3000/assets/images/paquita.jpg)';
    profilePreview.style.backgroundImage = 'url()';
  } else {
    profileImage.style.backgroundImage = `url(${picture})`;
    profilePreview.style.backgroundImage = `url(${picture})`;
  }
}

function fakeFileClick(ev) {
  ev.preventDefault();
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
