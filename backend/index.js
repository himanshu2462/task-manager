import dotenv from 'dotenv';
dotenv.config(); // 1. Load the .env vault immediately

import express from 'express';
import cors from 'cors';

const app = express();

// 2. Use the Port from the .env file, or default to 3000 if it fails
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(cors()); 
app.use(express.json()); 

// --- IN-MEMORY DATABASE ---
let tasks = [
  { id: 1, title: "Learn Node.js Basics", completed: true },
  { id: 2, title: "Build a Full-Stack Project", completed: false }
];

// --- ROUTES ---

// 1. READ: Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 2. CREATE: Add a new task
app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,        
    title: req.body.title,       
    completed: false             
  };

  tasks.push(newTask);
  
  res.json({
    message: "Task successfully added!",
    task: newTask
  });
});

// 3. UPDATE (PUT): Toggle a task's completed status
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id); 
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found!" });
  }

  // This flips the boolean. If true, it becomes false. If false, it becomes true.
  task.completed = !task.completed; 
  
  res.json({ message: "Task status updated!", task: task });
});


// 4. DELETE: Remove a task entirely
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  // Keep all tasks EXCEPT the one with the matching ID
  tasks = tasks.filter(t => t.id !== taskId);
  
  res.json({ message: "Task successfully deleted!" });
});


// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}`);
});