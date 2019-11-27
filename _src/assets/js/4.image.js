'use strict';

const fr = new FileReader(); //Creamos un nuevo objeto que llamaremos más adelante con la constant fr

//Elementos del DOM que necesitaremos

const uploadBtn = document.querySelector('.js-uploadBtn'); //botón añadir
const fileField = document.querySelector('.js-file-input'); // input imagen
const profileImage = document.querySelector('.js-image-profile'); //foto perfil de la card
const profilePreview = document.querySelector('.js-preview'); //preview
// const defaultImage = profileImage.style.backgroundImage =

// Con esta función gestionamos todo lo relativo a cargar/leer la imagen
function getImage(e) {
  // almacenamos en la constante myFile el primer archivo que cargamos desde nuestro pc
  debugger;
  const myFile = e.currentTarget.files[0];
  // establecemos dos órdenes sobre el objeto file reader
  // 1º cuando se produzca el evento cargar en el fr, se ejecuta la función setImage (está definida y explicada más adelante)
  fr.addEventListener('load', setImage);
  // 2º se le pide que lea los datos de la URL de myFile (es decir, del archivo que hemos cargado desde el ordenador)
  fr.readAsDataURL(myFile);
}
// Con la función setImage leemos la info de la imagen. Para ello definimos una variable llamada picture con un string vacío (cuando tengamos en cuenta las cookies del navegador estará relleno con el nombre de la variable donde almacenemos los datos ls, pero de momento se queda vacío al principio).

let picture = '';
function setImage() {
  // Una vez que cargamos la imagen con el FR, se rellena con el fr.result (que es una propiedad del objeto fr con la info de la foto que necesitamos para pintarla)
  picture = fr.result;
  // Por último, setImage también ejecuta la función previewImage, que se encarga de pintar los datos almacenados en picture (siempre y cuando no sea un string vacío) en los contenedores de la miniatura y la imagen de la card. Son background-image (no img src en el html), con lo que para verse correctamente hay que añadir bakcground-position:center, background-size: cover.
  previewImage();
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

// Estas últimas líneas ponen en marcha el botón que nos permite añadir una imagen desde nuestro PC. Hay un input type=file (que tenemos que ocultar en el css con un display: none) y un button que están a la par en el form (son hermanos).

function fakeFileClick(ev) {
  // Tenemos que dar dos órdenes para que funcione: parar el botón (preventDefalut)
  ev.preventDefault();
  // Y simular una especie de click automático en el input file (que ya hemos nombrado arriba del todo como fileField) para que se nos abra la ventana del ordenador para buscar la imagen que queremos seleccionar.
  fileField.click();
}

// Por último, los listener: uno en el botón de añadir imagen que, cuando haga click el usuario, tiene que poner en marcha todo lo anterior (prevenir botón y hacer click en el input). Y otro en el propio input, que cuando haya un cambio tiene que activar la función getImage (todo lo relacionado con cargar, leer y pintar la imagen.)

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);