// "use strict";

// function initMap() {
//     // Map options
//     const options = {
//         zoom: 15, // Adjust zoom level
//         center: { lat: 37.7749, lng: -122.4194 } // Business location (latitude, longitude)
//     };

//     // Initialize map
//     const map = new google.maps.Map(document.getElementById("map"), options);

//     // Add a marker
//     const marker = new google.maps.Marker({
//         position: { lat: 37.7749, lng: -122.4194 },
//         map: map,
//         title: "Your Business"
//     });
// }
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();