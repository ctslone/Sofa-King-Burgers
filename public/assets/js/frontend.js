$(document).ready(function() {
    console.log("ready")
})

$(".submit-btn").on("click", function(event) {
    event.preventDefault();
    console.log("submit");

    var newBurger = {
        name: $("#burgerInput").val().trim(),
      };

    console.log(newBurger)
})

