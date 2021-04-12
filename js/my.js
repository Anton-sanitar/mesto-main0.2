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
let popupEditProfile = document.querySelector('.popup_edit_profile');
let popupAddCards = document.querySelector('.popup_add_cards');
let formElementName = document.querySelector('.popup__input_name_input'); 
let formElementJob = document.querySelector('.popup__input_job_input'); 
let nameInput = document.querySelector('.profile__name'); 
let jobInput = document.querySelector('.profile__job'); 
let edit = document.querySelector('.profile__edit');
let addCards = document.querySelector('.profile__add');
let saveCard = document.querySelector('.popup__save_card');
let popupFormEditProfile = document.querySelector('.popup__form_edit_profile');
let popupFormAddCards = document.querySelector('.popup__form_add_cards');
let cardsContainer = document.querySelector('.cards');
let cardContainer = document.querySelector('.card');
let formCardName = document.querySelector('.popup__input_title_input');  
let formCardLink = document.querySelector('.popup__input_link_input');
let popupOpenImg = document.querySelector('.popup_open_img');

let openEditProfile = function () { 
	popupEditProfile.classList.add('popup_open'); 
	formElementName.value = nameInput.textContent;  
	formElementJob.value = jobInput.textContent; 
}

edit.addEventListener('click', openEditProfile);

let openPopupAddCards = function () { 
	popupAddCards.classList.add('popup_open');
}

function closePopup(popupContainer) {
	popupContainer.classList.remove('popup_open');
}

addCards.addEventListener('click', openPopupAddCards);

popupAddCards.querySelector('.popup__close').addEventListener('click', function() {
	closePopup(popupAddCards)
});

popupEditProfile.querySelector('.popup__close').addEventListener('click', function() {
	closePopup(popupEditProfile)
});

function formSubmitHandler(evt) { 
    evt.preventDefault(); 
    nameInput.textContent = formElementName.value;  
	jobInput.textContent = formElementJob.value;
	closePopup(popupEditProfile);
};

popupFormEditProfile.addEventListener('submit', formSubmitHandler);

function card(сardName, сardLink) {

	const cardTemplate = document.querySelector('#card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const cardName = cardElement.querySelector('.card__name');
	const cardImage = cardElement.querySelector('.card__image');
	const popupImg = popupOpenImg.querySelector('.popup__img');
	const popupName = popupOpenImg.querySelector('.popup__name');

	cardName.textContent = сardName;
	cardImage.src = сardLink;
	cardImage.alt = 'Фото: пейзаж ' + сardName;

	cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('card__like_activ');
	});

	cardsContainer.prepend(cardElement);

	cardElement.querySelector('.card__delete').addEventListener('click', function () {
		const listItem = cardElement.closest('.card');
		listItem.remove();
	});

	cardElement.querySelector('.card__open_img').addEventListener('click', function (evt) {
		evt.preventDefault();
		popupImg.src = сardLink;
		popupName.textContent = сardName;
		popupImg.alt = 'Фото: пейзаж ' + сardName;
		popupOpenImg.classList.add('popup_open');
	});

	popupOpenImg.querySelector('.popup__close').addEventListener('click', function() {
		closePopup(popupOpenImg);

	});
	
};

for (let i = 0; i < initialCards.length; i++) {
	card(initialCards[i].name, initialCards[i].link);
};

function addCard (evt) {

	evt.preventDefault();
	card(formCardName.value, formCardLink.value);
	closePopup(popupAddCards);
};

popupFormAddCards.addEventListener('submit', addCard);
