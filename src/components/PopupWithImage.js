import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector, photoImage, photoCaption) {
    
    super(popupSelector);
    this._photoImage = photoImage;
    this._photoCaption = photoCaption;
  }

  open(name, link) {
    super.open();

    this._photoImage.src = link;
    this._photoImage.alt = name;
    this._photoCaption.textContent = name;
    this.setEventListeners()
  }
}

export default PopupWithImage;
