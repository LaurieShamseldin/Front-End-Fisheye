function mediaTemplate(data) {
  const { title, image, video, likes, price, id } = data;

  function mediaFactory(photographerName) {
    if (image) {
      return getImagePhotographer(photographerName);
    } else if (video) {
      return getVideoPhotographer(photographerName);
    }
  }

  function getImagePhotographer(photographerName) {

    const article = document.createElement('article');
    article.classList.add('card-photographer-media');

    const divMedia = document.createElement('div');
    divMedia.classList.add('card-media');

    const img = document.createElement('img');
    img.setAttribute("src", `/assets/photographers/${photographerName}/${image}`);
    img.alt = title;
    divMedia.appendChild(img);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-photographer-footer');

    const titleImg = document.createElement('p');
    titleImg.textContent = title;
    titleImg.classList.add('card-photographer-title');

    const buttonLike = document.createElement('button');
    buttonLike.classList.add('card-photographer-button');

    const numberLikes = document.createElement('span');
    numberLikes.classList.add('likes-media');
    numberLikes.textContent = likes;

    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');
    heart.setAttribute('aria-label', 'likes');

    buttonLike.appendChild(numberLikes);
    buttonLike.appendChild(heart);

    article.appendChild(divMedia);
    article.appendChild(cardFooter);
    cardFooter.appendChild(titleImg);
    cardFooter.appendChild(buttonLike);

    // buttonLike.addEventListener('click',() => toggleLike(likes, id, numberLikes));

    return (article);
  };

  function getVideoPhotographer(photographerName) {

    const article = document.createElement('article');
    article.classList.add('card-photographer-media');

    const divMedia = document.createElement('div');
    divMedia.classList.add('card-media');

    const videoPhotographer = document.createElement('video');
    videoPhotographer.setAttribute("src", `/assets/photographers/${photographerName}/${video}`);
    videoPhotographer.controls = true;
    divMedia.appendChild(videoPhotographer);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-photographer-footer');

    const titleImg = document.createElement('p');
    titleImg.textContent = title;
    titleImg.classList.add('card-photographer-title');

    const buttonLike = document.createElement('button');
    buttonLike.classList.add('card-photographer-button');

    const numberLikes = document.createElement('span');
    numberLikes.classList.add('likes-media');
    numberLikes.textContent = likes;

    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');
    heart.setAttribute('aria-label', 'likes');

    buttonLike.appendChild(numberLikes);
    buttonLike.appendChild(heart);

    article.appendChild(divMedia);
    article.appendChild(cardFooter);
    cardFooter.appendChild(titleImg);
    cardFooter.appendChild(buttonLike);

    // buttonLike.addEventListener('click', () => toggleLike(likes, id, numberLikes));

    return (article);
  };

  return { title, image, video, likes, price, id, mediaFactory, getImagePhotographer, getVideoPhotographer  }
}