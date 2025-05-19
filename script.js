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

// Weather Info
function fetchWeather(lat, lon) {
  const apiKey = "ef1a1e2074ef647607342b916529d4e0"; // ← Your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      const city = data.name;
      const desc = data.weather[0].description;
      document.getElementById("weather").textContent =
        `🌡️ ${temp}°C in ${city} – ${desc}`;
    })
    .catch(error => {
      document.getElementById("weather").textContent = "Failed to load weather.";
      console.error("Weather error:", error);
    });
}

// Get user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    },
    () => {
      document.getElementById("weather").textContent = "Location access denied.";
    }
  );
} else {
  document.getElementById("weather").textContent = "Geolocation not supported.";
}