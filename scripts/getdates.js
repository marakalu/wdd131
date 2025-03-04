// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastModifiedDate}`;