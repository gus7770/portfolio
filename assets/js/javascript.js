// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    // Show the scroll-to-top button if the user scrolls down 300px
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    // Scroll smoothly to the top when the button is clicked
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});