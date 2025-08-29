# Matrix Website Backend API

This is the backend API for the Matrix Website, providing dynamic data for the frontend components.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### 1. Message Endpoint
- **GET** `/api/message`
- Returns a welcome message from the backend
- Response: `{ "message": "Hello from Express backend 🚀" }`

### 2. Projects Endpoint
- **GET** `/api/projects`
- Returns an array of project data for the Projects section
- Response: `{ "projects": [...] }`

### 3. Events Endpoint
- **GET** `/api/events`
- Returns an array of event data for the Events section
- Response: `{ "events": [...] }`

### 4. Team Endpoint
- **GET** `/api/team`
- Returns an array of team member data for the Team section
- Response: `{ "teamMembers": [...] }`

### 5. Gallery Endpoint
- **GET** `/api/gallery`
- Returns an array of gallery image data for the Gallery section
- Response: `{ "galleryImages": [...] }`

## Data Structure

### Project Object
```json
{
  "title": "Project Title",
  "description": "Project description",
  "tags": ["tag1", "tag2"],
  "github": "https://github.com",
  "color": "from-green-400 to-cyan-500"
}
```

### Event Object
```json
{
  "title": "Event Title",
  "date": "March 15, 2024",
  "time": "2:00 PM - 5:00 PM",
  "venue": "Location",
  "description": "Event description",
  "color": "from-green-400 to-cyan-500"
}
```

### Team Member Object
```json
{
  "name": "Member Name",
  "role": "Role Title",
  "image": "https://image-url.com",
  "gradient": "from-green-400 to-cyan-500"
}
```

### Gallery Image Object
```json
{
  "src": "https://image-url.com",
  "alt": "Image alt text",
  "title": "Image title"
}
```

## Frontend Integration

The frontend components now fetch data from these endpoints instead of using hardcoded data:

- `Projects.tsx` - Fetches from `/api/projects`
- `Events.tsx` - Fetches from `/api/events`
- `Team.tsx` - Fetches from `/api/team`
- `Gallery.tsx` - Fetches from `/api/gallery`

Each component includes:
- Loading states while fetching data
- Error handling for failed requests
- TypeScript interfaces for type safety

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **ES6 Modules** - Modern JavaScript modules
