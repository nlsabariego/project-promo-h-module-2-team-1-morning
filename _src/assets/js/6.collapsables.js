'use strict';

const collapsableTriggers = document.querySelectorAll(
  '.js-collapsable--trigger'
);

function updateCollapsable(event) {
  const currentCollapsable = event.currentTarget.parentElement;


  if (currentCollapsable.classList.contains('js-collapsable-open')) {
    currentCollapsable.classList.remove('js-collapsable-open');
  } else {
    for (let i = 0; i < collapsableTriggers.length; i++) {
      collapsableTriggers[i].parentElement.classList.remove(
        'js-collapsable-open'
      );
    }
    currentCollapsable.classList.add('js-collapsable-open');
    window.scroll(0, 100);
  }
}

for (let i = 0; i < collapsableTriggers.length; i++) {
  collapsableTriggers[i].addEventListener('click', updateCollapsable);
}
