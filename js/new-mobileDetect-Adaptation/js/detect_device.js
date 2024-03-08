const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = window.devicePixelRatio > 1 ? 2 : 1;
let host = location.hostname;
let path = location.pathname;

let pcUrl = `//${host}/index.html`;
let mUrl = `//${host}/mobile/index.html`;

if (ratioEvent > 1) {
	location.href = mUrl;
} else {
	location.href = pcUrl;
}

function pageChage(uri) {
	location.href = uri;
}

mobile.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(mUrl);
});

pc.addEventListener('click', function (e) {
	e.preventDefault();
	pageChage(pcUrl);
});
