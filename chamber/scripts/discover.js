import { interests } from "../data/interests.mjs";
console.log(interests)

const allInterests = document.querySelector('#allinterests');

function displayItems(interests) {
    interests.foreach(x => {
        const thecard = document.createElement('div')
        const thephoto = document.createElement('img')
        thephoto.scr = `image/${x.photo_link}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        allInterests.appendChild(thecard)
    })
}

displayItems(interests)




//Date and last modrified
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

alert(document.lastModified);
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

//hamburger button

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});