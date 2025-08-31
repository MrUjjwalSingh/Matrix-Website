# Matrix Club Website

A full-stack web application for the Matrix Club, featuring a modern React frontend and Node.js backend with comprehensive content management capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Support](#support)

## 🌟 Overview

The Matrix Club Website is a comprehensive platform that showcases the club's activities, projects, events, and team members. It features both public-facing content and a protected admin panel for content management.

### What You'll Find Here

- **Public Website**: Landing page, projects showcase, events timeline, team profiles, and gallery
- **Admin Panel**: Protected interface for managing all content
- **API Backend**: RESTful API with JWT authentication
- **Modern UI**: Responsive design with Tailwind CSS and smooth animations

## ✨ Features

### Public Features

- **Landing Page**: Hero section with call-to-action
- **Projects Showcase**: Portfolio of club projects with automatic gradient backgrounds
- **Events Timeline**: Upcoming and past events display
- **Team Profiles**: Team member carousel with infinite scroll
- **Image Gallery**: Photo gallery with grid layout
- **Contact Form**: User contact form with validation
- **Join Club Modal**: Easy club membership application

### Admin Features

- **Authentication**: Secure JWT-based admin login
- **Content Management**: Full CRUD operations for all content types
- **Image Uploads**: Cloudinary integration for media management
- **Form Processing**: Handle contact and join club submissions
- **Dashboard**: Overview of all content and activities

### Technical Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Modern Build**: Vite for fast development and optimized builds
- **Database**: MongoDB with Mongoose ODM
- **File Handling**: Secure file uploads with Cloudinary
- **API Security**: JWT authentication and CORS protection

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React + React Icons

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcrypt
- **File Upload**: Multer + Cloudinary
- **Development**: nodemon

### Development Tools

- **Linting**: ESLint + TypeScript ESLint
- **Version Control**: Git
- **Package Manager**: npm
- **Environment**: dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary** account (for image uploads)
- **Git** (for version control)

## 🚀 Quick Start

Get the entire application running in under 10 minutes:

### 1. Clone the Repository

```bash
# Clone the repository
git clone <repository-url>
cd Matrix-Website

# Or if you already have it
cd Matrix-Website
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create environment file
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

```bash
# Run setup and seed database
npm run setup
npm run seed
npm run create-admin

# Start backend server
npm run dev
```

Backend will be running at `http://localhost:5000` 🎉

### 3. Frontend Setup

```bash
# Open new terminal and navigate to frontend
cd Frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your values
nano .env
```

Required environment variables:

```env
VITE_API_URL=http://localhost:5000/api
VITE_DEV_MODE=true
```

```bash
# Start frontend development server
npm run dev
```

Frontend will be running at `http://localhost:5173` 🎉

### 4. Verify Everything Works

- **Backend**: Visit `http://localhost:5000/api/projects` (should return JSON)
- **Frontend**: Visit `http://localhost:5173` (should show landing page)
- **Admin**: Visit `http://localhost:5173/admin` (login with admin/admin123)

## 📁 Project Structure

```
Matrix-Website/
├── Backend/                 # Node.js/Express backend
│   ├── config/             # Database and service configurations
│   ├── controllers/        # API route handlers
│   ├── middleware/         # Custom middleware (auth, validation)
│   ├── models/            # Mongoose schemas and models
│   ├── routes/            # API route definitions
│   ├── scripts/           # Utility scripts (setup, seeding)
│   ├── uploads/           # Temporary file upload directory
│   ├── server.js          # Main server entry point
│   └── package.json       # Backend dependencies
├── Frontend/               # React TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components and admin views
│   │   ├── layouts/       # Layout components
│   │   ├── styles/        # Global styles and utilities
│   │   ├── adminApi.ts    # Admin API configuration
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   ├── public/            # Static assets
│   ├── index.html         # HTML template
│   ├── vite.config.ts     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## 🔄 Development Workflow

### Starting Development

```bash
# Terminal 1: Backend
cd Backend
npm run dev

# Terminal 2: Frontend
cd Frontend
npm run dev
```

### Making Changes

1. **Backend Changes**: Edit files in `Backend/` directory

   - Server auto-restarts with nodemon
   - Check console for errors

2. **Frontend Changes**: Edit files in `Frontend/src/` directory

   - Browser auto-reloads with Vite
   - Check browser console for errors

3. **Database Changes**: Update models in `Backend/models/`
   - Restart backend server
   - Run migrations if needed

### Testing Changes

```bash
# Backend testing
cd Backend
npm run lint
npm test

# Frontend testing
cd Frontend
npm run lint
npm run build
```

## 🔌 API Documentation

### Quick API Reference

| Endpoint          | Method | Description            | Auth Required |
| ----------------- | ------ | ---------------------- | ------------- |
| `/api/projects`   | GET    | Get all projects       | No            |
| `/api/events`     | GET    | Get all events         | No            |
| `/api/team`       | GET    | Get all team members   | No            |
| `/api/gallery`    | GET    | Get all gallery images | No            |
| `/api/auth/login` | POST   | Admin login            | No            |
| `/api/admin/*`    | ALL    | Admin operations       | Yes           |

### Authentication

Admin endpoints require JWT authentication:

```bash
# Login to get token
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Use token in subsequent requests
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5000/api/admin/projects
```

For complete API documentation, see [Backend README](Backend/README.md#api-endpoints).

## 🚀 Deployment

### Backend Deployment

```bash
# Build and deploy
cd Backend
npm install --production
npm start

# Environment variables needed in production
PORT=5000
MONGO_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Frontend Deployment

```bash
# Build for production
cd Frontend
npm run build

# Deploy dist/ folder to your hosting service
# - Netlify: Drag and drop dist/ folder
# - Vercel: Connect repository
# - AWS S3: Upload dist/ contents
```

### Production Considerations

- **Environment Variables**: Set production values
- **Database**: Use production MongoDB instance
- **Cloudinary**: Configure for production use
- **HTTPS**: Enable SSL in production
- **CORS**: Configure allowed origins
- **Monitoring**: Set up logging and error tracking

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Edit files in appropriate directories
4. **Test**: Ensure both frontend and backend work
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature'`
7. **Open PR**: Create pull request with description

### Code Standards

- **TypeScript**: Use proper types and interfaces
- **ESLint**: Follow project linting rules
- **Components**: Create reusable, focused components
- **API Design**: Follow RESTful principles
- **Error Handling**: Implement proper error handling
- **Documentation**: Update READMEs for new features

### Testing Checklist

Before submitting a PR, ensure:

- [ ] Backend starts without errors
- [ ] Frontend builds successfully
- [ ] All API endpoints work correctly
- [ ] Admin panel functions properly
- [ ] Public pages render correctly
- [ ] No console errors in browser
- [ ] Responsive design works on mobile
- [ ] Linting passes (`npm run lint`)

## 🐛 Troubleshooting

### Common Issues

**Backend Won't Start**

```bash
# Check MongoDB connection
cd Backend
npm run setup

# Verify environment variables
cat .env

# Check port availability
lsof -i :5000
```

**Frontend Build Errors**

```bash
# Clear dependencies and reinstall
cd Frontend
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit
```

**API Connection Issues**

```bash
# Verify backend is running
curl http://localhost:5000/api/projects

# Check CORS configuration
# Ensure frontend .env has correct API URL
```

**Database Issues**

```bash
# Check MongoDB status
sudo systemctl status mongod

# Verify connection string
# Check database permissions
```

### Getting Help

1. **Check Logs**: Review console output for errors
2. **Verify Environment**: Ensure all required variables are set
3. **Test Endpoints**: Use curl or Postman to test API
4. **Browser DevTools**: Check Network and Console tabs
5. **Issues Page**: Search existing issues or create new one

## 📚 Additional Resources

### Documentation

- [Backend README](Backend/README.md) - Complete backend documentation
- [Frontend README](Frontend/README.md) - Complete frontend documentation
- [API Endpoints](Backend/README.md#api-endpoints) - Full API reference

### External Resources

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

### Community

- [GitHub Issues](../../issues) - Report bugs and request features
- [GitHub Discussions](../../discussions) - Ask questions and share ideas
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute

## 🎯 Roadmap

### Planned Features

- **User Authentication**: Public user accounts and profiles
- **Advanced Search**: Search across all content types
- **Notifications**: Email notifications for events and updates
- **Analytics**: Content performance tracking
- **Mobile App**: React Native mobile application
- **API Versioning**: Versioned API endpoints
- **WebSocket**: Real-time updates and chat

### Performance Improvements

- **Caching**: Redis integration for API responses
- **CDN**: Content delivery network for static assets
- **Image Optimization**: Advanced image processing
- **Bundle Splitting**: Code splitting for better performance
- **PWA**: Progressive web app features

## 📞 Support

### Getting Help

1. **Documentation**: Check the READMEs first
2. **Issues**: Search existing issues on GitHub
3. **Discussions**: Ask questions in GitHub Discussions
4. **Contact**: Reach out to the development team

### Reporting Issues

When reporting issues, please include:

- **Environment**: OS, Node.js version, npm version
- **Steps**: Detailed steps to reproduce the issue
- **Expected**: What you expected to happen
- **Actual**: What actually happened
- **Logs**: Relevant error messages and logs
- **Screenshots**: Visual evidence if applicable

---

**Happy Coding! 🚀**

The Matrix Club Website is designed to be developer-friendly and easy to contribute to. Whether you're fixing bugs, adding features, or improving documentation, your contributions are welcome!

For questions or support, please open an issue or contact the development team.
