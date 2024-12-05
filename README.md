# Containerized Web Application

A scalable multi-service web application using Docker, consisting of a static frontend, Flask API backend, and PostgreSQL database.

## Architecture

- Frontend: Nginx serving static files
- Backend: Flask API with PostgreSQL backend
- Database: PostgreSQL with persistent storage

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. Clone the repository
2. Run the application:
```bash
docker-compose up --build
```
3. Access the application at http://localhost

## API Endpoints

- `GET /api/data`: Retrieve all records
- `POST /api/data`: Add new record
  ```json
  {
    "name": "string",
    "value": integer
  }
  ```

## Development

### Project Structure
```
.
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── static/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app.py
└── database/
    └── init.sql
```

### Configuration

Environment variables in `docker-compose.yml`:
- `DB_HOST`: Database hostname
- `DB_NAME`: Database name
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password

## Scaling

Scale backend services:
```bash
docker-compose up --scale backend=3
```

## Monitoring

Enable cAdvisor:
1. Uncomment cAdvisor service in docker-compose.yml
2. Access metrics at http://localhost:8080