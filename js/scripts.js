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


    const articles = [
        {
            url: "https://www.aicanet.it/-/studenti-di-baronissi-protagonisti-delle-olimpiadi-di-informatica",
            title: "Students of Baronissi Protagonists of the Computer Science Olympics",
            description: "A brief overview of the achievements of students from Baronissi in the Computer Science Olympics.",
            image: "https://via.placeholder.com/150"  // Immagine di esempio
        },
        {
            url: "https://example.com/article-2",
            title: "Another Article Title",
            description: "Description of another article that discusses relevant topics.",
            image: "https://via.placeholder.com/150"  // Immagine di esempio
        },
        {
            url: "https://example.com/article-3",
            title: "Third Article Title",
            description: "Summary of the third article providing insights and information.",
            image: "https://via.placeholder.com/150"  // Immagine di esempio
        }
    ];

    const container = document.getElementById('articles-container');

    articles.forEach(article => {
        const { url, title, description, image } = article;

        // Crea il blocco HTML per ciascun articolo
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
    });


});