"use strict";
fetch('/json/menu-billeder.json')
    .then(response => response.json())
    .then(data => {
        // Shuffle billeder
        function shuffle(billeder) {
            for (let i = billeder.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [billeder[i], billeder[j]] = [billeder[j], billeder[i]];
            }
            return billeder;
        }

        const shuffledBilleder = shuffle(data);

        // Filtrer venstre og højre images
        const oddImages = shuffledBilleder.filter(image => image.id % 2 !== 0);
        const evenImages = shuffledBilleder.filter(image => image.id % 2 === 0);

        // generer polaroid container
        function createPolaroid(image) {
            const div = document.createElement('div');
            div.className = 'polaroid';

            const img = document.createElement('img');
            img.src = image.img;
            img.alt = image.caption;

            const p = document.createElement('p');
            p.textContent = image.caption;

            div.appendChild(img);
            div.appendChild(p);

            return div;
        }

        // Indsæt polaroider i venstre og højre row
        const leftRow = document.getElementById('left-row');
        const rightRow = document.getElementById('right-row');

        oddImages.forEach(image => {
            const polaroid = createPolaroid(image);
            leftRow.appendChild(polaroid);
        });

        evenImages.forEach(image => {
            const polaroid = createPolaroid(image);
            rightRow.appendChild(polaroid);
        });
    })


fetch('/json/menu.json')
    .then(response => response.json())
    .then(data => {
    data.forEach(menu => {
        // funktion der indsætter retten under den rette menu og undermenu
        const appendRet = (selector, content) => {
            const ul = document.querySelector(selector);
            if (ul) {
                const li = document.createElement('li');
                li.textContent = content;
                ul.appendChild(li);
            } 
        };

        // Hvis retten er en madret, indsættes den i den rette undermenu under mad
        if (menu.type === 'mad') {
            if (menu.undertype === 'ret') {
                appendRet('#retter ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'dessert') {
                appendRet('#desserter ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'snack') {
                appendRet('#snacks ul', `${menu.navn} - ${menu.pris} kr.`);
            }
        } 
        // Hvis retten er en drink, indsættes den i den rette undermenu under drink
        else if (menu.type === 'drink') {
            if (menu.undertype === 'cocktail') {
                appendRet('#cocktails ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'mocktail') {
                appendRet('#mocktails ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'sodajuice') {
                appendRet('#sodajuice ul', `${menu.navn} - ${menu.pris} kr.`);
            }
        } 
        // Hvis retten er en vin, indsættes den i den rette undermenu under vin
        else if (menu.type === 'vin') {
            if (menu.undertype === 'rød') {
                appendRet('#rod ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'hvid') {
                appendRet('#hvid ul', `${menu.navn} - ${menu.pris} kr.`);
            } else if (menu.undertype === 'natur') {
                appendRet('#natur ul', `${menu.navn} - ${menu.pris} kr.`);
            }
        }
    });
});