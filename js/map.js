"use strict";

function initMap() {
    // Map options
    const options = {
        zoom: 15, // Adjust zoom level
        center: { lat: 37.7749, lng: -122.4194 } // Business location (latitude, longitude)
    };

    // Initialize map
    const map = new google.maps.Map(document.getElementById("smovs-maps-location"), options);

    // Add a marker
    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: "Your Business"
    });
}