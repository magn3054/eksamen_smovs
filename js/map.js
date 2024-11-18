"use strict";

function initMap() {
    const options = {
        zoom: 18,
        center: { lat: 56.1513500, lng: 10.1847500 },
        center: { lat: 56.1513500, lng: 10.1850000 },
        mapTypeId: "satellite",
        mapId: "7a003606d996bab5",
        // disableDefaultUI: false, // Keep the default UI but hide specific controls
        zoomControl: true, // Hides the zoom control
        streetViewControl: false, // Hides the Street View control
        mapTypeControl: false, // Hides the map type switcher
        fullscreenControl: true
    };

    const map = new google.maps.Map(document.getElementById("smovs-maps-location"), options);
    const markerElement = document.createElement("div");
    markerElement.id = "map-marker";

    map.setHeading(90);

    const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 56.1513500, lng: 10.1847500 },
        map: map,
        content: markerElement,
        title: "SMOVS"
    });
}