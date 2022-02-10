// 1 описание запросов к нашему Api

class MainApi {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    //получаю данные профиля с сервера
    getUserInfo() {
        return fetch(`${this.url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this._handleResponse)
    }

    // Изменение данных профиля
    setUserInfo({ email, name }) {
        return fetch(`${this.url}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
            })
        })
            .then(this._handleResponse)
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
}

const userApi = new MainApi({
    url: 'https://random-data-api.com/api/users/random_user',
})

export default userApi;