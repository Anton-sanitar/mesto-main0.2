let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');
let formElementName = document.querySelector('.form__item_name');
let formElementJob = document.querySelector('.form__item_job');
let save = document.querySelector('.modal__save');

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
	modal.style.display = "none";
});   


window.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      	nameInput.textContent = formElementName.value;
		jobInput.textContent = formElementJob.value;
		modal.style.display = "none";
    }
  }); 

let edit = document.querySelector('.profile__edit');
let modal = document.querySelector('.modal');
let close = document.querySelector('.modal__close');

edit.addEventListener('click', function () {
    modal.style.display = "flex";
});

close.addEventListener('click', function () {
    modal.style.display = "none";
});

let like = document.querySelectorAll('.card__like');

let add = function (like) {
  	like.addEventListener('click', function () {
		if(this.classList.contains('card__like_activ')){
        	this.classList.remove('card__like_activ');
	    }else {
	        this.classList.add('card__like_activ');
	    }
	});
};

for (let i = 0; i < like.length; i++) {
	add(like[i]);
}