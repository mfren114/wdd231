const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
}

getProphetData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        // Create elements 
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p')
        let birthPlace = document.createElement('p')
        let portrait = document.createElement('img');

        // Text content
        fullName.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}th President`;
        birthDate.textContent = `Born ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth ${prophet.birthplace}`;

        // Build image portrait attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th latter-day President`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}