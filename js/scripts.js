/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


    // Array of article URLs
    const articles = [
        "https://www.aicanet.it/-/studenti-di-baronissi-protagonisti-delle-olimpiadi-di-informatica"
    ];

    const container = document.getElementById('articles-container');

    articles.forEach(url => {
        // Fetch the article metadata
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                // Extract Open Graph metadata
                const title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || 'No title';
                const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'No description';
                const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || 'default-image.png';

                // Create the HTML block
                const articleBlock = `
                    <div class="article-block">
                        <a href="${url}" target="_blank">
                            <img src="${image}" alt="${title}" class="article-logo">
                            <div class="article-content">
                                <h3>${title}</h3>
                                <p>${description}</p>
                            </div>
                        </a>
                    </div>
                `;
                container.innerHTML += articleBlock;
            })
            .catch(error => console.error('Error fetching article metadata:', error));
    });
