document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class "scroll-to-menu"
    var scrollToMenuLinks = document.querySelectorAll(".scroll-to-menu");

    // Loop through each link
    scrollToMenuLinks.forEach(function(link) {
        // Add click event listener to each link
        link.addEventListener("click", function(event) {
            // Prevent default behavior of anchor link
            event.preventDefault();

            // Get the target element to scroll to (in this case, the menu section)
            var targetElement = document.querySelector(".menu-container");

            // Scroll to the target element
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
