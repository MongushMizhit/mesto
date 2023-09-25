class Card {
    constructor(data, cardSelector, handleCardClick, handleLikeClick, handleDislikeClick, handleDeleteClick,  userId) {
      this._name = data.name;
      this._link = data.link;
      this._id = data._id;
      this._ownerId = data.owner._id;
      this._likes = data.likes;

      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDislikeClick = handleDislikeClick;
      this._handleDeleteClick = handleDeleteClick;
      
      
      this._userId = userId;
      
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');
      this._likeButton = this._element.querySelector('.element__like-button');
      this._likeCount = this._element.querySelector('.element__like-number');
      this._elementDelete = this._element.querySelector('.element__delete-button');
    }
    
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
  
    
    _handleImageClick() {
      if (typeof this._handleCardClick === 'function') {
        this._handleCardClick(this._name, this._link);
      }
    }

    _setEventListeners() {
      this._likeButton.addEventListener('click', () => { 
        this._toggleLike();
      });
      this._elementDelete.addEventListener('click', () => { this._handleDeleteClick() })
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleImageClick();
      });
      this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    }
    
  
    createCard() {
      this._element.querySelector('.element__title').textContent = this._name;
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._checkLikeButton();
      this._refreshLikes();
      this._toggleDeleteButton();
      this._setEventListeners();
      
      this.updateLikes(this._likes.length);
      return this._element;
    }

    _toggleDeleteButton() {
      // Логика для скрытия/показа кнопки удаления карточки
      if (this._ownerId === this._userId._id) {
        this._elementDelete.style.display = 'block';
      } else {
        this._elementDelete.style.display = 'none';
      }
    }


    isMylikeCard() {
      return this._likes.some((user) => user._id === this._userId._id);;
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
      this._element = null;
}
    _toggleLike() {
        if (this._likeButton.classList.contains('element__like-button_active')) {
            this._handleDislikeClick(this._id);
        } else {
            this._handleLikeClick(this._id);
        }
    };

    _refreshLikes() {
      this._likeCount.textContent = this._likes.length;
  };

    _checkLikeButton() {
        this._likes.forEach(like => {
            if (like._id === this._userId) {
                this._likeButton.classList.add('element__like-button_active')
            }
        })
    };

    addLike(data) {
      this._likeButton.classList.add('element__like-button_active');
      this._likes = data.likes;
      this._refreshLikes(this._likes.length);
    }
    
    unlikeCard(data) {
      this._likeButton.classList.remove('element__like-button_active');
      this._likes = data.likes;
      this._refreshLikes(this._likes.length);
    }
    

    getCardElement() {
      return this._element;
    }
  }
  
  export default Card;
