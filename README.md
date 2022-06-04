# Backend

To start the backend-services, navigate into the backend folder and type in

```bash
cd ./backend
docker compose up --force-recreate --build -d
```

This starts all backend services (currently nameserver, admin, gateway, movie and user).

Currently avaiable routes are:

- http://localhost:8888 (admin)
- http://localhost:8761 (nameserver)
- http://localhost:8080 (gateway)
- http://localhost:8080/api/user/login (login)
- http://localhost:8080/api/movie/discover (get movies)
- http://localhost:8080/api/movie/movie (movie details)
- http://localhost:8080/api/movie/genres (genres)
