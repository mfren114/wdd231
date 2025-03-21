const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'bf30c96291d9b301f0d9c9f998bb34b7';
const lat = 49.74;
const lon = 6.64;
const units = 'imperial';

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    currentTemp.textContent = `${temp}°F`;
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    weatherIcon.src = iconURL;
    weatherIcon.alt = description;
}

apifetch();