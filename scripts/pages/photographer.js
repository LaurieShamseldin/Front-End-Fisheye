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


async function infoPhotographer() {
  try {
    const { photographers } = await getPhotographers();
    const photographer = photographers.find(photographe => photographe.id === photographeId);
    if (photographer) {
     // console.log(photographer.name);
      const photographerModel = photographerTemplate(photographer);
      console.log(photographerModel);
      const userCardDOM = photographerModel.getUserCardDOM();
      document.querySelector('body').appendChild(userCardDOM);
    }
  }

  catch(error) {}

}

infoPhotographer();
