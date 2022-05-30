// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/


import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:8080/api'
})
/* /movie
/user
/movie/genres */
export default api;