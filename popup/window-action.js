const boutons=document.querySelectorAll(".yt_button");
boutons.forEach(b => {b.addEventListener("click", function(){
	$.ajax({
		url:'test.php',
		type: 'POST',
		data: {amount: this.value},
		success: function (json_data) {
			window.location.replace(json_data);
		},
		error: function() {
			console.log("data not found");
		}
	});
}); 
})  