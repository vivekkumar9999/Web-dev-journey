let today = new Date();

let months = [
    "January","February","March","April",
    "May","June","July","August",
    "September","October","November","December"
];

let days = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"
];

document.getElementById("month").innerHTML =
    months[today.getMonth()];

document.getElementById("date").innerHTML =
    today.getDate();

document.getElementById("day").innerHTML =
    days[today.getDay()];

document.getElementById("year").innerHTML =
    today.getFullYear();