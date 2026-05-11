# Task Manager App

A task management application built with React, TypeScript, Context API, and Auth0.

## Features

- Create, edit, and delete tasks
- Task status tracking (Todo, In Progress, Done)
- Task priority levels (Low, Medium, High)
- User authentication with Auth0
- Global state management with Context API
- TypeScript for type safety

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Auth0
- Context API

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository
```bash
   git clone https://github.com/geniartbytelabs-spec/task-manager.git
   cd task-manager
```

2. Install dependencies
```bash
   npm install
```

3. Create `.env` file in root directory
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id

4. Run the app
```bash
   npm run dev
```

## Usage

- Sign in with Auth0
- Create tasks with title, description, status, and priority
- View, edit, or delete tasks from the dashboard
- Click on a task to view details