# PhantasyStar_TTRPG_tool

## Run in Docker

This project can be built and served in a container with nginx.

- Frontend URL: `http://localhost:4173`
- Backend target from container: host machine at `http://host.docker.internal:8080`
- Frontend API base path in container build: `/api`

The nginx config proxies `/api/*` to your host backend on port `8080` and keeps the `/api` prefix (for example, `/api/v1/users/register` forwards as `/api/v1/users/register`).

## First-time start

```bash
docker compose up --build -d
```

## Backend auth integration

- The frontend now sends auth requests to the backend:
  - `POST {VITE_API_BASE_URL}/v1/users/login`
  - `POST {VITE_API_BASE_URL}/v1/users/register`
- Character summary confirmation sends:
  - `POST {VITE_API_BASE_URL}{VITE_CHARACTER_SAVE_PATH}`
- API base URL is controlled by `VITE_API_BASE_URL`.
- If `VITE_API_BASE_URL` is not set, the app defaults to `http://localhost:8080`.
- Character save path is controlled by `VITE_CHARACTER_SAVE_PATH` (default `/v1/characters`).

### Configure API URL for different environments

Create a local env file from the example:

```bash
cp .env.example .env
```

Defaults in `.env.example` point to local backend:

- `VITE_API_BASE_URL=http://localhost:8080`

Override `VITE_API_BASE_URL` per environment as needed:

- `http://localhost:8080` for direct local backend
- `https://api.example.com` for production backend
- `/api` for Docker + nginx proxy

When using Docker Compose, rebuild so Vite picks up the new build-time value:

```bash
docker compose up --build -d
```

## Deploy a new version on demand

After code changes, rebuild and restart the containerized frontend:

```bash
docker compose up --build -d
```

## Stop

```bash
docker compose down
```

## Logs

```bash
docker compose logs -f web
```

## Notes

- On Linux, `docker-compose.yml` includes `host.docker.internal:host-gateway` so the container can reach your host backend.
- If your frontend calls a different backend path, align it to `/api` or update `docker/nginx.conf` and rebuild.
- Your backend process must be running on host port `8080` while the frontend container is running.
