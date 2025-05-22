# Authentication Module

A modern authentication system built with React, Express, and MySQL, featuring a beautiful UI using Ant Design and Tailwind CSS.

## Features

- 🔐 Secure Authentication with JWT
- 👤 User Registration and Login
- 📱 Responsive Design
- 🎨 Modern UI with Ant Design & Tailwind CSS
- 🔒 Protected Routes
- 👤 User Profile Management
- ✏️ Profile Editing Capabilities

## Tech Stack

### Frontend
- React with TypeScript
- Ant Design (Antd)
- Tailwind CSS
- React Router
- Axios

### Backend
- Express.js
- MySQL Database
- JWT Authentication
- SQLAlchemy ORM
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd bytecloude_project
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Configure Environment Variables
Create a `.env` file in the backend directory with:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=auth_db
JWT_SECRET=your_jwt_secret
```

5. Start the Backend Server
```bash
cd backend
npm start
```

6. Start the Frontend Development Server
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
bytecloude_project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── services/
│   └── public/
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    └── config/
```

## Features in Detail

### Authentication
- Secure user registration with validation
- JWT-based authentication
- Protected routes
- Automatic redirects based on auth state

### User Profile
- View user details
- Edit profile information
- Secure password management

### UI/UX
- Responsive design for all devices
- Modern glassmorphism effects
- Intuitive form layouts
- Error handling and user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 