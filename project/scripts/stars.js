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