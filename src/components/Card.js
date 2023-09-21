import { currentUser } from "../pages/index.js";
class Card {
    constructor(data, cardSelector, photoImage, photoCaption, popupWithImage, handleCardClick, handleLikeClick, handleDeleteClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._photoImage = photoImage;
      this._photoCaption = photoCaption;
      this._popupWithImage = popupWithImage;
      this._handleCardClick = handleCardClick;
      this.handleLikeClick = handleLikeClick; 
      this._cardId = data._id;
      this._like = data.likes.length
    
      this.handleDeleteClick = handleDeleteClick;
      this._ownerId = data.owner._id;
      this._likes = data.likes;

      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');
      this._likeButton = this._element.querySelector('.element__like-button');
      this._likeCount = this._element.querySelector('.element__like-number');
      this._isLiked = data.likes.some((user) => user._id === currentUser._id);
      
    
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
      if (this._isLiked) {
        this.dislikeCard(this._cardId);
      } else {
        this.likeCard(this._cardId);
      }
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
      this._likeButton.addEventListener("click", () => {
       this.toggleLikeButton()
      });
      const cardDeleteSubmit = document.querySelector('.popup__submit-button_delete');
      cardDeleteSubmit.addEventListener('click', () => this._handleDeleteButtonClick.bind(this));
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }
    
  
    createCard() {
      this._element.querySelector('.element__title').textContent = this._name;
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._setEventListeners();

      if (this._ownerId === currentUser._id) {
        this._element.querySelector('.element__delete-button').style.display = 'block';
      } else {
        this._element.querySelector('.element__delete-button').style.display = 'none';
      }

      this.updateLikes(this._like);
      return this._element;
    }

    isMylikeCard() {
      return this._likes.some((user) => user._id === currentUser._id);;
    }
  
    renderLikes(cardId) {
      this._likesQTY = cardId.likes.length;
      this._likes = cardId.likes;
  
      if (this._likesQTY === 0) {
        this._likeCount.textContent = "0";
      } else {
        this._likeCount.textContent = this._likesQTY;
      }
  
      if (this.isMylikeCard()) {
        this._likeButton.classList.add("element__like-button_active");
      } else {
        this._likeButton.classList.remove("element__like-button_active");
      }
    }
  
    

    updateLikes(likesCount) {
      this._likeCount.textContent = likesCount;
      this._like = likesCount;
    
      // Проверяем, лайкнута ли уже карточка
      if (this.isMylikeCard()) {
        this.toggleLikeButton();
      }
    }
    
    
    toggleLikeButton() {
      this._likeButton.classList.toggle('element__like-button_active');
    }

    remove() {
      this._element.remove();
}

  }
  
  export default Card;
