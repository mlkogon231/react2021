import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio2020-296700-default-rtdb.firebaseio.com/'
});

export default instance;