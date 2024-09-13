// @ts-nocheck
const keyModalEl = document.querySelector('#Keymodal');
//부트스트랩 모달 인스턴스로 keyModalEl 등록
const keyModal = new bootstrap.Modal(keyModalEl);
//keyModalEl에 이벤트핸들러 작성. 이벤트는 모달인스턴스의 것을 사용
keyModalEl.addEventListener('shown.bs.modal', () => {
	const saveBtn = document.querySelector('.btn-primary');
	const keyInput = document.querySelector('#apikey');
	saveBtn.addEventListener('click', () => {
		const keyVal = keyInput.value;
		localStorage.setItem('API_KEY', keyVal);
		keyModal.hide();
	});
});
