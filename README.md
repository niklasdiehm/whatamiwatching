# Backend

To start the backend-services, navigate into the backend folder and type in

```bash
cd ./backend
docker compose up --force-recreate --build -d
```

This starts all backend services (currently nameserver, admin, gateway, movie, genre and user).

Currently avaiable routes are:

- http://localhost:8888 (admin)
- http://localhost:8761 (nameserver)
- http://localhost:8080 (gateway)
- http://localhost:8080/api/user/login?username={username}&password={password} (login)
- http://localhost:8080/api/movie/movies/discover?genreID={genreID}&runtime={runtime} (get movies) WARNING: genreID and runtime are optional
- http://localhost:8080/api/movie/movieOfTheDay?userID={userID} (get movies of the day) WARNING: userID is optional
- http://localhost:8080/api/movie/movie?movieID={movieID} (movie details)
- http://localhost:8080/api/genre/list (genres)
- http://localhost:8080/api/genre/favorite?userID={userID} (favorite genre)
- http://localhost:8080/api/genre/favorite?userID={userID}&genreID={genreID} (change favorite genre) WARNING: POST-Request

# Frontend

Before starting the frontend, you need to enter your ip-adress into the api.js (frontend/src/services/api.js).

To start the Frontend, navigate into the frontend folder and type in

```bash
cd ./frontend
npm install
expo start
```

Install the "Expo Go"-App on your smartphone and scan the upcoming QR-code in the terminal with the app.

Logindata:
user: Affenkopf
password: password
