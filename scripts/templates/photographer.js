function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const photographerInfo = document.createElement( 'div' );
        photographerInfo.classList.add('card-photographer');

        const local = document.createElement ( 'span' );
        local.classList.add('card-city');
        local.textContent = `${city}, ${country}`;

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.classList.add('card-tagline');
        photographerTagline.textContent = tagline;

        const photographerPackage = document.createElement( 'p' );
        photographerPackage.classList.add('card-package');
        photographerPackage.textContent = `${price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(photographerInfo);
        photographerInfo.appendChild(local);
        photographerInfo.appendChild(photographerTagline);
        photographerInfo.appendChild(photographerPackage);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}

// "tagline": "Toujours à la recherche de LA photo",
// "price": 300,