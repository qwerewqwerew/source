const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
addEventListener('load', function () {
	let mouseX = 0;
	let mouseY = 0;

	document.addEventListener('mousemove', function (event) {
		mouseX = event.clientX;
		mouseY = event.clientY;

		gsap.to('.horizontal', 5, { y: mouseY });
		gsap.to('.vertical', 0.5, { x: mouseX });
		gsap.to('.target', 0.5, { x: mouseX, y: mouseY });
		gsap.to('.tag', 0.5, { x: mouseX, y: mouseY });

		tag.innerHTML = `${Math.ceil(mouseX)}px ${Math.ceil(mouseY)}px`;
	});
});
