// Footer - Update Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

// Select the correct elements
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");  // FIXED: Target the correct class

// Toggle the menu when clicking the hamburger button
hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Change the hamburger icon when active
    if (navMenu.classList.contains("active")) {
        hamburgerButton.textContent = "✖";  // Close icon
    } else {
        hamburgerButton.textContent = "☰";  // Hamburger icon
    }
});