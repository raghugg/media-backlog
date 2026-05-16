# Media Backlog

A web application for tracking movies, TV shows, music, and other media you want to consume.

Backend built with Java, Spring Boot, and PostgreSQL. Frontend built with Next.js, React, and Tailwind CSS.

## Tech Stack

**Backend**
- Java 17
- Spring Boot 3.5
- Maven
- Spring Data JPA / Hibernate
- PostgreSQL

**Frontend**
- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## Running Locally

**Backend**

1. Install and start PostgreSQL
2. Create a database named `media_backlog`
3. Configure `application.properties` with your database credentials
4. Run:

```bash
cd backend
./mvnw spring-boot:run
```

**Frontend**

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Run:

```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:3000`.

## Features
- Add media entries (movies, TV shows, songs, podcasts, and more)
- View the full backlog
- Remove entries once consumed
