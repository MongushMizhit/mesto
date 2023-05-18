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

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

initialCards.forEach(cardData => {
  const newCard = createCard(cardData.name, cardData.link);
  elementsContainer.appendChild(newCard);
});

const popupProfileOpenButton = document.querySelector('.profile__button-opened'); 
const popupProfile = document.querySelector('.popup-profile'); 
const popupProfileCloseButton = document.querySelector('#popup-profile__close-button');  
const formProfileElement = document.querySelector('#popup-profile__form');  
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job');
const profileNickname = document.querySelector('.profile__nickname');
const profileDescription = document.querySelector('.profile__description');
const addButtonOpen = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardPopupCloseButton = document.querySelector('.popup__close-button_card');
const popupPhoto = document.querySelector('.popup-photo');
const photoCloseButton = popupPhoto.querySelector('.popup__close-button_photo')
const likeButtons = document.querySelectorAll('.element__like-button');
const deleteButtons = document.querySelectorAll('.element__delete-button');
const addForm = document.querySelector('.popup__form[name="add-form"]');



addForm.addEventListener('submit', handleAddFormSubmit);

function handleAddFormSubmit(event) {
  event.preventDefault(); 
  const titleInput = event.currentTarget.querySelector('.popup__input_type_title');
  const linkInput = event.currentTarget.querySelector('.popup__input_type_link');
  const title = titleInput.value;
  const link = linkInput.value;

  addCard(title, link); 
  event.currentTarget.reset(); 
  closePopup(cardPopup); 
};

function addCard(title, link) {
  const newCard = createCard(title, link); 
  elementsContainer.prepend(newCard); 
};

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

imageElement.addEventListener('click', () => {
  openPhotoPopup(link, title);
});

  return element;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupProfileOpenButton.addEventListener('click', () => {
  nameInput.value = profileNickname.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfile);
});

popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));



addButtonOpen.addEventListener('click', () => {
  openPopup(cardPopup);
});


cardPopupCloseButton.addEventListener('click', () => {
  closePopup(cardPopup);
});



function handleProfileFormSubmit (evt) {
    evt.preventDefault();
  
    profileNickname.textContent = nameInput.value; 
    profileDescription.textContent = jobInput.value;

    closePopup(popupProfile);
}

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

const photoImage = popupPhoto.querySelector('.popup__image');
const photoCaption = popupPhoto.querySelector('.popup__image-caption');

function openPhotoPopup(link, name) {
  photoImage.src = link;
  photoImage.alt = name;
  photoCaption.textContent = name;
  openPopup(popupPhoto);
}

function handleImageClick(event) {
  const card = event.target.closest('.element');
  const imageElement = card.querySelector('.element__image');
  const name = card.querySelector('.element__title').textContent;
  const link = imageElement.getAttribute('src');
  openPhotoPopup(link, name);
}

photoCloseButton.addEventListener('click', () => closePopup(popupPhoto));