let currentUser;

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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cardsData]) => {
    // Данные о пользователе
    userNameElement.textContent = userInfo.name;
    userAboutElement.textContent = userInfo.about;
    userAvatarElement.src = userInfo.avatar;
    currentUser = userInfo;

    // Создание и отрисовка карточек
    const reversedCardsData = cardsData.reverse();
    reversedCardsData.forEach((cardData) => {
      const cardElement = createCard(cardData);
      cardsList.addItem(cardElement);
    });

    cardsList.renderItems();
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });


popupWithAvatarForm.setEventListeners();
popupDelete.setEventListeners();
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
    
  }, cardTemplate, (cardId) => {
    api.likeCard(cardId)
        .then(() => {
            card.addLike();
        })
        .catch((error) => {
            console.log(error)
        });

    },
(cardId) => {
    api.dislikeCard(cardId)
        .then(() => {
            card.unlikeCard();
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
  handleCardClick,  currentUser);
  
  const cardElement = card.createCard();
  
  cardElement.dataset.id = item._id;

  const likeCountElement = cardElement.querySelector('.element__like-number');
  likeCountElement.textContent = item.likes.length; 
  
  return cardElement;
}


const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

function handleAvatarFormSubmit() {
  const newAvatarLink = popupWithAvatarForm.getInputValues().nickname;
  avatarSubmitBtn.textContent = 'Сохранение...';
  api.updateAvatar(newAvatarLink)
    .then(() => {

      userInfo.setUserAvatar(newAvatarLink);

    })
    .catch((error) => {
      console.error('Ошибка при обновлении аватара:', error);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
      avatarSubmitBtn.textContent = 'Сохранить';
      popupWithAvatarForm.close();
    });
}

function handleProfileFormSubmit(inputValues) {
  const name = inputValues.name;
  const about = inputValues.info;
  profileSubmitBtn.textContent = 'Сохранение...';
  api.updateProfileInfo(name, about)
    .then((userData) => {
      userInfo.setUserInfo(userData);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
      profileSubmitBtn.textContent = 'Сохранить';
      popupWithProfileForm.close();
    });
};

function handleAddFormSubmit(inputValues) {
  const { name, link } = inputValues;
  cardSubmitBtn.textContent = 'Создание...';
  api.addCard(name, link)
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardsList.addItem(cardElement);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // Возвращаем кнопке исходный текст
      cardSubmitBtn.textContent = 'Создать';
      popupWithCardForm.close();
    });
}



