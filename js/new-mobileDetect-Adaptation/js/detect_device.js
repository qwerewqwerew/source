const mobile = document.querySelector('.mobile');
const pc = document.querySelector('.pc');
let ratioEvent = 1;
let host = location.hostname;
let path = location.pathname;

let pcUrl = `//${host}/index.html`;
let mUrl = `//${host}/mobile/index.html`;
console.log(pcUrl);

function pageChage(ratio, uri = pcUrl) {
	if (window.devicePixelRatio > 1 || ratio > 1) {
		location.href = uri;
	} else if (window.devicePixelRatio <= 1 || ratio <= 1) {
		location.href = uri;
	}
}
mobile.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 2;
	pageChage(ratioEvent, murl);
};

pc.onclick = function (e) {
	e.preventDefault();
	ratioEvent = 1;
	pageChage(ratioEvent, pcUrl);
};
