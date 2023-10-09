const gnb = document.querySelectorAll('.gnb>li');
const gnbAnc = document.querySelectorAll('.gnb>li>a');
const sideNav = document.querySelectorAll('.sideNav>li');
const sideNavAnc = document.querySelectorAll('.sideNav>li>a');
let winH = window.innerHeight;
const sections = document.querySelectorAll('.section');

let winSct;

window.addEventListener('scroll', function () {
	winSct = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + winH * 0.9;
	//console.log(winSct);
	sectionAni(winSct);
	sideNavAni();
});

gnbAnc.forEach((el) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		//console.log(el.getAttribute("href"), this);
		document.querySelector(el.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'center' });
	});
});

sideNavAnc.forEach((el) => {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(el.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'center' });
	});
});

function sideNavAni() {
	document.querySelector('.sideNav').style.top = '-20%';
	setTimeout(() => {
		document.querySelector('.sideNav').style.top = parseInt((winH - document.querySelector('.sideNav').clientHeight) / 2) + 'px';
	}, 400);
}

const sectionAni = (n) => {
	sections.forEach((o, i) => {
		let sct = o.offsetTop;
		const delay = o.dataset.delay;
		/* 스티키헤더 */
		n > sections[0].offsetTop ? document.querySelector('nav').classList.add('sticky') : document.querySelector('nav').classList.remove('sticky');
		//console.log(delay);
		if (n > sct) {
			if (delay == undefined) {
				/*console.log(o.hasChildNodes("parallax"));  */
				/* parallax 자식이 있는지 검사 */
				if (o.hasChildNodes('.parallax')) {
					parallaxAni();
				} else {
					o.classList.add('sectionIn');
				}
			} else {
				setTimeout(() => {
					return o.classList.add('sectionIn');
				}, delay);
			}

			gnb.forEach((el) => {
				el.classList.remove('on');
			});
			gnb[i].classList.add('on');
			sideNav.forEach((el) => {
				el.classList.remove('on');
			});
			sideNav[i].classList.add('on');
		} else {
			o.classList.remove('sectionIn');
		}
	});
};

function parallaxAni() {
	const parallax = document.querySelectorAll('.parallax>.pbox');
	parallax.forEach((o) => {
		o.classList.remove('sectionIn');
		const parallaxDelay = o.getAttribute('data-delay');
		setTimeout(() => {
			return o.classList.add('sectionIn');
		}, parallaxDelay);
	});
}
