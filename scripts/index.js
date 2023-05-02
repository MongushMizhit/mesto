const editButtonOpen = document.querySelector('.profile__button-opened');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupSubmitButton = document.querySelector('.popup__submit-button');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened');

editButtonOpen.addEventListener('click', () => togglePopupState(popup));

popupCloseButton.addEventListener('click', () => togglePopupState(popup));

popupSubmitButton.addEventListener('click', () => togglePopupState(popup));

popup.addEventListener('click', (evt) => {
    if(evt.target == evt.currentTarget) {
        togglePopupState(popup)
    }
});

// Находим форму в DOM
let formElement = document.querySelector('.popup');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__nickname');
let jobInput = document.querySelector('.popup__info');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__nickname').value;
    let aboutInput = document.querySelector('.popup__info').value;

    // Выберите элементы, куда должны быть вставлены значения полей
document.querySelector('.profile__nickname').innerHTML = nameInput;
document.querySelector('.profile__description').innerHTML = aboutInput;

    // Вставьте новые значения с помощью textContent
    nameInput = profileName.textContent;
    aboutInput = profileAbout.textContent;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);