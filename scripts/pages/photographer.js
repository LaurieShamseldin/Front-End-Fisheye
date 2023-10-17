//Mettre le code JavaScript lié à la page photographer.html

function getURLParam() {
	let search = window.location.search;
	if (search.startsWith("?")) {
		search = search.substring(1);
	}
	if (search && search.endsWith("=")) {
		search = search.slice(0, -1);
	}
	return search;
}

const photographeId = parseInt(getURLParam(), 10);

async function getPhotographers() {

	const reponse = await fetch("../data/photographers.json");
	const photographers = await reponse.json();
	return photographers;
}

async function infoPhotographer(photographers, media) {

	try {
		const photographer = photographers.find(photographe => photographe.id === photographeId);

		if (photographer) {
			const photographersHeader = document.querySelector(".photograph-header");
			// eslint-disable-next-line no-undef
			const photographerModel = photographerTemplate(photographer);
			const photographerPageDOM = photographerModel.getPhotographerPageDOM();
			photographersHeader.appendChild(photographerPageDOM);

			const mediaContainer = document.createElement("section");
			mediaContainer.classList.add("cards-photographer-media");
			document.querySelector("#main").appendChild(mediaContainer);

			const photographerMedias = media.filter(mediaItem => mediaItem.photographerId === photographeId);

			// eslint-disable-next-line no-inner-declarations
			function displayPhotographerMedias(listPhotographer) {
				mediaContainer.innerHTML = "";
				listPhotographer.forEach(mediaItem => {
				
					const mediaModel = window.mediaTemplate(mediaItem);
					const mediasPageDOM = mediaModel.mediaFactory(photographer.name);
					mediaContainer.appendChild(mediasPageDOM);

					const numberLikes = mediasPageDOM.querySelector(".likes-media");
					const buttonLike = mediasPageDOM.querySelector(".card-photographer-button");
					// eslint-disable-next-line no-undef
					buttonLike.addEventListener("click", () => toggleLike(mediaItem.likes, mediaItem.id, numberLikes));

					// Lightbox click on image
					const mediaContent = mediasPageDOM.querySelector(".card-media");
					mediaContent.addEventListener("click", () => {
						const index = photographerMedias.indexOf(mediaItem);
						window.displayMediaLightbox(photographerMedias, index, photographer);
					});

				});
			}

			displayPhotographerMedias(photographerMedias);

      
			const totalLikes = photographerMedias.reduce((total, mediaItem) => total + mediaItem.likes, 0);

			const getPhotographerLikes = photographerModel.getPhotographerLikes(totalLikes);
			document.querySelector("body").appendChild(getPhotographerLikes);

			const h2Form = document.querySelector(".modal-title");
			h2Form.textContent +=  ` ${photographer.name}`;

			const select = document.getElementById("sort");
			select.addEventListener("change",  function() {
				window.sort(select.value, photographerMedias, displayPhotographerMedias);
			});
		} else {
			window.location.href = "/";
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

