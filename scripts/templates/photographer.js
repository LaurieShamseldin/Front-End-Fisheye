function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.alt = `Portrait de ${name}`;

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const spanLink = document.createElement('span');
        spanLink.classList.add('hidden');
        spanLink.textContent = `Galerie photo de ${name}`;

        const link = document.createElement( 'a' );
        link.setAttribute('href', `/photographer.html?${id}`);
        link.setAttribute('role', 'link');
        link.setAttribute('aria-label', `Galerie photo de ${name}`)

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

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(spanLink);
        article.appendChild(photographerInfo);
        photographerInfo.appendChild(local);
        photographerInfo.appendChild(photographerTagline);
        photographerInfo.appendChild(photographerPackage);

        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}