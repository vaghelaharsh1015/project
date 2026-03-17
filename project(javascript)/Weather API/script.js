// --- 1. DOG API ---
async function getDog() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    document.getElementById("dogImage").src = data.message;
  } catch (err) {
    console.error("Dog API Error:", err);
  }
}

// --- 2. COVID-19 API ---
async function getCoronaData() {
  const country = document.getElementById("country").value;
  if (!country) return alert("Please enter a country name!");

  try {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}`);
    const data = await res.json();
    
    if (data.message) {
      alert("Country not found!");
    } else {
      document.getElementById("cases").innerText = "Total Cases: " + data.cases.toLocaleString();
      document.getElementById("deaths").innerText = "Total Deaths: " + data.deaths.toLocaleString();
      document.getElementById("recovered").innerText = "Total Recovered: " + data.recovered.toLocaleString();
    }
  } catch (err) {
    console.error("Corona API Error:", err);
  }
}

// --- 3. MOVIE API (OMDb) ---
async function getMovieData() {
  const movie = document.getElementById("movieName").value;
  if (!movie) return alert("Please enter a movie title!");

  const apiKey = "63857d9d"; 
  const url = `https://jsonfakery.com/movies/paginated`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const resultDiv = document.getElementById("movieResult");
    
    if (data.Response === "True") {
      resultDiv.innerHTML = `
        <div style="background: #f4f4f4; padding: 15px; border-radius: 10px; margin-top: 10px;">
          <h4>🎬 ${data.Title} (${data.Year})</h4>
          <p><b>Rating:</b> ⭐ ${data.imdbRating}</p>
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

// --- 4. WEATHER API (Fixed Free Version) ---
async function getWeatherData() {
  const city = document.getElementById("cityName").value;
  if (!city) return alert("Please enter a city name!");

  // IMPORTANT: Remove any spaces from your key below
  const apiKey = "8ac5c4d57ba6a47d33732ef4ba324ea6"; 
  
  // Use version 2.5 for the Free Tier
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const resultDiv = document.getElementById("weatherResult");
    
    if (res.status === 401) {
      resultDiv.innerHTML = `<p style='color:orange;'>Your API key is still activating. Please wait 1-2 hours.</p>`;
    } else if (res.ok) {
      resultDiv.innerHTML = `
        <div style="background: #e0f7fa; padding: 10px; border-radius: 10px; margin-top: 10px;">
          <p><b>City:</b> ${data.name}</p>
          <p><b>Temperature:</b> ${data.main.temp}°C</p>
          <p><b>Weather:</b> ${data.weather[0].description}</p>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `<p style='color:red;'>Error: ${data.message}</p>`;
    }
  } catch (err) {
    console.error("Weather API Error:", err);
  }
}