import { getToken, removeToken, setToken, tokenExists } from "../cache/token";
import { post } from "./client";

const BASE_ENDPOINT = "identity/";

const register = async (registerModel) => {
  post(BASE_ENDPOINT + "register", registerModel).then(res => {
    if (res.status === 200) {
      setToken(res.data.token);
    } else throw res.data;
  });
};

const login = (loginModel) => {
  post(BASE_ENDPOINT + "login", loginModel).then(res => {
    if (res.status === 200) {
      setToken(res.data.token);
    } else throw res.data;
  });
};

const logout = () => removeToken();

const getUser = () => ({
  name: 'ممد ممدی',
  username: 'mmd_mmdi',
  picUri: 'https://picsum.photos/200/200',
  major: 1,
  grade: 1,
  work: null
});

const isAuthenticated = () => tokenExists();

export { getUser, isAuthenticated, register, login, logout };
