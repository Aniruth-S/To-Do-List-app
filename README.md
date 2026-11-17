# To-Do-List-app

# Ex03 To-Do List using JavaScript

## Date:17/11/2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM

```
Name : Aniruth S
Reg No : 212225040020
```

**Index.html**
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>FOCUS - Productivity Dashboard</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="app-container">

        <!-- Header -->
        <header class="header">
            <div class="logo">
                <span class="logo-icon">◈</span>
                <h2>FOCUS<span>.</span></h2>
            </div>

            <button id="themeBtn" class="theme-btn">
                ☀ Light Mode
            </button>
        </header>

        <!-- Welcome Section -->
        <section class="welcome">
            <p class="small-heading" id="todayDate">YOUR PRODUCTIVITY SPACE</p>
            <h1>Make today count.</h1>
            <p class="subtitle">
                Build discipline. Stay consistent. Achieve more.
            </p>
        </section>
<!-- Motivational Quote -->
<section class="quote-line">
    <h2 id="quoteText">
        "Don't stop when you're tired. Stop when you're done."
    </h2>
</section>
        <!-- Statistics -->
        <section class="stats">

            <div class="stat-card">
                <p>Total Tasks</p>
                <h2 id="totalTasks">0</h2>
            </div>

            <div class="stat-card">
                <p>Completed</p>
                <h2 id="completedTasks">0</h2>
            </div>

            <div class="stat-card">
                <p>Pending</p>
                <h2 id="pendingTasks">0</h2>
            </div>

        </section>

        <!-- Progress Section -->
        <section class="progress-card">

            <div class="progress-heading">
                <h3>Daily Progress</h3>
                <span id="progressText">0%</span>
            </div>

            <div class="progress-bar">
                <div id="progressFill"></div>
            </div>

            <p>Keep going! Every small step matters.</p>

        </section>

        <!-- Task Input -->
        <section class="task-section">

            <h2>Manage Your Tasks</h2>

            <div class="task-form">

                <input
                    type="text"
                    id="taskInput"
                    placeholder="What do you need to accomplish?"
                >

                <select id="priorityInput">
                    <option value="Low">Low Priority</option>
                    <option value="Medium" selected>Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>

                <input
                    type="datetime-local"
                    id="deadlineInput"
                >

                <button id="addBtn">+ Add Task</button>

            </div>

            <p id="formMessage" class="form-message"></p>

            <!-- Filters -->
            <div class="task-heading">
                <h3>Your Tasks</h3>

                <select id="filterInput">
                    <option value="All">All Tasks</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <!-- Task List -->
            <div id="taskList" class="task-list"></div>

        </section>

        <!-- Footer -->
        <footer>
            <p>FOCUS. Complete your tasks. Build your future.
            </p>
        </footer>

    </div>

    <script src="script.js"></script>

</body>
</html>
```

**Style.css**
```css

/* GENERAL RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #111827;
    color: #f9fafb;
    min-height: 100vh;
    transition: 0.3s;
}

/* MAIN CONTAINER */
.app-container {
    max-width: 1000px;
    margin: auto;
    padding: 30px 20px;
}

/* HEADER */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo h2 {
    font-size: 28px;
    letter-spacing: 2px;
}

.logo h2 span {
    color: #60a5fa;
}

.logo-icon {
    color: #60a5fa;
    font-size: 30px;
}

.theme-btn {
    padding: 10px 15px;
    background: #293548;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

/* WELCOME */
.welcome {
    margin-bottom: 25px;
}

.small-heading {
    color: #60a5fa;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 12px;
}

.welcome h1 {
    font-size: 38px;
    margin-bottom: 10px;
}

.subtitle {
    color: #9ca3af;
}

/* MOTIVATIONAL QUOTE - NO CARD */
.quote-line {
    margin: 30px 0;
    padding-left: 16px;
    border-left: 3px solid #60a5fa;
}

.quote-line h2 {
    font-size: 19px;
    font-weight: 500;
    font-style: italic;
    color: #d1d5db;
}

/* STATISTICS */
.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 30px 0;
}

.stat-card {
    background: #1f2937;
    padding: 22px;
    border-radius: 12px;
    border: 1px solid #374151;
}

.stat-card p {
    color: #9ca3af;
    font-size: 14px;
}

.stat-card h2 {
    margin-top: 12px;
    font-size: 30px;
    color: #60a5fa;
}

/* PROGRESS */
.progress-card {
    background: #1f2937;
    padding: 22px;
    border-radius: 12px;
    border: 1px solid #374151;
    margin-bottom: 40px;
}

.progress-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.progress-heading span {
    color: #60a5fa;
    font-weight: bold;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background: #374151;
    border-radius: 20px;
    overflow: hidden;
}

#progressFill {
    height: 100%;
    width: 0%;
    background: #60a5fa;
    border-radius: 20px;
    transition: width 0.4s;
}

.progress-card p {
    color: #9ca3af;
    font-size: 13px;
    margin-top: 12px;
}

/* TASK SECTION */
.task-section h2 {
    margin-bottom: 20px;
}

/* FORM */
.task-form {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr auto;
    gap: 10px;
    margin-bottom: 10px;
}

input, select {
    min-width: 0;
    padding: 12px;
    background: #1f2937;
    color: white;
    border: 1px solid #374151;
    border-radius: 7px;
    outline: none;
}

input:focus, select:focus {
    border-color: #60a5fa;
}

button {
    cursor: pointer;
    transition: 0.2s;
}

#addBtn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 7px;
}

#addBtn:hover {
    background: #2563eb;
}

.form-message {
    color: #f87171;
    font-size: 13px;
    min-height: 20px;
}

/* TASK HEADING */
.task-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 15px;
}

/* TASK CARD */
.task-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.task-item {
    background: #1f2937;
    padding: 18px;
    border: 1px solid #374151;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.task-details {
    flex: 1;
    min-width: 0;
}

.task-name {
    font-size: 16px;
    overflow-wrap: anywhere;
}

.task-meta {
    color: #9ca3af;
    font-size: 12px;
    margin-top: 8px;
}

.task-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.task-actions button {
    border: none;
    padding: 8px 10px;
    border-radius: 6px;
    color: white;
}

.complete-btn {
    background: #15803d;
}

.edit-btn {
    background: #2563eb;
}

.delete-btn {
    background: #dc2626;
}

/* PRIORITY LABELS */
.priority {
    display: inline-block;
    padding: 4px 9px;
    border-radius: 20px;
    font-size: 11px;
    margin-top: 8px;
}

.High {
    background: #7f1d1d;
    color: #fca5a5;
}

.Medium {
    background: #78350f;
    color: #fcd34d;
}

.Low {
    background: #14532d;
    color: #86efac;
}

/* COMPLETED TASK */
.task-item.done .task-name {
    text-decoration: line-through;
    color: #9ca3af;
}

.empty-message {
    text-align: center;
    padding: 30px;
    color: #9ca3af;
}

/* DEADLINE STATUS */
.overdue {
    color: #f87171;
}

.upcoming {
    color: #fbbf24;
}

/* FOOTER */
footer {
    text-align: center;
    color: #6b7280;
    margin-top: 60px;
    font-size: 13px;
}

/* LIGHT MODE */
body.light-mode {
    background: #f3f4f6;
    color: #111827;
}

.light-mode .stat-card,
.light-mode .progress-card,
.light-mode .task-item,
.light-mode input,
.light-mode select {
    background: white;
    color: #111827;
    border-color: #d1d5db;
}

.light-mode .task-name {
    color: #111827;
}

.light-mode .quote-line h2 {
    color: #374151;
}

.light-mode .theme-btn {
    background: #e5e7eb;
    color: #111827;
}

.light-mode .task-meta,
.light-mode .stat-card p,
.light-mode .progress-card p {
    color: #6b7280;
}

/* MOBILE RESPONSIVE */
@media (max-width: 750px) {

    .task-form {
        grid-template-columns: 1fr 1fr;
    }

    .task-form input:first-child {
        grid-column: span 2;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .task-item {
        align-items: flex-start;
        flex-direction: column;
    }

    .task-actions {
        width: 100%;
    }

    .welcome h1 {
        font-size: 30px;
    }
}

@media (max-width: 420px) {

    .task-form {
        grid-template-columns: 1fr;
    }

    .task-form input:first-child {
        grid-column: auto;
    }

    .header {
        gap: 10px;
    }

    .logo h2 {
        font-size: 23px;
    }
}
```

**script.js**
```js

// =====================================
// 1. GET HTML ELEMENTS
// =====================================

const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const deadlineInput = document.getElementById("deadlineInput");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const filterInput = document.getElementById("filterInput");
const themeBtn = document.getElementById("themeBtn");
const formMessage = document.getElementById("formMessage");


// =====================================
// 2. LOAD SAVED TASKS
// =====================================

let tasks = JSON.parse(localStorage.getItem("focusTasks")) || [];

let currentTheme = localStorage.getItem("focusTheme") || "dark";


// =====================================
// 3. DAILY MOTIVATIONAL QUOTES
// =====================================

const quotes = [
    "Don't stop when you're tired. Stop when you're done.",
    "Small progress is still progress. Keep moving.",
    "One task at a time. One step closer to your goal.",
    "Your future depends on what you do today.",
    "Stop wishing. Start doing.",
    "The secret of getting ahead is getting started.",
    "Action is the key to success.",
    "Make yourself proud today.",
    "Every accomplishment starts with the decision to try.",
    "You are closer than you think. Keep going."
];

function showDailyQuote() {

    const today = new Date();

    const dateKey =
        today.getFullYear() + "-" +
        today.getMonth() + "-" +
        today.getDate();

    // Generate a consistent quote for each day
    const dateNumber = Math.floor(
        new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        ).getTime() / 86400000
    );

    const quoteIndex = dateNumber % quotes.length;

    document.getElementById("quoteText").textContent =
        '"' + quotes[quoteIndex] + '"';

    document.getElementById("todayDate").textContent =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).toUpperCase();
}

showDailyQuote();


// =====================================
// 4. SAVE TASKS
// =====================================

function saveTasks() {

    localStorage.setItem(
        "focusTasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}


// =====================================
// 5. ADD NEW TASK
// =====================================

async function addTask() {

    const text = taskInput.value.trim();
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (text === "") {
        formMessage.textContent = "Please enter a task!";
        return;
    }

    formMessage.textContent = "";

    // Ask for notification permission after user interaction
    if (
        deadline &&
        "Notification" in window &&
        Notification.permission === "default"
    ) {
        try {
            await Notification.requestPermission();
        } catch (error) {
            console.log("Notification permission unavailable.");
        }
    }

    const newTask = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        text: text,
        priority: priority,
        deadline: deadline,
        completed: false,
        notified: false
    };

    tasks.push(newTask);

    taskInput.value = "";
    deadlineInput.value = "";
    priorityInput.value = "Medium";

    saveTasks();
}


// =====================================
// 6. DISPLAY TASKS
// =====================================

function displayTasks() {

    taskList.innerHTML = "";

    const filter = filterInput.value;

    let filteredTasks = tasks.filter(task => {

        if (filter === "Pending") {
            return !task.completed;
        }

        if (filter === "Completed") {
            return task.completed;
        }

        return true;
    });

    if (filteredTasks.length === 0) {

        taskList.innerHTML =
            '<p class="empty-message">No tasks found. Add a new task!</p>';

    }

    filteredTasks.forEach(task => {

        const item = document.createElement("div");

        item.className = "task-item";

        if (task.completed) {
            item.classList.add("done");
        }

        // Task details
        const details = document.createElement("div");
        details.className = "task-details";

        const name = document.createElement("h3");
        name.className = "task-name";
        name.textContent = task.text;

        const priority = document.createElement("span");
        priority.className = "priority " + task.priority;
        priority.textContent = task.priority + " Priority";

        const meta = document.createElement("p");
        meta.className = "task-meta";

        // Deadline status
        if (task.deadline) {

            const deadlineDate = new Date(task.deadline);
            const now = new Date();

            if (deadlineDate < now && !task.completed) {

                meta.textContent =
                    "⚠ Overdue: " + deadlineDate.toLocaleString();

                meta.classList.add("overdue");

            } else if (
                deadlineDate - now <= 24 * 60 * 60 * 1000 &&
                !task.completed
            ) {

                meta.textContent =
                    "⏰ Due soon: " + deadlineDate.toLocaleString();

                meta.classList.add("upcoming");

            } else {

                meta.textContent =
                    "Deadline: " + deadlineDate.toLocaleString();

            }

        } else {

            meta.textContent = "No deadline set";

        }

        details.appendChild(name);
        details.appendChild(priority);
        details.appendChild(meta);

        // Action buttons
        const actions = document.createElement("div");
        actions.className = "task-actions";

        const completeBtn = document.createElement("button");

        completeBtn.className = "complete-btn";
        completeBtn.textContent =
            task.completed ? "Undo" : "Complete";

        completeBtn.addEventListener("click", () => {
            toggleTask(task.id);
        });

        const editBtn = document.createElement("button");

        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", () => {
            editTask(task.id);
        });

        const deleteBtn = document.createElement("button");

        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        item.appendChild(details);
        item.appendChild(actions);

        taskList.appendChild(item);

    });

    updateProgress();
}


// =====================================
// 7. COMPLETE / UNDO TASK
// =====================================

function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}


// =====================================
// 8. EDIT TASK
// =====================================

function editTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    const newText = prompt("Edit your task:", task.text);

    if (newText === null) return;

    if (newText.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const newPriority = prompt(
        "Enter priority: High, Medium or Low",
        task.priority
    );

    if (newPriority === null) return;

    const validPriority = ["High", "Medium", "Low"];

    const selectedPriority =
        validPriority.find(
            p => p.toLowerCase() === newPriority.trim().toLowerCase()
        );

    if (!selectedPriority) {
        alert("Please enter High, Medium or Low.");
        return;
    }

    task.text = newText.trim();
    task.priority = selectedPriority;

    saveTasks();
}


// =====================================
// 9. DELETE TASK
// =====================================

function deleteTask(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
}


// =====================================
// 10. UPDATE PROGRESS
// =====================================

function updateProgress() {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = total - completed;

    let percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;

    progressText.textContent = percentage + "%";

    progressFill.style.width = percentage + "%";
}

// 11. DARK / LIGHT MODE

function applyTheme() {

    if (currentTheme === "light") {

        document.body.classList.add("light-mode");

        themeBtn.textContent = "☾ Dark Mode";

    } else {

        document.body.classList.remove("light-mode");

        themeBtn.textContent = "☀ Light Mode";

    }

}

themeBtn.addEventListener("click", () => {

    currentTheme =
        currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("focusTheme", currentTheme);

    applyTheme();

});

applyTheme();


// =====================================
// 12. DEADLINE REMINDERS
// =====================================

function checkDeadlines() {

    const now = new Date();

    tasks.forEach(task => {

        if (
            !task.deadline ||
            task.completed ||
            task.notified
        ) {
            return;
        }

        const deadline = new Date(task.deadline);

        if (deadline <= now) {

            // Show browser notification if permitted
            if (
                "Notification" in window &&
                Notification.permission === "granted"
            ) {

                new Notification("FOCUS - Task Reminder", {
                    body: "Your task is due: " + task.text
                });

            }

            task.notified = true;

        }

    });

    localStorage.setItem(
        "focusTasks",
        JSON.stringify(tasks)
    );

    displayTasks();
}


// 13. EVENT LISTENERS

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", event => {

    if (event.key === "Enter") {
        addTask();
    }

});

filterInput.addEventListener("change", displayTasks);
// 14. INITIALIZE APPLICATION

displayTasks();

checkDeadlines();

// Check deadlines every minute
setInterval(checkDeadlines, 60000);
```

## OUTPUT

![alt text](<Screenshot 2026-11-17 131104.png>)

![alt text](<Screenshot 2026-11-17 131122.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
