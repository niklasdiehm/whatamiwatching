// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/


import axios from 'axios';

export const key = 'unser Key für die Abfrage';

const api = axios.create({
    baseURL: ' URL von unserer Seite '
})

export default api;