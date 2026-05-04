# Team Task Manager

Team Task Manager is a full-stack learning project built to practice real software engineering skills with Spring Boot and Angular.

The goal is not to build a flashy clone app. The goal is to build a serious, understandable team productivity tool from the ground up: backend APIs, database persistence, frontend state, forms, validation, permissions, testing, and eventually production-style features.

## Purpose

This project exists so I can learn:

- Spring Boot API development with Java
- Angular application structure and TypeScript
- RESTful backend and frontend integration
- PostgreSQL persistence with JPA/Hibernate
- Full-stack CRUD workflows
- Authentication, authorization, and data ownership
- Testing, Docker, and production-minded engineering habits

## Tech Stack

- Backend: Java 21, Spring Boot, Spring Web MVC, Spring Data JPA
- Frontend: Angular, TypeScript, Tailwind CSS
- Database: PostgreSQL through Docker Compose
- Testing: Maven/Spring tests for backend, Angular/Vitest tooling for frontend

## Project Structure

```text
team-task-manager/
  backend/                 Spring Boot API
  frontend/                Angular frontend
  docker-compose.yml       Local PostgreSQL database
```

Backend packages are organized by feature:

```text
com.tri.taskmanager
  health
  workspace
  board
```

Future backend features should follow the same style:

```text
user
auth
list
card
activity
search
```

## Current Functionality

The app currently supports:

- Backend health endpoints
- Workspace persistence
- Board persistence
- Creating workspaces
- Creating boards through the backend API
- Showing boards linked to their workspace in the Angular UI
- PostgreSQL running locally through Docker Compose

## Expected Final Functionality

By the end of the project, the app should support the following features.

### Workspaces

- Create workspaces
- View all workspaces available to the current user
- Rename workspaces
- Delete workspaces
- Show boards that belong to each workspace
- Support workspace members and roles

### Boards

- Create boards inside a workspace
- View boards by workspace
- Rename boards
- Delete boards
- Open a board detail page
- Show lists and cards inside each board

### Lists

- Create lists inside a board
- Rename lists
- Delete lists
- Reorder lists
- Move cards between lists

### Cards

- Create cards
- Edit card title and description
- Delete cards
- Assign cards to users
- Add due dates
- Track card status
- Move cards between lists
- Support drag-and-drop interactions

### Users And Auth

- Sign up
- Log in
- Log out
- Protect private routes
- Store sessions securely
- Show only data the current user is allowed to access

### Permissions

- Invite users to workspaces
- Support workspace roles such as owner and member
- Only owners can delete a workspace
- Members can only edit boards/cards in workspaces they belong to
- Backend APIs must enforce permissions, not just the UI

### UX And Product Polish

- Palantir-inspired dark enterprise UI
- Clear dashboard layout
- Loading states
- Empty states
- Error states
- Form validation messages
- Toast notifications
- Optimistic UI updates where appropriate
- Responsive layout for desktop and smaller screens

### Activity And Search

- Record important actions such as card creation, card movement, and comments
- Show an activity feed
- Search cards by title or description
- Filter cards by due date, assignee, or status
- Add pagination where lists can grow large

### Testing And Tooling

- Unit tests for backend logic
- Integration tests for API and database flows
- Frontend component tests where useful
- Dockerized local database
- Clear local setup commands
- CI pipeline eventually

### Production-Level Stretch Goals

- Real-time board updates
- Email invitations
- File attachments
- Board templates
- Audit logs
- Rate limiting
- Caching
- Cloud deployment

## Local Development

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Run the backend:

```bash
cd backend
./mvnw spring-boot:run
```

Run the frontend:

```bash
cd frontend
npm install
npm start
```

Local URLs:

```text
Frontend: http://localhost:4200
Backend:  http://localhost:8080
Postgres: localhost:5432
```

PostgreSQL is not opened in a browser. It is accessed by the backend, a database client, or `psql`.

Connect to the database:

```bash
docker compose exec postgres psql -U taskmanager -d team_task_manager
```

Useful database commands:

```sql
\dt
SELECT * FROM workspace;
SELECT * FROM board;
\q
```

## Useful Commands

Backend tests:

```bash
cd backend
./mvnw test
```

Frontend build:

```bash
cd frontend
npm run build
```

Stop PostgreSQL:

```bash
docker compose stop postgres
```

## Learning Notes

This project should grow step by step. The priority is understanding the system, not rushing features.

Recommended order:

1. Build simple CRUD endpoints.
2. Connect each endpoint to Angular.
3. Add database persistence.
4. Add validation and error handling.
5. Add authentication.
6. Add permissions.
7. Add better UX.
8. Add tests.
9. Add production-style features.

The code should stay boring, readable, and organized. Every feature should teach one useful full-stack concept.
