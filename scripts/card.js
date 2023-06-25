class Card {
  constructor(data, cardSelector, photoImage, photoCaption, popupPhoto) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._photoImage = photoImage;
    this._photoCaption = photoCaption;
    this._popupPhoto = popupPhoto;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButtonClick(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('element__like-button_active');
  }

  _handleDeleteButtonClick(event) {
    const card = event.target.closest('.element');
    card.remove();
  }

  _handleImageClick(event) {
    const imageElement = event.target;
    const card = imageElement.closest('.element');
    const name = card.querySelector('.element__title').textContent;
    const link = imageElement.getAttribute('src');
    this._openPhotoPopup(link, name);
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-button')
      .addEventListener('click', this._handleLikeButtonClick);
    this._element.querySelector('.element__delete-button')
      .addEventListener('click', this._handleDeleteButtonClick);
    this._element.querySelector('.element__image')
      .addEventListener('click', this._handleImageClick.bind(this));
    document.addEventListener('keydown', this._handleEscKeyPress.bind(this));

    const profileEditButton = document.querySelector('.profile__edit-button');
    profileEditButton.addEventListener('click', this.openProfilePopup.bind(this));

    const profileAddButton = document.querySelector('.profile__add-button');
    profileAddButton.addEventListener('click', this.openCardPopup.bind(this));

    const profilePopupCloseButton = document.querySelector('#popup-profile__close-button');
    profilePopupCloseButton.addEventListener('click', this.closeProfilePopup.bind(this));

    const cardPopupCloseButton = document.querySelector('.popup__close-button_card');
    cardPopupCloseButton.addEventListener('click', this.closeCardPopup.bind(this));

    const popupPhotoCloseButton = document.querySelector('.popup__close-button_photo');
    popupPhotoCloseButton.addEventListener('click', this._closePhotoPopup.bind(this));
  }

  openProfilePopup() {
    const profilePopup = document.querySelector('.popup-profile');
    const nameInput = profilePopup.querySelector('.popup__input_type_name');
    const jobInput = profilePopup.querySelector('.popup__input_type_job');
    const currentName = document.querySelector('.profile__nickname').textContent;
    const currentJob = document.querySelector('.profile__description').textContent;

    nameInput.value = currentName;
    jobInput.value = currentJob;

    profilePopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKeyPress.bind(this));
  }

  closeProfilePopup() {
    const profilePopup = document.querySelector('.popup-profile');
    profilePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKeyPress.bind(this));
  }

  openCardPopup() {
    const cardPopup = document.querySelector('.card-popup');
    cardPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKeyPress);
  }

  closeCardPopup() {
    const cardPopup = document.querySelector('.card-popup');
    cardPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKeyPress);
  }

  _openPhotoPopup(link, name) {
    this._photoImage.src = link;
    this._photoImage.alt = name;
    this._photoCaption.textContent = name;
    this._popupPhoto.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKeyPress);
  }

  _closePhotoPopup() {
    this._popupPhoto.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKeyPress);
  }

  _handleEscKeyPress(event) {
    if (event.key === 'Escape') {
      this._closePhotoPopup();
      this.closeProfilePopup();
      this.closeCardPopup();
    }
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._setEventListeners();
    return this._element;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoImage = this._element.querySelector('.popup__image');
    this._photoCaption = this._element.querySelector('.popup__image-caption');
    this._popupPhoto = document.querySelector('.popup-photo');
    this._setEventListeners();
    return this._element;
  }
}

export default Card;