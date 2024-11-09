const nameToAnimate = "Kotha Sumanth"; // Your name
const nameElement = document.getElementById("name-animation");

let index = 0;

function animateName() {
    if (index < nameToAnimate.length) {
        nameElement.textContent += nameToAnimate.charAt(index);
        index++;
        setTimeout(animateName, 300); // Adjust timing (in ms) for speed
    }
}

// Start the name animation
animateName();

// Toggle the navigation menu
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class

    // Add or remove the nav-active class from the body
    document.body.classList.toggle('nav-active', navLinks.classList.contains('active'));
});

// Close the navigation menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');

    // Check if the click was outside the nav links and the toggle button
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    }
});

// JavaScript for smooth scrolling
document.querySelectorAll('.nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the section
        });

        // Close the navigation menu after clicking
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    });
});

// Add event listener to close navigation menu on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active'); // Hide the navigation links
        document.body.classList.remove('nav-active'); // Remove nav-active class from body
    }
});