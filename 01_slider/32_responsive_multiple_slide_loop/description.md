# 구조

## HTML

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="stylesheet" href="multi.css" />
	</head>

	<body>
		<div class="container">
			<div class="slide_wrapper">
				<ul class="slides">
					<li>슬라이드01</li>
					<li>슬라이드02</li>
					<li>슬라이드03</li>
					<li>슬라이드04</li>
					<li>슬라이드05</li>
				</ul>
				<div class="controls"><span class="prev">prev</span><span class="next">next</span></div>
				<div class="pager"></div>
			</div>
		</div>
		<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
		<script src="multi.js"></script>
	</body>
</html>
```

## CSS

```css
* {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
.container {
	width: 660px;
	margin: 100px auto;
	overflow: hidden;
}

.slide_wrapper {
	position: relative;
	width: 660px;
	overflow: hidden;
	padding-top: 200px;
	margin: auto;
}
.slides {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 200px;
}
.slides li {
	position: absolute;
	width: 200px;
	height: 200px;
	background: #ccc;
}
.controls {
	text-align: center;
	margin-top: 50px;
}
.controls span {
	background: #be8856;
	color: #fff;
	padding: 10px 20px;
	margin: 0 10px;
	display: inline-block;
}

.pager {
	list-style: none;
	display: flex;
	justify-content: space-between;
	font-size: 2em;
}
```

# 변수초기화

## JS

```js
const slideWrapper = $('.slide_wrapper'); //최상위 부모
const slides = slideWrapper.find('.slides'); // 이동할요소 (li의 부모 ul)
const slide = slides.find('li'); // li 슬라이드
const slideCount = slide.length; //슬라이드의 총 갯수
const slideWidth = slide.width(); //li 각각 너비
const slideGap = 30; // li간격
let currentIdx = 0; //초기값
let moveAmt; //slideWidth+slideGap 이동거리
let newSlides; //새 슬라이드 목록을 저장할 변수
```

# 복사본 생성

## cloneSlide

cloneSlide()

```js #
cloneSlide();
function cloneSlide() {
	slides.append(slide.clone().addClass('clone'));
	slides.prepend(slide.clone().addClass('clone'));
}
```

# 슬라이드 배치

## slideLayout

```js
slideLayout(slideWidth, slideGap);
function slideLayout(sw, sm) {
	//li 가로배치
	newSlides = $('.slide_wrapper li');
	moveAmt = sw + sm;
	newSlides.each(function (idx) {
		$(this).css({ left: moveAmt * idx + 'px', width: sw + 'px' });
	});
	//ul 중앙정렬
	const ulMoveAmt = -moveAmt * slideCount;
	slides.css({ transform: `translateX(${ulMoveAmt}px)` });
}
```

# 이동함수

## MoveSlide

```js
//이동함수
function MoveSlide() {
	currentIdx++;
	if (currentIdx > slideCount) {
		slides.css('left', 0); //애니메이트 효과를 적용하지 않고 왼쪽으로 이동
		currentIdx = 0;
	}
	console.log(currentIdx);
	console.log(moveAmt);
	slides.stop().animate({ left: moveAmt * -currentIdx }, 500);
}

setInterval(() => {
	MoveSlide();
}, 650);
```

moveAmt 변수는 slideLayout() 함수 내에서 계산된 값으로, 해당 함수의 스코프 내에서 선언되었습니다. 그러나 moveAmt 변수는 전역 스코프에 선언되지 않았으므로 다른 함수에서 사용할 수 없습니다.

그러나 코드를 살펴보면 MoveSlide() 함수가 호출될 때마다 moveAmt 값을 사용하고 있습니다. 이는 slideLayout() 함수가 호출된 이후에 MoveSlide() 함수가 실행되기 때문입니다. 따라서, 실제로 실행해보면 MoveSlide() 함수에서 정상적으로 moveAmt 값을 사용할 수 있을 것입니다.

즉, 코드의 흐름은 다음과 같습니다:

초기화 단계: slideLayout(slideWidth, slideGap)이 호출됩니다. 이때, slideLayout() 내부에서는 moveAmt 값이 계산됩니다. 슬라이드 이동: 사용자가 버튼을 클릭하거나 인디케이터를 선택하여 슬라이드를 이동시키면, 해당 동작에 의해 호출된 MoveSlide() 함수 내부에서는 애니메이션을 통해 슬라이드를 이동합니다. 여기서도 정상적으로 현재의 moveAmt 값을 사용할 수 있습니다. 따라서, 코드 상의 순서와 호출 시점에 따라 올바른 값인 moveAmt를 사용할 수 있게 됩니다.

# 이벤트에 따라 움직임 제어

# MoveSlide 수정

animate 메서드의 duration 다음 인자로 함수를 작성하면 callback 함수가 실행된다.

```js


```
