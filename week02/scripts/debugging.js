document.addEventListener("DOMContentLoaded", function() {
    const radiusOutput = document.getElementById("radiusOutput");
    const areaOutput = document.getElementById("areaOutput");

    console.log(radiusOutput); // Check if it's null
    console.log(areaOutput);   // Check if it's null

    if (!radiusOutput || !areaOutput) {
        console.error("One or more elements are missing!");
        return;
    }

    let area = 0;
    const PI = 3.14159;

    let radius = 10;
    area = PI * radius * radius;
    radiusOutput.textContent = radius;
    areaOutput.textContent = area.toFixed(3);
});