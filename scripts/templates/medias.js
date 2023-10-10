function mediaTemplate(data) {
  const { title, image, video, likes, price } = data;

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

    const img = document.createElement('img');
    img.setAttribute("src", `/assets/photographers/${photographerName}/${image}`);
    img.alt = title;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-photographer-footer');

    const titleImg = document.createElement('p');
    titleImg.textContent = title;
    titleImg.classList.add('card-photographer-title');

    const buttonLike = document.createElement('button');
    buttonLike.classList.add('card-photographer-button');

    const numberLikes = document.createElement('span');
    numberLikes.textContent = likes;

    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');

    buttonLike.appendChild(numberLikes);
    buttonLike.appendChild(heart);

    article.appendChild(img);
    article.appendChild(cardFooter);
    cardFooter.appendChild(titleImg);
    cardFooter.appendChild(buttonLike);

    return (article);
  };

  function getVideoPhotographer(photographerName) {

    const article = document.createElement('article');
    article.classList.add('card-photographer-media');

    const videoPhotographer = document.createElement('video');
    videoPhotographer.setAttribute("src", `/assets/photographers/${photographerName}/${video}`);
    videoPhotographer.controls = true;

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-photographer-footer');

    const titleImg = document.createElement('p');
    titleImg.textContent = title;
    titleImg.classList.add('card-photographer-title');

    const likesImg = document.createElement('p');
    likesImg.textContent = likes;
    likesImg.classList.add('card-photographer-like');

    article.appendChild(videoPhotographer);
    article.appendChild(cardFooter);
    cardFooter.appendChild(titleImg);
    cardFooter.appendChild(likesImg);

    return (article);
  };

  return { title, image, video, likes, price,  mediaFactory, getImagePhotographer, getVideoPhotographer  }
}