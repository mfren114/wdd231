//Date
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

//cards
import { stars } from "../data/stars.mjs";
console.log(stars)

const allstars = document.querySelector('#allstars');

function displayItems(stars) {
    stars.forEach(x => {
        const thecard = document.createElement('div')
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.image}`
        thephoto.loading = "lazy"
        thecard.appendChild(thephoto)
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        const theteam = document.createElement('h3')
        theteam.innerText = x.team
        thecard.appendChild(theteam)
        const thejersey = document.createElement('h3')
        thejersey.innerText = x.jerseyNumber
        thecard.appendChild(thejersey)
        const theage = document.createElement('h3')
        theage.innerText = x.age
        thecard.appendChild(theage)
        const thechips = document.createElement('h3')
        thechips.innerText = x.championships
        thecard.appendChild(thechips)

        allstars.appendChild(thecard)
    })
}

displayItems(stars)

//hamburger button

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'bf30c96291d9b301f0d9c9f998bb34b7';
const lat = 40.78;
const lon = -74.05;
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