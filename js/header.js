"use strict";

// Select the header element
const header = document.getElementById('mobil-header');

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
    const tabLinks = document.querySelectorAll("#mobil-nav a");
    const tabs = document.querySelector(".tabs");
    const tabLines = document.querySelectorAll(".tabline");
    
    

    if (menuTab.style.display === "flex") {
        document.body.style.overflow = "visible";
        tabLinks.forEach(tabLink => {
            tabLink.style.fontSize = "0rem";
            menuTab.style.height = "0dvh";
            menuTab.style.padding = "0rem 0";
        });
        setTimeout(() => {
            menuTab.style.display = "none";
        }, 500);

        tabLines.forEach(tabLine => {
            tabLine.style.borderRadius = "50%";
            tabLine.style.width = "16%";
            tabs.style.transform = "rotate(0deg)";
            
            setTimeout(() => {
                tabLines.forEach(tabLine => {
                    tabLine.style.borderRadius = "0%";
                    tabLine.style.width = "100%";
                });
            }, 600);
        });
    } else {
        document.body.style.overflow = "hidden";
        menuTab.style.display = "flex";
        setTimeout(() => {
            tabLinks.forEach(tabLink => {
                tabLink.style.fontSize = "2rem";
                menuTab.style.height = "100dvh";
                menuTab.style.padding = "2rem 0";
            });
        }, 500);

        tabLines.forEach(tabLine => {
            tabLine.style.width = "16%";
            tabLine.style.borderRadius = "50%";
            tabs.style.transform = "rotate(90deg)";
            
            setTimeout(() => {
                tabLines.forEach(tabLine => {
                    tabLine.style.borderRadius = "0%";
                    tabLine.style.width = "100%";
                });
            }, 500);
        });
    }
}