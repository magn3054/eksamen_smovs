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