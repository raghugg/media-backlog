# Media Backlog

A web application for tracking movies, TV shows, music, and other media you want to consume.

Backend built with Java, Spring Boot, and PostgreSQL. Two interchangeable frontends are included: one built with Next.js/React, the other with Angular.

## Tech Stack

**Backend**
- Java 17
- Spring Boot 3.5
- Maven
- Spring Data JPA / Hibernate
- PostgreSQL

**Frontend (`frontend/`)**
- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

**Frontend (`frontend-angular/`)**
- Angular 21
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

**Frontend (Next.js)**

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

**Frontend (Angular)**

1. Install dependencies:

```bash
cd frontend-angular
npm install
```

2. Run:

```bash
cd frontend-angular
ng serve
```

The app will be available at `http://localhost:4200`.

Both frontends talk to the same backend and can run at the same time; the backend allows CORS from both `http://localhost:3000` and `http://localhost:4200`.

## Features
- Add media entries (movies, TV shows, songs, podcasts, and more)
- View the full backlog
- Remove entries once consumed
