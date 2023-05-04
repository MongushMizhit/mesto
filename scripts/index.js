const editButtonOpen = document.querySelector('.profile__button-opened'); 
const popup = document.querySelector('.popup'); 
const popupCloseButton = document.querySelector('.popup__close-button');  
const formElement = document.querySelector('.popup__form');  
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job');
const profileNickname = document.querySelector('.profile__nickname');
const profileDescription = document.querySelector('.profile__description');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened'); 

editButtonOpen.addEventListener('click', () => {
    nameInput.value = profileNickname.textContent;
    jobInput.value = profileDescription.textContent;
    togglePopupState(popup);
  });

popupCloseButton.addEventListener('click', () => togglePopupState(popup)); 
 

function handleFormSubmit (evt) {
    evt.preventDefault();
  
    profileNickname.textContent = nameInput.value; 
    profileDescription.textContent = jobInput.value;

    togglePopupState(popup);
}

formElement.addEventListener('submit', handleFormSubmit);
