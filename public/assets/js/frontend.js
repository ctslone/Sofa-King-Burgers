$(document).ready(function() {
    console.log("ready")
})

$(document).on("click", "#add-btn", function(event) {
    event.preventDefault();
    console.log("submit");

    var newBurger = {
        name: $("#burgerInput").val().trim(),
        devoured: 0
      };

    console.log(newBurger);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
})

