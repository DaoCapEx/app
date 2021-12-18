import axios from 'axios';
import Cookie from './cookie';

export default class API {
    static #getBackendHost() {
        return process.env.BAKEND_HOST + ':' + process.env.BACKEND_PORT;
    }

    static #getDefaultHeaders() {
        return {
            'Content-Type': 'application/json',
            AUTHORIZATION: `Basic ${Cookie.getUserToken()}`,
        };
    }

    static async get(path) {
        return await axios.get(this.#getBackendHost() + path, {
            headers: this.#getDefaultHeaders(),
        });
    }

    static async post(path, body) {
        return await axios.post(this.#getBackendHost() + path, body, {
            headers: this.#getDefaultHeaders(),
        });
    }
}
