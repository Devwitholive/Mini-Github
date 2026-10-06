# Mini GitHub

A backend API for a Mini GitHub application that allows users to register and authenticate, create and manage repositories, manage commits and issues, and collaborate with other users.

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* CORS
* dotenv

### API Documentation & Testing

* Swagger / OpenAPI
* Postman

### Version Control

* Git
* GitHub


## Project Structure

```text
mini-github/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── validations/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md


## Git Workflow

To keep the project organized, do not work directly on `main` or `develop`.

The workflow is:


main
└── develop
    ├── feat/authentication
    ├── feat/repositories
    ├── feat/commits
    ├── feat/issues
    └── feat/collaborators


Each member should work on their own feature branch.

## Getting Started

### 1. Clone the Repository


git clone <repository-url>


### 2. Enter the Project


cd mini-github

### 3. Switch to the Develop Branch

git checkout develop

### 4. Get the Latest Changes


git pull origin develop

## Create Your Feature Branch

Create a branch for the feature you are working on.

git checkout -b feat/authentication

git checkout -b feat/repositories
git checkout -b feat/commits
git checkout -b feat/issues
git checkout -b feat/collaborators

Use a clear branch name that describes your task.


## Working on Your Feature

Work only on the feature assigned to you.


* Authentication → `feat/authentication`
* Repository CRUD → `feat/repositories`
* Commits → `feat/commits`
* Issues → `feat/issues`
* Collaboration → `feat/collaborators`

Do not unnecessarily modify another teammate's feature.

If another teammate's code needs to be changed or refactored, communicate with the team before making major changes.


## Commit Messages

After implementing your feature:

git add .

Commit your changes using a clear commit message:

```bash
git commit -m "feat: implement login"

Use the `feat:` prefix for new features.

git commit -m "feat: implement user registration"
git commit -m "feat: add repository creation"
git commit -m "feat: add commit creation"
git commit -m "feat: add issue creation"
git commit -m "feat: add collaborator management"



## Push Your Feature Branch

Push your feature branch to GitHub:


git push -u origin feat/authentication


Replace `feat/authentication` with your own feature branch.


## Pull Request

After pushing your feature branch:

1. Go to GitHub.
2. Open a Pull Request.
3. Set the base branch to `develop`.
4. Set the compare branch to your feature branch.


feat/authentication → develop


Do not create the Pull Request directly into `main`.

The team should review the Pull Request before merging it into `develop`.


## Important Git Rules

* Do not work directly on `main`.
* Do not work directly on `develop`.
* Always create a feature branch.
* Pull the latest `develop` before starting new work.
* Test your code before pushing.
* Use clear commit messages.
* Create Pull Requests for completed features.
* Review changes before merging.

Before starting new work:


git checkout develop
git pull origin develop

Then create your feature branch.


# Mini GitHub Backend Features

## Authentication

* User registration
* User login
* Password hashing
* JWT authentication
* Protected routes

## Users

* Get authenticated user profile
* Retrieve user information

## Repositories

* Create repository
* View repositories
* View repository details
* Update repository
* Delete repository
* Public and private repository support
* Repository ownership

## Commits

* Create commits
* View repository commits
* View individual commit information

## Issues

* Create issues
* View repository issues
* View individual issue details
* Update issues
* Delete issues
* Manage issue status

## Collaboration

* Add collaborators
* View repository collaborators
* Remove collaborators
* Manage repository collaboration



# API Documentation

The Mini GitHub backend provides API documentation using **Swagger / OpenAPI**.

When the backend is running, Swagger can be accessed through the configured Swagger endpoint.

The API can also be tested using **Postman**.


# Backend Dependencies

Install the required backend dependencies:

npm install express mongoose jsonwebtoken bcryptjs cors swagger-ui-express dotenv

Install Nodemon as a development dependency:

npm install --save-dev nodemon


# Running the Backend

Navigate to the backend directory:


cd backend

npm run dev

The backend runs on:

http://localhost:5000

Use Postman or Swagger to test the API endpoints.


# Environment Variables

Create a `.env` file inside the backend directory:

env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

### Important

Do not commit the `.env` file to GitHub.

Make sure `.gitignore` contains:


node_modules/
.env

# API Routes

The backend provides endpoints for:

/api/auth
/api/users
/api/repositories
/api/repositories/:repositoryId/commits
/api/repositories/:repositoryId/issues
/api/repositories/:repositoryId/collaborators


Authentication-protected endpoints require a valid JWT bearer token.

Authorization: Bearer <your-jwt-token>


# Development Flow

Understand the feature
        ↓
Create feature branch
        ↓
Build the feature
        ↓
Test locally
        ↓
Commit changes
        ↓
Push feature branch
        ↓
Create Pull Request
        ↓
Review
        ↓
Merge into develop
        ↓
Integration testing
        ↓
Merge develop into main


# Team Communication

The team should use the group communication channel to discuss:

* Task assignments
* Feature progress
* Problems or bugs
* Required changes
* Refactoring discussions
* Pull Request reviews

If you need to modify or refactor another teammate's code, communicate with the team before making major changes.

## Project Status

The Mini GitHub backend provides the core API functionality required for the project, including authentication, user management, repository management, commits, issues, and collaboration.
