async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLoc(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=66ef13e69f68d59df4954c666a3a7db6`
  );
  const data = await response.json();

  document.getElementById("WeatherData").innerHTML = `
  <div>
            <p>Temprature : ${data.main.temp - 273.14}℃</p>
            <p>Humidity : ${data.main.humidity}%</p>
            <p>Description : ${data.weather[0].description}</p>
         </div>
          <img src=" https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@4x.png" alt="WeatherIcon" />`;
}

async function getGeoLoc(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=66ef13e69f68d59df4954c666a3a7db6`
  );
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}
