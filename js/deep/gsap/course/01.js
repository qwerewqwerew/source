
const box1 = document.querySelector('.sec1 .img');
const box2 = document.querySelector('.sec2 .img');
const box3 = document.querySelector('.sec3 .img');
const box4 = document.querySelector('.sec4 .img');
const box5 = document.querySelector('.sec5 .img');
const box6 = document.querySelector('.sec6 .img');
const box7 = document.querySelector('.sec7 .img');
const box8 = document.querySelector('.sec8 .img');
const box9 = document.querySelector('.sec9 .img');

// 01
gsap.to(box1, {
	duration: 2,
	x: 500,
	borderRadius: 100,
	rotation: 360,
});

// 02 : trigger
gsap.to(box2, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,
	scrollTrigger: {
		trigger: box2,
	},
});

// 03 : toggleActions
gsap.to(box3, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,
	scrollTrigger: {
		trigger: box3,
		toggleActions: 'play none reverse none',
	},
});

// 04 : start, end
gsap.to(box4, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,

	scrollTrigger: {
		trigger: box4,
		start: 'top 50%',
		end: 'bottom 20%',
		toggleActions: 'play none reverse none',
		markers: false,
	},
});

// 05 : scrub
gsap.to(box5, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,

	scrollTrigger: {
		trigger: box5,
		start: 'top 50%',
		end: 'bottom 20%',
		scrub: true, //true, 1, 2...
		markers: false,
	},
});

// 06 : pin
gsap.to(box6, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,

	scrollTrigger: {
		trigger: box6,
		start: 'top 50%',
		end: 'bottom 200px',
		scrub: true,
		pin: true,
		markers: false,
	},
});

// 07 : toggleClass
gsap.to(box7, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,
	scrollTrigger: {
		trigger: box7,
		start: 'top center',
		end: 'bottom 20%',
		scrub: true,
		toggleClass: 'active',
		markers: false,
		class: 'box7',
	},
});

// 08 : callback
gsap.to(box8, {
	duration: 2,
	x: 500,
	rotation: 360,
	borderRadius: 100,

	scrollTrigger: {
		trigger: box8,
		start: 'top center',
		end: 'bottom 20%',
		scrub: true,
		markers: true,
		// onEnter: () => {console.log("onEnter")},
		// onLeave: () => {console.log("onLeave")},
		// onEnterBack: () => {console.log("onEnterBack")},
		// onLeaveBack: () => {console.log("onLeaveBack")},
		onUpdate: (self) => {
			console.log('onUpdate', self.progress.toFixed(3));
		},
		onToggle: (self) => {
			console.log('onToggle', self.isActive);
		},
	},
});
