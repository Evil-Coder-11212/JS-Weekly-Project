// Initializing the variable to display the time
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secondEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";
const newYearDate = new Date(newYears)
const currentDate = new Date();
let currentMonths = new Date().getMonth() + 1;



const renderTime = () => {
    // Initializing the variable to display time
    let totalSeconds = (newYearDate - currentDate) / 1000;
    let months = 12 - currentMonths;

    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = (Math.floor(totalSeconds / 60) % 24) % 60
    let seconds = Math.floor(totalSeconds) % 60;

    // Display Time
    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
}

renderTime()

const logic = () => {

}