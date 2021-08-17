export const API_URL = "http://localhost:3000";

export const get = async function(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
};

export async function post(url, data = {}) {
    return await request(url, "POST", data);
};

export async function put(url, data = {}) {
    return await request(url, "PUT", data);
};

export async function xdelete(url) {
    return await request(url, "DELETE");
};

async function request(url, method, data = {}) {
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