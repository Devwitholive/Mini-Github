Mini-Github
Mini GitHub
A full-stack Mini GitHub application that allows users to create repositories, manage commits, create and manage issues, add comments, and collaborate with other users.

Tech Stack
Frontend
React.js
React Router
Axios / Fetch API
CSS / Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
Other Tools
Git & GitHub
Postman
Swagger / OpenAPI
Project Structure
```text mini-github/ │ ├── backend/ │ ├── src/ │ │ ├── config/ │ │ ├── controllers/ │ │ ├── middleware/ │ │ ├── models/ │ │ ├── routes/ │ │ ├── services/ │ │ ├── validations/ │ │ └── app.js │ │ │ ├── .env │ ├── package.json │ └── server.js │ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── services/ │ │ ├── context/ │ │ └── App.jsx │ │ │ └── package.json │ └── README.md

Git Workflow

To keep the project organized, do not work directly on main or develop.

The workflow is:

main │ └── develop │ ├── feat/authentication ├── feat/repositories ├── feat/commits ├── feat/issues ├── feat/comments ├── feat/collaborators ├── feat/frontend-dashboard └── feat/frontend-ui

Each member should work on their own feature branch.

Getting Started
Clone the repository: git clone

Enter the project: cd mini-github

Switch to the develop branch: git checkout develop

Get the latest changes: git pull origin develop

Create Your Feature Branch
Create a branch for the feature you are working on. Example: git checkout -b feat/login Other examples: git checkout -b feat/register git checkout -b feat/repositories git checkout -b feat/commits git checkout -b feat/issues git checkout -b feat/comments git checkout -b feat/collaborators git checkout -b feat/dashboard

Use a clear branch name that describes your task.

Working on Your Feature
Work only on the feature assigned to you. For example:

Authentication → feat/authentication
Repository CRUD → feat/repositories
Issues → feat/issues
Dashboard → feat/dashboard
Do not unnecessarily modify another teammate’s feature. If you believe another teammate’s code needs to be changed or refactored, inform the team in the WhatsApp group before making major changes.

Commit Messages
After implementing your feature: .git add

Commit your changes using a clear commit message: git commit -m “feat: implement login” For new features, use the feat: prefix.

Examples: git commit -m “feat: implement user registration” git commit -m “feat: add repository creation” git commit -m “feat: add issue creation” git commit -m “feat: add repository dashboard”

Push Your Feature Branch
Push your feature branch to GitHub: git push -u origin feat/login Replace feat/login with your own branch name.

Pull Request
After pushing your feature branch:

Go to GitHub.
Open a Pull Request.
The Pull Request should be:
feature branch → develop Example: feat/login → develop

Do not create the Pull Request directly into main. The team should review the Pull Request before merging it into develop.

Important Git Rules
Do not work directly on main.
Do not work directly on develop.
Always create a feature branch.

Pull the latest develop before starting new work. git checkout develop git pull origin develop
Then create your feature branch.

Test your code before pushing. Make sure your feature works before creating a Pull Request.
Mini GitHub Features
Authentication

User registration
User login
Password hashing
JWT authentication
Protected routes
Repositories
Create repository
View repositories
View repository details
Update repository
Delete repository
Commits
Create commits
View repository commits
Display commit information
Issues
Create issues
View issues
View issue details
Update issues
Close issues
Comments
Add comments to issues
View comments
Collaboration
Add collaborators
View collaborators
Remove collaborators
Manage permissions
Frontend
Landing page
Register page
Login page
Dashboard
Repository list
Repository details
Commits
Issues
Issue details
Comments
Collaborators
Loading states
Error handling
Responsive UI
Backend Dependencies
Install the required backend dependencies: npm install express mongoose jsonwebtoken bcrypt cors swagger-ui-express dotenv multer cloudinary multer-storage-cloudinary

Install nodemon as a development dependency: npm install –save-dev nodemon

Running the Backend
Inside the backend folder: npm run dev Use Postman to test the backend APIs during development.

Environment Variables
Create a .env file in the backend: PORT=5000 MONGO_URI=your_mongodb_connection JWT_SECRET=your_secret

Do not commit the .env file to GitHub.
Make sure .gitignore contains: node_modules/ .env

Team Communication
This README will be updated as the project progresses.

For now, use the WhatsApp group to communicate:

Task assignments
Feature progress
Problems or bugs
Required changes
Refactoring discussions
Pull Request reviews
If you need to modify or refactor another teammate’s code, inform the team before making major changes.

Development Flow
Understand the feature ↓ Create feature branch ↓ Build the feature ↓ Test locally ↓ Commit changes ↓ Push feature branch ↓ Create Pull Request ↓ Review ↓ Merge into develop ↓ Integration testing ↓ Merge develop into main when the project is ready
