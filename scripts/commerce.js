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

//Courses

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        complete: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        complete: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        complete: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        complete: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        complete: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development",
        credits: 2,
        complete: false
    }

]