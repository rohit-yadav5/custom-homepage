// Greeting based on time
function updateGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = "Good Morning, Rohit!";
  else if (hour < 18) greeting.textContent = "Good Afternoon, Rohit!";
  else greeting.textContent = "Good Evening, Rohit!";
}
updateGreeting();

// Time display
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// To-do list logic
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks from localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    JSON.parse(saved).forEach(task => addTask(task, false));
  }
}
loadTasks();

// Add task (with optional save)
function addTask(taskText = null, save = true) {
  const text = taskText || taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Click to delete
  li.addEventListener("click", () => {
    li.remove();
    saveTasks(); // update localStorage after deletion
  });

  taskList.appendChild(li);
  if (!taskText) taskInput.value = "";

  if (save) saveTasks(); // only save if it's not being loaded
}

// Save current tasks to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => tasks.push(li.textContent));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}