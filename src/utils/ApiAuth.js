class ApiAuth {
  constructor(content) {
    this._baseUrl = content.baseUrl;
    this._headers = content.headers;
  }

  serverResponseChecker(res){
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: userData.password,
        email: userData.login
      })
    })
    .then(this.serverResponseChecker)
  }

  auth(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: userData.password,
        email: userData.login
      })
    })
    .then(this.serverResponseChecker)
  }

  emailInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${jwt}`
      }
    })
    .then(this.serverResponseChecker)
  }
}

const apiAuth = new ApiAuth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiAuth;