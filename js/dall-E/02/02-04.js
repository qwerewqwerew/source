// @ts-nocheck
const images = ['https://qwerewqwerew.github.io/source/js/dall-E/ai/dog1.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog2.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog3.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog4.png'];

const imageGallery = document.querySelector('#gallery');

function displayImage() {
	const imageMarkUp = images
		.map((image) => {
			return `<div class="col-12 col-sm-6 col-md-3 mb-4 position-relative" id="image-container">
          <img src="${image}" class="img-fluid" alt="Placeholder Image">
        </div>`;
		})
		.join('');
	imageGallery.innerHTML = imageMarkUp;
}
displayImage();

const promptInp = document.querySelector('#prompt');
promptInp.addEventListener('input', () => {
	imageGallery.innerHTML = '';
});

const generateForm = document.querySelector('#generate-form');
generateForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const prompt = document.querySelector('#prompt').value;
	const key = localStorage.getItem('API_KEY');
	await fetchImage(prompt, key);
});

const fetchImage = async (prompt, API_KEY) => {
	const url = 'https://api.openai.com/v1/images/generations';
	const opt = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			model: 'dall-e-3',
			prompt,
			n: 1,
			size: '1024x1024',
		}),
	};

	try {
		const response = await fetch(url, opt);
		const result = await response.json();
		console.log(result);
		const newImageURL = result.data[0].url;
		imageGallery.innerHTML += `<div class="col-12 col-sm-6 col-md-3 mb-4 position-relative">
      <img src="${newImageURL}" class="img-fluid" alt="Generated Image">
    </div>`;
	} catch (error) {
		console.error(error);
	}
};
