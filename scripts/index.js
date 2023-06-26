import Card from './card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Алдын-Булак',
    link: 'http://newsib.net/wp-content/uploads/2022/08/image005.jpg'
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

const cardsContainer = document.querySelector('.elements');
const cardTemplate = '#element-template';
const photoImage = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__image-caption');
const popupPhoto = document.querySelector('.popup-photo');
const formElement = document.querySelector('.popup__form');
const addFormElement = document.querySelector('#card-popup__form');

initialCards.forEach(addCard);

const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  validButtonClass: 'popup__submit-button_valid'
};

const formValidatorAdd = new FormValidator(settings, addFormElement, addCard);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, formElement);
formValidator.enableValidation();

function addCard(cardData) {
  const card = new Card(cardData, cardTemplate, photoImage, photoCaption, popupPhoto);
  const cardElement = card.createCard();
  cardsContainer.prepend(cardElement);
};