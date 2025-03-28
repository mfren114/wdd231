var d = new Date();

//Date and Time
document.getElementById("date").value = d.toDateString();

var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;