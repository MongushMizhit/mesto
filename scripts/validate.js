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
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const isAnyInputEmpty = inputList.some((inputElement) => inputElement.value.trim() === '');
  const isAnyInputInvalid = inputList.some((inputElement) => !isInputValid(inputElement));

  if (isAnyInputEmpty || isAnyInputInvalid) {
    buttonElement.setAttribute('disabled', 'true');
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.classList.remove(settings.validButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.classList.add(settings.validButtonClass);
  }
}

function isInputValid(inputElement) {

  if (inputElement.validity.valid) {
    return true;
  } else {
    return false;
  }
}

  
  
  