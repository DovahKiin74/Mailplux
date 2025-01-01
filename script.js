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




document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');
    
    // Flag to prevent active class changes while scrolling
    let isScrolling = false;

    // Optionally adjust for a fixed navbar height (if you have one)
    const navbarHeight = 50; // Adjust this to the height of your navbar if needed

    // Function to handle click on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Scroll smoothly to the target section
            const targetSection = document.querySelector(this.getAttribute('href'));
            
            // Mark that we are scrolling
            isScrolling = true;

            // Scroll to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // After scrolling finishes, remove the flag and update the active section
            setTimeout(() => {
                isScrolling = false;
                setActiveSection();
            }, 500); // Adjust timeout to match your scroll duration
        });
    });

    // Function to update active link based on the section in the viewport
    function setActiveSection() {
        if (isScrolling) return; // Don't run if we're currently scrolling

        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if the top of the viewport has hit the top of the section
            if (rect.top <= 0 && rect.top > -rect.height) {
                currentSection = section;
            }
        });

        if (currentSection) {
            // Find the corresponding nav link for the section
            const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection.id}"]`);

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the corresponding nav link
            if (activeLink) activeLink.classList.add('active');
        }
    }

    // Throttle the scroll event (only update active link on scroll completion)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (!isScrolling) {
                setActiveSection();
            }
        }, 100); // Delay to check for active section
    });

    // Run once initially to set the active class if the page is scrolled
    setActiveSection();

    // Handle the case where the page is loaded with a hash (e.g., #section1)
    if (window.location.hash) {
        const initialSection = document.querySelector(window.location.hash);
        if (initialSection) {
            initialSection.scrollIntoView({ behavior: 'smooth' });

            // After the scroll, update the active class
            setTimeout(() => {
                setActiveSection(); // Update the active class after smooth scroll finishes
            }, 500); // Adjust the timeout to match the scroll duration
        }
    }
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
