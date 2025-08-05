# CineLoom

CineLoom is a full-stack streaming platform for movies and TV shows, built with React (frontend) and Node.js/Express (backend). It features user authentication, subscription management, movie browsing, admin controls, and more.

## Features

- **User Authentication**: Sign up, login, and profile management.
- **Subscription Plans**: Choose from Basic, Standard, and Premium plans.
- **Browse & Search**: Filter movies by genre, language, popularity, and more.
- **Player**: Stream movies with recommendations and progress tracking.
- **Admin Dashboard**: Manage movies, banners, genres, languages, FAQs, and users.
- **Help Center & FAQ**: Support pages for user assistance.
- **Responsive UI**: Built with Chakra UI and Tailwind CSS.
- **Privacy & Terms**: Dedicated pages for privacy policy, cookies, and terms of use.

## Project Structure

```
cineloom/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Backend Setup

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env` (see sample in [`backend/.env`](backend/.env)).
4. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- **Frontend**
  - `npm run dev` – Start development server
  - `npm run build` – Build for production
  - `npm run preview` – Preview production build
  - `npm run lint` – Run ESLint

- **Backend**
  - `node server.js` – Start backend server

## Technologies Used

- **Frontend**: React, Chakra UI, Tailwind CSS, Vite, Zustand, Swiper
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## License

This project is licensed under the MIT License.

---

For more details, see the source code in the [`frontend`](frontend/) and [`backend`](backend/) directories.
