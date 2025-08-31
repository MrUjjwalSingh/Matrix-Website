# Matrix Club Backend

A Node.js/Express backend API for the Matrix Club website, providing authentication, data management, and file upload capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Database Models](#database-models)
- [Authentication](#authentication)
- [File Uploads](#file-uploads)
- [Development](#development)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

- **Authentication System**: JWT-based user authentication and authorization
- **CRUD Operations**: Full CRUD for Projects, Events, Team Members, and Gallery
- **File Management**: Image uploads with Cloudinary integration
- **Form Handling**: Contact form and join club form processing
- **Admin Panel**: Protected admin routes for content management
- **MongoDB Integration**: Mongoose ODM with MongoDB
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) + bcrypt
- **File Upload**: Multer + Cloudinary
- **Environment**: dotenv
- **CORS**: cors middleware
- **Development**: nodemon

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary** account (for image uploads)

## 🚀 Quick Start

Get the backend running in under 10 minutes:

### 1. Clone and Install

```bash
# Navigate to backend directory
cd Matrix-Website/Backend

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values
nano .env
```

Required environment variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/matrix-club
JWT_SECRET=your-super-secret-jwt-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 3. Database Setup

```bash
# Run setup script (checks environment and creates uploads directory)
npm run setup

# Seed the database with sample data
npm run seed

# Create admin user
npm run create-admin
```

### 4. Start Development Server

```bash
# Start development server with auto-reload
npm run dev

# Or start production server
npm start
```

Your API will be running at `http://localhost:5000` 🎉

## 📁 Project Structure

```
Backend/
├── config/           # Database configuration
├── controllers/      # Route handlers and business logic
├── middleware/       # Custom middleware (auth, validation)
├── models/          # Mongoose schemas and models
├── routes/          # API route definitions
├── scripts/         # Utility scripts (setup, seeding, migrations)
├── uploads/         # Temporary file upload directory
├── server.js        # Main application entry point
└── package.json     # Dependencies and scripts
```

### Key Directories Explained

- **`controllers/`**: Contains business logic for each resource (projects, events, team, etc.)
- **`models/`**: Mongoose schemas defining data structure
- **`routes/`**: API endpoint definitions and middleware
- **`middleware/`**: Custom middleware for authentication and validation
- **`scripts/`**: Utility scripts for setup, seeding, and database migrations

## 🔌 API Endpoints

### Public Endpoints (No Authentication Required)

```bash
GET  /api/projects     # Get all projects
GET  /api/events       # Get all events
GET  /api/team         # Get all team members
GET  /api/gallery      # Get all gallery images
```

### Admin Endpoints (Authentication Required)

```bash
# Authentication
POST /api/auth/login   # Admin login

# Projects
GET    /api/admin/projects     # Get all projects
POST   /api/admin/projects     # Create new project
PUT    /api/admin/projects/:id # Update project
DELETE /api/admin/projects/:id # Delete project

# Events
GET    /api/admin/events       # Get all events
POST   /api/admin/events       # Create new event
PUT    /api/admin/events/:id   # Update event
DELETE /api/admin/events/:id   # Delete event

# Team
GET    /api/admin/team         # Get all team members
POST   /api/admin/team         # Create new team member
PUT    /api/admin/team/:id     # Update team member
DELETE /api/admin/team/:id     # Delete team member

# Gallery
GET    /api/admin/gallery      # Get all images
POST   /api/admin/gallery      # Upload new image
PUT    /api/admin/gallery/:id  # Update image
DELETE /api/admin/gallery/:id  # Delete image

# Forms
POST   /api/forms/contact      # Submit contact form
POST   /api/forms/join-club    # Submit join club form
```

## 🔐 Authentication

The backend uses JWT (JSON Web Tokens) for authentication:

1. **Login**: POST to `/api/auth/login` with username/password
2. **Token**: Receive JWT token in response
3. **Authorization**: Include token in `Authorization: Bearer <token>` header
4. **Middleware**: `authMiddleware` validates tokens on protected routes

### Example Protected Request

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     http://localhost:5000/api/admin/projects
```

## 📁 Database Models

### Core Models

- **`User`**: Admin user accounts with authentication
- **`Project`**: Project information (title, description, tags, GitHub)
- **`Event`**: Event details (title, date, time, venue, description)
- **`Team`**: Team member profiles (name, role, image)
- **`Gallery`**: Image gallery (title, alt text, source URL)
- **`FormResponse`**: Form submissions (contact, join club)

### Example Project Schema

```javascript
{
  title: String,        // Project title
  description: String,  // Project description
  tags: [String],       // Array of technology tags
  github: String,       // GitHub repository URL
  createdAt: Date,      // Creation timestamp
  updatedAt: Date       // Last update timestamp
}
```

## 📤 File Uploads

The backend handles file uploads using Multer and Cloudinary:

1. **Temporary Storage**: Files uploaded to `uploads/` directory
2. **Cloudinary Processing**: Images processed and optimized
3. **URL Storage**: Cloudinary URLs stored in database
4. **Cleanup**: Temporary files removed after processing

### Supported Formats

- **Images**: JPG, PNG, GIF, WebP
- **Max Size**: 10MB per file
- **Processing**: Automatic optimization and format conversion

## 🛠️ Development

### Development Server

```bash
# Start with auto-reload
npm run dev

# Server runs on http://localhost:5000
# Auto-restarts on file changes
```

### Code Structure

- **Controllers**: Handle HTTP requests and responses
- **Models**: Define data schemas and validation
- **Routes**: Define API endpoints and middleware
- **Middleware**: Custom authentication and validation logic

### Adding New Features

1. **Create Model**: Add schema in `models/` directory
2. **Add Controller**: Create controller with CRUD operations
3. **Define Routes**: Add routes in `routes/` directory
4. **Update Server**: Register new routes in `server.js`

## 📜 Scripts

```bash
npm run dev              # Start development server
npm start               # Start production server
npm run setup           # Check environment and create directories
npm run seed            # Seed database with sample data
npm run create-admin    # Create admin user account
npm run migrate:remove-color  # Remove color fields from database
```

### Script Details

- **`setup`**: Validates environment variables and creates required directories
- **`seed`**: Populates database with sample projects, events, team, and gallery data
- **`create-admin`**: Creates default admin user (username: admin, password: admin123)
- **`migrate:remove-color`**: Database migration to remove deprecated color fields

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** Pull Request

### Code Standards

- **ESLint**: Follow project linting rules
- **Async/Await**: Use modern JavaScript patterns
- **Error Handling**: Implement proper error handling
- **Validation**: Validate all input data
- **Documentation**: Update README for new features

### Testing

```bash
# Run linting
npm run lint

# Check for common issues
npm audit
```

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Failed**

```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Verify connection string in .env
MONGO_URI=mongodb://localhost:27017/matrix-club
```

**Port Already in Use**

```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

**JWT Token Issues**

```bash
# Check JWT_SECRET in .env
# Ensure token is included in Authorization header
Authorization: Bearer <your-token>
```

### Getting Help

1. Check the [Issues](../../issues) page
2. Review error logs in console
3. Verify environment variables
4. Ensure MongoDB is running
5. Check file permissions for uploads directory

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

**Happy Coding! 🚀**

For questions or support, please open an issue or contact the development team.
