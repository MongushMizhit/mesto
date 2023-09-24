(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._id=e._id,this._ownerId=e.owner._id,this._likes=e.likes,this._cardSelector=n,this._handleLikeClick=r,this._handleDislikeClick=o,this._handleDeleteClick=i,this._handleCardClick=u,this._currentUser=l,this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCount=this._element.querySelector(".element__like-number"),this._elementDelete=this._element.querySelector(".element__delete-button")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleImageClick",value:function(){"function"==typeof this._handleCardClick&&this._handleCardClick(this._name,this._link)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._toggleLike()})),this._elementDelete.addEventListener("click",(function(){t._handleDeleteClick()})),this._element.querySelector(".element__image").addEventListener("click",(function(){t._handleImageClick()})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"createCard",value:function(){return this._element.querySelector(".element__title").textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._checkLikeButton(),this._refreshLikes(),this._toggleDeleteButton(),this._setEventListeners(),this.updateLikes(this._likes.length),this._element}},{key:"_toggleDeleteButton",value:function(){this._ownerId===this._currentUser._id?this._elementDelete.style.display="block":this._elementDelete.style.display="none"}},{key:"isMylikeCard",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._currentUser._id}))}},{key:"updateLikes",value:function(t){this._likeCount.textContent=t,this._like=t,this.isMylikeCard()&&this.toggleLikeButton()}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"_toggleLike",value:function(){this._likeButton.classList.contains("element__like-button_active")?this._handleDislikeClick(this._id):this._handleLikeClick(this._id)}},{key:"_refreshLikes",value:function(){this._likeCount.textContent=this._likes.length}},{key:"_checkLikeButton",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._currentUser&&t._likeButton.classList.add("element__like-button_active")}))}},{key:"addLike",value:function(t){this._likeButton.classList.add("element__like-button_active"),this._likes=t.likes,this._refreshLikes(this._likes.length)}},{key:"unlikeCard",value:function(t){this._likeButton.classList.remove("element__like-button_active"),this._likes=t.likes,this._refreshLikes(this._likes.length)}},{key:"getCardElement",value:function(){return this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();const r=n;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._validButtonClass=e.validButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.classList.remove(this._validButtonClass)}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.classList.add(this._validButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.classList.remove(this._validButtonClass),this._submitButton.disabled=!0)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const l=u;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}const s=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}const y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.close()}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._photoImage=e,r._photoCaption=n,r}return e=u,(n=[{key:"open",value:function(t,e){d(_(u.prototype),"open",this).call(this),this._photoImage.src=e,this._photoImage.alt=t,this._photoCaption.textContent=t}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);const k=b;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonSubmit=n._form.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;w(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t.getInputValues();t._submitCallback(n)}))}},{key:"close",value:function(){w(E(u.prototype),"close",this).call(this),this._form.reset()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}const L=function(){function t(e){var n=e.nameSelector,r=e.infoSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,info:this._infoElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameElement.textContent=e,this._infoElement.textContent=n,this._avatarElement.src=r}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var B=document.querySelector(".popup__image"),I=document.querySelector(".popup__image-caption"),q=document.querySelector("#card-popup__form"),T=document.querySelector("#popup-profile__form"),R=document.querySelector(".popup__form-avatar"),x=document.querySelector("#name-card"),U=document.querySelector("#job-card"),D=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__avatar-edit"),z=document.querySelector("#profile-submit"),M=(document.querySelector(".profile__nickname"),document.querySelector(".profile__description"),document.querySelector(".profile__avatar-image"),R.querySelector("#avatar-submit")),N=q.querySelector("#card-submit"),J=document.querySelector("#delete-form").querySelector("#delete-submit"),H={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",validButtonClass:"popup__submit-button_valid"};function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},G.apply(this,arguments)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}const W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._submitButton=e._popup.querySelector(".popup__submit-button"),e._initialSubmitButtonText=e._submitButton.textContent,e._cardId=null,e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;G(Q(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(e){e.preventDefault(),t._confirmCallback()}))}},{key:"setConfirmCallback",value:function(t){this._confirmCallback=t}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==X(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===X(o)?o:String(o)),r)}var o}const Z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"updateProfileInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"addCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&Y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et,nt=new j(".popup-profile",(function(t){var e=t.name,n=t.info;z.textContent="Сохранение...",ct.updateProfileInfo(e,n).then((function(t){lt.setUserInfo(t),nt.close()})).catch((function(t){console.error(t)})).finally((function(){z.textContent="Сохранить"}))})),rt=new j(".card-popup",(function(t){var e=t.name,n=t.link;N.textContent="Создание...",ct.addCard(e,n).then((function(t){var e=ft(t);at.addItem(e),rt.close()})).catch((function(t){console.error(t)})).finally((function(){N.textContent="Создать"}))})),ot=new j(".avatar-popup",(function(t){var e=t.nickname;M.textContent="Сохранение...",ct.updateAvatar(e).then((function(){lt.setUserAvatar(e),ot.close()})).catch((function(t){console.error("Ошибка при обновлении аватара:",t)})).finally((function(){M.textContent="Сохранить"}))})),it=new k(".popup-photo",B,I),ut=new W(".delete-popup"),lt=new L({nameSelector:".profile__nickname",infoSelector:".profile__description",avatarSelector:".profile__avatar-image"}),at=new s({items:[],renderer:function(t){var e=ft(t);at.addItem(e)}},".elements");at.renderItems();var ct=new Z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-75",headers:{authorization:"ce69c67a-8f47-420f-b8fa-8388f7ae2056","Content-Type":"application/json"}});Promise.all([ct.getUserInfo(),ct.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];lt.setUserInfo({name:o.name,about:o.about,avatar:o.avatar}),et=o,i.reverse().forEach((function(t){var e=ft(t);at.addItem(e)})),at.renderItems()})).catch((function(t){console.error("Ошибка при загрузке данных:",t)})),ot.setEventListeners(),ut.setEventListeners(),nt.setEventListeners(),rt.setEventListeners(),it.setEventListeners(),D.addEventListener("click",(function(){var t=lt.getUserInfo();x.value=t.name,U.value=t.info,nt.open()})),A.addEventListener("click",(function(){st.disableSubmitButton(),rt.open()})),V.addEventListener("click",(function(){ot.open()}));var st=new l(H,q);function ft(t){var e=new r({name:t.name,link:t.link,_id:t._id,likes:t.likes,owner:t.owner},"#element-template",(function(t){ct.likeCard(t).then((function(t){e.addLike(t)})).catch((function(t){console.log(t)}))}),(function(t){ct.dislikeCard(t).then((function(t){e.unlikeCard(t)})).catch((function(t){console.log(t)}))}),(function(){ut.setConfirmCallback((function(){J.textContent="Удаление...",ct.deleteCard(t._id).then((function(){e.remove(),ut.close()})).catch((function(t){return console.log(t)})).finally((function(){return J.textContent="Да"}))})),ut.open()}),pt,et);return e.createCard()}st.enableValidation(),new l(H,T).enableValidation(),new l(H,R).enableValidation();var pt=function(t,e){it.open(t,e)}})();