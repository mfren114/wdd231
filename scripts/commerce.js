//current date
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