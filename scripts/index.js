const editButtonOpen = document.querySelector('.profile__button-opened'); 
const popup = document.querySelector('.popup'); 
const popupCloseButton = document.querySelector('.popup__close-button'); 
const popupSubmitButton = document.querySelector('.popup__submit-button'); 
const formElement = document.querySelector('.popup__form');  
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened'); 

editButtonOpen.addEventListener('click', () => togglePopupState(popup)); 

popupCloseButton.addEventListener('click', () => togglePopupState(popup)); 

popupSubmitButton.addEventListener('click', () => togglePopupState(popup)); 

function handleFormSubmit (evt) {
    evt.preventDefault();
  
    document.querySelector('.profile__nickname').textContent = document.querySelector('.popup__input_type_name').value; 
    document.querySelector('.profile__description').textContent = document.querySelector('.popup__input_type_job').value; 
}

formElement.addEventListener('submit', handleFormSubmit);
