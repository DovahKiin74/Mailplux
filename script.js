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



document.querySelectorAll('.features-description-container').forEach((section) => {
    // Ensure each section maintains its own logic
    const links = section.querySelectorAll('.hover__link__contains');
    const images = section.closest('.container').querySelectorAll('.img-holder-featured img');

    links.forEach((link, index) => {
        const heading = link.querySelector('h2');
        const content = link.querySelector('.hover__content__contains');

        heading.addEventListener('click', () => {
            // If the clicked section is already open, do nothing
            if (content.classList.contains('show__content')) {
                return; // Stop further execution if it's already open
            }

            // Close all content within this section
            links.forEach((otherLink, otherIndex) => {
                const otherContent = otherLink.querySelector('.hover__content__contains');
                const otherImage = images[otherIndex];

                // Close all other content blocks except the one being clicked
                otherContent.classList.remove('show__content');
                if (otherImage) otherImage.style.display = 'none';
            });

            // Open the clicked content block
            content.classList.add('show__content');

            // Update corresponding image
            const image = images[index];
            if (image) {
                image.style.display = 'block';
            }
        });
    });

    // Ensure at least one item is open in the section on page load
    const defaultOpen = section.querySelector('.hover__content__contains.show__content');
    if (!defaultOpen && links.length > 0) {
        links[0].querySelector('.hover__content__contains').classList.add('show__content');
        if (images[0]) images[0].style.display = 'block';
    }
});
