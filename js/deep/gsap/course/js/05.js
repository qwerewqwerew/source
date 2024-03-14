let text = document.querySelector('.txt1').innerText;
let textsplit = [...text];

const sp = '<span>';
const an = '</span>';
let textArr = textsplit.map((char) => sp + char + an).join('');

document.querySelector('.txt1').innerHTML = textArr;
document.querySelector('.txt2').innerHTML = textArr;
let tl = gsap.timeline({
	repeat: -1, // 무한 반복
	repeatDelay: 1, // 반복 딜레이
  yoyo:true,
});

tl.from('.txt2 span', {
	opacity: 0,
	y: 100,
	duration: 1,
	stagger: 0.5,

});
 gsap.utils.toArray('.txt1 span').forEach((item) => {
	gsap.to(item, { opacity: 1, duration: 1, y: -100, ease: 'elastic.out(1, 0.3)', stagger: 0.5 });
});
