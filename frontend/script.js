const API_URL = 'http://localhost:3000/api/tasks';

// 1. READ: Fetch and display tasks
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; 

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = `task ${task.completed ? 'completed' : ''}`;
            
            // We added a checkbox here and set it to 'checked' if the task is completed
            taskElement.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px; flex-grow: 1;">
                    <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;" 
                           ${task.completed ? 'checked' : ''} 
                           onchange="toggleTask(${task.id})">
                           
                    <div class="task-text">
                        <strong>#${task.id}:</strong> ${task.title}
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            `;
            
            taskList.appendChild(taskElement);
        });
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('task-list').innerHTML = "Failed to load tasks. Is your backend server running?";
    }
}

// 2. CREATE: Add a new task
async function addTask() {
    const input = document.getElementById('task-input');
    const title = input.value;
    
    if (!title) return; 

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title })
    });

    input.value = ''; 
    fetchTasks();     
}

// 3. UPDATE: Toggle a task as completed/incomplete
async function toggleTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'PUT' });
    fetchTasks(); 
}

// 4. DELETE: Remove a task
async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks(); 
}

// Load tasks immediately when the script runs
fetchTasks();