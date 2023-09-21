export let currentUser;

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { settings } from '../utils/constants.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';


const cardTemplate = '#element-template';
const photoImage = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__image-caption');

const addFormElement = document.querySelector('#card-popup__form');
const profileFormElement = document.querySelector('#popup-profile__form');
const avatarFormElement = document.querySelector('.popup__form-avatar');
const nameInput = document.querySelector('#name-card');
const jobInput = document.querySelector('#job-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileAvatarButton = document.querySelector('.profile__avatar-edit')
const profileSubmitBtn = document.querySelector('#profile-submit');
const userNameElement = document.querySelector('.profile__nickname');
const userAboutElement = document.querySelector('.profile__description');
const userAvatarElement = document.querySelector('.profile__avatar-image');
const avatarSubmitBtn = avatarFormElement.querySelector('#avatar-submit');
const cardSubmitBtn = addFormElement.querySelector('#card-submit');
const deleteFormElement = document.querySelector('#delete-form');
const deleteSubmitDtn = deleteFormElement.querySelector('#delete-submit');

const popupWithProfileForm = new PopupWithForm('.popup-profile', handleProfileFormSubmit);
const popupWithCardForm = new PopupWithForm('.card-popup', handleAddFormSubmit);
const popupWithAvatarForm = new PopupWithForm('.avatar-popup', handleAvatarFormSubmit);
const popupWithImage = new PopupWithImage('.popup-photo', photoImage, photoCaption);
const popupDelete = new PopupWithConfirmation('.delete-popup', handleConfirmDelete);

const userInfo = new UserInfo({
  nameSelector: '.profile__nickname',
  infoSelector: '.profile__description',
  avatarSelector: '.profile__avatar-image'
});

const cardsList = new Section({
  items: [], // Исходный массив карточек (может быть пустым, так как он будет обновлен после загрузки с сервера)
  renderer: (cardData) => {
    // Функция для создания и отображения карточки
    const cardElement = createCard(cardData);
    cardsList.addItem(cardElement);
  },
}, '.elements');

cardsList.renderItems();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'ce69c67a-8f47-420f-b8fa-8388f7ae2056',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then(userInfo => {
    

    userNameElement.textContent = userInfo.name;
    userAboutElement.textContent = userInfo.about;
    userAvatarElement.src = userInfo.avatar;
    currentUser = userInfo;
  })
  .catch(error => {
    console.error(error);
  });

  api.getInitialCards()
  .then((cardsData) => {
    const reversedCardsData = cardsData.reverse();
    const cardsList = new Section({
      items: reversedCardsData,
      items: cardsData,
      renderer: (cardData) => {
        const cardElement = createCard(cardData);
        cardsList.addItem(cardElement);
      },
    }, '.elements');

    cardsList.renderItems();
  })
  .catch((error) => {
    console.error(error);
  });

  
popupWithAvatarForm.setEventListeners();
popupDelete.setEventListeners(handleConfirmDelete);

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

profileAvatarButton.addEventListener('click', function() {
  popupWithAvatarForm.open();
});

const formValidatorAdd = new FormValidator(settings, addFormElement);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, profileFormElement);
formValidator.enableValidation();

const formValidatorAvatar = new FormValidator(settings, avatarFormElement);
formValidatorAvatar.enableValidation();

function createCard(item) {
  const isLiked = item.likes.some((user) => user._id === currentUser._id);
  
  const card = new Card({
    name: item.name,
    link: item.link,
    _id: item._id, 
    likes: item.likes, 
    owner: item.owner,
    
  }, cardTemplate, photoImage, photoCaption, popupWithImage, handleCardClick, item.likes)
  
  
  const cardElement = card.createCard();
  const likeButtonElement = cardElement.querySelector('.element__like-button');

  likeButtonElement.addEventListener('click', () => {
    // В этом обработчике проверьте, лайкнута ли уже карточка (используя переменную isLiked)
    if (isLiked) {
      // Если карточка уже лайкнута, выполните снятие лайка
      api.dislikeCard(item._id)
        .then((data) => {
          card.updateLikes(data.likes.length);
        })
        .catch((error) => {
          console.error('Ошибка при снятии лайка:', error);
        });
    } else {
      // Если карточка не лайкнута, выполните постановку лайка
      api.likeCard(item._id)
        .then((data) => {
          card.updateLikes(data.likes.length);
        })
        .catch((error) => {
          console.error('Ошибка при добавлении лайка:', error);
        });
    }
  });
  

  cardElement.dataset.id = item._id;


  
  const likeCountElement = cardElement.querySelector('.element__like-number');
  likeCountElement.textContent = item.likes.length; 

  if (item.owner._id === currentUser._id) {
    const deleteButton = cardElement.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
      popupDelete.setCardId(item._id);
      popupDelete.open();

      
    })}

   
  
  return cardElement;
}





function handleConfirmDelete() {
  const cardIdToDelete = popupDelete.getCardId();
  deleteSubmitDtn.textContent = 'Удаление...';
  api.deleteCard(cardIdToDelete)
    .then(() => {
    
      const cardToRemove = document.querySelector(`[data-id="${cardIdToDelete}"]`);

      if (cardToRemove) {
        console.log('Удаляем карточку из DOM:', cardToRemove);
        cardToRemove.remove(); 
        popupDelete.close();
        deleteSubmitDtn.textContent = 'Да'; 
      } else {
        // Карточка не найдена в DOM, возможно, она уже удалена ранее
      }
    })
    .catch((error) => {
      // Обработка ошибок при удалении
      console.error('Ошибка при удалении карточки:', error);
      deleteSubmitDtn.textContent = 'Да';
    });
}

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}



function handleAvatarFormSubmit() {
  const avatarInput = avatarFormElement.querySelector('.popup__input-avatar');
  const newAvatarLink = avatarInput.value;
  avatarSubmitBtn.textContent = 'Сохранение...';
  api.updateAvatar(newAvatarLink)
    .then((userData) => {

      console.log('Аватар успешно обновлен:', userData);

      const userAvatarElement = document.querySelector('.profile__avatar-image');
      userAvatarElement.src = newAvatarLink;

      popupWithAvatarForm.close();
      avatarSubmitBtn.textContent = 'Сохранить';
    })
    .catch((error) => {
      console.error('Ошибка при обновлении аватара:', error);
      avatarSubmitBtn.textContent = 'Сохранить';
    });
}

function handleProfileFormSubmit(inputValues) {
  const name = inputValues.name;
  const about = inputValues.info;
  profileSubmitBtn.textContent = 'Сохранение...';
  api.updateProfileInfo(name, about)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupWithProfileForm.close();
      profileSubmitBtn.textContent = 'Сохранить';
    })
    .catch((error) => {
      console.error(error);
      profileSubmitBtn.textContent = 'Сохранение...';
    });
}

function handleAddFormSubmit(inputValues) {
  const { name, link } = inputValues;
  cardSubmitBtn.textContent = 'Создание...';
  api.addCard(name, link)
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardsList.addItem(cardElement);
      popupWithCardForm.close();
      cardSubmitBtn.textContent = 'Создать';
    })
    .catch((err) => {
      console.error(err);
      cardSubmitBtn.textContent = 'Создать';
    });
}



