# PhantasyStar_TTRPG_tool

## Run in Docker

This project can be built and served in a container with nginx.

- Frontend URL: `http://localhost:4173`
- Backend target from container: host machine at `http://host.docker.internal:8080`
- Frontend API base path in container build: `/api`

The nginx config proxies `/api/*` to your host backend on port `8080`.

## First-time start

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
