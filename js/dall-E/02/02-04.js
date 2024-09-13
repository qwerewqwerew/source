const promptInp = document.querySelector('#prompt');
promptInp.addEventListener('input', () => {
	imageGallery.innerHTML = '';
});

const msg = document.querySelector('#message');
const generateForm = document.querySelector('#generate-form');
const spinner = document.querySelector('#spinner');


function displayImage(x) {
	const imageMarkUp = `<div class="row justify-content-center">
  <div class="col d-flex justify-content-center"><img src="${x}" alt="" class="img-fluid"></div>
</div>`;
	imageGallery.innerHTML = imageMarkUp;
}
