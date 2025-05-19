// Greeting and Time
function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = document.getElementById("greeting");
  const timeDisplay = document.getElementById("time");

  // Greeting
  let message = "Hello";
  if (hour < 12) message = "Good Morning, Rohit!";
  else if (hour < 18) message = "Good Afternoon, Rohit!";
  else message = "Good Evening, Rohit!";
  greeting.textContent = message;

  // Time
  timeDisplay.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Notes Save
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("quickNotes") || "";
notes.addEventListener("input", () => {
  localStorage.setItem("quickNotes", notes.value);
});

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.classList.toggle("done");
  taskList.appendChild(li);

  input.value = "";
}