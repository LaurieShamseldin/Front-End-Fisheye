//Mettre le code JavaScript lié à la page photographer.html

function getURLParam() {
  let search = window.location.search;
  if (search.startsWith('?')) {
    // Supprimez le point d'interrogation initial, le cas échéant
    search = search.substring(1);
  }
  if (search && search.endsWith('=')) {
    // Supprimez le signe égal à la fin
    search = search.slice(0, -1);
  }
  return search;
}

const photographeId = parseInt(getURLParam(), 10);

async function getPhotographers() {

  const reponse = await fetch('../data/photographers.json');
  const photographers = await reponse.json();
  return photographers;
}

async function infoPhotographer(photographers, media) {

  try {
    const photographer = photographers.find(photographe => photographe.id === photographeId);

    if (photographer) {
      const photographersHeader = document.querySelector(".photograph-header");
      const photographerModel = photographerTemplate(photographer);
      const photographerPageDOM = photographerModel.getPhotographerPageDOM();
      photographersHeader.appendChild(photographerPageDOM);

      const mediaContainer = document.createElement('section');
      mediaContainer.classList.add('cards-photographer-media');
      document.querySelector('#main').appendChild(mediaContainer);

      const photographerMedias = media.filter(mediaItem => mediaItem.photographerId === photographeId);
      photographerMedias.forEach(mediaItem => {
        const mediaModel = mediaTemplate(mediaItem);
        const mediasPageDOM = mediaModel.mediaFactory(photographer.name);
        mediaContainer.appendChild(mediasPageDOM);
      });


      const totalLikes = photographerMedias.reduce((total, mediaItem) => total + mediaItem.likes, 0);

      const getPhotographerLikes = photographerModel.getPhotographerLikes(totalLikes);
      document.querySelector('body').appendChild(getPhotographerLikes);
    }

  } catch(error) {
    console.error(error);
  }

}

async function init() {
  const { photographers, media } = await getPhotographers();
  infoPhotographer(photographers, media);
}

init();

