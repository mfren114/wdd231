const membersArray = "members.json"

const cards = document.querySelector('#cards');

async function getProphetData() {
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
        portrait.setAttribute('src', member.imageIcon);
        portrait.setAttribute('alt', `Pic of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);

        cards.appendChild(card);
    });

}