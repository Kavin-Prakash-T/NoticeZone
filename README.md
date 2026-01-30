# Notice Board System

A full-stack web application for managing and displaying notices. Built with Node.js, Express, MongoDB for the backend, and React with Vite for the frontend.

## Features
- User registration and authentication (JWT-based)
- Admin and user roles
- Admins can create, update, and delete notices
- Users can view notices
- PDF upload support for notices
- Responsive and modern UI

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite
- **Authentication:** JWT
- **File Uploads:** Cloudinary

## Folder Structure
```
backend/
  controllers/        # Route controllers for all endpoints
  middlewares/        # Custom Express middlewares
  models/             # Mongoose models
  routes/             # Express route definitions
  config/             # Configuration files (DB, Cloudinary)
  server.js           # Entry point for backend server
frontend/
  src/
	 components/       # React components
	 layouts/          # Layout components
	 App.jsx           # Main React app
	 main.jsx          # Entry point for React
  public/             # Static assets
  index.html          # Main HTML file
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
	```bash
	cd backend
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Create a `.env` file in the backend directory with the following variables:
	```env
	MONGODB_URI=your_mongodb_connection_string
	JWT_SECRET=your_jwt_secret
	CLOUDINARY_CLOUD_NAME=your_cloudinary_name
	CLOUDINARY_API_KEY=your_cloudinary_api_key
	CLOUDINARY_API_SECRET=your_cloudinary_api_secret
	```
4. Start the backend server:
	```bash
	npm start
	```

### Frontend Setup
1. Navigate to the frontend folder:
	```bash
	cd frontend
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the frontend development server:
	```bash
	npm run dev
	```

### Accessing the App
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3000](http://localhost:3000)

## Deployment
- The app can be deployed on platforms like Vercel (frontend) and Render/Heroku (backend).
- Update environment variables as needed for production.

## License
This project is licensed under the MIT License.