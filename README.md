# Media Backlog

A command-line application for tracking movies, TV shows, music, and other media you want to consume.

Built with Java, Spring Boot, and PostgreSQL — uses Spring Data JPA with Hibernate for database persistence.

## Tech Stack
- Java 17
- Spring Boot 3.5
- Maven
- Spring Data JPA / Hibernate
- PostgreSQL

## Running Locally

1. Install and start PostgreSQL
2. Create a database named `media_backlog`
3. Configure `application.properties` with your database credentials
4. Run the app:

```bash
./mvnw spring-boot:run
```

## Features
- Add media entries (movies, TV shows, songs, podcasts, and more)
- Query the full backlog
- Remove entries once consumed
