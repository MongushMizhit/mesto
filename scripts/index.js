const popupProfileOpenButton = document.querySelector('.profile__button-opened');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileCloseButton = popupProfile.querySelector('#popup-profile__close-button');
const formProfileElement = popupProfile.querySelector('#popup-profile__form');
const addButtonOpen = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.card-popup');
const cardPopupCloseButton = popupCard.querySelector('.popup__close-button_card');
const addForm = document.querySelector('.popup__form[name="add-form"]');
const popupPhoto = document.querySelector('.popup-photo');
const photoCloseButton = popupPhoto.querySelector('.popup__close-button_photo');
const likeButtons = document.querySelectorAll('.element__like-button');
const deleteButtons = document.querySelectorAll('.element__delete-button');
const popups = document.querySelectorAll('.popup');
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

initializeValidation(settings);

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPhotoPopup(link, name) {
  const popupPhoto = document.querySelector('.popup-photo');
  const photoImage = popupPhoto.querySelector('.popup__image');
  const photoCaption = popupPhoto.querySelector('.popup__image-caption');

  photoImage.src = link;
  photoImage.alt = name;
  photoCaption.textContent = name;

  openPopup(popupPhoto);
}

function handleDeleteButtonClick(event) {
  const card = event.target.closest('.element');
  card.remove();
}

function handleLikeButtonClick(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('element__like-button_active');
}

function handleImageClick(event) {
  const card = event.target.closest('.element');
  const imageElement = card.querySelector('.element__image');
  const name = card.querySelector('.element__title').textContent;
  const link = imageElement.getAttribute('src');
  openPhotoPopup(link, name);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const popupProfile = document.querySelector('.popup-profile');
  const nameInput = document.querySelector('.popup__input_type_name');
  const jobInput = document.querySelector('.popup__input_type_job');
  const profileNickname = document.querySelector('.profile__nickname');
  const profileDescription = document.querySelector('.profile__description');

  profileNickname.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(popupProfile);
}

function handleAddFormSubmit(event) {
  event.preventDefault();

  const popupCard = document.querySelector('.card-popup');
  const titleInput = event.currentTarget.querySelector('.popup__input_type_title');
  const linkInput = event.currentTarget.querySelector('.popup__input_type_link');
  const title = titleInput.value;
  const link = linkInput.value;

  addCard(title, link);
  event.currentTarget.reset();
  closePopup(popupCard);
}

function addCard(title, link) {
  const newCard = createCard(title, link);
  elementsContainer.prepend(newCard);
}

  

  popups.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      if (evt.target === popup) {
        closePopup(popup);
      }
    });
  });

  popupProfileOpenButton.addEventListener('click', () => {
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_job');
    const profileNickname = document.querySelector('.profile__nickname');
    const profileDescription = document.querySelector('.profile__description');

    nameInput.value = profileNickname.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupProfile);
  });

  popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));

  addButtonOpen.addEventListener('click', () => {
    openPopup(popupCard);
  });

  cardPopupCloseButton.addEventListener('click', () => {
    closePopup(popupCard);
  });

  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', handleLikeButtonClick);
  });

  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', handleDeleteButtonClick);
  });

  addForm.addEventListener('submit', handleAddFormSubmit);
  formProfileElement.addEventListener('submit', handleProfileFormSubmit);

  document.addEventListener('keydown', (evt) => {
    const key = evt.key;
    const isEscapeKey = key === 'Escape' || key === 'Esc';

    if (isEscapeKey) {
      closeAllPopups();
    }
  });

  photoCloseButton.addEventListener('click', () => closePopup(popupPhoto));


function renderInitialCards() {
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

  initialCards.forEach(cardData => {
    const newCard = createCard(cardData.name, cardData.link);
    elementsContainer.appendChild(newCard);
  });
}

function createCard(title, link) {
  const template = document.querySelector('#element-template');
  const element = template.content.cloneNode(true).querySelector('.element');
  const titleElement = element.querySelector('.element__title');
  const imageElement = element.querySelector('.element__image');

  titleElement.textContent = title;
  imageElement.src = link;
  imageElement.alt = title;

  const deleteButton = element.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', (event) => {
    const card = event.target.closest('.element');
    card.remove();
  });

  const likeButton = element.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active');
  });

  imageElement.addEventListener('click', handleImageClick);

  return element;
}

function closeAllPopups() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    closePopup(popup);
  });
}

renderInitialCards();

