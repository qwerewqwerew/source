const url = window.location.pathname;
const path = url.split(/[\\/]+/);
const lastParam = path[path.length - 1];
console.log('url',url);
console.log('path',path);
console.log('lastParam',lastParam);

if (path.length > 5) {
	const element = document.querySelector(`main[id="${lastParam}"]`);

	if (element) {
		element.classList.add('coala-toc-added');
	} else {
		console.log('요소를 찾을 수 없습니다.');
	}
}
