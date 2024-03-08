const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = 0;
let host = location.hostname;

let url = `${host}/`;

function pageChage(ratio, url = url) {
	if (window.devicePixelRatio > 1 || ratio > 1) {
		location.href = url;
	} else if (window.devicePixelRatio <= 1 || ratio <= 1) {
		location.href = '../';
	}
}
mobile.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 2;
	url = `${host}/mobile`;
	pageChage(ratioEvent, url);
};

pc.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 1;
	url = `${host}/`;
	pageChage(ratioEvent, url);
};
