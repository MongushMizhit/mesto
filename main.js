(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._photoImage=o,this._photoCaption=r,this._popupWithImage=i,this._handleCardClick=u,this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image")}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleLikeButtonClick",value:function(t){t.target.classList.toggle("element__like-button_active")}},{key:"_handleDeleteButtonClick",value:function(t){t.target.closest(".element").remove()}},{key:"_handleImageClick",value:function(t){var e=t.target,n=e.closest(".element").querySelector(".element__title").textContent,o=e.getAttribute("src");this._photoImage.src=o,this._photoImage.alt=n,this._photoCaption.textContent=n}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".element__like-button").addEventListener("click",this._handleLikeButtonClick.bind(this)),this._element.querySelector(".element__delete-button").addEventListener("click",this._handleDeleteButtonClick.bind(this)),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"createCard",value:function(){return this._element.querySelector(".element__title").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._setEventListeners(),this._element}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();const o=n;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._validButtonClass=e.validButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.classList.remove(this._validButtonClass)}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.classList.add(this._validButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.classList.remove(this._validButtonClass),this._submitButton.disabled=!0)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const l=u;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===c(r)?r:String(r)),o)}var r}const a=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=o,this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===f(r)?r:String(r)),o)}var r}const y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===m(r)?r:String(r)),o)}var r}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},b.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(o);if(r){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._photoImage=e,o._photoCaption=n,o}return e=u,(n=[{key:"open",value:function(t,e){b(d(u.prototype),"open",this).call(this),this._photoImage.src=e,this._photoImage.alt=t,this._photoCaption.textContent=t}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);const S=_;function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==g(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===g(r)?r:String(r)),o)}var r}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(o);if(r){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;w(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues();t._submitCallback(n)}))}},{key:"close",value:function(){w(C(u.prototype),"close",this).call(this),this._form.reset()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===O(r)?r:String(r)),o)}var r}const L=function(){function t(e){var n=e.nameSelector,o=e.infoSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,info:this._infoElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.info;this._nameElement.textContent=e,this._infoElement.textContent=n}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var B={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",validButtonClass:"popup__submit-button_valid"},I=new j(".popup-profile",K),q=new j(".card-popup",Q),T="#element-template",x=document.querySelector(".popup__image"),R=document.querySelector(".popup__image-caption"),D=new S(".popup-photo",x,R),V=document.querySelector("#card-popup__form"),A=document.querySelector("#popup-profile__form"),U=document.querySelector("#name-card"),M=document.querySelector("#job-card"),N=document.querySelector(".profile__edit-button"),W=document.querySelector(".profile__add-button"),z=function(t,e){D.open(t,e)},F=new L({nameSelector:".profile__nickname",infoSelector:".profile__description"});I.setEventListeners(K),q.setEventListeners(Q),D.setEventListeners(),N.addEventListener("click",(function(){var t=F.getUserInfo();U.value=t.name,M.value=t.info,I.open()})),W.addEventListener("click",(function(){G.disableSubmitButton(),q.open()}));var G=new l(B,V);G.enableValidation();var H=new l(B,A);function J(t){return new o(t,T,x,R,D,z).createCard()}function K(t){F.setUserInfo(t),H.toggleButtonState(),I.close()}function Q(t){var e=J({name:t.name,link:t.link});X.addItem(e),q.close()}H.enableValidation();var X=new a({items:[{name:"Алдын-Булак",link:"http://newsib.net/wp-content/uploads/2022/08/image005.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){var e=J(t);X.addItem(e)}},".elements");X.renderItems()})();