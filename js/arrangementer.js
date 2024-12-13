fetch('/json/arrangementer.json')
    .then(response => response.json())
    .then(data => {
        // Funktion der henter hver enkelte arrangement fra json og indsætter dem i sections inde i main 
        function hentSection(arrangement) {
            const arrangmentSection = document.createElement('section');

            // Indsæt titel
            const title = document.createElement('h2');
            title.textContent = arrangement.title;
            arrangmentSection.appendChild(title);

            // Hent og indsæt billede
            const picture = document.createElement('picture');
            const desktopImg = document.createElement('source');
            desktopImg.setAttribute('media', '(min-width: 768px)');
            desktopImg.setAttribute('srcset', arrangement.image.desktop);
            const mobilImg = document.createElement('img');
            mobilImg.setAttribute('src', arrangement.image.mobile);
            picture.appendChild(desktopImg);
            picture.appendChild(mobilImg);
            arrangmentSection.appendChild(picture);

            // Indsæt tekst
            const tekstDiv = document.createElement('div');
            tekstDiv.classList.add('tekst');
            arrangement.tekst.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                tekstDiv.appendChild(p);
            });
            arrangmentSection.appendChild(tekstDiv);

            // Tilføj knappen
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('buttons');
            const button = document.createElement('button');
            button.textContent = 'Tilmeld dig her';
            button.addEventListener('click', () => {window.location.href = "error.html"});
            buttonDiv.appendChild(button);
            arrangmentSection.appendChild(buttonDiv);

            // Indsæt tabel til kalenderen
            const table = document.createElement('table');
            table.classList.add('kalender');
            const tableBody = document.createElement('tbody');
            const headerRow = document.createElement('tr');
            arrangement.kalender.headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });
            tableBody.appendChild(headerRow);
            arrangement.kalender.rows.forEach(row => {
                const rowElement = document.createElement('tr');
                Object.values(row).forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    rowElement.appendChild(td);
                });
                tableBody.appendChild(rowElement);
            });
            table.appendChild(tableBody);
            arrangmentSection.appendChild(table);

            // Append sections til main
            document.querySelector('main').appendChild(arrangmentSection);
        }

        // Hent all sections
        data.forEach(arrangement => hentSection(arrangement));
    })
