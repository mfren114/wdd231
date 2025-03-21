const currentTemp = document.querySelectorAll('#current-temp');
const weatherIcon = document.querySelectorAll('#weather-icon');
const captionDesc = document.querySelectorAll('#figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.74}&lon={6.64}&units=${imperial}&appid={bf30c96291d9b301f0d9c9f998bb34b7}';

async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


apifetch();

function displayResults(data) {

}