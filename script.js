// Greeting based on time
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = document.getElementById('greeting');

  if (hour < 12) greeting.textContent = "Good Morning, Rohit!";
  else if (hour < 18) greeting.textContent = "Good Afternoon, Rohit!";
  else greeting.textContent = "Good Evening, Rohit!";

  document.getElementById("time").textContent = now.toLocaleTimeString();
}

setInterval(updateGreeting, 1000);

// To-do list
function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;
  li.onclick = () => li.classList.toggle('done');

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}