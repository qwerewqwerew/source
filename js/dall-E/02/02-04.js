const promptInp = document.querySelector('#prompt');
promptInp.addEventListener('input', () => {
	imageGallery.innerHTML = '';
});

const msg = document.querySelector('#message');
const generateForm = document.querySelector('#generate-form');
const spinner = document.querySelector('#spinner');
