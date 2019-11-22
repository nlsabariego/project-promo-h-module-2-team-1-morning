'use strict';

const collapsableTriggers = document.querySelectorAll('.js-collapsable--trigger');

function updateCollapsable(event) {
  const currentCollapsable = event.currentTarget.parentElement;

  //Compruebo si está abierto
  if (currentCollapsable.classList.contains('js-collapsable-open')) {
    //Si está abierto, lo puedo cerrar
    currentCollapsable.classList.remove('js-collapsable-open')

  } else {
    //Si está cerado:
    //lo cierro todos
    for (const item of collapsableTriggers) {
      item.parentElement.classList.remove('js-collapsable-open');
    }
    //Abro el correcto
    currentCollapsable.classList.add('js-collapsable-open');
  }

}

for (const item of collapsableTriggers) {
  item.addEventListener('click', updateCollapsable);
}
