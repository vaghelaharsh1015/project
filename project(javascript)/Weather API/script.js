// 1. DOG API
async function getDog() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    document.getElementById("dogImage").src = data.message;
  } catch (err) {
    console.error("Dog API Error:", err);
  }
}

//  2. COVID-19 API
async function getCoronaData() {
  const country = document.getElementById("country").value;
  if (!country) return alert("Please enter a country name!");

  try {
    const res = await fetch(
      `https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}`,
    );
    const data = await res.json();

    if (data.message) {
      alert("Country not found!");
    } else {
      document.getElementById("cases").innerText =
        "Total Cases: " + data.cases.toLocaleString();
      document.getElementById("deaths").innerText =
        "Total Deaths: " + data.deaths.toLocaleString();
      document.getElementById("recovered").innerText =
        "Total Recovered: " + data.recovered.toLocaleString();
    }
  } catch (err) {
    console.error("Corona API Error:", err);
  }
}

//  3. MOVIE API (OMDb)
async function getMovieData() {
  const movie = document.getElementById("movieName").value;
  if (!movie) return alert("Please enter a movie title!");

  const apiKey = "7c0b9be";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const resultDiv = document.getElementById("movieResult");

    if (data.Response === "True") {
      resultDiv.innerHTML = `
        <div style="background: #f4f4f4; padding: 15px; border-radius: 10px; margin-top: 10px;">
          <h4>${data.Title} (${data.Year})</h4>
          <p><b>Rating:</b> ${data.imdbRating}</p>
          <p><b>Plot:</b> ${data.Plot}</p>
          <img src="${data.Poster}" width="150" style="border-radius: 5px;">
        </div>
      `;
    } else {
      resultDiv.innerHTML = `<p style="color:red;">Error: ${data.Error}</p>`;
    }
  } catch (err) {
    console.error("Movie API Error:", err);
  }
}

//  4. WEATHER API (Fixed Free Version)
async function getWeatherData() {
  var city = document.getElementById("cityName").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    var geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
    );
    var geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      document.getElementById("weatherResult").innerHTML =
        "<p style='color:red;'>City not found!</p>";
      return;
    }

    var latitude = geoData.results[0].latitude;
    var longitude = geoData.results[0].longitude;
    var name = geoData.results[0].name;

    // Now fetch weather data using the coordinates
    var weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
    );
    var weatherData = await weatherRes.json();

    var resultDiv = document.getElementById("weatherResult");

    if (weatherRes.ok) {
      var temp = weatherData.current.temperature_2m;
      var windSpeed = weatherData.current.wind_speed_10m;
      var humidity = weatherData.hourly.relative_humidity_2m[0];

      resultDiv.innerHTML = `
        <div style="background: #e0f7fa; padding: 10px; border-radius: 10px; margin-top: 10px;">
          <p><b>City:</b> ${name}</p>
          <p><b>Temperature:</b> ${temp}°C</p>
          <p><b>Wind Speed:</b> ${windSpeed} km/h</p>
          <p><b>Humidity:</b> ${humidity}%</p>
        </div>
      `;
    } else {
      resultDiv.innerHTML =
        "<p style='color:red;'>Error fetching weather data.</p>";
    }
  } catch (err) {
    console.error("Weather API Error:", err);
    document.getElementById("weatherResult").innerHTML =
      "<p style='color:red;'>Error: " + err.message + "</p>";
  }
}
