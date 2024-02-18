const apiKey = "0c42b7b1aabd8766e38ca140097c091a";
const city = "Tokyo";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const data = import("./response");
async function fetchWeather() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

fetchWeather();
