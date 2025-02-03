const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200)
});

$(document).ready(function () {
    // On hover over .circle, scale up the image inside it
    $('.circle').hover(
        function() {
            // On mouse enter, enlarge the image using scale transform
            $(this).find('img').stop().css('transform', 'scale(2)'); // scale up to 200%
        }, 
        function() {
            // On mouse leave, return the image to its original size
            $(this).find('img').stop().css('transform', 'scale(1)'); // return to 100%
        }
    );
});




// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

// Toggle the menu when the icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the icon between open/close states
    navbar.classList.toggle('active'); // Toggle the navbar visibility
};



// Close the menu when a link inside the navlist is clicked
const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active'); // Close the navbar by removing the 'active' class
        menuIcon.classList.remove('bx-x'); // Optionally reset the menu icon to its original state
    });
});





    // Select all elements to animate
    const elements = document.querySelectorAll('.header, .hero-text,.hero-text>h3,.hero-text>a,.hero-text>h4,.about-img img,.about-text,.btn, .center-text, .serviceitem-container>div, .center-text-bg, .education-column, .education-content>.content,.center-text-achievements, .achiev-container,.center-text-interest, .left-side.left-side-container, .right-side,.heading, .input-box>.input-field, .textarea-field, .btn-box,.footertext, .footersocial');

    // Observer to detect when elements are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    // Observe each element
    elements.forEach((el) => observer.observe(el));



    $(function() {
        // Initialize tooltips
        $('[title]').tooltip({
            show: { effect: "fadeIn", duration: 200 }, // Tooltip fade-in effect
            hide: { effect: "fadeOut", duration: 200 }, // Tooltip fade-out effect
            track: true // Tooltip follows the cursor
        });
    });
    