"use strict";

function initMap() {
    let options;

    if (window.matchMedia("(min-width: 768px)").matches) {
        options = {
            zoom: 15,
            center: { lat: 56.154137, lng: 10.199727 },
            mapTypeId: "roadmap",
            mapId: "7a003606d996bab5",
            zoomControl: true, // Gemmer zoom kontrol
            streetViewControl: false, // Gemmer Street View kontrol
            mapTypeControl: false, // Gemmer kort type kontrol
            fullscreenControl: true
        };
    } else {
        options = {
            zoom: 14.5,
            center: { lat: 56.153537, lng: 10.191500 },
            mapTypeId: "roadmap",
            mapId: "7a003606d996bab5",
            zoomControl: true, // Gemmer zoom kontrol
            streetViewControl: false, // Gemmer Street View kontrol
            mapTypeControl: false, // Gemmer kort type kontrol
            fullscreenControl: true
        };
    }

    const map = new google.maps.Map(document.getElementById("smovs-maps-location"), options);
    const markerElement = document.createElement("div");
    markerElement.id = "map-marker";

    map.setHeading(90);

    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 56.1520500, lng: 10.1849000 },
        map: map,
        content: markerElement,
        title: "SMOVS"
    });
}
