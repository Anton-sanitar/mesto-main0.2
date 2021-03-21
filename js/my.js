let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job'); 
let formElementName = document.querySelector('.popup__item_name'); 
let formElementJob = document.querySelector('.popup__item_job');
let save = document.querySelector('.popup__save');
 
formElementName.value = nameInput.textContent; 
formElementJob.value = jobInput.textContent; 
 
function formSubmitHandler (evt) { 
    evt.preventDefault(); 
    nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value; 
} 
 
save.addEventListener('submit', formSubmitHandler); 
 
save.addEventListener('click', function () { 
	nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value; 
	popupСlose();
});    
 
 
window.addEventListener('keydown', function(e) { 
    if (e.keyCode === 13) { 
      	nameInput.textContent = formElementName.value; 
		jobInput.textContent = formElementJob.value; 
		popupСlose();
    } 
  });  
 
let popup = document.querySelector('.popup');
let edit = document.querySelector('.profile__edit'); 
let close = document.querySelector('.popup__close');
 
edit.addEventListener('click', function () {
	popupOpen();
});

let popupOpen = function () {
	popup.classList.add('popup_open');
}

close.addEventListener('click', function () { 
    popupСlose(); 
});

let popupСlose = function () {
	popup.classList.remove('popup_open');
}