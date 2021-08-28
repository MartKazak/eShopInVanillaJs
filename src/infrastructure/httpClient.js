class HttpClient {
    async get(url) {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    async post(url, data = {}) {
        return await this.#request(url, "POST", data);
    };

    async put(url, data = {}) {
        return await this.#request(url, "PUT", data);
    };

    async xdelete(url) {
        return await this.#request(url, "DELETE");
    };

    async #request(url, method, data = {}) {
        const requestParams = {
            method: method,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const request = new Request(url, requestParams);
        const response = await fetch(request);

        return response.json();
    }
}

export default new HttpClient();