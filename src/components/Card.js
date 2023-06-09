class Card {
    constructor(data, cardSelector, photoImage, photoCaption, popupPhoto, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._photoImage = photoImage;
      this._photoCaption = photoCaption;
      this._popupPhoto = popupPhoto;
      this._handleCardClick = handleCardClick;

      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');
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
  
    _handleDeleteButtonClick(evt) {
      const card = evt.target.closest('.element');
      card.remove();
    }
  
    _handleImageClick(event) {
      const imageElement = event.target;
      const card = imageElement.closest('.element');
      const name = card.querySelector('.element__title').textContent;
      const link = imageElement.getAttribute('src');
      this._photoImage.src = link;
      this._photoImage.alt = name;
      this._photoCaption.textContent = name;
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__like-button').addEventListener('click', this._handleLikeButtonClick.bind(this));
      this._element.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButtonClick.bind(this));
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }
  
    createCard() {
      this._element.querySelector('.element__title').textContent = this._name;
      this._elementImage.src = this._link;
      this._element.querySelector('.element__title').alt = this._name;
      this._setEventListeners();
      return this._element;
    }
  }
  
  export default Card;
