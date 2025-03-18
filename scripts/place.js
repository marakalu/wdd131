document.addEventListener("DOMContentLoaded", function() {
    // Get the elements for the current year and last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Weather data
    const temperature = 10; // Temperature in Celsius
    const windSpeed = 5;    // Wind speed in km/h

    // Wind chill calculation function
    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return Math.round(
                13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
            );
        } else {
            return "N/A";
        }
    }

    // Get the wind chill element and update it
    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
    } else {
        console.error("Element with ID 'windChill' not found.");
    }
});