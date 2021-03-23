let popup = document.querySelector('.popup');
let formElementName = document.querySelector('.popup__input_name_input'); 
let formElementJob = document.querySelector('.popup__input_job_input');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');
let save = document.querySelector('.popup__save');
let edit = document.querySelector('.profile__edit'); 
let close = document.querySelector('.popup__close');


let openPopup = function () {
	popup.classList.add('popup_open');
	formElementName.value = nameInput.textContent; 
	formElementJob.value = jobInput.textContent;
}

edit.addEventListener('click', function () {
	openPopup();
});

let closePopup = function () {
	popup.classList.remove('popup_open');
}

close.addEventListener('click', function () { 
	closePopup();
});

if (evt.keyCode === 13) {
	nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value;
	closePopup();
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value;
	closePopup();
};

save.addEventListener('submit', formSubmitHandler);