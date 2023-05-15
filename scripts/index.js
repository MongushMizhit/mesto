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
  const cardElement = elementTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').setAttribute('src', cardData.link);
  cardElement.querySelector('.element__image').setAttribute('alt', cardData.name);
  cardElement.querySelector('.element__title').textContent = cardData.name;
  elementsContainer.appendChild(cardElement);
});

const editButtonOpen = document.querySelector('.profile__button-opened'); 
const popup = document.querySelector('.popup'); 
const popupCloseButton = document.querySelector('.popup__close-button');  
const formElement = document.querySelector('.popup__form');  
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job');
const profileNickname = document.querySelector('.profile__nickname');
const profileDescription = document.querySelector('.profile__description');
const addButtonOpen = document.querySelector('.profile__add-button');
const itemPopup = document.querySelector('.item-popup');
const itemCloseButton = itemPopup.querySelector('.item__close-button');
const popupPhoto = document.querySelector('.popup-photo');
const photoCloseButton = popupPhoto.querySelector('.popup-photo__close-button')
const likeButtons = document.querySelectorAll('.element__like-button');
const elements = document.querySelector('.elements');
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
  toggleItemPopup(itemPopup); 
};

function addCard(title, link) {
  const newCard = createCard(title, link); 
  const elements = document.querySelector('.elements');
  elements.prepend(newCard); 
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

  return element;
}

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active');
  });
});


deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.element');
    card.remove();
  });
});


function toggleItemPopup() {
  itemPopup.classList.toggle('item-popup_opened');
}

function togglephotoPopup() {
  popupPhoto.classList.toggle('popup-photo_opened');
}

addButtonOpen.addEventListener('click', toggleItemPopup);
itemCloseButton.addEventListener('click', toggleItemPopup);


const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened');

editButtonOpen.addEventListener('click', () => {
    nameInput.value = profileNickname.textContent;
    jobInput.value = profileDescription.textContent;
    togglePopupState(popup);
  });

popupCloseButton.addEventListener('click', () => togglePopupState(popup)); 

function handleFormSubmit (evt) {
    evt.preventDefault();
  
    profileNickname.textContent = nameInput.value; 
    profileDescription.textContent = jobInput.value;

    togglePopupState(popup);
}

formElement.addEventListener('submit', handleFormSubmit);

const photoImage = popupPhoto.querySelector('.popup__image');
const photoCaption = popupPhoto.querySelector('.popup__image-caption');

function openPhotoPopup(link, name) {
  photoImage.src = link;
  photoImage.alt = name;
  photoCaption.textContent = name;
  togglephotoPopup(popupPhoto);
}

function handleImageClick(event) {
  const card = event.target.closest('.element');
  const imageElement = card.querySelector('.element__image');
  const name = card.querySelector('.element__title').textContent;
  const link = imageElement.getAttribute('src');
  openPhotoPopup(link, name);
}

const imageElements = document.querySelectorAll('.element__image');
imageElements.forEach(imageElement => {
  imageElement.addEventListener('click', handleImageClick);
});

photoCloseButton.addEventListener('click', togglephotoPopup);