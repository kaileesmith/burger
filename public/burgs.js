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
		button.addEventListener('click', (e) => {
			e.preventDefault();

			const id = e.currentTarget.getAttribute("data-id");
			const eaten = {
                devoured: true,
			};
			console.log(id);

			fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                	Accept: 'application/json',
                	'Content-Type': 'application/json',
				},
				
				body: JSON.stringify(eaten),
			}).then((response) => 
			{
				if (response.ok) 
				{
					location.reload("/");
				} else {
					alert("Something went wrong!");
				}
			});
		};