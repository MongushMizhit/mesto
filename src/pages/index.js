import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { settings, initialCards } from '../utils/constants.js';

const popupWithProfileForm = new PopupWithForm('.popup-profile', handleProfileFormSubmit);
const popupWithCardForm = new PopupWithForm('.card-popup', handleAddFormSubmit);
const cardTemplate = '#element-template';
const photoImage = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__image-caption');
const popupWithImage = new PopupWithImage('.popup-photo', photoImage, photoCaption);
const addFormElement = document.querySelector('#card-popup__form');
const profileFormElement = document.querySelector('#popup-profile__form');
const nameInput = document.querySelector('#name-card');
const jobInput = document.querySelector('#job-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

const userInfo = new UserInfo({
  nameSelector: '.profile__nickname',
  infoSelector: '.profile__description'
});

popupWithProfileForm.setEventListeners(handleProfileFormSubmit);
popupWithCardForm.setEventListeners(handleAddFormSubmit);
popupWithImage.setEventListeners();

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

const formValidatorAdd = new FormValidator(settings, addFormElement);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, profileFormElement);
formValidator.enableValidation();

function createCard(item) {
  const card = new Card(item, cardTemplate, photoImage, photoCaption, popupWithImage, handleCardClick);
  return card.createCard();
}

function handleProfileFormSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  formValidator.toggleButtonState();
  popupWithProfileForm.close();
}

function handleAddFormSubmit(inputValues) {
  const { name, link } = inputValues;
  const cardElement = createCard({ name, link }); 
  cardsList.addItem(cardElement); 
  popupWithCardForm.close();
}

const cardsList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardsList.addItem(cardElement);
  }
}, '.elements');

cardsList.renderItems();

