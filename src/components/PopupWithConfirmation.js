import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._initialSubmitButtonText = this._submitButton.textContent;
    this._cardId = null;
  }

  setCardId(cardId) {
    this._cardId = cardId;
  }

  getCardId() {
    return this._cardId;
  }

  open() {
    super.open();
    this._submitButton.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвратить стандартное поведение кнопки
      this._handleConfirm();
    });
  }
  

  close() {
    super.close();
    this._submitButton.removeEventListener('click', this._handleConfirm);
    this._resetSubmitButton();
  }

  _resetSubmitButton() {
    this._submitButton.textContent = this._initialSubmitButtonText;
  }
}


export default PopupWithConfirmation;
