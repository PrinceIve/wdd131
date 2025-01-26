const currentYear = document.querySelector("#current-year");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last modified: ${document.lastModified}.`;

// Wind Chill Calculation
// Static values for temperature and wind speed
const temperature = 8; // in °C
const windSpeed = 12; // in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    // Check if conditions are met
    if (temp <= 10 && speed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1); // Round to 1 decimal
    } else {
        return "N/A"; // Not applicable
    }
}

// Call the function and display the result on page load
document.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("wind-chill");
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill + "°C";
});

