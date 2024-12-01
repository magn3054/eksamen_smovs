addEventListener('DOMContentLoaded', () => {
    loadScript('js/map.js', () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDgPjqwZdmFuXPebIktK4sCJnRWqFT849U&callback=initMap&libraries=marker&map_ids=7a003606d996bab5.js', () => {
            console.log('All scripts loaded!');
        });
    });
});