const images = ['https://qwerewqwerew.github.io/source/js/dall-E/ai/dog1.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog2.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog3.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog4.png'];

const imageGallery = document.querySelector('#gallery');

function displayImage() {
	const imageMarkUp = images
		.map((image) => {
			return `<div class="col-12 col-sm-6 col-md-3 mb-4 position-relative" id ="image-container ">
          <img src="${image}" class="img-fluid" alt="Placeholder Image">
        </div>`;
		})
		.join('');
	imageGallery.innerHTML = imageMarkUp;
}
displayImage();
