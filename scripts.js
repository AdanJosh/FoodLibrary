// Get references to the hamburger menu and mobile navigation
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

// Add an event listener to the hamburger menu
hamburgerMenu.addEventListener('click', function() {
    // Toggle the 'show' class on the mobile nav
    mobileNav.classList.toggle('show');
});
