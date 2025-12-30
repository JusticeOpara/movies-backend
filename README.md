# MOVIE API

A RESTful API that would power a movie app. The client interface can be found [on GitHub](https://github.com/JusticeOpara/movies-backend)

## [Live Demo](https://movies-backend-y0iq.onrender.com/)

![alt text](/src/assets/movie-swagger.png)

## FEATURES

🔐 Authentication

- User registration & login

- JWT-based authentication (protected routes)

- Secure logout

## 🎥 Movies

- Create movies (authenticated users only)

- Update movies (creator-only access)

- List all movies (sorted by newest)

- View single movie details

## 📌 Watchlist

- Add movies to personal watchlist

- Prevent duplicate watchlist entries

- Update watchlist status (PLANNED, WATCHING, COMPLETED, DROPPED)

- Rate and add notes to watchlist items

- Delete watchlist items

- Fetch user’s watchlist

✅ Validation & Security

Request validation using Zod

Ownership checks on updates/deletes

Centralized validation middleware

## Docs

check [Swagger API Documentation](https://movies-backend-y0iq.onrender.com/api-docs/)

## TECH

- Node js
- Express js
- PostgreSQL
- Prisma ORM
- Zod
- Swagger(OpenAPI)

## 📘 API Documentation

Swagger UI is available at:

GET /api-docs

It includes:

Authentication endpoints

Movie endpoints

Watchlist endpoints

Request & response schemas

JWT security support

## 🔑 Authentication

Protected routes require a JWT token:

Authorization: Bearer <your_token_here>

## 🧾 Database Schema (Prisma)

User
model User {
id String @id @default(uuid())
name String
email String @unique
password String
createdAt DateTime @default(now())

movies Movie[] @relation("MovieCreator")
watchlistItems WatchlistItem[]
}

Movie
model Movie {
id String @id @default(uuid())
title String
overview String?
releaseYear Int
genres String[] @default([])
runtime Int?
posterUrl String?
createdBy String
createdAt DateTime @default(now())

creator User @relation("MovieCreator", fields: [createdBy], references: [id], onDelete: Cascade)
watchlistItems WatchlistItem[]
}

WatchlistItem
model WatchlistItem {
id String @id @default(uuid())
userId String
movieId String
status WatchlistStatus @default(PLANNED)
rating Int?
notes String?
createdAt DateTime @default(now())
updatedAt DateTime @default(now())

user User @relation(fields: [userId], references: [id], onDelete: Cascade)
movie Movie @relation(fields: [movieId], references: [id], onDelete: Cascade)

@@unique([userId, movieId])
}

WatchlistStatus Enum
enum WatchlistStatus {
PLANNED
WATCHING
COMPLETED
DROPPED
}

## ⚙️ Setup & Installation

## Setup environment variables

cp .env.example .env

## Run database migrations

npx prisma migrate dev

## Generate Prisma client

npx prisma generate

## Seed database

npx prisma db seed

## Start server

npm run dev

## 🧪 Example Endpoints

Method Endpoint Description
POST /auth/register Register user
POST /auth/login Login user
GET /movies List movies
PUT /movies/:id Update movie
POST /watchlist Add to watchlist
GET /watchlist Get user watchlist
PUT /watchlist/:id Update watchlist item
DELETE /watchlist/:id Remove from watchlist

## 🧠 Future Improvements

Movie search & filtering

Public movie ratings aggregation

Soft deletes

Admin roles

Recommendation engine

Caching with Redis
