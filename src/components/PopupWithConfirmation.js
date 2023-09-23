import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._initialSubmitButtonText = this._submitButton.textContent;
    this._cardId = null;
  }

  setEventListeners() {
    super.setEventListeners()
    this._submitButton.addEventListener('click', evt => {
        evt.preventDefault()
        this._confirmCallback()
    })
}

  setConfirmCallback(callback) { 
    this._confirmCallback = callback;
}
}


export default PopupWithConfirmation;
