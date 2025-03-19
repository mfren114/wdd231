const membersArray = "data/members.json"

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(membersArray);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData()

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements 
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p')
        let phoneNumber = document.createElement('p')
        let website = document.createElement('p')
        let imageIcon = document.createElement('img');
        let memberLevel = document.createElement('h3')

        // Text content
        name.textContent = `${member.name}`;
        address.textContent = `Email: ${member.address}`;
        phoneNumber.textContent = `Phone: ${member.phoneNumber}`;
        website.textContent = `URL: ${member.website}`;
        memberLevel.textContent = `Level: ${member.memberLevel}`;


        // Build image portrait attributes
        imageIcon.setAttribute('src', member.imageIcon);
        imageIcon.setAttribute('alt', `Pic of ${member.name}`);
        imageIcon.setAttribute('loading', 'lazy');
        imageIcon.setAttribute('width', '100');
        imageIcon.setAttribute('height', '100');

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(imageIcon);
        card.appendChild(memberLevel);
        

        cards.appendChild(card);
    });

}
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