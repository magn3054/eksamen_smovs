"use strict";

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const countDisplay = document.getElementById('count');
let count = 1;

function updateCounter() {
    countDisplay.textContent = count;

    // Hvis count er 1, disable minus-button og gør den grå
    if (count === 1) {
        minusButton.style.filter = 'grayscale(80%)';
        minusButton.disabled = true;
    } else {
        minusButton.style.filter = 'none';
        minusButton.disabled = false;
    }
}

// Event listener for minus-button
minusButton.addEventListener('click', () => {
    if (count > 1) {
        count--;
        updateCounter();
    }
});

// Event listener for plus-button
plusButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

updateCounter();