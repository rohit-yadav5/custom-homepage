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

// Weather using fixed location (Gurgaon)
const apiKey = "7a161c3e6c6026b07cb2fda228c9fd1f";
const gurgaonLat = 28.4595;
const gurgaonLon = 77.0266;

function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${gurgaonLat}&lon=${gurgaonLon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toFixed(2);
      const condition = data.weather[0].main;
      const weatherText = `<i class="fas fa-map-marker-alt"></i> Gurgaon: ${temp}°C | ${condition}`;
      document.getElementById("weather").innerHTML = weatherText;
    })
    .catch(error => {
      document.getElementById("weather").textContent = "Failed to load weather.";
    });
}
fetchWeather();