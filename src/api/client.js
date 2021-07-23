import axios from "axios";

const BASE_URL = "https://api.alorotbe.com/";

const get = (endpoint, params) => axios.get(BASE_URL + endpoint, params);

const post = async (endpoint, body) => axios.post(BASE_URL + endpoint, body);

export { get, post };
