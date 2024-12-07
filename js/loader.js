"use strict";

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = () => {
        console.log(`${url} loaded.`);
        if (callback) callback();
    };
    script.onerror = () => {
        console.error(`Failed to load script: ${url}`);
    };
    document.head.appendChild(script);
}

// // Example usage: Load scripts in sequence
// loadScript('script1.js', () => {
//     loadScript('script2.js', () => {
//         console.log('All scripts loaded!');
//     });
// });



function loadMultiScripts(urls) {
    urls.forEach(url => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = () => console.log(`${url} loaded.`);
        script.onerror = () => console.error(`Failed to load: ${url}`);
        document.head.appendChild(script);
    });
}

// Example usage
// loadMultiScripts(['script1.js', 'script2.js', 'script3.js']);
