"use strict";

// Henter booking data fra localStorage
const bookingData = JSON.parse(localStorage.getItem('bookingData'));
const guest = bookingData.guestCount === '1' ? 'dig' : 'jer';
const personer = bookingData.guestCount === '1' ? 'Vi stiller 1 stol frem til dig' : 'Vi stiller ${bookingData.guestCount} stole frem til jer';

document.getElementById('confirmation-details').innerHTML = `
    <h1>Tak for din booking ${bookingData.name}!</h1>
    <p>Bookingbekræftelse er sendt til <br>${bookingData.email}.</p>
    <p>${personer}</p>
    <p>Vi glæder os til at se ${guest} den <br>${bookingData.date.split('-').reverse().join('-')} <br> kl. ${bookingData.time}.</p>
`;

















