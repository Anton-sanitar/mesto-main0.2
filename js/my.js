let popup = document.querySelector('.popup');
let formElementName = document.querySelector('.popup__input_name'); 
let formElementJob = document.querySelector('.popup__input_job');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');
let save = document.querySelector('.popup__save');
let edit = document.querySelector('.profile__edit'); 
let close = document.querySelector('.popup__close');

edit.addEventListener('click', function () {
	popup.classList.add('popup_open');
	formElementName.value = nameInput.textContent; 
	formElementJob.value = jobInput.textContent;
});

close.addEventListener('click', function () { 
	popup.classList.remove('popup_open');
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = formElementName.value; 
	jobInput.textContent = formElementJob.value;
	if (evt.keyCode === 13) {
		nameInput.textContent = formElementName.value; 
		jobInput.textContent = formElementJob.value;
		popup.classList.remove('popup_open');
	};
	popup.classList.remove('popup_open');
};

save.addEventListener('click', formSubmitHandler);