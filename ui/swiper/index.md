# Swiper 플러그인 강의 자료

## 📱 데모 페이지
실제 구현된 예제들을 확인해보세요: **[데모 페이지 보기](demo/index.html)**

## 1. Swiper란?
Swiper는 모바일 친화적인 터치 슬라이더 라이브러리입니다. 반응형 웹사이트에서 이미지 갤러리, 제품 슬라이더, 콘텐츠 캐러셀 등을 쉽게 구현할 수 있습니다.

## 2. CDN 연결 방법

### CSS 파일 연결
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
```

### JavaScript 파일 연결
```html
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
```

## 3. 기본 HTML 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swiper 기본 예제</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <style>
        .swiper {
            width: 600px;
            height: 300px;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <!-- Swiper -->
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>
</body>
</html>
```

## 4. 주요 HTML 클래스

| 클래스명 | 설명 |
|---------|------|
| `.swiper` | 메인 컨테이너 |
| `.swiper-wrapper` | 슬라이드들을 감싸는 래퍼 |
| `.swiper-slide` | 개별 슬라이드 |
| `.swiper-pagination` | 페이지네이션 (점 표시) |
| `.swiper-button-next` | 다음 버튼 |
| `.swiper-button-prev` | 이전 버튼 |

## 5. 기본 JavaScript 초기화

```javascript
var swiper = new Swiper(".swiper", {
    // 옵션들...
});
```

## 6. 주요 옵션들

### 6.1 기본 슬라이드 옵션
```javascript
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,        // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30,        // 슬라이드 간격
    centeredSlides: true,    // 슬라이드 중앙 정렬
    loop: true,              // 무한 루프
    autoplay: {              // 자동 재생
        delay: 2500,
        disableOnInteraction: false,
    },
});
```

### 6.2 페이지네이션 옵션
```javascript
pagination: {
    el: ".swiper-pagination",
    clickable: true,          // 클릭 가능
    type: "bullets",          // "bullets", "fraction", "progressbar"
    dynamicBullets: true,     // 동적 불릿
},
```

### 6.3 네비게이션 버튼
```javascript
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
```

### 6.4 터치/마우스 옵션
```javascript
touchRatio: 1,               // 터치 감도
mousewheel: true,            // 마우스휠 사용
keyboard: {                  // 키보드 네비게이션
    enabled: true,
},
```

## 7. 반응형 설정

```javascript
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
```

## 8. 이벤트 처리

```javascript
var swiper = new Swiper(".swiper", {
    on: {
        init: function () {
            console.log('swiper 초기화됨');
        },
        slideChange: function () {
            console.log('슬라이드 변경됨: ' + this.activeIndex);
        },
        transitionEnd: function () {
            console.log('전환 완료');
        },
    },
});
```

## 9. 실용 예제들

### 9.1 이미지 갤러리
```html
<div class="swiper gallery">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="image1.jpg" alt="이미지1">
        </div>
        <div class="swiper-slide">
            <img src="image2.jpg" alt="이미지2">
        </div>
        <div class="swiper-slide">
            <img src="image3.jpg" alt="이미지3">
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
```

```javascript
var gallerySwiper = new Swiper(".gallery", {
    effect: "fade",           // 페이드 효과
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});
```

### 9.2 썸네일 갤러리
```html
<!-- 메인 슬라이더 -->
<div class="swiper main-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="main1.jpg"></div>
        <div class="swiper-slide"><img src="main2.jpg"></div>
        <div class="swiper-slide"><img src="main3.jpg"></div>
    </div>
</div>

<!-- 썸네일 슬라이더 -->
<div class="swiper thumb-slider">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="thumb1.jpg"></div>
        <div class="swiper-slide"><img src="thumb2.jpg"></div>
        <div class="swiper-slide"><img src="thumb3.jpg"></div>
    </div>
</div>
```

```javascript
var thumbSwiper = new Swiper(".thumb-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var mainSwiper = new Swiper(".main-slider", {
    spaceBetween: 10,
    thumbs: {
        swiper: thumbSwiper,
    },
});
```

### 9.3 수직 슬라이더
```javascript
var verticalSwiper = new Swiper(".vertical-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
```

## 10. CSS 커스터마이징

### 10.1 페이지네이션 스타일
```css
.swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
}

.swiper-pagination-bullet-active {
    background: #007aff;
    opacity: 1;
}
```

### 10.2 네비게이션 버튼 스타일
```css
.swiper-button-next,
.swiper-button-prev {
    color: #007aff;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 20px;
}
```

## 11. 유용한 메서드들

```javascript
// 특정 슬라이드로 이동
swiper.slideTo(2);

// 다음/이전 슬라이드
swiper.slideNext();
swiper.slidePrev();

// 자동재생 시작/정지
swiper.autoplay.start();
swiper.autoplay.stop();

// 슬라이더 파괴
swiper.destroy();

// 슬라이더 업데이트 (동적 콘텐츠 변경 시)
swiper.update();
```

## 12. 주의사항

1. **HTML 구조**: `.swiper > .swiper-wrapper > .swiper-slide` 구조를 정확히 지켜야 합니다.
2. **CSS 크기**: `.swiper` 컨테이너에 반드시 width와 height를 지정해야 합니다.
3. **반응형**: `breakpoints` 옵션을 활용해 다양한 화면 크기에 대응하세요.
4. **성능**: 많은 슬라이드가 있을 때는 `lazy loading`을 고려하세요.

## 13. 실습 예제

다음은 완전한 실습용 HTML 파일입니다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swiper 실습</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .swiper { width: 100%; max-width: 800px; height: 400px; margin: 20px auto; }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>Swiper 플러그인 실습</h1>

    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">슬라이드 1</div>
            <div class="swiper-slide">슬라이드 2</div>
            <div class="swiper-slide">슬라이드 3</div>
            <div class="swiper-slide">슬라이드 4</div>
            <div class="swiper-slide">슬라이드 5</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    </script>
</body>
</html>
```

이 강의 자료를 통해 Swiper 플러그인의 기본 사용법부터 고급 기능까지 학습할 수 있습니다!