import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'

const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  validButtonClass: 'popup__submit-button_valid'
};

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


const popupPhoto = new Popup('.popup-photo');
const popupWithProfileForm = new PopupWithForm('.popup-profile', handleProfileSubmitButton);
const popupWithCardForm = new PopupWithForm('.card-popup', handleAddFormSubmit);
const cardsContainer = document.querySelector('.elements');
const cardTemplate = '#element-template';
const photoImage = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__image-caption');
const popupWithImage = new PopupWithImage('.popup-photo', photoImage, photoCaption);
const formElement = document.querySelector('.popup__form');
const addFormElement = document.querySelector('#card-popup__form');
const profileFormElement = document.querySelector('#popup-profile__form');
const nameInput = document.querySelector('#name-card');
const jobInput = document.querySelector('#job-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profilePopupCloseButton = document.querySelector('#popup-profile__close-button');
const cardPopupCloseButton = document.querySelector('.popup__close-button_card');
const popupPhotoCloseButton = document.querySelector('.popup__close-button_photo');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

const userInfo = new UserInfo({
  nameSelector: '.profile__nickname',
  infoSelector: '.profile__description'
});

popupWithProfileForm.setEventListeners();
popupWithCardForm.setEventListeners();

profileEditButton.addEventListener('click', function() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  popupWithProfileForm.open();
});

profileAddButton.addEventListener('click', function() {
  formValidatorAdd.disableSubmitButton();
  popupWithCardForm.open();
});

profilePopupCloseButton.addEventListener('click', function() {
  popupWithProfileForm.close();
});

cardPopupCloseButton.addEventListener('click', function() {
  popupWithCardForm.close();
});

popupPhotoCloseButton.addEventListener('click', function() {
  popupWithImage.close();
});

const formValidatorAdd = new FormValidator(settings, addFormElement);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, profileFormElement);
formValidator.enableValidation();



function addCard(cardData) {
  const card = new Card(cardData, cardTemplate, photoImage, photoCaption, popupPhoto, handleCardClick);
  const cardElement = card.createCard();
  cardsContainer.prepend(cardElement);
};

function handleProfileSubmitButton() {
  
  if (formElement.checkValidity()) {

    const name = nameInput.value;
    const info = jobInput.value;

  userInfo.setUserInfo({ name: name, info: info });

    formValidator.toggleButtonState(); 
    popupWithProfileForm.close();
  }
}

function handleAddFormSubmit() { 

  const title = titleInput.value; 
  const link = linkInput.value;

  addCard({ name: title, link: link });
  addFormElement.reset();
  formValidator.toggleButtonState();
  popupWithCardForm.close();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, cardTemplate, photoImage, photoCaption, popupPhoto, handleCardClick);
    const cardElement = card.createCard();
    cardsList.addItem(cardElement);
  }
}, '.elements');

cardsList.renderItems();