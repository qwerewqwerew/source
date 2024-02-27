'use strict';

// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

//Scroll function
function horizontalScroll() {
	//Checking whether the sticky element has entered into view or not
	let stickyPosition = sticky.getBoundingClientRect().top;
	if (stickyPosition > 1) {
		return;
	} else {
		let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
		sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
	}
}

//dim bg

const dim = document.querySelectorAll('.dim');
const colors = {
	r: 255,
	g: 255,
	b: 255,
};

dim.forEach((o, i) => {
	o.style.backgroundColor = `rgb(${colors.r - i * 100},${colors.g - (i * 50)},${colors.b-(i*50)})`;
});
