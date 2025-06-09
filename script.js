async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const resultBox = document.getElementById('weatherResult');
  
    if (!city) {
      resultBox.innerHTML = "Please enter a city name.";
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      resultBox.innerHTML = weatherHTML;
    } catch (error) {
      resultBox.innerHTML = "Error fetching weather data.";
      console.error(error);
    }
  }
  