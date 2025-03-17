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


        // Build image portrait attributes
        imageIcon.setAttribute('src', member.imageurl);
        imageIcon.setAttribute('alt', `Pic of ${member.name}`);
        imageIcon.setAttribute('loading', 'lazy');
        imageIcon.setAttribute('width', '340');
        imageIcon.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);

        cards.appendChild(card);
    });

}

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

alert(document.lastModified);
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;