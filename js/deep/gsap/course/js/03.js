// 01. 한개 섹션 고정시키기
fn2();
function fn1() {
	const panel = document.querySelector('.sec5');

	ScrollTrigger.create({
		trigger: panel,
		start: 'top top',
		pin: true,
		pinSpacing: false,
	});
}
// 02. 여러개 섹션 고정시키기
function fn2() {
	gsap.utils.toArray('.box').forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: 'top top',
			pin: true,
			pinSpacing: false,
		});
	});
}
// 03. 스냅 고정
function fn3() {
	let panels = gsap.utils.toArray('.box');
	let tops = panels.map((panel) => ScrollTrigger.create({ trigger: panel, start: 'top top' }));

	panels.forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
			pin: true,
			pinSpacing: false,
		});
	});

	ScrollTrigger.create({
		snap: {
			snapTo: (progress, self) => {
				let panelStarts = tops.map((st) => st.start),
					snapScroll = gsap.utils.snap(panelStarts, self.scroll());
				return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
			},
			duration: 0.5,
		},
	});
}
