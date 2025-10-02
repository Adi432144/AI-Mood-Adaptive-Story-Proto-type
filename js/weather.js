// Utility emojis
const utilityEmojis = {
  clock: { alt: "⏰", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/23f0/512.gif" },
  globe: { alt: "🌍", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/512.gif" }
};

// Weather emojis
const weatherEmojis = {
  droplet: { alt: "💧", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.gif" },
  rainyCloud: { alt: "🌧️", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f327/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f327/512.gif" },
  lightningCloud: { alt: "🌩️", webp: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f329/512.webp", gif: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f329/512.gif" }
};

// Helper: build emoji picture
function makeEmojiPicture(emoji) {
  return `
    <picture>
      <source srcset="${emoji.webp}" type="image/webp">
      <img src="${emoji.gif}" alt="${emoji.alt}" width="36" height="36">
    </picture>
  `;
}

// --- Date & Time ---
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' };
  document.getElementById("dateTime").textContent = now.toLocaleString('en-US', options);
  document.getElementById("dateTimeIcon").innerHTML = makeEmojiPicture(utilityEmojis.clock);
}
setInterval(updateDateTime, 1000);
updateDateTime();

// --- Weather logic ---
const weatherEl = document.getElementById("weather");
const locationEl = document.getElementById("location");
const weatherIconEl = document.getElementById("weatherIcon");
const locationIconEl = document.getElementById("locationIcon");

const weatherApiKey = "c87ed51b805675cdc2eababdb7cc294b";

// Map OpenWeather "main" to emojis
function getWeatherEmoji(main) {
  switch(main.toLowerCase()) {
    case "rain": return weatherEmojis.rainyCloud;
    case "thunderstorm": return weatherEmojis.lightningCloud;
    case "drizzle": return weatherEmojis.droplet;
    default: return null;
  }
}

// Fetch weather by city name
function fetchWeatherByCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (!data || !data.main || !data.weather) {
        weatherEl.textContent = "Weather unavailable";
        weatherIconEl.textContent = "";
        console.warn("Incomplete weather data", data);
        return;
      }

      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const main = data.weather[0].main;

      const emoji = getWeatherEmoji(main);
      weatherIconEl.innerHTML = emoji ? makeEmojiPicture(emoji) : "🌥️";
      weatherEl.textContent = `${desc}, ${temp}°C`;
    })
    .catch(err => {
      weatherEl.textContent = "Weather unavailable";
      weatherIconEl.textContent = "";
      console.error(err);
    });
}

// Fetch location using IP API
function fetchLocationAndWeather() {
  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const city = data.city || "Unknown City";
      const country = data.country_name || "";

      // Update location box
      locationEl.textContent = `${city}, ${country}`;
      locationIconEl.innerHTML = makeEmojiPicture(utilityEmojis.globe);

      // Fetch weather by city name
      fetchWeatherByCity(city);
    })
    .catch(err => {
      locationEl.textContent = "Location unavailable";
      locationIconEl.innerHTML = makeEmojiPicture(utilityEmojis.globe);
      weatherEl.textContent = "Weather unavailable";
      weatherIconEl.textContent = "";
      console.error(err);
    });
}

// Run
fetchLocationAndWeather();
