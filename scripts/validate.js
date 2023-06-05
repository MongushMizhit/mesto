function initializeValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, settings);
  });
}

function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      validateInput(formElement, inputElement, settings);
      toggleButtonChangeState(formElement, settings, buttonElement);
    });
  });

  toggleButtonChangeState(formElement, settings, buttonElement);
}

function validateInput(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, settings);
  } else {
    hideError(formElement, inputElement, settings);
  }
}

function showError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
}

function hideError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(settings.errorClass);
}

function toggleButtonChangeState(formElement, settings, buttonElement) {
  if (!formElement.checkValidity()) {
    buttonElement.setAttribute('disabled', 'true');
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.classList.remove('popup__submit-button_valid');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.classList.add('popup__submit-button_valid');
  }
}

const formElement = document.querySelector(settings.formSelector);
const buttonElement = formElement.querySelector(settings.submitButtonSelector);
toggleButtonChangeState(formElement, settings, buttonElement);

  
  
  