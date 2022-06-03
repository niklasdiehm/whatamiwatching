# Backend

To start the backend-services, navigate into the backend folder and type in

```bash
cd ./backend
docker compose up --force-recreate --build -d
```

This starts all backend services (currently nameserver, admin, gateway, movie and user).
