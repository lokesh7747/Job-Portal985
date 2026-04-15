# Full Stack Job Portal (MERN)

A production-ready job portal application with role-based access for Job Seekers and Employers.

## Features
- **Authentication**: JWT based auth with cookie storage & bcrypt password hashing.
- **Profile**: Job seekers can update profiles, upload resumes, and track applied jobs.
- **Employer/Admin**: Create companies, post jobs, and manage applicants (accept/reject).
- **Job Search**: Keyword-based search and filtering.
- **Modern UI**: Fully responsive design with TailwindCSS, Framer Motion, and Lucide icons.
- **State Management**: Redux Toolkit for centralized data handling.

---

## Tech Stack
- **Frontend**: React.js, Vite, TailwindCSS, Redux Toolkit, React Router, Axios, Sonner (toasts).
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, BcryptJS, Multer.
- **Database**: MongoDB Atlas.

---

## Prerequisites
- Node.js installed
- MongoDB Atlas account (for Connection URI)

---

## Getting Started

### 1. Clone the repository
`git clone <repository-url>`

### 2. Backend Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_atlas_uri
   SECRET_KEY=your_jwt_secret
   ```
4. Start the server: `npm run dev`

### 3. Frontend Setup
1. `cd frontend`
2. `npm install`
3. Start the dev server: `npm run dev`

---

## Folder Structure
- `backend/`: Express server, Mongoose models, controllers, and routes.
- `frontend/`: React application with Redux slices and reusable components.

---

## Future Improvements
- Cloudinary integration for persistent file storage.
- Real-time notifications for application status changes.
- Email verification during registration.
