const pics = document.getElementsByClassName('pic'); // .pic인 요소들을 가져와 pics 라는 변수에 저장. querySelectorAll(".pic")도 가능
const lightbox = document.getElementById('lightbox'); // 라이트 박스. querySelector("#lightbox")도 가능
const lightboxImage = document.getElementById('lightboxImage'); // 라이트 박스 안의 이미지. querySelector("#lightboxImage")도 가능

for (i = 0; i < pics.length; i++) {
	pics[i].addEventListener('click', showLightbox);
}

async function showLightbox() {
	const bigLocation = this.getAttribute('data-src'); // bigLocation = this.data-src; 도 가능.
	try {
		const response = await fetch(bigLocation);
    console.log(response);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const htmlContent = await response.text();
		lightboxImage.innerHTML = htmlContent;
		lightbox.style.display = 'block'; // 라이트박스 이미지를 화면에 표시
		document.querySelector('html').style.overflow = 'hidden';
	} catch (error) {
		console.log(error);
	}
}

lightbox.onclick = function () {
	//click 이벤트가 발생했을 때 실행할 함수 선언
	lightbox.style.display = 'none'; // lightbox 요소를 화면에서 감춤
	document.querySelector('html').style.overflow = 'visible';
};
