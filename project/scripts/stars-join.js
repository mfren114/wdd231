//Date
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

//form hidden date and time

var d = new Date();

var date = d.toDateString();
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("date").value = date + hours + ":" + mins + ":" + seconds;