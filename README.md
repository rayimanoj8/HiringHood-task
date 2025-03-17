## Live Link 🔗 

https://task-manager-369.vercel.app/

# Task Manager

a simple app to maintain daily tasks. and make decisions to make tasks by using the integrated third party api for weather# TaskManager Features

##  Key Features

- **Light/Dark Mode Toggle** – Switch between light and dark themes easily.
- **Task Management** – Create, edit, and delete tasks effortlessly.
- **Project Organization** – Group tasks under different projects for better workflow.
- **Task Prioritization** – Set task priority levels (Low, Medium, High).
-  **Reminders & Due Dates** – Assign due dates and get timely reminders.
- **Task Completion Tracking** – Mark tasks as complete or pending.
-  **Weather-Based Task Planning** – Plan tasks based on real-time weather updates.
-  **Clean UI** – Minimalistic, user-friendly interface for seamless experience.
-  **Easy to Use** – Simple navigation and intuitive controls for efficiency.
-  **Progress Tracking** – Monitor task completion percentage for each project.
-  **PWA Support** – Installable as a Progressive Web App for mobile and desktop.
-  **Offline Support** – Work offline with cached tasks and sync when online.
-  **Authentication & Security** – Secure user data with authentication mechanisms.
-  **CI/CD Deployment** – Automated testing and deployment using GitHub Actions.
-  **Dockerized Architecture** – Backend & frontend containerized for portability.
-  **API Integration** – Seamlessly connects with OpenWeather API for weather updates.

---
# API Documentation

This documentation outlines the endpoints available in the Task Management API. The API allows you to manage users, projects, and tasks.

## Base URL

All endpoints are relative to the base URL:

```
/api
```

## Endpoints

### User Setup

```http
GET /setup
```

Creates a new user with a unique ID if one doesn't exist.

**Response**

```json
{
  "userId": "string" // UUID of the user
}
```

### Projects

#### Create a Project

```http
POST /project
```

Creates a new project for a specific user.

**Request Body**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | `string` | **Required**. The ID of the user |
| `projectName` | `string` | **Required**. Name of the project |

**Response**

Redirects to `GET /projects/:userId` which returns the updated list of projects.

#### Get User Projects

```http
GET /projects/:userId
```

Returns all projects (IDs and names only) for a specific user.

**URL Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | `string` | **Required**. The ID of the user |

**Response**

```json
[
  {
    "projectId": "string",
    "projectName": "string"
  }
]
```

#### Delete a Project

```http
DELETE /project
```

Deletes a project for a specific user.

**Request Body**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | `string` | **Required**. The ID of the user |
| `projectId` | `string` | **Required**. The ID of the project to delete |

**Response**

Returns the updated list of projects.

```json
[
  {
    "projectId": "string",
    "projectName": "string"
  }
]
```

### Tasks

#### Add a Task

```http
POST /task
```

Adds a task to a specific project.

**Request Body**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | `string` | **Required**. The ID of the user |
| `projectId` | `string` | **Required**. The ID of the project |
| `task` | `object` | **Required**. The task object to add |

**Response**

```json
{
  "message": "added successfully"
}
```

#### Update a Task

```http
PATCH /task
```

Updates a specific task in a project.

**Request Body**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | `string` | **Required**. The ID of the user |
| `projectId` | `string` | **Required**. The ID of the project |
| `taskId` | `string` | **Required**. The ID of the task to update |
| `updatedFields` | `object` | **Required**. Fields to update in the task |

**Response**

Returns the updated user object with all projects and tasks.

#### Get Project Tasks

```http
GET /projects/:projectId/tasks
```

Returns all tasks for a specific project.

**URL Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | `string` | **Required**. The ID of the project |

**Response**

Returns an array of task objects for the specified project.

#### Delete Multiple Tasks

```http
DELETE /projects/:projectId
```

Deletes multiple tasks from a specific project.

**URL Parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | `string` | **Required**. The ID of the project |

**Request Body**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tasks` | `array` | **Required**. Array of task IDs to delete |

**Response**

```json
{
  "message": "Tasks deleted successfully",
  "project": {
    // Updated project object
  }
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK`: Request succeeded
- `400 Bad Request`: Invalid input parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error responses include a message and sometimes additional error details:

```json
{
  "message": "Error message",
  "error": {} // Optional error details
}
```

## Data Models

### User

```javascript
{
  userId: String,
  projects: [Project]
}
```

### Project

```javascript
{
  projectId: String,
  projectName: String,
  tasks: [Task]
}
```

### Task

Tasks are custom objects that include at least an `_id` field. The structure may vary based on implementation needs.

## Run Locally

Clone the project

```bash
  git clone https://github.com/rayimanoj8/hiringhood-
```

Go to the project directory

```bash
  cd my-project
```
Run docker

```bash
  docker-compose up --build
```

## Authors

- [@rayimanoj8](https://www.github.com/rayimanoj8)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

# Deployment Guide

##  Overview
This project has a **fully automated CI/CD pipeline** using **GitHub Actions and Docker**.  
Every time you push changes to the `main` branch, the following happens automatically:

- **Build & Push Docker Images** → The latest backend & frontend images are pushed to **Docker Hub**.
- **Deploy with Docker Compose** → The application is restarted with the latest changes.

---

##  Deployment

To deploy this project, run:

```bash
  npm run deploy
```

## Documentation

[Documentation](https://linktodocumentation)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 

`MONGO_URI` (get this from atlas)

## Acknowledgements

 - [used my own predefined template to setup ui with tailwind and shadcn UI](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)


## Feedback

If you have any feedback, please reach out to us at rayimanoj8@gmail.com# HiringHood Project 🚀

## 📌 Overview
This is a full-stack web application with a **CI/CD pipeline** using **GitHub Actions and Docker**.  
It includes a **React frontend** and a **Node.js backend** with **MongoDB Atlas**.

---

## 📥 Installation

Install the project by cloning the repository:

```bash
git clone https://github.com/rayimanoj8/HiringHood-task.git
cd HiringHood-task
docker-compose up --build
```

now open `localhost:3000` to see project
## Lessons Learned

- Redux (@redux-toolkit)
- github actions (CI/CD)
- github workflows
