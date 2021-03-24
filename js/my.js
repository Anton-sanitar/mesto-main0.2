let popup = document.querySelector('.popup');
let formElementName = document.querySelector('.popup__input_name_input'); 
let formElementJob = document.querySelector('.popup__input_job_input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');
let edit = document.querySelector('.profile__edit'); 
let close = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');


let openPopup = function () {
	popup.classList.add('popup_open');
	formElementName.value = nameInput.textContent; 
	formElementJob.value = jobInput.textContent;
}

edit.addEventListener('click', openPopup);

let closePopup = function () {
	popup.classList.remove('popup_open');
}

close.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value;
	closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);