# Live-Regidency

A full-stack MERN application for managing and displaying author profiles.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

---

## Project Structure

```
Live-Regidency/
│
├── backend/
│   ├── model/
│   │   └── author.model.js
│   ├── routes/
│   │   └── profile.route.js
│   ├── server.js (or app.js)
│   └── ...other backend files
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthorForm.jsx
│   │   │   ├── Authors.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── ...
│   └── ...
│
├── README.md
└── ...
```

---

## Features

- Add and view author profiles.
- Author fields: First Name, Last Name, Title, Profile Image URL, LinkedIn, Twitter.
- Responsive frontend with card-based author display.
- Modal popup for adding new authors.
- Smooth UI transitions and effects.

---

## Tech Stack

- **Frontend:** React, CSS, React Icons, React Router
- **Backend:** Node.js, Express, Mongoose, MongoDB

---

## Getting Started

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file if needed (for MongoDB URI, etc).

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend will run on `https://live-regidency.onrender.com` (or your configured port).

---

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Configure API base URL:**
   - In `src/api/api.js`, set `API_BASE_URL` to your backend URL (e.g., `https://live-regidency.onrender.com/profile/`).

3. **Start the frontend:**
   ```bash
   npm start
   ```
   The frontend will run on `live-regidency.vercel.app`.

---

## API Endpoints

- **POST** `/profile/` — Create a new author
- **GET** `/profile/getUsers` — Get all authors
---

## Screenshots

1. [![Screenshot-2025-06-05-224222.png](https://i.postimg.cc/d1VtmSm2/Screenshot-2025-06-05-234718.png)](https://postimg.cc/HJFgTzNn))

2. [![Screenshot-2025-06-05-234902.png](https://i.postimg.cc/QdDBKmPb/Screenshot-2025-06-05-234902.png)](https://postimg.cc/bs6YKxqD)

---

## License

This project is licensed under the MIT License.

---
