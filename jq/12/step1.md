
```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="stylesheet" href="reset.css" />
		<link rel="stylesheet" href="moveIn.css" />
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
		<script src="moveIn.js"></script>
	</head>

	<body>
		<div id="wrap">
			<div id="mainVisual">
				<ul>
					<li class="visual_0"><a href="#">배너이미지</a></li>
					<li class="visual_1"><a href="#">배너이미지</a></li>
					<li class="visual_2"><a href="#">배너이미지</a></li>
				</ul>
			</div>
			<!-- //#mainVisual -->
			<div class="btnImg">
				<img src="img/left.png" alt="left" class="left" height="50" />
				<img src="img/right.png" alt="right" class="right" height="50" />
			</div>
			<ul id="btnList">
				<li class="on"><a href="#">배너1</a></li>
				<li><a href="#">배너2</a></li>
				<li><a href="#">배너3</a></li>
			</ul>
		</div>
	</body>
</html>
```

```css
#mainVisual {width: 100%;height: 500px;display: flex;position: relative; overflow: hidden; }
#mainVisual ul li {position: absolute;width: 100%;height: 100%;background-size: cover; }

#mainVisual ul li a {display: block;text-indent: -99999px; }

#mainVisual ul li.visual_0 {background: #2cb8e0 url(./img/0.png) 50% 0 no-repeat;left: 0; }
#mainVisual ul li.visual_1 {background: #9e2ce0 url(./img/1.png) 50% 0 no-repeat;left: 100%; }
#mainVisual ul li.visual_2 {background: #2ce0c4 url(./img/2.png) 50% 0 no-repeat;left: 200%; }

```

```js
$(() => {
	//슬라이드 요소
	const visual = $('#mainVisual>ul>li');
	let current = 0;

	//일정 시간마다 실행 timer
	//인덱스번호를 카운트
	timer();
	function timer() {
		setInterval(() => {
			let prev = visual.eq(current); //#mainVisual>ul>li[2]
			move(prev, 0, '-100%');
			current++; //0(1,2)
			if (current === visual.length) {
				current = 0;
			}
			let next = visual.eq(current);
			move(next, '100%', 0);
		}, 3000);
	}

	//움직이는 함수 move
	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, 500, 'easeOutCubic');
	}
}); //jQuery

```