# Timeout: Personal Productivity Tracker

A full-stack web application for tracking productivity sessions, visualizing time spent, and viewing stats by tag.

## Features
- Calendar view (month/week/day switch)
- Add sessions (title, description, duration, tags)
- View total time spent grouped by tag (daily/weekly/monthly)
- Calendar highlights for days with tracked sessions
- Stats page with bar chart
- Modular, production-ready code

## Tech Stack
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (with Prisma ORM)

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL (running locally or remote)

### 1. Clone the repository
```
git clone <your-repo-url>
cd timeout
```

### 2. Backend Setup
```
cd backend
npm install
```

- Create a `.env` file in `backend/` with:
  ```
  DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/timeout"
  ```
- Initialize Prisma:
  ```
  npx prisma init
  # Edit schema.prisma as needed, then:
  npx prisma migrate dev --name init
  npx prisma generate
  ```
- Start the backend:
  ```
  npm run dev
  ```

### 3. Frontend Setup
```
cd ../frontend
npm install
npx tailwindcss init -p
```
- Configure `tailwind.config.js` and `postcss.config.js` as needed.
- Start the frontend:
  ```
  npm start
  ```

### 4. Usage
- Visit `http://localhost:3000` for the frontend.
- Backend runs on `http://localhost:4000` by default.

---

## Extending
- Add new features by creating new API routes/components.
- Update Prisma schema and run migrations for DB changes.

---

## License
MIT
