// Wait until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
	if (event) {
		console.info("DOM loaded");
	}


const devour = document.querySelectorAll(".devBtn");

 // Set up the event listener for the devour button
if (devour) {
	devour.forEach((button) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();

			const id = e.currentTarget.getAttribute("data-id");
			// const devoured = e.currentTarget.getAttribute("data-devoured");

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
			}).then((response) => {
				if (response.ok) {
					location.reload("/");
				} else {
					alert("Something went wrong!");
				}
			});
		});
	});
}

// Adding a burger 
const addBurg = document.querySelector('.create-form');

	if (addBurg) {
		addBurg.addEventListener('submit', (e) => {
		e.preventDefault();
		

		const newBurgerName = {
			burger_name: document.getElementById('burger-input').value.trim(),
			devoured: false
		};

		fetch("/api/burgers", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},

			body: JSON.stringify(newBurgerName),
				}).then(() => {
					document.getElementById('burger-input').value = '';
					console.log("Burger added!");
					location.reload();
			});
    	});
	}
});