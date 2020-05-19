import axios from 'axios';

export const createAPI = (login) => {
    const api = axios.create({
        baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
        timeout: 1000 * 5,
        withCredentials: true,
    });
    const onSuccess = (response) => response;
    const onFail = (err) => {
        if(err.response.status === 401) {
            login();
        }
        throw err;
    }
    api.interceptors.response.use(onSuccess, onFail);
    return api;
}