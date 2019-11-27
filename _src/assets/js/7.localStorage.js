'use strict';

const getFromLocalStorage = function() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputNameElement.value = userData.name;
    inputJobElement.value = userData.job;
  }
};
function handleDataInput() {
  const data = {
    name: inputNameElement.value,
    job: inputJobElement.value
  };

  localStorage.setItem('userData', JSON.stringify(data));
}
formFill.addEventLister('keyup', handleDataInput());

getFromLocalStorage();
