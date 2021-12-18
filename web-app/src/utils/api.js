import axios from 'axios';

export default class API {

    static backendPath = process.env.BAKEND_HOST + ":" + process.env.BACKEND_PORT;

    static options = {
        headers: {
            'Content-Type': 'application/json',
            'AUTHORIZATION': 
        }
    }

    static async get(path) {
        return await axios.get(backendPath + path)
    }

    static async post(path, body) {
        return await axios.post(backendPath + path, body)
    }
}