const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddCards = document.querySelector('.popup_add_cards');
const formElementName = document.querySelector('.popup__input_name_input'); 
const formElementJob = document.querySelector('.popup__input_job_input'); 
const nameInput = document.querySelector('.profile__name'); 
const jobInput = document.querySelector('.profile__job'); 
const edit = document.querySelector('.profile__edit');
const buttonAddCards = document.querySelector('.profile__add');
const saveCard = document.querySelector('.popup__save_card');
const popupFormEditProfile = document.querySelector('.popup__form_edit_profile');
const popupFormAddCards = document.querySelector('.popup__form_add_cards');
const cardsContainer = document.querySelector('.cards');
const cardContainer = document.querySelector('.card');
const formCardName = document.querySelector('.popup__input_title_input');  
const formCardLink = document.querySelector('.popup__input_link_input');
const popupOpenImg = document.querySelector('.popup_open_img');
const popupContainers = document.querySelector('.popup');

const openEditProfile = function () { 
	openPopup(popupEditProfile);
	formElementName.value = nameInput.textContent;  
	formElementJob.value = jobInput.textContent; 
}

const overlay = function(popupContainer, evt) {
	if (evt.target === evt.currentTarget){
		closePopup(popupContainer);

	}
}

const openPopup = function(popupContainer) {
	popupContainer.classList.add('popup_open');
	popupContainer.addEventListener('click', (evt) => overlay(popupContainer, evt));
}

const closePopup = function(popupContainer) {
	popupContainer.classList.remove('popup_open');
	popupContainer.removeEventListener('click', overlay);
}

document.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		const popupOpened = document.querySelector('.popup_open');
		if (popupOpened){
			closePopup(popupOpened);
		}
	}
});

edit.addEventListener('click', openEditProfile);

buttonAddCards.addEventListener('click', function() {
	openPopup(popupAddCards);
});

popupAddCards.querySelector('.popup__close').addEventListener('click', function() {
	closePopup(popupAddCards)
});

popupEditProfile.querySelector('.popup__close').addEventListener('click', function() {
	closePopup(popupEditProfile)
});

popupOpenImg.querySelector('.popup__close').addEventListener('click', function() {
	closePopup(popupOpenImg);

});

function formSubmitHandler(evt) { 
    evt.preventDefault(); 
    nameInput.textContent = formElementName.value;  
	jobInput.textContent = formElementJob.value;
	closePopup(popupEditProfile);
};

popupFormEditProfile.addEventListener('submit', formSubmitHandler);

function createPopupCard(cardElement, сardName, сardLink) {
	const popupImg = popupOpenImg.querySelector('.popup__img');
	const popupName = popupOpenImg.querySelector('.popup__name');

	cardElement.querySelector('.card__open_img').addEventListener('click', function (evt) {
		evt.preventDefault();
		popupImg.src = сardLink;
		popupName.textContent = сardName;
		popupImg.alt = 'Фото: пейзаж ' + сardName;
		openPopup(popupOpenImg)
	});
}

function createCard(сardName, сardLink) {
	const cardTemplate = document.querySelector('#card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const cardNameElement = cardElement.querySelector('.card__name');
	const cardImage = cardElement.querySelector('.card__image');
	

	cardNameElement.textContent = сardName;
	cardImage.src = сardLink;
	cardImage.alt = 'Фото: пейзаж ' + сardName;

	cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('card__like_activ');
	});

	cardElement.querySelector('.card__delete').addEventListener('click', function () {
		const listItem = cardElement.closest('.card');
		listItem.remove();
	});

	createPopupCard(cardElement, сardName, сardLink);

	return cardElement;
}

function renderCard(сardName, сardLink) {
	cardsContainer.prepend(createCard(сardName, сardLink));
}


for (let i = 0; i < initialCards.length; i++) {
	renderCard(initialCards[i].name, initialCards[i].link);
};

function addCard (evt) {

	evt.preventDefault();
	renderCard(formCardName.value, formCardLink.value);
	formCardName.value = "";
	formCardLink.value = "";
	closePopup(popupAddCards);
};

popupFormAddCards.addEventListener('submit', addCard);

//проектная работа 6

const showInputError = (formElement, inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

const toggleButtonState = (inputList, buttonElement, options) => {
   if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(options.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass);
  }
}

const setEventListeners = (formElement, options) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, options);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputList, buttonElement, options);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
   });

    setEventListeners(formElement, options);

  });
};

enableValidation({
	formSelector: '.popup__form',
  	inputSelector: '.popup__input',
  	submitButtonSelector: '.popup__save',
  	inactiveButtonClass: 'popup__save_inactive_button',
  	inputErrorClass: 'popup__input_type_error',
  	errorClass: 'popup__input-error_active'
});