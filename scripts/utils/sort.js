// eslint-disable-next-line no-unused-vars
function sort(option, photographerMedias, displayPhotographerMedias) {

	if (option === "Popularité") {
		photographerMedias.sort((a, b) => b.likes - a.likes);
	} else if (option === "Date") {
		photographerMedias.sort((a, b) => new Date(b.date) - new Date(a.date));
	} else if (option === "Titre") {
		photographerMedias.sort((a, b) => a.title.localeCompare(b.title));
	}
  
	displayPhotographerMedias(photographerMedias);
}