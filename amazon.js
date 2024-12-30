// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
	// VARIABLES
	const searchInput = document.querySelector(".search-input");
	const productBoxes = document.querySelectorAll(".box");
	const cartContainer = document.querySelector(".nav-cart");
	const backToTopButton = document.querySelector(".foot1");
	const cartCountElement = document.createElement("span");
	const footerLinks = document.querySelectorAll("footer a");
	const seeMoreLinks = document.querySelectorAll(".box p");
	const signinElement = document.querySelector(".nav-signin");

	// Add a cart count dynamically
	cartCountElement.id = "cart-count";
	cartCountElement.textContent = "0";
	cartContainer.appendChild(cartCountElement);

	let cartCount = 0; // Initialize cart count

	// FUNCTIONALITIES

	// Search Functionality
	searchInput.addEventListener("input", () => {
		const searchTerm = searchInput.value.toLowerCase();
		productBoxes.forEach((box) => {
			const title = box.querySelector("h2").innerText.toLowerCase();
			box.style.display = title.includes(searchTerm) ? "block" : "none";
		});
	});

	// Add to Cart Functionality (clicking on product boxes)
	productBoxes.forEach((box) => {
		box.addEventListener("click", () => {
			cartCount++;
			cartCountElement.textContent = cartCount; // Update cart count
		});
	});

	// Empty Cart Functionality (double-clicking on cart section)
	cartContainer.addEventListener("dblclick", () => {
		if (cartCount > 0) {
			cartCount = 0;
			cartCountElement.textContent = cartCount; // Reset cart count
			alert("Your cart has been emptied.");
		}
	});

	// Back to Top Button Functionality
	backToTopButton.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	// "See More" Navigation Simulation
	seeMoreLinks.forEach((link, index) => {
		link.addEventListener("click", () => {
			alert(`Navigating to details of product ${index + 1}`);
		});
	});

	// Footer Links Simulation
	footerLinks.forEach((link, index) => {
		link.addEventListener("click", () => {
			alert(`You clicked on footer link ${index + 1}: "${link.textContent}"`);
		});
	});

	// Panel Options Interactivity (simulate category focus)
	const panelOptions = document.querySelectorAll(".panel-options div");
	panelOptions.forEach((option, index) => {
		option.addEventListener("click", () => {
			alert(`You clicked on category: "${option.textContent}"`);
		});
	});

	// Simulate Location Change
	const locationElement = document.querySelector(".add-icon");
	locationElement.addEventListener("click", () => {
		alert("Change delivery location functionality not yet implemented.");
	});

	// Detect Sign In click
	signinElement.addEventListener("click", () => {
		showSignInModal();
	});

	// Show Sign-In Modal
	function showSignInModal() {
		// Create modal container
		const modal = document.createElement("div");
		modal.id = "sign-in-modal";
		modal.style.position = "fixed";
		modal.style.top = "50%";
		modal.style.left = "50%";
		modal.style.transform = "translate(-50%, -50%)";
		modal.style.background = "#fff";
		modal.style.padding = "20px";
		modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
		modal.style.borderRadius = "8px";
		modal.style.zIndex = "1000";

		// Add form content
		modal.innerHTML = `
            <h3 style="margin-bottom: 10px;">
				Sign In
			</h3>
            <label for="username" style="display: block; margin-bottom: 5px;">
				Username:
			</label>
            <input type="text" id="username" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid ; border-radius: 4px;">
            <label for="password" style="display: block; margin-bottom: 5px;">
				Password:
			</label>
            <input type="password" id="password" style="width: 100%; padding: 8px; margin-bottom: 20px; border: 1px solid ; border-radius: 4px;">
            <button id="login-button" style="width: 100%; padding: 10px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Log In</button>
            <button id="close-modal" style="width: 100%; padding: 10px; margin-top: 10px; background: #ccc; color: #000; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
          `;

		// Append modal to body
		document.body.appendChild(modal);

		// Add event listeners for login and cancel
		document
			.querySelector("#login-button")
			.addEventListener("click", handleLogin);
		document.querySelector("#close-modal").addEventListener("click", () => {
			modal.remove();
		});
	}

	// Handle Login
	function handleLogin() {
		const username = document.querySelector("#username").value.trim();
		const password = document.querySelector("#password").value.trim();

		// Example: Hardcoded credentials for demo purposes
		const validUsername = "user";
		const validPassword = "password";

		if (username === validUsername && password === validPassword) {
			alert("Login successful!");
			localStorage.setItem("user", username); // Store user session in localStorage
			document.querySelector(
				".nav-signin span"
			).textContent = `Hello, ${username}`;
			document.querySelector("#sign-in-modal").remove(); // Close modal
		} else {
			alert("Invalid username or password!");
		}
	}

	// Check if user is already signed in
	const currentUser = localStorage.getItem("user");
	if (currentUser) {
		document.querySelector(
			".nav-signin span"
		).textContent = `Hello, ${currentUser}`;
	}

	// Simulate Return and Orders Navigation
	const returnOrdersElement = document.querySelector(".nav-return");
	returnOrdersElement.addEventListener("click", () => {
		alert("Return and Orders functionality not yet implemented.");
	});
});
