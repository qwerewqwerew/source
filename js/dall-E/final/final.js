// @ts-nocheck
const keyModalEl = document.querySelector('#Keymodal');
const keyModal = new bootstrap.Modal(keyModalEl);
keyModalEl.addEventListener('shown.bs.modal', () => {
	const saveBtn = document.querySelector('.btn-primary');
	const keyInput = document.querySelector('#apikey');
	saveBtn.addEventListener('click', () => {
		const keyVal = keyInput.value;
		localStorage.setItem('API_KEY', keyVal);
		keyModal.hide();
	});
});
const images = ['https://qwerewqwerew.github.io/source/js/dall-E/ai/dog1.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog2.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog3.png', 'https://qwerewqwerew.github.io/source/js/dall-E/ai/dog4.png'];

const imageGallery = document.querySelector('#gallery');

const promptInp = document.querySelector('#prompt');

const spinner = document.querySelector('#spinner');
const message = document.querySelector('#message');
const generateForm = document.querySelector('#generate-form');
const msgOpt = promptInp.addEventListener('input', () => {
	imageGallery.innerHTML = '';
});
generateForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const prompt = promptInp.value;
	const key = localStorage.getItem('API_KEY');
	//프롬프트 값이 false
	if (!prompt) {
		displayMsg('프롬프트(명령어)를 입력하세요');
		return;
	}
	//key 값이 false
	if (!key) {
		displayMsg('APIKEY를 입력하고 저장버튼을 클릭해주세요.');
		return;
	}
	await fetchImage(prompt, key);
});
function displayMsg(msg) {
	message.textContent = msg;
	message.style.display = 'block';
	setTimeout(() => {
		message.style.display = 'none';
	}, 5000);
}
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
		// 스피너 보임
		spinner.style.display = 'block';
		const response = await fetch(url, opt);
		console.log(response);
		if (!response.ok) {
			const error = await response.json();
			const errormsg = error.error.message ? error.error.message : '이미지 생성에 실패했습니다.';
			console.log(error.error);
			displayMsg(errormsg);
			return;
		}
		const result = await response.json();
		const newImageURL = result.data[0].url;
		imageGallery.innerHTML += `<div class="col-12 col-sm-6 col-md-3 mb-4 position-relative">
      <img src="${newImageURL}" class="img-fluid" alt="Generated Image">
    </div>`;
	} catch (error) {
		console.error(error);
		displayMsg('일시적인 문제가 발생했습니다. 잠시후 다시 시도해 주세요.');
	} finally {
		spinner.style.display = 'none';
	}
};

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
