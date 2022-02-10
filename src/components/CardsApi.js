class Api {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    getInitialMovies() {
        return fetch(`${this.url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
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

const api = new Api({
    url: 'https://random-data-api.com/api/beer/random_beer',
})

export default api;