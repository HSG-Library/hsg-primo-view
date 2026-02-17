# Running Primo Explore with Docker (Node 10)

Since this project requires Node 10 which is not compatible with modern macOS, use Docker to run the development environment.

## Prerequisites
- Docker installed and running

## Quick Start

### Run Development Server
```bash
docker-compose up
```

The dev server will be available at `http://localhost:8003`

### Run in Detached Mode
```bash
docker-compose up -d
```

### Stop the Server
```bash
docker-compose down
```

## Running Other Commands

### Access Container Shell
```bash
docker-compose run --rm primo-dev bash
```

Once inside, you can run any command:
```bash
gulp run --ve --browserify --view 41SLSP_HSG-sandbox_jfu
npm install
# etc.
```

## Troubleshooting

### Port Already in Use
If port 8003 is already in use, edit the `docker-compose.yml` and change:
```yaml
ports:
  - "8004:8003"  # Use 8004 on host, 8003 in container
```

### Clean Start
To completely reset the environment:
```bash
docker-compose down -v
docker-compose up
```
