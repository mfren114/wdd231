//Date
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;


//modals

const curryModal = document.querySelector('#curry-modal')
const curryDialog = document.querySelector('#curry-dialog')
const curryClose = document.querySelector('#curry-close')

curryModal.addEventListener("click", () => {
    curryDialog.showModal();
});

curryClose.addEventListener('click', () => {
    curryDialog.close();
});