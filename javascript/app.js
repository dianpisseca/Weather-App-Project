// Current Temperature Function
function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentDegrees = document.querySelector(".current-degrees");
  let displayCity = document.querySelector(".city");
  displayCity.innerHTML = response.data.city; // to prevent typo in search value displayed
  currentDegrees.innerHTML = `${temperature}°C`;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-bar");

  //fetching current temperature after displaying city name
  let apiKey = "adc0a90t8dcb394of632b681def20c7d";
  let city = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

let now = new Date();

let currentHour = now.getHours();
console.log(currentHour);

let currentMinutes = now.getMinutes().toString().padStart(2, "0");
console.log(currentMinutes);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes} `;

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);
