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

// Weather Info for Gurugram
function fetchWeather() {
  const lat = 28.4595;   // Gurugram latitude
  const lon = 77.0266;   // Gurugram longitude
  const apiKey = "7a161c3e6c6026b07cb2fda228c9fd1f";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      const desc = data.weather[0].description;
      const cityName = data.name;  // Will usually say "Gurgaon"
      document.getElementById("weather").textContent =
        `🌡️ ${temp}°C in ${cityName} – ${desc}`;
    })
    .catch(error => {
      document.getElementById("weather").textContent = "Failed to load weather.";
      console.error("Weather error:", error);
    });
}

fetchWeather();