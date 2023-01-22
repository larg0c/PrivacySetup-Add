
var piped_action = true;
export {piped_action};


// Récupère le bouton
var toggleButton = document.getElementById("piped_onoff");

// Ajoute un écouteur d'événement pour détecter un clic sur le bouton
toggleButton.addEventListener("click", function () {
	// Récupère le corps de la page
	var body = document.body;
	// Inverse la valeur de la variable "mode"
	piped_action = !piped_action;
	/*
	// Vérifie si "mode" est true 
	if (pieped_action) {
		// Ajoute la classe "dark-mode"
		body.classList.add("dark-mode");
		// Change le texte du bouton pour désactiver le mode sombre
		toggleButton.innerHTML = "Désactiver le mode sombre";
	} else {
		// Sinon, supprime la classe "dark-mode"
		body.classList.remove("dark-mode");
		// Change le texte du bouton pour activer le mode sombre
		toggleButton.innerHTML = "Activer le mode sombre";
	}*/
});



const boutons = document.querySelectorAll(".yt_button");
boutons.forEach(b => {
	b.addEventListener("click", function () {
		$.ajax({
			url: 'test.php',
			type: 'POST',
			data: { amount: this.value },
			success: function (json_data) {
				window.location.replace(json_data);
			},
			error: function () {
				console.log("data not found");
			}
		});
	});
})  