class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
  
          return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers,
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }

      updateProfileInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this._headers.authorization,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            about,
          }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }

      addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: {
            authorization: this._headers.authorization,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            link,
          }),
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
      }

      // В классе Api (Api.js) обновите метод deleteCard:
      deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers,
        })
        .then(this._checkResponse);
      }

      
      updateAvatar(newAvatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
            authorization: this._headers.authorization,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ avatar: newAvatarLink }),
        })
        .then(this._checkResponse);
        
      }

      // Функция для постановки лайка
  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // Функция для снятия лайка
  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  }

  export default Api;