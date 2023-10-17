// eslint-disable-next-line no-unused-vars
function displayMediaLightbox(arrayMedia, index, photographer) {
	displayLightboxModal();

	const currentMedia = arrayMedia[index];
	const slider = document.querySelector(".slider_img");
	const previousBtn = document.getElementById("previous-btn");
	const nextBtn = document.getElementById("next-btn");

	slider.innerHTML = "";

	// Show image or video
	if (currentMedia.image) {
		const sliderImg = document.createElement("img");
		sliderImg.setAttribute("src", `/assets/photographers/${photographer.name}/${currentMedia.image}`);
		sliderImg.alt = currentMedia.title;
		slider.appendChild(sliderImg);
	} else {
		const sliderVideo = document.createElement("video");
		sliderVideo.setAttribute("video", `/assets/photographers/${photographer.name}/${currentMedia.video}`);
		sliderVideo.controls = true;
		slider.appendChild(sliderVideo);
	}

	previousBtn.addEventListener("click", navigatePrevious);
	nextBtn.addEventListener("click", navigateNext);

	// Function to previous media
	function navigatePrevious() {
		if (index > 0) {
			index--;
		} else {
			index = arrayMedia.length - 1;
		}
		showMediaIndex(index);
	}

	// Function to next media
	function navigateNext() {
		if (index < arrayMedia.length - 1) {
			index++;
		} else {
			index = 0;
		} 
		showMediaIndex(index);  
	}

	// Function to show new media
	function showMediaIndex(index) {
		const newMedia = arrayMedia[index];
		slider.innerHTML = "";

		if (newMedia.image) {
			const sliderImg = document.createElement("img");
			sliderImg.src = `/assets/photographers/${photographer.name}/${newMedia.image}`;
			sliderImg.alt = newMedia.title;
			slider.appendChild(sliderImg);
		} else if (newMedia.video) {
			const sliderVideo = document.createElement("video");
			sliderVideo.src = `/assets/photographers/${photographer.name}/${newMedia.video}`;
			sliderVideo.controls = true;
			slider.appendChild(sliderVideo);
		}
	}

	// Navigate with keyboard
	document.addEventListener("keydown", function (event) {
		if (event.key === "ArrowLeft") {
			navigatePrevious();
		}
	});

	document.addEventListener("keydown", function (event) {
		if (event.key === "ArrowRight") {
			navigateNext();
		}
	});
}

function displayLightboxModal() {
	const modal = document.getElementById("lightbox_modal");
	const main = document.getElementById("main");
	const title = document.getElementById("modal-lightbox-title");
	const message = document.querySelector(".close-modal-message");

	modal.style.display = "flex";
	modal.setAttribute("aria-hidden", "false");
	main.setAttribute("aria-hidden", "true");
	title.setAttribute("aria-hidden", "false");
	message.setAttribute("aria-hidden", "false");
	main.classList.add("no-scroll");

	const closeModalElt = document.querySelector(".close");
	closeModalElt.focus();
}

const closeModalElt = document.querySelector(".close");
closeModalElt.addEventListener("click", closeLightboxModal);

document.addEventListener("keydown", function(event) {
	if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
		closeLightboxModal();
	}
});


function closeLightboxModal() {
	const modal = document.getElementById("lightbox_modal");
	const main = document.getElementById("main");
	const title = document.getElementById("modal-lightbox-title");
	const message = document.querySelector(".close-modal-message");

	modal.style.display = "none";
	modal.setAttribute("aria-hidden", "true");
	main.setAttribute("aria-hidden", "false");
	title.setAttribute("aria-hidden", "true");
	message.setAttribute("aria-hidden", "true");
	main.classList.remove("no-scroll");
}

