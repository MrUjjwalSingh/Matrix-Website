# Matrix Club Frontend

A modern React TypeScript frontend for the Matrix Club website, featuring a responsive design, admin panel, and seamless integration with the backend API.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Routing](#routing)
- [Styling](#styling)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Admin Panel**: Protected admin interface for content management
- **Dynamic Content**: Projects, Events, Team, and Gallery sections
- **Form Handling**: Contact form and join club modal
- **Authentication**: JWT-based admin authentication
- **Image Management**: Gallery with image uploads
- **Modern UI**: Smooth animations and hover effects
- **TypeScript**: Full type safety and IntelliSense support

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React + React Icons
- **Development**: ESLint + TypeScript ESLint
- **PostCSS**: Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Backend API** running (see [Backend README](../Backend/README.md))

## 🚀 Quick Start

Get the frontend running in under 10 minutes:

### 1. Clone and Install

```bash
# Navigate to frontend directory
cd Matrix-Website/Frontend

# Install dependencies
npm install
```

### 2. Environment Configuration

Create a `.env` file in the frontend directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Development Settings
VITE_DEV_MODE=true
```

### 3. Start Development Server

```bash
# Start development server
npm run dev

# Server runs on http://localhost:5173
# Auto-reloads on file changes
```

Your frontend will be running at `http://localhost:5173` 🎉

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components and admin views
│   ├── layouts/       # Layout components (AdminLayout)
│   ├── styles/        # Global styles and utilities
│   ├── adminApi.ts    # Admin API configuration
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global CSS and Tailwind imports
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

### Key Directories Explained

- **`components/`**: Reusable UI components (Hero, Navigation, Footer, etc.)
- **`pages/`**: Page-level components and admin panel views
- **`layouts/`**: Layout wrappers (AdminLayout for admin pages)
- **`styles/`**: Global styles, Tailwind utilities, and gradient system
- **`adminApi.ts`**: Axios configuration for admin API calls

## 🧩 Components

### Public Components

- **`Hero.tsx`**: Landing page hero section with call-to-action
- **`Navigation.tsx`**: Main navigation bar with responsive menu
- **`Footer.tsx`**: Site footer with links and information
- **`Projects.tsx`**: Projects showcase with gradient backgrounds
- **`Events.tsx`**: Events display with timeline layout
- **`Team.tsx`**: Team member carousel with infinite scroll
- **`Gallery.tsx`**: Image gallery with grid layout
- **`Contact.tsx`**: Contact form with validation
- **`JoinClubModal.tsx`**: Join club modal form

### Admin Components

- **`AdminSidebar.tsx`**: Admin panel navigation sidebar
- **`ProjectFormModal.tsx`**: Add/edit project modal
- **`EventFormModal.tsx`**: Add/edit event modal
- **`TeamFormModal.tsx`**: Add/edit team member modal
- **`GalleryFormModal.tsx`**: Add/edit gallery image modal

### Form Components

- **`ProjectFormModal.tsx`**: Project creation/editing form
- **`EventFormModal.tsx`**: Event creation/editing form
- **`TeamFormModal.tsx`**: Team member creation/editing form
- **`GalleryFormModal.tsx`**: Gallery image upload/editing form

## 📄 Pages

### Public Pages

- **`App.tsx`**: Main application with routing
- **`Hero.tsx`**: Landing page hero section
- **`Projects.tsx`**: Projects showcase section
- **`Events.tsx`**: Events timeline section
- **`Team.tsx`**: Team members section
- **`Gallery.tsx`**: Image gallery section
- **`Contact.tsx`**: Contact form section

### Admin Pages

- **`AdminDashboard.tsx`**: Admin dashboard overview
- **`AdminProjects.tsx`**: Projects management interface
- **`AdminEvents.tsx`**: Events management interface
- **`AdminTeam.tsx`**: Team management interface
- **`AdminGallery.tsx`**: Gallery management interface
- **`AdminLogin.tsx`**: Admin authentication page

## 🛣️ Routing

The application uses React Router DOM for navigation:

### Public Routes

```tsx
<Route path="/" element={<App />} />
```

### Admin Routes

```tsx
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="projects" element={<AdminProjects />} />
  <Route path="events" element={<AdminEvents />} />
  <Route path="team" element={<AdminTeam />} />
  <Route path="gallery" element={<AdminGallery />} />
</Route>
```

### Route Protection

Admin routes are protected by authentication middleware that checks for valid JWT tokens.

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS for utility-first styling:

```tsx
// Example Tailwind classes
<div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-6 rounded-lg">
  Gradient Background
</div>
```

### Custom CSS

Global styles and custom animations in `src/index.css`:

```css
/* Custom animations */
.glow-text {
  text-shadow: 0 0 20px currentColor;
}

.network-bg {
  /* Custom network background */
}
```

### Gradient System

Automatic gradient assignment for visual elements:

```tsx
import { gradientClassOrStyle } from "../styles/gradientPicker";

// Automatically assigns gradients based on content
const bg = gradientClassOrStyle(project._id || project.title);
```

## 🔄 State Management

### Local State

Components use React hooks for local state management:

```tsx
const [projects, setProjects] = useState<Project[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

### Form State

Form components manage their own state with controlled inputs:

```tsx
const [title, setTitle] = useState(initialData?.title || "");
const [description, setDescription] = useState(initialData?.description || "");
```

### API State

API calls are managed with loading and error states:

```tsx
const [modalLoading, setModalLoading] = useState(false);
const [modalError, setModalError] = useState("");
```

## 🔌 API Integration

### Public API

Public components fetch data from the backend:

```tsx
const fetchProjects = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/projects");
    const data = await response.json();
    setProjects(data.data);
  } catch (err) {
    setError(err instanceof Error ? err.message : "An error occurred");
  }
};
```

### Admin API

Admin components use the configured `adminApi`:

```tsx
import adminApi from "../adminApi";

const handleAddProject = async (data: any) => {
  try {
    await adminApi.post("/admin/projects", data);
    // Handle success
  } catch (err: any) {
    // Handle error
  }
};
```

### Authentication

JWT tokens are automatically included in admin API requests:

```tsx
// adminApi.ts configuration
const adminApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## 🛠️ Development

### Development Server

```bash
# Start with hot reload
npm run dev

# Server runs on http://localhost:5173
# Auto-reloads on file changes
```

### Code Quality

```bash
# Run linting
npm run lint

# Check TypeScript types
npx tsc --noEmit
```

### Adding New Features

1. **Create Component**: Add component in `src/components/` directory
2. **Add Page**: Create page component in `src/pages/` directory
3. **Update Routing**: Add route in `App.tsx` or admin routes
4. **Style**: Use Tailwind CSS classes and custom CSS as needed
5. **Test**: Verify component renders and functions correctly

### Component Structure

```tsx
import React, { useState, useEffect } from "react";

interface ComponentProps {
  // Define props interface
}

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic

  return (
    // JSX markup
  );
};

export default ComponentName;
```

## 🚀 Build & Deployment

### Development Build

```bash
# Build for development
npm run build

# Preview production build
npm run preview
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Build output in dist/ directory
```

### Deployment

The `dist/` directory contains the production-ready files that can be deployed to:

- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect repository and auto-deploy
- **AWS S3**: Upload `dist/` contents to S3 bucket
- **Traditional hosting**: Upload `dist/` files to web server

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** Pull Request

### Code Standards

- **TypeScript**: Use proper types and interfaces
- **ESLint**: Follow project linting rules
- **Components**: Create reusable, focused components
- **Styling**: Use Tailwind CSS utilities when possible
- **State**: Use appropriate React hooks for state management
- **Props**: Define clear prop interfaces

### Component Guidelines

- **Single Responsibility**: Each component should have one clear purpose
- **Props Interface**: Define TypeScript interfaces for all props
- **Error Handling**: Implement proper error boundaries and fallbacks
- **Loading States**: Show loading indicators for async operations
- **Accessibility**: Use semantic HTML and ARIA attributes

### Testing

```bash
# Run linting
npm run lint

# Check TypeScript compilation
npx tsc --noEmit

# Verify build process
npm run build
```

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**

```bash
# Find process using port 5173
lsof -i :5173

# Kill process
kill -9 <PID>
```

**Build Errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit
```

**API Connection Issues**

```bash
# Verify backend is running on port 5000
# Check VITE_API_URL in .env file
# Ensure CORS is configured on backend
```

**Styling Issues**

```bash
# Verify Tailwind CSS is properly imported
# Check PostCSS configuration
# Ensure CSS classes are correct
```

### Getting Help

1. Check the [Issues](../../issues) page
2. Review browser console for errors
3. Verify environment variables
4. Ensure backend API is running
5. Check network tab for API calls

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## 🔗 Related Documentation

- [Backend README](../Backend/README.md) - Backend API documentation
- [API Endpoints](../Backend/README.md#api-endpoints) - Complete API reference
- [Deployment Guide](../Backend/README.md#deployment) - Production deployment

---

**Happy Coding! 🚀**

For questions or support, please open an issue or contact the development team.
