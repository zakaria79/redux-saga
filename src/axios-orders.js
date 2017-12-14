import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4c37c.firebaseio.com/'
});

export default instance;
