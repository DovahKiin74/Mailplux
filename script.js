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

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    // Function to change the accordion content based on the active tab
    function updateAccordionContent(tabId) {
        // Loop through all accordion items and hide them if they don't match the selected tab
        accordionItems.forEach(item => {
            const cause = item.getAttribute('data-cause');
            if (cause === tabId) {
                item.style.display = 'block';  // Show matching items
            } else {
                item.style.display = 'none';   // Hide non-matching items
            }
        });
    }

    // Function to handle tab clicks
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove 'activated' class from all tabs and add it to the clicked tab
            tabs.forEach(t => t.classList.remove('activated'));
            tab.classList.add('activated');
            
            // Get the tab id (the data-tab attribute) and update accordion content
            const tabId = tab.getAttribute('data-tab');
            updateAccordionContent(tabId);
        });
    });

    // Initially show the content for the default active tab (management)
    updateAccordionContent('management');
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
