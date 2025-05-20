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

// Weather for Gurugram (hardcoded)
const apiKey = "7a161c3e6c6026b07cb2fda228c9fd1f";
const lat = 28.4595;
const lon = 77.0266;

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    document.getElementById("weather").textContent = `It's ${temp}°C with ${desc}`;
  } catch (error) {
    document.getElementById("weather").textContent = "Failed to load weather.";
  }
}
fetchWeather();

// Grid toggle with labels
const toggleBtn = document.getElementById("toggleGrid");
let gridVisible = false;
let gridOverlay = null;

function generateGridLabels() {
  const cmToPx = 37.8 * 1.5; // 1.5 cm in pixels
  const cols = Math.floor(window.innerWidth / cmToPx);
  const rows = Math.floor(window.innerHeight / cmToPx);
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      const label = String.fromCharCode(65 + c % 26) + (r + 1); // A1, B2, ..., Z9
      cell.textContent = label;
      grid.appendChild(cell);
    }
  }

  return grid;
}

toggleBtn.addEventListener("click", () => {
  if (!gridVisible) {
    gridOverlay = generateGridLabels();
    document.body.appendChild(gridOverlay);
    gridVisible = true;
  } else {
    document.body.removeChild(gridOverlay);
    gridVisible = false;
  }
});