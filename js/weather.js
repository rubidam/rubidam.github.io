const API_KEY = "ba6cb53d124c3d0dde549f86bffdaf9b";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(`you live in ${lat}, ${long}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      const wth = data.weather[0].main;
      weather.innerText = `${wth} ${data.main.temp}℃`;
      city.innerText = name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
