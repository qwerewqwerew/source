const mainmenu = document.querySelectorAll('nav > ul > li'); // 원뎁스 li 할당
const header = document.querySelector('header'); // header 할당

mainmenu.forEach((menu) => {
	const subMenu = menu.querySelector('ul'); // 투뎁스 ul 할당

	menu.addEventListener('mouseenter', function () {
		const headerHeight = header.clientHeight; //header 높이할당
		const subMenuHeight = subMenu.clientHeight; // subMenu 높이 할당
		const totalHeaderHeight = headerHeight + subMenuHeight + 30; // totalHeaderHeight 변수에 header 높이+subMenu 높이 할당

		header.classList.add('active');
		header.style.transition ="all 0.5s";
		header.style.height = totalHeaderHeight + 'px';
	});

	menu.addEventListener('mouseleave', function () {
		header.classList.remove('active');
    header.style.transition = 'all 0.5s';
		header.style.height = 'auto';
	});
});
