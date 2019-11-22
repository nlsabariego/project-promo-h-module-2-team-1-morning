"use strict";

const collapsableTriggers = document.querySelectorAll(
  ".js-collapsable--trigger"
);

function updateCollapsable(event) {
  const currentCollapsable = event.currentTarget.parentElement;

  currentCollapsable.classList.toggle("js-collapsable-open");
}

for (const item of collapsableTriggers) {
  item.addEventListener("click", updateCollapsable);
}
