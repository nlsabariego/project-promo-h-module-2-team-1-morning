"use strict";const inputPalette1=document.querySelector(".js-form-palette1"),inputPalette2=document.querySelector(".js-form-palette2"),inputPalette3=document.querySelector(".js-form-palette3"),card=document.querySelector(".js-card");function paintPalette(){card.classList.remove("js-card-palette1"),card.classList.remove("js-card-palette2"),card.classList.remove("js-card-palette3");const e=document.querySelector(".design__form--radio:checked").value;card.classList.add("js-card-palette"+e)}inputPalette1.addEventListener("click",doAll),inputPalette2.addEventListener("click",doAll),inputPalette3.addEventListener("click",doAll);const formFill=document.querySelector("#js-form-fill"),defaultName="Nombre Apellido",defaultJob="Profesión",cardNameElement=document.querySelector(".js-card-name"),inputNameElement=document.querySelector(".js-form-name"),cardJobElement=document.querySelector(".js-card-job"),inputJobElement=document.querySelector(".js-form-job");function nameData(){const e=inputNameElement.value;cardNameElement.innerHTML=e||defaultName}function jobData(){const e=inputJobElement.value;cardJobElement.innerHTML=e||defaultJob}inputNameElement.addEventListener("keyup",doAll),inputJobElement.addEventListener("keyup",doAll);const resetButton=document.querySelector(".js-reset-button");function resetButtonHandler(){const e=document.querySelector("#js-form-design");formFill.reset(),e.reset(),picture="",doAll()}resetButton.addEventListener("click",resetButtonHandler);const inputLinkedinElement=document.querySelector(".js-form-linkedin"),linkedin=document.querySelector(".js-card-linkedin"),inputGithubElement=document.querySelector(".js-form-github"),github=document.querySelector(".js-card-github"),inputEmailElement=document.querySelector(".js-form-email"),email=document.querySelector(".js-card-email"),inputTelElement=document.querySelector(".js-form-tel"),tel=document.querySelector(".js-card-tel"),filter=document.querySelector(".js-items--filter"),iconLinkedin=document.querySelector(".js-linkedin"),iconGithub=document.querySelector(".js-github"),iconEmail=document.querySelector(".js-email"),iconTel=document.querySelector(".js-tel");function formIcon(){const e=inputLinkedinElement.value;linkedin.href=`https://www.linkedin.com/in/${e}`;const t=inputGithubElement.value;github.href=`https://github.com/${t}`;const l=inputEmailElement.value;email.href=`mailto:${l}`;const n=inputTelElement.value;tel.href=n,e?iconLinkedin.classList.remove("js-items--filter"):iconLinkedin.classList.add("js-items--filter"),t?iconGithub.classList.remove("js-items--filter"):iconGithub.classList.add("js-items--filter"),l?iconEmail.classList.remove("js-items--filter"):iconEmail.classList.add("js-items--filter"),n?iconTel.classList.remove("js-items--filter"):iconTel.classList.add("js-items--filter")}function doAll(){paintPalette(),nameData(),jobData(),formIcon(),checkForm(),previewImage()}inputLinkedinElement.addEventListener("keyup",doAll),inputGithubElement.addEventListener("keyup",doAll),inputEmailElement.addEventListener("keyup",doAll),inputTelElement.addEventListener("keyup",doAll);const fr=new FileReader,uploadBtn=document.querySelector(".js-uploadBtn"),fileField=document.querySelector(".js-file-input"),profileImage=document.querySelector(".js-image-profile"),profilePreview=document.querySelector(".js-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",setImage),fr.readAsDataURL(t)}let picture="";function setImage(){picture=fr.result,previewImage()}function previewImage(){""===picture?(profileImage.style.backgroundImage="url(http://localhost:3000/assets/images/paquita.jpg)",profilePreview.style.backgroundImage="url()"):(profileImage.style.backgroundImage=`url(${picture})`,profilePreview.style.backgroundImage=`url(${picture})`)}function fakeFileClick(e){e.preventDefault(),fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const shareButton=document.querySelector(".js-share-button"),form=document.querySelector(".js-form");function checkForm(){!0===form.checkValidity()?shareButton.classList.remove("js-button--filter"):shareButton.classList.add("js-button--filter")}const shareButtonOk=document.querySelector(".js-share-button"),twitterContainer=document.querySelector(".js-share--url");function showUrlTwitter(){!0===form.checkValidity()?twitterContainer.classList.remove("js-share--url"):twitterContainer.classList.add("js-share--url")}shareButtonOk.addEventListener("click",showUrlTwitter);const collapsableTriggers=document.querySelectorAll(".js-collapsable--trigger");function updateCollapsable(e){const t=e.currentTarget.parentElement;if(t.classList.contains("js-collapsable-open"))t.classList.remove("js-collapsable-open");else{for(let e=0;e<collapsableTriggers.length;e++)collapsableTriggers[e].parentElement.classList.remove("js-collapsable-open");t.classList.add("js-collapsable-open")}}for(let e=0;e<collapsableTriggers.length;e++)collapsableTriggers[e].addEventListener("click",updateCollapsable);const formContainer=document.querySelector(".js-form"),handleDataInput=function(){console.log("aqui tecleo"),console.log("aqui cambio de input");const e=document.querySelector('input[name="palette"]:checked'),t={name:inputNameElement.value,job:inputJobElement.value,linkedin:inputLinkedinElement.value,github:inputGithubElement.value,email:inputEmailElement.value,tel:inputTelElement.value,palette:e.value};localStorage.setItem("userData",JSON.stringify(t))},getFromLocalStorage=function(){const e=JSON.parse(localStorage.getItem("userData"));null!==e&&(inputNameElement.value=e.name,inputJobElement.value=e.job,inputLinkedinElement.value=e.linkedin,inputGithubElement.value=e.github,inputEmailElement.value=e.email,inputTelElement.value=e.tel,document.querySelector(`input[name="palette"][value="${e.palette}"]`).checked=!0)};window.addEventListener("keyup",handleDataInput),window.addEventListener("change",handleDataInput),getFromLocalStorage(),doAll();