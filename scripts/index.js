import Card from './Card.js'
import FormValidator from './FormValidator.js'

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
const popup = document.querySelector('.popup');
const photoImage = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__image-caption');
const popupPhoto = document.querySelector('.popup-photo');
const popupCard = document.querySelector('.card-popup');
const popupProfile = document.querySelector('.popup-profile');
const formElement = document.querySelector('.popup__form');
const addFormElement = document.querySelector('#card-popup__form');
const profileFormElement = document.querySelector('#popup-profile__form');
const nameInput = document.querySelector('#name-card');
const jobInput = document.querySelector('#job-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profilePopupCloseButton = document.querySelector('#popup-profile__close-button');
const cardPopupCloseButton = document.querySelector('.popup__close-button_card');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button_photo');
const currentName = document.querySelector('.profile__nickname');
const currentJob = document.querySelector('.profile__description');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

profileEditButton.addEventListener('click', function() {
  nameInput.value = currentName.textContent;
  jobInput.value = currentJob.textContent;
  openPopup(popupProfile);
});

profileAddButton.addEventListener('click', function() {
  const submitButton = addFormElement.querySelector(settings.submitButtonSelector);

  if (titleInput.value === '' || linkInput.value === '') {
      submitButton.disabled = true;
      submitButton.classList.add(settings.inactiveButtonClass);
      submitButton.classList.remove(settings.validButtonClass);
    } else {
      submitButton.disabled = true;
      submitButton.classList.add(settings.inactiveButtonClass);
      submitButton.classList.remove(settings.validButtonClass);
    }
  openPopup(popupCard);
});

profilePopupCloseButton.addEventListener('click', function() {
  closePopup(popupProfile);
});

cardPopupCloseButton.addEventListener('click', function() {
  closePopup(popupCard);
});

popupPhotoCloseButton.addEventListener('click', function() {
  closePopup(popupPhoto);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
  popup.addEventListener('mousedown', handleOverlayClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
  popup.removeEventListener('mousedown', handleOverlayClose);
}

function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function handleOverlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

initialCards.forEach(addCard);

const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  validButtonClass: 'popup__submit-button_valid'
};

const formValidatorAdd = new FormValidator(settings, addFormElement);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, profileFormElement);
formValidator.enableValidation();

profileFormElement.addEventListener('submit', handleProfileSubmitButton);
addFormElement.addEventListener('submit', handleAddFormSubmit);

function addCard(cardData) {
  const card = new Card(cardData, cardTemplate, photoImage, photoCaption, popupPhoto, openPopup);
  const cardElement = card.createCard();
  cardsContainer.prepend(cardElement);
};

function handleProfileSubmitButton(evt) {
  evt.preventDefault();
  if (formElement.checkValidity()) {

    currentName.textContent = nameInput.value; 
    currentJob.textContent = jobInput.value;

    formValidator._toggleButtonState(); 
    closePopup(popup);
  }
}

function handleAddFormSubmit(evt) { 
  evt.preventDefault();

  const title = titleInput.value; 
  const link = linkInput.value;

  addCard({ name: title, link: link });
  evt.currentTarget.reset();
  formValidator._toggleButtonState();
  closePopup(popupCard);
}