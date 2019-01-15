$(document).ready(function() {

    // CREATE
    $(".burgerCreate").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInput").val().trim()
        };

        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
    });

    // UPDATE
    
    // DEVOUR
    $(".devourBurger").on("click", function(event) {

        var burgerInfo = {
            id: $(this).data("id"),
            devoured: true
        }
        console.log(burgerInfo);

        $.ajax("/burgers/" + burgerInfo.id, {
            type: "PUT",
            data: burgerInfo
        }).then(() => {
            location.reload();
            console.log("Burger Devoured!");
        });
    });
});