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
    };

    function getPhotographerPageDOM() {

        const section = document.createElement('section');
        section.classList.add('photographer-section');

        const divPhotographer = document.createElement( 'div' );
        divPhotographer.classList.add('about-photographer');

        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        divPhotographer.appendChild(h1);

        const local = document.createElement ( 'span' );
        local.classList.add('card-city');
        local.textContent = `${city}, ${country}`;
        divPhotographer.appendChild(local);

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.classList.add('card-tagline');
        photographerTagline.textContent = tagline;
        divPhotographer.appendChild(photographerTagline);

        const button = document.createElement('button');
        button.classList.add('contact_button');
        button.classList.add('contact_modal');
        button.textContent = 'Contactez-moi';

        button.addEventListener('click', displayModal);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.alt = `Portrait de ${name}`;

        section.appendChild(divPhotographer);
        section.appendChild(button);
        section.appendChild(img);

        return (section);

    };

    function getPhotographerLikes(total) {
        const totalLikes = document.createElement('div');
        totalLikes.classList.add('photographer-total-likes');

        const divLikes = document.createElement('div');
        divLikes.classList.add('likes');

        const numberLikes = document.createElement('p');
        numberLikes.classList.add('photographer-likes');
        numberLikes.textContent = total;
        
        const heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart');

        divLikes.appendChild(numberLikes);
        divLikes.appendChild(heart);

        const pricePhotographer = document.createElement('p');
        pricePhotographer.classList.add('price');
        pricePhotographer.textContent = `${price}€/jour`;

        totalLikes.appendChild(divLikes);
        totalLikes.appendChild(pricePhotographer);

        return (totalLikes);

    }

    return { name, picture, city, country, tagline, price, id, getUserCardDOM, getPhotographerPageDOM, getPhotographerLikes }
}
