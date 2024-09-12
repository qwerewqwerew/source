// @ts-nocheck
const keyModal = document.querySelector('#Keymodal');
keyModal.addEventListener('shown.bs.modal', (e) => {
	const saveBtn = document.querySelector('.btn-primary');
	const keyInput = document.querySelector('#apikey');
	saveBtn.addEventListener('click', (e) => {
		const keyVal = keyInput.value;
		localStorage.setItem('API_Key', keyVal);
		keyModal.hide();
	});
});
