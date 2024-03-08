const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = 1;
let host = location.hostname;

let url = `${host}/${location.pathname}`;

pageChage(window.devicePixelRatio, url);

function pageChage(ratio, uri = url) {
	if (window.devicePixelRatio > 1 || ratio > 1) {
		location.href = uri;
	} else if (window.devicePixelRatio <= 1 || ratio <= 1) {
		location.href = '../';
	}
}
mobile.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 2;
	url = `mobile/index.html`;
	pageChage(ratioEvent, url);
};

pc.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 1;
	url = `/index.html`;
	pageChage(ratioEvent, url);
};
