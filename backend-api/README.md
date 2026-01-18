Backend API — Auth + Notes CRUD

A simple backend API built with Node.js, Express, TypeScript, Prisma, PostgreSQL, Docker, JWT.

The project demonstrates authentication, authorization, and a protected CRUD with real-world backend architecture.

Features

1. User registration & login

2. Password hashing with bcrypt

3. JWT-based authentication

4. Auth middleware (Bearer token)

5. Protected Notes CRUD (users can access only their own data)

6. PostgreSQL database (Docker)

7. Prisma ORM

8. Clean architecture: routes / controllers / services

Tech Stack:

1. Node.js

2. Express

3. TypeScript

4. PostgreSQL

5. Prisma

6. Docker

7. JWT

Getting Started:

1. Clone the repository

git clone <repo-url>
cd backend-api

2. Create .env

DATABASE_URL=postgresql://postgres:password@localhost:5433/backend_api
JWT_SECRET=supersecret123

3. Start database

docker-compose up -d

4. Install dependencies & run

npm install
npm run dev

Server runs on:
http://localhost:3000

API Overview:

Auth

1. POST /users — register

2. POST /users/login — login (returns JWT)

Notes (protected)

1. POST /notes

2. GET /notes

3. GET /notes/:id

4. PATCH /notes/:id

5. DELETE /notes/:id

All /notes endpoints require:

Authorization: Bearer <JWT_TOKEN>

Notes

1. Passwords are never returned from the API

2. Database is not exposed publicly

3. Each user can access only their own notes