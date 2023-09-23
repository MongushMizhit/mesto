import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonSubmit = this._form.querySelector('.popup__submit-button');
  }

  getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this.getInputValues();
      this._submitCallback(inputValues);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;