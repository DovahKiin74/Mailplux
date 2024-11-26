document.addEventListener("DOMContentLoaded", function () {
    // Show contact overlay
    document.getElementById("contactSales").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("overlay-contact").classList.remove("d-none");
    });

    // Close contact overlay
    document.getElementById("closeContactOverlay").addEventListener("click", function() {
        document.getElementById("overlay-contact").classList.add("d-none");
    });

    // Show signup overlay
    document.getElementById("signupSales").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("overlay-signup").classList.remove("d-none");
    });

    // Close signup overlay
    document.getElementById("closeSignupOverlay").addEventListener("click", function() {
        document.getElementById("overlay-signup").classList.add("d-none");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled-down");
        } else {
            navbar.classList.remove("scrolled-down");
        }
    });
});
