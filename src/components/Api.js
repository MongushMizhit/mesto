class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
        .then(this._checkResponse);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
        .then(this._checkResponse);
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
        .then(this._checkResponse);
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
      .then(this._checkResponse);
    }

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

      
  likeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  
  dislikeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
  }

  export default Api;