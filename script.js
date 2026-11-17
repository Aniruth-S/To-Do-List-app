
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
