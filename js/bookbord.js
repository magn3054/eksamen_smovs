"use strict";
/***************Styrer antallet af bookede gæster***************/
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


/**************Opdeler tlf nr. i 2 cifre ad gangen**************/
function formatPhoneNumber(input) {
    // Stopper bruh fra at skrive bogstaver
    let phone = input.value.replace(/\D/g, '');
    // Grupperer telefonnummeret i par
    phone = phone.match(/.{1,2}/g)?.join(' ') || '';
    input.value = phone;
}

/******** Sender udfyldt form til php med gæste-antal ********/
document.querySelector('.book-btn').addEventListener('click', (event) => {
    // Stopper formen fra at blive sendt med det samme
    event.preventDefault();

    // Hent form-værdier og gæste antal
    const guestCount = document.getElementById('count').textContent;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const countryCode = document.querySelector('.country-code').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const hour = document.querySelector('select[name="hour"]').value;
    const minute = document.querySelector('select[name="minute"]').value;

    // Gemmer data til localStorage
    const bookingData = {
        guestCount,
        name,
        email,
        phone: `${countryCode} ${phone}`,
        date,
        time: `${hour}:${minute}`
    };

    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    const form = event.target.closest('form');
    let guestInput = document.querySelector('input[name="guests"]');

    if (!guestInput) {
        guestInput = document.createElement('input');
        guestInput.type = 'hidden';
        guestInput.name = 'guests';
        form.appendChild(guestInput);
    }

    guestInput.value = guestCount;

    form.submit();
});