export const cardTemplate = '#element-template';
export const photoImage = document.querySelector('.popup__image');
export const photoCaption = document.querySelector('.popup__image-caption');

export const buttonOpenPopupCard = document.querySelector('#card-popup__form');
export const profileFormElement = document.querySelector('#popup-profile__form');
export const avatarFormElement = document.querySelector('.popup__form-avatar');
export const nameInput = document.querySelector('#name-card');
export const jobInput = document.querySelector('#job-card');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profileAvatarButton = document.querySelector('.profile__avatar-edit')
export const profileSubmitBtn = document.querySelector('#profile-submit');
export const userNameElement = document.querySelector('.profile__nickname');
export const userAboutElement = document.querySelector('.profile__description');
export const userAvatarElement = document.querySelector('.profile__avatar-image');
export const avatarSubmitBtn = avatarFormElement.querySelector('#avatar-submit');
export const cardSubmitBtn = buttonOpenPopupCard.querySelector('#card-submit');
export const deleteFormElement = document.querySelector('#delete-form');
export const deleteSubmitDtn = deleteFormElement.querySelector('#delete-submit');

export const settings = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    validButtonClass: 'popup__submit-button_valid'
  };
