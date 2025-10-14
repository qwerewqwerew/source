let links = gsap.utils.toArray('nav ul li a');

links.forEach((link) => {
	let element = document.querySelector(link.getAttribute('href'));
	let linkST = ScrollTrigger.create({
		trigger: element,
		start: 'top top',
	});

	ScrollTrigger.create({
		trigger: element,
		start: 'top center',
		end: 'bottom center',
		onToggle: (self) => setActive(link),
	});

	link.addEventListener('click', (e) => {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: 'auto' });
	});
});

function setActive(link) {
	links.forEach((el) => el.classList.remove('active'));
	link.classList.add('active');
}

ScrollTrigger.create({
	start: 'top -80',
	end: 99999,
	markers:true,
	toggleClass: {
		className: 'active',
		targets: 'nav',
	},
});
