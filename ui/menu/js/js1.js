const mainmenu = document.querySelectorAll('nav > ul > li'); // 원뎁스 li 할당
const header = document.querySelector('header'); // header 할당
let headerHeight = header.clientHeight;
let subMenu = []; // 투뎁스 ul 할당
header.style.transition = 'all 0.5s';

mainmenu.forEach((menu, idx) => {
	const sub = menu.childNodes[1].clientHeight;
	subMenu.push(sub);
	menu.addEventListener('mouseenter', function () {
		//header 높이할당
		const totalHeaderHeight = headerHeight + subMenu[idx] + 30; // totalHeaderHeight 변수에 header 높이+subMenu 높이 할당

		header.classList.add('active');
		header.style.height = totalHeaderHeight + 'px';
	});

	menu.addEventListener('mouseleave', function () {
		header.classList.remove('active');
		header.style.height = headerHeight + 'px';
	});
});
console.log(headerHeight);
