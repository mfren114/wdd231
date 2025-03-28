var d = new Date();

//Date and Time
var date = d.toDateString();
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("date").value = date + hours + ":" + mins + ":" + seconds;