let userId;

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { settings, cardTemplate, photoImage, photoCaption, buttonOpenPopupCard, profileFormElement, avatarFormElement, nameInput, jobInput, profileEditButton, profileAddButton, profileAvatarButton, profileSubmitBtn, userNameElement, userAboutElement, userAvatarElement, avatarSubmitBtn, cardSubmitBtn, deleteFormElement, deleteSubmitDtn } from '../utils/constants.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';


const popupWithProfileForm = new PopupWithForm('.popup-profile', handleProfileFormSubmit);
const popupWithCardForm = new PopupWithForm('.card-popup', handleAddFormSubmit);
const popupWithAvatarForm = new PopupWithForm('.avatar-popup', handleAvatarFormSubmit);
const popupWithImage = new PopupWithImage('.popup-photo', photoImage, photoCaption);
const popupDelete = new PopupWithConfirmation('.delete-popup');

const userInfo = new UserInfo({
  nameSelector: '.profile__nickname',
  infoSelector: '.profile__description',
  avatarSelector: '.profile__avatar-image'
});

const cardsList = new Section({
  items: [], 
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardsList.addItem(cardElement);
  },
}, '.elements');


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'ce69c67a-8f47-420f-b8fa-8388f7ae2056',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    
    // Данные о пользователе
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar
    });

    userId = userData;

    // Создание и отрисовка карточек
    cardsList.renderItems(cardsData);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });


popupWithAvatarForm.setEventListeners();
popupDelete.setEventListeners();
popupWithProfileForm.setEventListeners();
popupWithCardForm.setEventListeners();
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


const formValidatorAdd = new FormValidator(settings, buttonOpenPopupCard);
formValidatorAdd.enableValidation();

const formValidator = new FormValidator(settings, profileFormElement);
formValidator.enableValidation();

const formValidatorAvatar = new FormValidator(settings, avatarFormElement);
formValidatorAvatar.enableValidation();


function createCard(item) {
  const card = new Card({
    name: item.name,
    link: item.link,
    _id: item._id, 
    likes: item.likes, 
    owner: item.owner,
    
  }, cardTemplate, () => {
    popupWithImage.open(item.name, item.link);
  },
    (cardId) => {
    api.likeCard(cardId)
        .then((data) => {
            card.addLike(data);
        })
        .catch((error) => {
            console.log(error)
        });

    },
(cardId) => {
    api.dislikeCard(cardId)
        .then((data) => {
            card.unlikeCard(data);
        })
        .catch((error) => {
            console.log(error)
        });

},
() => {
  // Устанавливаем действие при подтверждении удаления
  popupDelete.setConfirmCallback(() => {
    deleteSubmitDtn.textContent = 'Удаление...';
    api.deleteCard(item._id)
      .then(() => {
        card.remove();
        popupDelete.close()
      })
      .catch((err) => console.log(err))
      .finally(() => 
      deleteSubmitDtn.textContent = 'Да'
      );
  });
      
  popupDelete.open();
}, 
 userId);
  
  const cardElement = card.createCard();
  return cardElement;
}


function handleAvatarFormSubmit(inputValues) {
  const newAvatarLink = inputValues.nickname;
  avatarSubmitBtn.textContent = 'Сохранение...';
  api.updateAvatar(newAvatarLink)
    .then(() => {
      userInfo.setUserAvatar(newAvatarLink);
      popupWithAvatarForm.close();
    })
    .catch((error) => {
      console.error('Ошибка при обновлении аватара:', error);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
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
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
      profileSubmitBtn.textContent = 'Сохранить';
    });
};

function handleAddFormSubmit(inputValues) {
  const { name, link } = inputValues;
  cardSubmitBtn.textContent = 'Создание...';
  api.addCard(name, link)
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardsList.addItem(cardElement);
      popupWithCardForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
      cardSubmitBtn.textContent = 'Создать';
    });
}



