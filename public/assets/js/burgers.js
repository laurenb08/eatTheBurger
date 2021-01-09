$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newDevoured = {
            eaten: newEaten
        };
        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
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

});