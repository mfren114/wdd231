var d = new Date();

//Date and Time
var date = d.toDateString();
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("date").value = date + hours + ":" + mins + ":" + seconds;

//modals

const npModal = document.querySelector('#np-modal')
const npDialog = document.querySelector('#np-dialog')
const npClose = document.querySelector('#np-close')

npModal.addEventListener("click", () => {
    npDialog.showModal();
});

npClose.addEventListener('click', () => {
    npDialog.close();
});

const bronzeModal = document.querySelector('#bronze-modal')
const bronzeDialog = document.querySelector('#bronze-dialog')
const bronzeClose = document.querySelector('#bronze-close')

bronzeModal.addEventListener("click", () => {
    bronzeDialog.showModal();
});

bronzeClose.addEventListener('click', () => {
    bronzeDialog.close();
});

const silverModal = document.querySelector('#silver-modal')
const silverDialog = document.querySelector('#silver-dialog')
const silverClose = document.querySelector('#silver-close')

silverModal.addEventListener("click", () => {
    silverDialog.showModal();
});

silverClose.addEventListener('click', () => {
    silverDialog.close();
});

const goldModal = document.querySelector('#gold-modal')
const goldDialog = document.querySelector('#gold-dialog')
const goldClose = document.querySelector('#gold-close')

goldModal.addEventListener("click", () => {
    goldDialog.showModal();
});

goldClose.addEventListener('click', () => {
    goldDialog.close();
});

//Form info

const getString = window.location.search;
console.log(getString);