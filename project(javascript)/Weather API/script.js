const CONFIG = {
  api: {
    dog: "https://dog.ceo/api/breeds/image/random",
    covid: "https://disease.sh/v3/covid-19/countries/",
    omdb: "https://www.omdbapi.com/",
    geo: "https://geocoding-api.open-meteo.com/v1/search",
    weather: "https://api.open-meteo.com/v1/forecast",
  },
  keys: {
    omdb: "4a3b711b", // This is a demo key with limited requests.
  },
  movie_list: [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Interstellar",
    "Parasite",
    "Gladiator",
  ],
};

const ELEMENTS = {
  dog: {
    button: document.getElementById("dogBtn"),
    image: document.getElementById("dogImage"),
  },
  corona: {
    button: document.getElementById("coronaBtn"),
    input: document.getElementById("country"),
    cases: document.getElementById("cases"),
    deaths: document.getElementById("deaths"),
    recovered: document.getElementById("recovered"),
    result: document.getElementById("coronaResult"),
  },
  movie: {
    button: document.getElementById("movieBtn"),
    result: document.getElementById("movieResult"),
  },
  weather: {
    button: document.getElementById("weatherBtn"),
    input: document.getElementById("cityName"),
    result: document.getElementById("weatherResult"),
  },
};

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

async function getDog() {
  try {
    const data = await fetchData(CONFIG.api.dog);
    ELEMENTS.dog.image.src = data.message;
  } catch (err) {
    console.error("Dog API Error:", err);
  }
}

async function getCoronaData() {
  const country = ELEMENTS.corona.input.value;
  if (!country) {
    alert("Please enter a country name!");
    return;
  }

  try {
    const url = `${CONFIG.api.covid}${country.toLowerCase()}`;
    const data = await fetchData(url);

    if (data.message) {
      alert("Country not found!");
    } else {
      ELEMENTS.corona.cases.innerText =
        "Total Cases: " + data.cases.toLocaleString();
      ELEMENTS.corona.deaths.innerText =
        "Total Deaths: " + data.deaths.toLocaleString();
      ELEMENTS.corona.recovered.innerText =
        "Total Recovered: " + data.recovered.toLocaleString();
    }
  } catch (err) {
    console.error("Corona API Error:", err);
    ELEMENTS.corona.result.innerHTML = `<p style="color:red;">Could not fetch data.</p>`;
  }
}

async function getMovieData() {
  try {
    const randomMovie =
      CONFIG.movie_list[Math.floor(Math.random() * CONFIG.movie_list.length)];
    const url = `${CONFIG.api.omdb}?t=${encodeURIComponent(
      randomMovie,
    )}&apikey=${CONFIG.keys.omdb}`;
    const data = await fetchData(url);

    if (data.Response === "True") {
      ELEMENTS.movie.result.innerHTML = `
        <div style="background: #f4f4f4; padding: 15px; border-radius: 10px; margin-top: 10px; color: #000;">
          <h4>${data.Title} (${data.Year})</h4>
          <p><b>Rating:</b> ${data.imdbRating}</p>
          <p><b>Plot:</b> ${data.Plot}</p>
          <img src="${data.Poster}" width="150" style="border-radius: 5px;">
        </div>
      `;
    } else {
      ELEMENTS.movie.result.innerHTML = `<p style="color:red;">Error: ${data.Error}</p>`;
    }
  } catch (err) {
    console.error("Movie API Error:", err);
    ELEMENTS.movie.result.innerHTML = `<p style="color:red;">Failed to fetch movie data.</p>`;
  }
}

async function getWeatherData() {
  const city = ELEMENTS.weather.input.value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const geoUrl = `${CONFIG.api.geo}?name=${city}&count=1&language=en&format=json`;
    const geoData = await fetchData(geoUrl);

    if (!geoData.results || geoData.results.length === 0) {
      ELEMENTS.weather.result.innerHTML =
        "<p style='color:red;'>City not found!</p>";
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    const weatherUrl = `${CONFIG.api.weather}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const weatherData = await fetchData(weatherUrl);

    const { temperature_2m: temp, wind_speed_10m: windSpeed } =
      weatherData.current;
    const humidity = weatherData.hourly.relative_humidity_2m[0];

    ELEMENTS.weather.result.innerHTML = `
      <div style="background: #e0f7fa; padding: 10px; border-radius: 10px; margin-top: 10px;">
        <p><b>City:</b> ${name}</p>
        <p><b>Temperature:</b> ${temp}°C</p>
        <p><b>Wind Speed:</b> ${windSpeed} km/h</p>
        <p><b>Humidity:</b> ${humidity}%</p>
      </div>
    `;
  } catch (err) {
    console.error("Weather API Error:", err);
    ELEMENTS.weather.result.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

ELEMENTS.dog.button.addEventListener("click", getDog);
ELEMENTS.corona.button.addEventListener("click", getCoronaData);
ELEMENTS.movie.button.addEventListener("click", getMovieData);
ELEMENTS.weather.button.addEventListener("click", getWeatherData);

getDog();
