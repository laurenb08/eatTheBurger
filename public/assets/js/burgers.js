$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newDevoured = {
            eaten: newEaten
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed eaten to", newEaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger: $("#ca").val().trim(),
          eaten: $("[burger=eaten]:checked").val().trim()
        };

        // Send the POST request.
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
});