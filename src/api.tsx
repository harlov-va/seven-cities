import axios from 'axios';
import { ActionCreator } from './reducer/reducer';

export const createAPI = (dispatch) => {
    const api = axios.create({
        baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
        timeout: 1000 * 5,
        withCredentials: true,
    });
    const onSuccess = (response) => response;
    api.interceptors.response.use(onSuccess);
    return api;
}