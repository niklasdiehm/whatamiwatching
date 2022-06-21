// https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
import axios from 'axios';
import { Component } from 'react';

export class api extends Component {


    /* /movie
    /user
    /genre/list */
    url = 'http://192.168.178.73:8080/api';

    // IP-Adresse benutzen von dem der es ausführt
    async getLoginValidation(username, password) {
        const response = await axios.get(this.url + '/user/login?username=' + username + '&password=' + password);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }
    };

    async getMovieOfTheDay(userID) {
        const response = await axios.get(this.url + '/movie/movieOfTheDay?userID=' + userID);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }

    };

    async getMovieByID(movieID) {
        console.log(movieID)
        try {
            const response = await axios.get(this.url + '/movie/movie?movieID=' + movieID);
            return response.data;
        } catch (error) {
            console.log("Fehler")
            console.log(error)
        }
    };

    async getGenres() {
        const response = await axios.get(this.url + '/genre/list');
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }
    };


    async getFavoriteGenre(userID) {
        const response = await axios.get(this.url + '/genre/favorite?userID=' + userID);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }
    }

    async updateFavoriteGenre(userID, genreID) {
        const response = await axios.post(this.url + '/genre/favorite?userID=' + userID + '&genreID=' + genreID);
        if (response.status !== 200) {
            console.log("Fehler")
        }
        else {
            return response.data;
        }
    }
    /*
    getMoviesByGenre(genreID) {
        axios
            .get(baseURL + "/movie/" + genreID)
            .then((response) => {
                return response;
            })
    }
    
    getMoviesByGenreAndDuration(genreID, maxLength) {
        axios
            .get(baseURL + "/" + genreID)
            .then((response) => {
                return response;
            })
    }
     */

}

export default api;