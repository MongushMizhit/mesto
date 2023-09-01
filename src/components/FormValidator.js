class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._validButtonClass = settings.validButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    
    // Находим элементы формы и кнопку отправки один раз
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  disableSubmitButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.classList.remove(this._validButtonClass);
  }

  toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.classList.add(this._validButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.classList.remove(this._validButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;

