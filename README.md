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
  - `POST {VITE_API_BASE_URL}/auth/login`
  - `POST {VITE_API_BASE_URL}/auth/register`
- API base URL is controlled by `VITE_API_BASE_URL`.

### Configure API URL for different environments

Create a local env file from the example and set your backend URL:

```bash
cp .env.example .env
```

Then edit `.env` and set `VITE_API_BASE_URL` as needed, for example:

- `/api` for Docker + nginx proxy
- `http://localhost:8080/api` for direct local backend
- `https://test-api.example.com/api` for test environment

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
