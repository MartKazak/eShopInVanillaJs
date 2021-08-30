class HttpClient {
    async get(url) {
        try {
            const response = await fetch(url);

            if (!response.ok)
                throw new Error(`Request response: ${response.status} - ${response.statusText}.`);

            return response.json();
        } catch (error) {
            throw error;
        }
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
        try {
            const requestParams = {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            const request = new Request(url, requestParams);
            const response = await fetch(request);

            if (!response.ok)
                throw new Error(`Request response: ${response.status} - ${response.statusText}.`);

            return response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default new HttpClient();