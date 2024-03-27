let text = document.querySelector('.txt1').innerText;
let textsplit = [...text];

const sp = '<span>';
const an = '</span>';
let textArr = textsplit.map((char) => sp + char + an).join('');

document.querySelector('.txt1').innerHTML = textArr;
let tl = gsap.timeline({
	repeat: -1, // 무한 반복
	repeatDelay: 1, // 반복 딜레이
	yoyo: true,
	scrollTrigger: {
		trigger: 'section.sec1',
		markers: true,
		start: 'top 50%',
		end: '+=500',
	},
});

tl.to('.txt1 span', {
	opacity: 0,
	y: 50,
	rotateY: 180,
	duration: 0.5,
	stagger: 0.1,
});
//stagger: 요소의 간격 (각 '.txt1 span' 요소가 애니메이션을 시작할 때 사이의 0.3초)
