# Backend API — Auth + Notes CRUD

A simple backend API built with **Node.js**, **Express**, **TypeScript**, **Prisma**, **PostgreSQL**, **Docker**, and **JWT**.

The project demonstrates authentication, authorization, and a protected CRUD using a clean, real-world backend architecture.

---

## Features

1. User registration and login  
2. Password hashing with bcrypt  
3. JWT-based authentication  
4. Auth middleware (Bearer token)  
5. Protected Notes CRUD (users can access only their own data)  
6. PostgreSQL database (Docker)  
7. Prisma ORM  
8. Clean architecture: routes / controllers / services  

---

## Tech Stack

- Node.js  
- Express  
- TypeScript  
- PostgreSQL  
- Prisma  
- Docker  
- JWT  

---

## Getting Started

```bash
# 1. Clone repository
git clone <repo-url>
cd backend-api

# 2. Create .env
DATABASE_URL=postgresql://postgres:password@localhost:5433/backend_api
JWT_SECRET=supersecret123

# 3. Start database
docker-compose up -d

# 4. Install dependencies & run
npm install
npm run dev
