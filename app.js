const apiKey = "0c42b7b1aabd8766e38ca140097c091a";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

function setWeatherIcon(icon) {
  if (icon) {
    document.querySelector(".weather-icon").src = icon;
  }
}

async function fetchWeather(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (!data?.main) {
    document.querySelector(".weather").style.display = "none";
    return;
  }

  /** Todo: handle api error */

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  /** Todo: update with correct images, if possible replace with svg  */
  switch (data.weather[0].main) {
    case "Clear":
      setWeatherIcon("images/clear.png");
      break;
    case "Clouds":
      setWeatherIcon("images/clouds.png");
      break;
    case "Drizzle":
      setWeatherIcon("images/drizzle.png");
      break;
    case "Mist":
      setWeatherIcon("images/mist.png");
      break;
    case "Rain":
      setWeatherIcon("images/rain.png");
      break;
    case "Snow":
      setWeatherIcon("images/snow.png");
      break;
  }
}

searchButton.addEventListener("click", () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${apiKey}&units=metric`;
  fetchWeather(url);
});
