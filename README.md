# Student Registration Application – Dockerized Full Stack

A full-stack Student Registration Application built using **Python Flask**, **Node.js Express**, and **Docker Compose**.

The Node.js frontend accepts student registration details and forwards them to the Flask backend for validation.

## Project Architecture

```text
Browser
   |
   v
Node.js Frontend (Port 3000)
   |
   v
Docker Network
   |
   v
Flask Backend (Port 8000)
   |
   v
JSON Response
```

## Technologies Used

- Python 3.11
- Flask
- Node.js 22
- Express.js
- Docker
- Docker Compose
- HTML and JavaScript
- Git and GitHub
- Docker Hub

## Project Structure

```text
flask-docker-assignment/
├── backend/
│   ├── Dockerfile
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── public/
│       └── index.html
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Features

- Student registration form
- Name, email and course validation
- Node.js Express frontend
- Python Flask REST API backend
- Docker container networking
- Separate frontend and backend images
- Docker Compose orchestration

## Prerequisites

- Docker Desktop
- Git
- Windows, Linux or macOS

## Run the Application

### 1. Clone the repository

```bash
git clone https://github.com/asherrodz/flask-docker-assignment.git
```

### 2. Enter the project directory

```bash
cd flask-docker-assignment
```

### 3. Build and start containers

```bash
docker compose up --build -d
```

### 4. Check containers

```bash
docker ps
```

### 5. Access the application

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Docker Compose Commands

Start:

```bash
docker compose up -d
```

Build:

```bash
docker compose up --build -d
```

Stop:

```bash
docker compose down
```

View logs:

```bash
docker compose logs
```

## Docker Hub Images

### Backend

```bash
docker pull asherrodz/student-registration-backend:1.0
```

[Backend Docker Hub Repository](https://hub.docker.com/r/asherrodz/student-registration-backend)

### Frontend

```bash
docker pull asherrodz/student-registration-frontend:1.0
```

[Frontend Docker Hub Repository](https://hub.docker.com/r/asherrodz/student-registration-frontend)

## Backend API

**Endpoint:** `POST /submit`

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "course": "DevOps"
}
```

## GitHub Repository

[asherrodz/flask-docker-assignment](https://github.com/asherrodz/flask-docker-assignment)

## Author

**Asher Rodrigues**

GitHub: [asherrodz](https://github.com/asherrodz)