Full-Stack Task Manager

A clean, modern, and fully functional To-Do application built to demonstrate the fundamentals of full-stack web development. [cite: 409] This project connects a vanilla web frontend to a custom RESTful API built with Node.js and Express. [cite: 410]

Features
* Full CRUD Operations: Users can Create, Read, Update (toggle completion), and Delete tasks. [cite: 411]
* RESTful API Backend: Powered by Node.js and Express, utilizing an in-memory array for rapid data management. [cite: 412]
* CORS Enabled: Includes Cross-Origin Resource Sharing middleware to safely bridge the frontend and backend. [cite: 413]
* Separation of Concerns: Clean frontend architecture with strictly separated HTML (structure), CSS (design), and JavaScript (logic) files. [cite: 414]
* Modern UI/UX: Features a sleek, card-based design with soft shadows, interactive hover states, and dynamic toggle checkboxes. [cite: 415]

Project Structure
The codebase is strictly separated into frontend and backend environments to maintain a clean architecture: [cite: 417]
task-manager/
├── backend/
│   ├── package.json
│   └── index.js
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

Installation & Setup

Prerequisites
You must have Node.js installed on your computer to run the backend server. [cite: 417]

1. Start the Backend Server
* Open your terminal and navigate to the backend folder. [cite: 418]
* The server will run live on http://localhost:3000. [cite: 419]

2. Launch the Frontend
Because the frontend uses vanilla web technologies, no build tools are required. [cite: 420]
1. Open your computer's file explorer. [cite: 421]
2. Navigate to the frontend folder. [cite: 421]
3. Double-click index.html to open the application directly in your web browser. [cite: 422]

API Endpoints
The backend handles the following RESTful routes: [cite: 423]
* GET /api/tasks - Fetches the complete array of tasks. [cite: 424]
* POST /api/tasks - Adds a new task to the list. [cite: 425]
* PUT /api/tasks/:id - Toggles the completed boolean of a specific task back and forth. [cite: 426]
* DELETE /api/tasks/:id - Permanently removes a specific task from the array. [cite: 427]

Future Improvements (Phase 3)
Currently, this application relies on an in-memory database. [cite: 428] Whenever the server is restarted, all newly created tasks are wiped clean. [cite: 429] The next step in development is to connect the backend to a persistent database (like MongoDB or a relational SQL database) so data is saved permanently to a hard drive. [cite: 430]