import axios from 'axios';
import store from './redux/store';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
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
