// Wait until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
	}
});

const devour = document.querySelectorAll(".devBtn");

 // Set up the event listener for the devour button
if (devour) {
	devour.forEach((button) => {
		button.addEventListener('click', (e) => {};