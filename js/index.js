function addLineBreaksToParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    maxWords = 25;

    paragraphs.forEach(paragraph => {
        // Splitter paragraffens tekst op pr. ord
        const words = paragraph.textContent.split(/\s/); // "\s" repræsenterer et mellemrumstegn, "/ /" er en regular expression

        if (window.innerWidth >= 768) { // Hvis skærmen er større end 768px, så fordobles maxWords
            maxWords = maxWords * 2;
        }

        if (words.length > maxWords) {
            let theSplit = '';
            words.forEach((word, index) => {
                theSplit += word + ' ';
                // tilføjer line break efter maxWords ord
                if ((index + 1) % maxWords === 0) {
                    theSplit += '<br> <br>';
                }
            });
            // Update the paragraph's content with the modified text
            paragraph.innerHTML = theSplit.trim();
        }
    });
}

// Call the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', addLineBreaksToParagraphs);