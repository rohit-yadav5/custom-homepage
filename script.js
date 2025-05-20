// Greeting
function updateGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) greeting.textContent = "Good Morning, Rohit!";
  else if (hour < 18) greeting.textContent = "Good Afternoon, Rohit!";
  else greeting.textContent = "Good Evening, Rohit!";
}
updateGreeting();

// Time
function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// Weather
async function getWeather() {
  const apiKey = "7a161c3e6c6026b07cb2fda228c9fd1f";
  const city = "Gurugram";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const weatherText = `🌡 ${data.main.temp}°C | ${data.weather[0].main}`;
    document.getElementById("weather").textContent = weatherText;
  } catch (error) {
    document.getElementById("weather").textContent = "Failed to load weather.";
  }
}
getWeather();

// Grid (without labels)
function generateGrid() {
  const gridBoard = document.getElementById("gridBoard");
  gridBoard.innerHTML = "";

  for (let i = 0; i < 64; i++) {
    const box = document.createElement("div");
    box.className = "grid-box";
    gridBoard.appendChild(box);
  }
}
generateGrid();

document.getElementById("toggleGrid").addEventListener("click", () => {
  document.getElementById("gridBoard").classList.toggle("hidden");
});