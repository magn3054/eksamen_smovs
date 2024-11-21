// Select the header element
const header = document.getElementById('dynamic-header');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
