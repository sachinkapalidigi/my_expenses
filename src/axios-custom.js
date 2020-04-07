import axios from 'axios';
import store from './redux/store';

let baseURL = 'http://52.14.67.195:8080/';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080/';
}
const instance = axios.create({
  baseURL,
});

export const authInstance = () => {
  const {
    auth: { token },
  } = store.getState();
  console.log(token, store.getState());
  if (token) {
    instance.defaults.headers.Authorization = token;
  }
  return instance;
};

export default instance;
