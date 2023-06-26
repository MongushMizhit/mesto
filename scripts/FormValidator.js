class FormValidator {
  constructor(settings, formElement, addCard) {
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._validButtonClass = settings.validButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._addCard = addCard;
    this._titleInput = document.querySelector('.popup__input_type_title');
    this._linkInput = document.querySelector('.popup__input_type_link');
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
      const nameInput = this._formElement.querySelector('#name-card');
      const jobInput = this._formElement.querySelector('#job-card');
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
  
    this._title = this._titleInput.value; 
    this._link = this._linkInput.value;
    
    this._addCard({ name: this._title, link: this._link });
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
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  };
}

export default FormValidator;


  
  