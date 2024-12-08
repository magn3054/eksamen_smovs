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



// document.querySelector('.book-btn').addEventListener('click', () => {
//     // Saml booking dataen
//     const guestCount = document.getElementById('count').textContent;
//     const name = document.querySelector('input[name="name"]').value;
//     const email = document.querySelector('input[name="email"]').value;
//     const countryCode = document.querySelector('.country-code').value;
//     const phone = document.querySelector('input[name="phone"]').value;
//     const date = document.querySelector('input[name="date"]').value;
//     const time = document.querySelector('input[name="time"]').value;

//     // Gem dataen til localStorage
//     const bookingData = {
//         guestCount,
//         name,
//         email,
//         phone: `${countryCode} ${phone}`,
//         date,
//         time
//     };

//     localStorage.setItem('bookingData', JSON.stringify(bookingData));

//     // Redirect to the next page
//     window.location.href = 'booked.html';
// });

document.querySelector('.book-btn').addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values and the guest count
    const guestCount = document.getElementById('count').textContent;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const countryCode = document.querySelector('.country-code').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const time = document.querySelector('input[name="time"]').value;

    // Save data to localStorage
    const bookingData = {
        guestCount,
        name,
        email,
        phone: `${countryCode} ${phone}`,
        date,
        time
    };

    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    // Add the guest count as a hidden input to the form
    const form = event.target.closest('form');
    let guestInput = document.querySelector('input[name="guests"]');

    if (!guestInput) {
        guestInput = document.createElement('input');
        guestInput.type = 'hidden';
        guestInput.name = 'guests';
        form.appendChild(guestInput);
    }

    guestInput.value = guestCount;

    // Submit the form
    form.submit();
});
