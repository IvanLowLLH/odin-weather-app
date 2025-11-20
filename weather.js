const form = document.querySelector("form");


async function getWeatherLocation(location) {
    const API_KEY = "6UG68FTTTMGH6YPDGCQG9FC4V";
    const date1 = "2025-11-20"
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/${date1}?unitGroup=metric&contentType=json&key=${API_KEY}`);
    const weatherData = await response.json();
    return weatherData;
}

function updateUI(weatherData) {
    const todayWeatherUI = document.getElementById("today-weather");
    todayWeatherUI.innerHTML = "";

    const resolvedLocation = weatherData.resolvedAddress;
    const dateTemp = weatherData.currentConditions.temp;
    const weatherConditions = weatherData.currentConditions.conditions;

    todayWeatherUI.innerHTML = `
    <h3 class="resolved-location">${resolvedLocation}</h3>
    <p class="weather-info">Temperature is now ${dateTemp} C. </p>
    <p class="weather-info">Weather now: ${weatherConditions}. </p>
    `
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const location = formData.get("location");
    console.log(location)
    const weatherData = await getWeatherLocation(location);
    console.log(weatherData)
    updateUI(weatherData);
})