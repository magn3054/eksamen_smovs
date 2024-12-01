// Select the header element
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function openMenu() {
    const menuTab = document.getElementById("mobil-nav");
    const menuIcon = document.getElementById("wave");
    if (menuTab.style.display === "flex") {
        menuTab.style.display = "none";
        menuIcon.style.animation = "slide 3s linear";
        // menuIcon.addEventListener('animationend', () => {
        //     menuIcon.style.animation = "none";
        // }, { once: true });
    } else {
        menuTab.style.display = "flex";
        menuIcon.style.animation = "slide 3s linear infinite";
    }
}