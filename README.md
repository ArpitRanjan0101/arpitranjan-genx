# Portfolio (Frontend Only)

## Local

```bash
npm install
npm run dev
```

## Dev (Docker + Hot Reload)

```bash
docker compose up --build
```

- App: `http://localhost:8080`

## Production (Docker + Nginx)

```bash
docker compose --profile prod up --build
```

- App: `http://localhost:8080`
