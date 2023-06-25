class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._validButtonClass = settings.validButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
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

  _toggleButtonState() {
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
    if (this._formElement.checkValidity()) {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.classList.add(this._validButtonClass);
      submitButton.disabled = false;
    } else {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.classList.remove(this._validButtonClass);
      submitButton.disabled = true;
    }
  }

  _handleProfileSubmitButton(evt) {
    evt.preventDefault();
    if (this._formElement.checkValidity()) {
      const nameInput = this._formElement.querySelector('.popup__input_type_name');
      const jobInput = this._formElement.querySelector('.popup__input_type_job');
      const currentName = nameInput.value;
      const currentJob = jobInput.value;
      
      // Обновление элементов страницы с новыми значениями
      document.querySelector('.profile__nickname').textContent = currentName;
      document.querySelector('.profile__description').textContent = currentJob;
  
      this._toggleButtonState(); // Устанавливаем состояние кнопки
      this._formElement.closest('.popup').classList.remove('popup_opened'); // Закрываем попап
    }
  }

  _handleAddFormSubmit(evt) { 
    evt.preventDefault(); 
  
    const titleInput = this._formElement.querySelector('.popup__input_type_title');
    const linkInput = this._formElement.querySelector('.popup__input_type_link');
    const title = titleInput.value; 
    const link = linkInput.value;
  
    // Вызов функции addCard для добавления новой карточки
  
    // Очистка формы
    this._formElement.reset();
  
    // Установка состояния кнопки
    this._toggleButtonState();
  
    // Закрытие попапа
    this._formElement.closest('.popup').classList.remove('popup_opened');
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._formElement.addEventListener('submit', this._handleProfileSubmitButton.bind(this));
    this._formElement.addEventListener('submit', this._handleAddFormSubmit.bind(this));
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;

  
  
  