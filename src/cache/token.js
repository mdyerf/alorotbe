import jwt_decode from "jwt-decode";

const TOKEN_KEY = "AUTH_TOKEN";

const getToken = () => {
    let token = localStorage.getItem(TOKEN_KEY)
    if(token) return jwt_decode(token);
    else return null;
}
const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const removeToken = () => localStorage.removeItem(TOKEN_KEY);
const tokenExists = () => !!getToken();

export { getToken, setToken, removeToken, tokenExists };
