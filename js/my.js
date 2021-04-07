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
let close = document.querySelectorAll('.popup__close'); 
let popupFormEditProfile = document.querySelector('.popup__form_edit_profile');
let popupFormAddCards = document.querySelector('.popup__form_add_cards');
let cardsContainer = document.querySelector('.cards');
let formCardName = document.querySelector('.popup__input_title_input');  
let formCardLink = document.querySelector('.popup__input_link_input');
//let popupImg = document.querySelector('.popup_open_img');


let openEditProfile = function () { 
	popupEditProfile.classList.add('popup_open'); 
	formElementName.value = nameInput.textContent;  
	formElementJob.value = jobInput.textContent; 
}

edit.addEventListener('click', openEditProfile);

let openPopupAddCards = function () { 
	popupAddCards.classList.add('popup_open');
}

addCards.addEventListener('click', openPopupAddCards);

function closePopup() {
	popupEditProfile.classList.remove('popup_open');
	popupAddCards.classList.remove('popup_open');
}

close.forEach((item) => {
    item.addEventListener('click', closePopup);
});

function formSubmitHandler(evt) { 
    evt.preventDefault(); 
    nameInput.textContent = formElementName.value;  
	jobInput.textContent = formElementJob.value; 
	closePopup(); 
};
 
popupFormEditProfile.addEventListener('submit', formSubmitHandler);

function addCard(сardName, сardLink) {
		const cardTemplate = document.querySelector('#card-template').content;
		const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

		cardElement.querySelector('.card__name').textContent = сardName;
		cardElement.querySelector('.card__image').src = сardLink;
		cardElement.querySelector('.card__image').alt = 'Фото: пейзаж ' + сardName;

		cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
			evt.target.classList.toggle('card__like_activ');
		});

		cardsContainer.prepend(cardElement);

		cardElement.querySelector('.card__delete').addEventListener('click', function () {
			const listItem = cardElement.closest('.card');
			listItem.remove();
		});

		cardElement.querySelector('.popup__img').src = сardLink;
		cardElement.querySelector('.popup__name').textContent = сardName;
		cardElement.querySelector('.popup__img').alt = 'Фото: пейзаж ' + сardName;

		cardElement.querySelector('.card__open_img').addEventListener('click', function (evt) {
			evt.preventDefault();
			cardElement.querySelector('.popup').classList.add('popup_open');
		});

		cardElement.querySelector('.popup__close').addEventListener('click', function() {
			cardElement.querySelector('.popup').classList.remove('popup_open');
		});

		closePopup();

};

for (let i = 0; i < initialCards.length; i++) {
	addCard(initialCards[i].name, initialCards[i].link);
}

function saveNewCard (evt) {
		evt.preventDefault();
		const cardTemplate = document.querySelector('#card-template').content;
		const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

	    cardElement.querySelector('.card__name').textContent = formCardName.value;
		cardElement.querySelector('.card__image').src = formCardLink.value;
		
		cardsContainer.prepend(cardElement);
		
		cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
			evt.target.classList.toggle('card__like_activ');
		});

		cardElement.querySelector('.card__delete').addEventListener('click', function () {
			const listItem = cardElement.closest('.card');
			listItem.remove();
		});

		cardElement.querySelector('.popup__img').src = formCardLink.value;
		cardElement.querySelector('.popup__name').textContent = formCardName.value;
		cardElement.querySelector('.card__image').alt = 'Фото: пейзаж ' + formCardName.value;

		cardElement.querySelector('.card__open_img').addEventListener('click', function (evt) {
			evt.preventDefault();
			cardElement.querySelector('.popup').classList.add('popup_open');
		});

		cardElement.querySelector('.popup__close').addEventListener('click', function() {
			cardElement.querySelector('.popup').classList.remove('popup_open');
		});

		closePopup();
		deleteCard();
};

popupFormAddCards.addEventListener('submit', saveNewCard);
