const form = document.querySelector("form");


async function getWeatherLocation(location) {
    const API_KEY = "6UG68FTTTMGH6YPDGCQG9FC4V";
    const date1 = "2025-11-20"
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/${date1}?unitGroup=metric&contentType=json&key=${API_KEY}`);
    const weatherData = await response.json();
    const dateTemp = weatherData.days[0].temp;
    console.log(`The temperature in ${location} for ${date1} is ${dateTemp} C`);
}

form.addEventListener("submit", (event) => {
    const formData = new FormData(form);

    const location = formData.get("location");
    console.log(location)
    getWeatherLocation(location);
    event.preventDefault();
})