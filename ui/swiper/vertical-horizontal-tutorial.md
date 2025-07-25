# 🎢 Swiper 수직/수평 연동 슬라이드 완벽 가이드

## 📚 이 강의에서 배울 내용

### 🎯 핵심 학습 목표
1. **Swiper 라이브러리 기초 완전 정복**
   - Swiper란 무엇인가?
   - 언제, 왜 사용하는가?
   - 기본 설정부터 고급 옵션까지

2. **수직/수평 슬라이더 연동의 비밀**
   - 두 개의 다른 방향 슬라이더를 하나처럼 동작시키는 방법
   - 자연스러운 전환과 사용자 경험 설계
   - 복잡한 인터랙션을 간단하게 구현하기

3. **실전 JavaScript 이벤트 처리**
   - 이벤트가 발생하는 순간을 정확히 포착하는 방법
   - 여러 이벤트를 조합하여 복잡한 동작 만들기
   - 버그 없는 안정적인 코드 작성법

## 🚀 완성 후 얻게 되는 결과물

우리가 만들 슬라이드는 다음과 같이 동작합니다:

### 📱 기본 동작 시나리오
```
섹션 1 ↓ (세로 스크롤)
섹션 2 ↓ (세로 스크롤)
섹션 3 ↓ (세로 스크롤)
섹션 4 (수평 슬라이드) ← → (가로 스크롤만 가능)
섹션 5 ↓ (세로 스크롤)
```

### 🎭 특별한 동작 (핵심 기능)
**상황 1: 섹션 5에서 뒤로 이동할 때**
```
섹션 5 → 섹션 4의 마지막 슬라이드(slide4)로 진입
slide4 → slide3 → slide2 → slide1 (순차적으로 가로 이동)
slide1에서 더 뒤로 가면 → 섹션 3으로 점프!
```

**상황 2: 일반적인 진입**
```
섹션 3 → 섹션 4의 첫 번째 슬라이드(slide1)로 진입
slide1 → slide2 → slide3 → slide4 (순차적으로 가로 이동)
slide4에서 더 앞으로 가면 → 섹션 5로 이동
```

### 💡 왜 이렇게 복잡하게 만드나요?
- **사용자 경험**: 자연스러운 네비게이션 흐름 제공
- **스토리텔링**: 콘텐츠를 순서대로 보여주고 싶을 때
- **포트폴리오**: 작품을 효과적으로 전시하고 싶을 때
- **제품 소개**: 단계별로 기능을 설명하고 싶을 때

---

## � 프로젝트 준비하기

### 📋 필요한 사전 지식
- **HTML 기초**: `<div>`, `<section>` 태그 이해
- **CSS 기초**: 클래스 선택자, 기본 스타일링
- **JavaScript 기초**: 변수, 함수, 이벤트 개념
- **웹 브라우저**: 개발자 도구 사용법

### 🛠️ 개발 환경 세팅
1. **텍스트 에디터**: VS Code, Sublime Text 등
2. **웹 브라우저**: Chrome, Firefox (개발자 도구 포함)
3. **인터넷 연결**: Swiper CDN 사용을 위해 필요

### 📦 사용할 라이브러리
- **Swiper.js v11**: 현대적이고 성능이 뛰어난 슬라이더 라이브러리
- **CDN 방식**: 별도 다운로드 없이 링크만으로 사용 가능

---

## �📖 단계별 완전 정복

### 🏗️ 1단계: HTML 구조의 완전한 이해

#### 먼저 큰 그림을 보자!
우리가 만들 구조는 **"상자 안의 상자"** 개념입니다:

```
큰 세로 상자 (verticals)
├── 섹션 1 (세로 슬라이드)
├── 섹션 2 (세로 슬라이드)
├── 섹션 3 (세로 슬라이드)
├── 섹션 4 (가로 상자가 들어있는 세로 슬라이드)
│   └── 작은 가로 상자 (horizontals)
│       ├── slide1 (가로 슬라이드)
│       ├── slide2 (가로 슬라이드)
│       ├── slide3 (가로 슬라이드)
│       └── slide4 (가로 슬라이드)
└── 섹션 5 (세로 슬라이드)
```

#### 완전한 HTML 코드와 상세 설명

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8" />
    <title>Swiper 수직/수평 연동 데모</title>
    <!-- 반응형 웹을 위한 뷰포트 설정 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <!-- Swiper CSS 파일 - 슬라이더의 기본 스타일과 애니메이션 포함 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
</head>
<body>
    <!-- 🔥 메인 세로 슬라이더 컨테이너 -->
    <div class="swiper verticals">
        <div class="swiper-wrapper">

            <!-- ✨ 일반 세로 슬라이드들 (섹션 1, 2, 3) -->
            <section class="vh100 swiper-slide">
                <h1>섹션 1</h1>
                <p>첫 번째 섹션입니다. 아래로 스크롤해보세요!</p>
            </section>

            <section class="vh100 swiper-slide">
                <h1>섹션 2</h1>
                <p>두 번째 섹션입니다. 계속 아래로!</p>
            </section>

            <section class="vh100 swiper-slide">
                <h1>섹션 3</h1>
                <p>세 번째 섹션입니다. 다음은 특별한 가로 슬라이드!</p>
            </section>

            <!-- 🎢 특별한 섹션 4: 가로 슬라이더가 중첩된 세로 슬라이드 -->
            <section class="swiper horizontals swiper-slide">
                <!-- 가로 슬라이더의 래퍼 -->
                <div class="swiper-wrapper">
                    <!-- 각 가로 슬라이드: data-hash로 URL 네비게이션 가능 -->
                    <div class="swiper-slide" data-hash="slide1">
                        <h2>가로 슬라이드 1</h2>
                        <p>왼쪽/오른쪽 또는 마우스 휠로 이동하세요!</p>
                    </div>
                    <div class="swiper-slide" data-hash="slide2">
                        <h2>가로 슬라이드 2</h2>
                        <p>URL이 변경되는 것을 확인해보세요!</p>
                    </div>
                    <div class="swiper-slide" data-hash="slide3">
                        <h2>가로 슬라이드 3</h2>
                        <p>거의 다 왔습니다!</p>
                    </div>
                    <div class="swiper-slide" data-hash="slide4">
                        <h2>가로 슬라이드 4</h2>
                        <p>마지막 슬라이드! 더 오른쪽으로 가면 섹션 5로!</p>
                    </div>
                </div>
                <!-- 가로 슬라이더 전용 페이지네이션 (동그라미 점들) -->
                <div class="swiper-pagination"></div>
            </section>

            <!-- ✨ 마지막 세로 슬라이드 (섹션 5) -->
            <section class="vh100 swiper-slide">
                <h1>섹션 5</h1>
                <p>마지막 섹션입니다. 위로 올라가면 특별한 동작을 볼 수 있어요!</p>
            </section>

        </div>
    </div>

    <!-- Swiper JavaScript 파일 - 슬라이더 동작을 위한 핵심 코드 -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</body>
</html>
```

#### � HTML 구조 심화 분석

**1. DOCTYPE과 기본 설정**
```html
<!DOCTYPE html>  <!-- HTML5 문서임을 브라우저에게 알림 -->
<html lang="ko">  <!-- 한국어 페이지임을 명시 (접근성, SEO 향상) -->
```

**2. Head 섹션의 핵심 요소들**
```html
<!-- 문자 인코딩: 한글 깨짐 방지 -->
<meta charset="utf-8" />

<!-- 반응형 웹: 모바일에서도 제대로 표시 -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    ↑ 기기 너비에 맞춤    ↑ 기본 확대율    ↑ 최소 확대    ↑ 최대 확대

<!-- Swiper CSS: 슬라이더의 모든 스타일과 애니메이션 포함 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
```

**3. 중첩 구조의 이해**
```html
<!-- 레벨 1: 메인 세로 컨테이너 -->
<div class="swiper verticals">
    <!-- 레벨 2: 세로 슬라이드들의 래퍼 -->
    <div class="swiper-wrapper">

        <!-- 레벨 3: 개별 세로 슬라이드 -->
        <section class="swiper-slide">...</section>

        <!-- 레벨 3: 특별한 세로 슬라이드 (가로 슬라이더 포함) -->
        <section class="swiper horizontals swiper-slide">
            <!-- 레벨 4: 가로 슬라이드들의 래퍼 -->
            <div class="swiper-wrapper">
                <!-- 레벨 5: 개별 가로 슬라이드 -->
                <div class="swiper-slide">...</div>
            </div>
        </section>

    </div>
</div>
```

**4. 클래스명의 의미와 역할**

| 클래스명 | 역할 | 필수 여부 |
|---------|------|----------|
| `swiper` | Swiper 라이브러리가 인식하는 메인 컨테이너 | ✅ 필수 |
| `verticals` | 우리가 정한 세로 슬라이더 식별자 | ✅ 식별용 |
| `horizontals` | 우리가 정한 가로 슬라이더 식별자 | ✅ 식별용 |
| `swiper-wrapper` | 슬라이드들을 감싸는 래퍼 (Swiper 내부에서 사용) | ✅ 필수 |
| `swiper-slide` | 개별 슬라이드임을 표시 | ✅ 필수 |
| `swiper-pagination` | 페이지네이션 (동그라미 점들) 컨테이너 | ❌ 선택사항 |
| `vh100` | 우리가 정한 전체 화면 높이 스타일 클래스 | ❌ 커스텀 |

**5. data-hash 속성의 깊이 있는 이해**

```html
<div class="swiper-slide" data-hash="slide1">Slide 1</div>
```

**동작 원리:**
1. **URL 자동 업데이트**: 슬라이드 이동 시 주소창이 `#slide1`, `#slide2`로 변경
2. **직접 접근 가능**: `example.com/#slide3` 입력 시 바로 해당 슬라이드로 이동
3. **브라우저 히스토리**: 뒤로가기/앞으로가기 버튼으로 슬라이드 이동 가능
4. **북마크 지원**: 특정 슬라이드를 북마크하여 나중에 바로 접근 가능

**실제 예시:**
```
처음 페이지 로드: example.com
slide1으로 이동: example.com/#slide1
slide2로 이동: example.com/#slide2
뒤로가기 클릭: example.com/#slide1 (자동으로 slide1으로 이동)
```

---

### 🎨 2단계: CSS 스타일링의 완전한 이해

#### 왜 CSS가 필요한가요?
Swiper 라이브러리는 기본적인 슬라이더 동작만 제공합니다. 우리가 원하는 **전체 화면 슬라이드**, **중앙 정렬**, **반응형 디자인**을 위해서는 추가적인 CSS 스타일이 필요합니다.

#### 완전한 CSS 코드와 단계별 설명

```css
/* 🌍 1. 전체 페이지 기본 설정 */
html, body {
    position: relative;     /* 자식 요소의 절대 위치 기준점 설정 */
    height: 100%;          /* 브라우저 전체 높이 사용 */
    margin: 0;             /* 기본 여백 제거 */
    padding: 0;            /* 기본 패딩 제거 */
    overflow: hidden;      /* 스크롤바 숨김 (Swiper가 스크롤 제어) */
}

/* 🖼️ 2. 세로 섹션 스타일 (전체 화면 높이) */
section.vh100 {
    width: 100%;           /* 화면 전체 너비 */
    height: 100vh;         /* 뷰포트 높이 100% = 브라우저 창 높이와 같음 */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* 예쁜 그라데이션 */
    position: relative;    /* 내부 요소 위치 기준점 */
    overflow: hidden;      /* 내용이 넘치면 숨김 */
}

/* 📱 3. Swiper 컨테이너 기본 설정 */
.swiper {
    width: 100%;           /* 부모 요소의 전체 너비 */
    height: 100%;          /* 부모 요소의 전체 높이 */
    position: relative;    /* 페이지네이션 등의 위치 기준점 */
}

/* 🎯 4. 개별 슬라이드 스타일 */
.swiper-slide {
    /* 텍스트 정렬 */
    text-align: center;
    font-size: 18px;
    color: white;
    font-weight: bold;

    /* Flexbox로 중앙 정렬 */
    display: flex;              /* 플렉스 컨테이너로 설정 */
    justify-content: center;    /* 가로 중앙 정렬 */
    align-items: center;        /* 세로 중앙 정렬 */
    flex-direction: column;     /* 세로 방향으로 요소 배치 */

    /* 기본 스타일 */
    padding: 20px;             /* 내부 여백 */
    box-sizing: border-box;    /* 패딩 포함한 크기 계산 */
}

/* 🔴 5. 가로 슬라이드 전용 스타일 */
.horizontals .swiper-slide {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);  /* 가로 슬라이드는 다른 색상 */
    border-radius: 10px;       /* 모서리 둥글게 */
    margin: 10px;              /* 슬라이드 간 간격 */
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);  /* 그림자 효과 */
}

/* 📍 6. 페이지네이션 (동그라미 점들) 스타일 */
.swiper-pagination-bullet {
    background: white;         /* 점 색상 */
    opacity: 0.5;             /* 비활성 투명도 */
    width: 12px;              /* 점 크기 */
    height: 12px;
    margin: 0 5px;            /* 점 사이 간격 */
}

.swiper-pagination-bullet-active {
    opacity: 1;               /* 활성 점은 완전 불투명 */
    background: #ff6b6b;      /* 활성 점 색상 */
    transform: scale(1.2);    /* 활성 점은 조금 더 크게 */
}

/* 📱 7. 반응형 디자인 (모바일 대응) */
@media (max-width: 768px) {
    .swiper-slide {
        font-size: 16px;      /* 모바일에서는 글씨 작게 */
        padding: 15px;        /* 패딩도 줄임 */
    }

    .horizontals .swiper-slide {
        margin: 5px;          /* 모바일에서는 간격 줄임 */
    }
}

/* 🎨 8. 개별 섹션 색상 구분 */
.swiper-slide:nth-child(1) { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.swiper-slide:nth-child(2) { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.swiper-slide:nth-child(3) { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.swiper-slide:nth-child(5) { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
```

#### 🔍 CSS 속성 심화 분석

**1. `height: 100%` vs `height: 100vh`의 차이점**

```css
/* 방법 1: 퍼센트 사용 */
height: 100%;  /* 부모 요소 높이의 100% */

/* 방법 2: 뷰포트 단위 사용 */
height: 100vh; /* 뷰포트(브라우저 창) 높이의 100% */
```

**언제 어떤 것을 사용하나요?**
- **`100%`**: 부모 요소가 명확한 높이를 가질 때
- **`100vh`**: 브라우저 창 전체 높이를 원할 때 (더 확실함)

**2. Flexbox 중앙 정렬의 마법**

```css
display: flex;              /* 플렉스 컨테이너 활성화 */
justify-content: center;    /* 가로축(main axis) 중앙 정렬 */
align-items: center;        /* 세로축(cross axis) 중앙 정렬 */
flex-direction: column;     /* 세로 방향으로 배치 */
```

**다른 정렬 방법과의 비교:**
```css
/* 구식 방법 (복잡함) */
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

/* 현대적 방법 (간단함) */
display: flex;
justify-content: center;
align-items: center;
```

**3. `box-sizing: border-box`의 중요성**

```css
/* 기본값 (content-box): 패딩과 보더가 크기에 추가됨 */
width: 100px;
padding: 10px;
/* 실제 크기: 120px (100 + 10 + 10) */

/* border-box: 패딩과 보더가 크기에 포함됨 */
box-sizing: border-box;
width: 100px;
padding: 10px;
/* 실제 크기: 100px (패딩 포함) */
```

**4. 반응형 디자인의 핵심**

```css
/* 태블릿 이하 */
@media (max-width: 768px) {
    .swiper-slide { font-size: 16px; }
}

/* 모바일 */
@media (max-width: 480px) {
    .swiper-slide { font-size: 14px; }
}
```

#### 🎨 스타일 커스터마이징 팁

**1. 배경 그라데이션 만들기**
```css
/* 좌우 그라데이션 */
background: linear-gradient(to right, #ff7e5f, #feb47b);

/* 대각선 그라데이션 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 방사형 그라데이션 */
background: radial-gradient(circle, #ff7e5f, #feb47b);
```

**2. 그림자 효과 추가**
```css
/* 부드러운 그림자 */
box-shadow: 0 5px 15px rgba(0,0,0,0.1);

/* 강한 그림자 */
box-shadow: 0 10px 30px rgba(0,0,0,0.3);

/* 발광 효과 */
box-shadow: 0 0 20px rgba(255,255,255,0.5);
```

**3. 애니메이션 효과**
```css
.swiper-slide {
    transition: all 0.3s ease;
}

.swiper-slide:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}
```

#### 🚨 자주 하는 실수와 해결법

**실수 1: 슬라이드가 전체 화면을 차지하지 않음**
```css
/* ❌ 잘못된 방법 */
.swiper-slide {
    height: 500px;  /* 고정 높이 */
}

/* ✅ 올바른 방법 */
.swiper-slide {
    height: 100vh;  /* 뷰포트 전체 높이 */
}
```

**실수 2: 콘텐츠가 중앙에 정렬되지 않음**
```css
/* ❌ 잘못된 방법 */
.swiper-slide {
    text-align: center;  /* 텍스트만 중앙 정렬됨 */
}

/* ✅ 올바른 방법 */
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**실수 3: 모바일에서 레이아웃이 깨짐**
```css
/* ❌ 반응형 고려 안함 */
.swiper-slide {
    font-size: 24px;
    padding: 50px;
}

/* ✅ 반응형 적용 */
.swiper-slide {
    font-size: 18px;
    padding: 20px;
}

@media (max-width: 768px) {
    .swiper-slide {
        font-size: 16px;
        padding: 15px;
    }
}
```

#### 💡 CSS 최적화 팁

**1. CSS 변수 활용**
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --slide-padding: 20px;
    --border-radius: 10px;
}

.swiper-slide {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: var(--slide-padding);
    border-radius: var(--border-radius);
}
```

**2. 성능 최적화**
```css
.swiper-slide {
    /* GPU 가속 활용 */
    transform: translateZ(0);
    will-change: transform;

    /* 불필요한 렌더링 방지 */
    backface-visibility: hidden;
}
```

---

### 🧩 3단계: JavaScript 기초 설정과 디버깅 준비

#### 왜 이 단계가 중요한가요?
복잡한 슬라이더 연동을 구현하기 전에, **변수 관리**와 **디버깅 환경**을 먼저 준비해야 합니다. 이는 마치 요리하기 전에 재료를 준비하는 것과 같습니다!

#### 🎯 이 단계에서 배울 내용
1. **전역 변수의 올바른 사용법**
2. **상수(const)를 활용한 매직 넘버 제거**
3. **console.log를 활용한 실시간 디버깅**
4. **Swiper 객체의 속성과 메서드 탐구**

---

#### 📦 3-1: 기본 변수와 상수 선언

```javascript
// 🌐 전역 변수 선언 (두 스와이퍼가 서로 소통하기 위해 필요)
let verticalSwiper;    // 세로 슬라이더 객체를 저장할 변수
let horizontalSwiper;  // 가로 슬라이더 객체를 저장할 변수

// 🔢 상수 정의 (매직 넘버 방지 - 숫자의 의미를 명확하게!)
const HORIZONTAL_SECTION_INDEX = 3;  // 수평 슬라이드 섹션의 위치 (4번째 = 인덱스 3)
const SECTION_5_INDEX = 4;           // 섹션 5의 위치 (5번째 = 인덱스 4)
const SECTION_3_INDEX = 2;           // 섹션 3의 위치 (3번째 = 인덱스 2)
const LAST_HORIZONTAL_SLIDE = 3;     // 마지막 가로 슬라이드 인덱스 (4번째 = 인덱스 3)

// 🎛️ 타이밍 관련 상수 (애니메이션 지연 시간)
const VERTICAL_ENABLE_DELAY = 300;   // 수직 스크롤 활성화 지연 시간 (ms)
const HORIZONTAL_RESET_DELAY = 50;   // 수평 슬라이더 리셋 지연 시간 (ms)
const HORIZONTAL_SET_DELAY = 100;    // 수평 슬라이더 설정 지연 시간 (ms)
const UPDATE_DELAY = 100;            // 업데이트 지연 시간 (ms)
```

#### 🔍 변수와 상수 심화 분석

**1. `let` vs `const` vs `var` - 언제 무엇을 사용할까?**

```javascript
// ❌ 구식 방법 (사용 금지!)
var verticalSwiper;  // 함수 스코프, 호이스팅 문제 발생 가능

// ✅ 현대적 방법
let verticalSwiper;         // 블록 스코프, 재할당 가능 (객체 저장용)
const SECTION_INDEX = 3;    // 블록 스코프, 재할당 불가 (상수값)
```

**2. 매직 넘버가 나쁜 이유와 상수의 장점**

```javascript
// ❌ 매직 넘버 사용 (코드 이해 어려움)
if (this.activeIndex === 3) {
    // 3이 뭘 의미하는지 알기 어려움
}

// ✅ 상수 사용 (코드 의미 명확)
if (this.activeIndex === HORIZONTAL_SECTION_INDEX) {
    // 수평 슬라이드 섹션임을 명확히 알 수 있음
}
```

**3. 전역 변수 사용이 필요한 이유**

```javascript
// 두 스와이퍼가 서로 참조해야 하는 상황
function handleVerticalSlideChange() {
    // 세로 스와이퍼에서 가로 스와이퍼를 제어해야 함
    horizontalSwiper.slideTo(0, 0);  // 전역 변수로 접근
}

function handleHorizontalReachEnd() {
    // 가로 스와이퍼에서 세로 스와이퍼를 제어해야 함
    verticalSwiper.slideNext();      // 전역 변수로 접근
}
```

---

#### 🕵️ 3-2: 디버깅을 위한 console.log 시스템 구축

실제 개발에서는 **"보이지 않는 것을 보이게 만드는"** 것이 중요합니다. console.log를 통해 Swiper 객체의 내부 상태를 실시간으로 확인해보겠습니다.

```javascript
// 🔍 디버깅 헬퍼 함수들
function logSwiperInfo(swiperName, swiper) {
    console.group(`🔍 ${swiperName} 상태 정보`);
    console.log('현재 슬라이드 인덱스:', swiper.activeIndex);
    console.log('이전 슬라이드 인덱스:', swiper.previousIndex);
    console.log('첫 번째 슬라이드인가?', swiper.isBeginning);
    console.log('마지막 슬라이드인가?', swiper.isEnd);
    console.log('터치 이동 가능한가?', swiper.allowTouchMove);
    console.log('전체 슬라이드 개수:', swiper.slides.length);
    console.groupEnd();
}

// 🎯 실시간 상태 모니터링 함수
function monitorSwiperChanges() {
    if (verticalSwiper && horizontalSwiper) {
        console.clear(); // 콘솔 화면 정리
        console.log('📊 실시간 Swiper 상태 모니터링');
        console.log('================================================');

        logSwiperInfo('세로 스와이퍼', verticalSwiper);
        logSwiperInfo('가로 스와이퍼', horizontalSwiper);

        // URL 해시 정보도 확인
        console.log('🌐 현재 URL 해시:', window.location.hash || '없음');
        console.log('================================================');
    }
}

// 🔄 주기적으로 상태 확인 (개발 중에만 사용)
const DEBUG_MODE = true; // 개발 완료 후 false로 변경
if (DEBUG_MODE) {
    setInterval(monitorSwiperChanges, 2000); // 2초마다 상태 확인
}
```

#### 🧪 3-3: Swiper 메서드 반환값 테스트

Swiper의 주요 메서드들이 어떤 값을 반환하는지 실제로 확인해보겠습니다.

```javascript
// 🧪 테스트 함수 - Swiper 메서드들의 반환값 확인
function testSwiperMethods() {
    console.group('🧪 Swiper 메서드 테스트');

    if (horizontalSwiper) {
        console.log('--- 가로 스와이퍼 메서드 테스트 ---');

        // slideTo 메서드 테스트
        const slideToResult = horizontalSwiper.slideTo(1, 300);
        console.log('slideTo(1, 300) 반환값:', slideToResult); // undefined 반환

        // update 메서드 테스트
        const updateResult = horizontalSwiper.update();
        console.log('update() 반환값:', updateResult); // undefined 반환

        // 속성값들 확인
        console.log('activeIndex 반환값:', horizontalSwiper.activeIndex); // 숫자
        console.log('isEnd 반환값:', horizontalSwiper.isEnd); // boolean
        console.log('isBeginning 반환값:', horizontalSwiper.isBeginning); // boolean

        // 배열 속성 확인
        console.log('slides 반환값:', horizontalSwiper.slides); // HTMLCollection
        console.log('slides 개수:', horizontalSwiper.slides.length); // 숫자
    }

    if (verticalSwiper) {
        console.log('--- 세로 스와이퍼 메서드 테스트 ---');

        // mousewheel 관련 메서드 테스트
        const disableResult = verticalSwiper.mousewheel.disable();
        console.log('mousewheel.disable() 반환값:', disableResult); // undefined

        const enableResult = verticalSwiper.mousewheel.enable();
        console.log('mousewheel.enable() 반환값:', enableResult); // undefined

        // allowTouchMove 속성 변경 테스트
        console.log('allowTouchMove 변경 전:', verticalSwiper.allowTouchMove);
        verticalSwiper.allowTouchMove = false;
        console.log('allowTouchMove 변경 후:', verticalSwiper.allowTouchMove);
        verticalSwiper.allowTouchMove = true; // 원복
    }

    console.groupEnd();
}

// 🎮 브라우저 콘솔에서 직접 호출할 수 있는 전역 함수로 등록
window.testSwiper = testSwiperMethods;
window.monitorSwiper = monitorSwiperChanges;
window.logVertical = () => logSwiperInfo('세로 스와이퍼', verticalSwiper);
window.logHorizontal = () => logSwiperInfo('가로 스와이퍼', horizontalSwiper);
```

#### 🎯 3-4: 실제 사용 예시와 디버깅 팁

```javascript
// 🚀 실제 개발에서 유용한 디버깅 패턴

// 1. 메서드 실행 전후 상태 비교
function debugSlideTo(swiper, index, speed) {
    console.group(`📍 slideTo(${index}, ${speed}) 실행`);
    console.log('실행 전 activeIndex:', swiper.activeIndex);

    const result = swiper.slideTo(index, speed);

    setTimeout(() => {
        console.log('실행 후 activeIndex:', swiper.activeIndex);
        console.log('이동 성공 여부:', swiper.activeIndex === index);
        console.groupEnd();
    }, speed + 50); // 애니메이션 완료 후 확인

    return result;
}

// 2. 조건부 실행 로깅
function conditionalLog(condition, message, data) {
    if (condition) {
        console.log(`✅ ${message}`, data);
    } else {
        console.log(`❌ ${message}`, data);
    }
}

// 3. 성능 측정
function measurePerformance(functionName, func) {
    console.time(functionName);
    const result = func();
    console.timeEnd(functionName);
    return result;
}

// 사용 예시
function enhancedSlideTo(swiper, index, speed) {
    return measurePerformance('slideTo 실행시간', () => {
        return debugSlideTo(swiper, index, speed);
    });
}
```

#### 🎭 3-5: 브라우저 개발자 도구 활용법

**콘솔에서 직접 테스트해볼 수 있는 명령어들:**

```javascript
// 브라우저 콘솔창에서 직접 입력해보세요!

// 현재 상태 확인
testSwiper();           // Swiper 메서드들 테스트
monitorSwiper();        // 현재 상태 확인
logVertical();          // 세로 스와이퍼 상태만 확인
logHorizontal();        // 가로 스와이퍼 상태만 확인

// 직접 조작
verticalSwiper.slideTo(2, 500);     // 세로 3번째 섹션으로 이동
horizontalSwiper.slideTo(3, 300);   // 가로 4번째 슬라이드로 이동

// 스크롤 제어 테스트
verticalSwiper.mousewheel.disable();  // 세로 스크롤 비활성화
verticalSwiper.mousewheel.enable();   // 세로 스크롤 활성화

// 현재 URL 해시 확인
console.log(window.location.hash);

// 특정 해시로 이동
window.location.hash = '#slide3';
```

#### ⚠️ 중요한 주의사항

**1. 디버깅 코드는 개발 완료 후 제거하기**
```javascript
const DEBUG_MODE = false; // 배포 시 false로 변경
if (DEBUG_MODE) {
    // 디버깅 코드들
}
```

**2. console.log 과다 사용 주의**
```javascript
// ❌ 너무 많은 로그 (성능 저하)
setInterval(() => console.log(swiper.activeIndex), 100);

// ✅ 적절한 로깅 (필요할 때만)
swiper.on('slideChange', () => console.log('슬라이드 변경:', swiper.activeIndex));
```

**3. 전역 변수 오염 방지**
```javascript
// ✅ 개발용 함수들을 한 곳에 모아서 관리
window.debugTools = {
    testSwiper: testSwiperMethods,
    monitorSwiper: monitorSwiperChanges,
    logVertical: () => logSwiperInfo('세로', verticalSwiper),
    logHorizontal: () => logSwiperInfo('가로', horizontalSwiper)
};
```

#### 💡 실무 팁

**디버깅할 때 가장 유용한 정보들:**
1. **activeIndex**: 현재 어느 슬라이드에 있는지
2. **previousIndex**: 어디서 왔는지
3. **isBeginning/isEnd**: 경계 조건 확인
4. **allowTouchMove**: 터치 제어 상태
5. **slides.length**: 전체 슬라이드 개수

**자주 발생하는 문제들:**
- 스와이퍼가 undefined인 경우 (초기화 순서 문제)
- activeIndex가 예상과 다른 경우 (인덱스는 0부터 시작)
- 이벤트가 중복 발생하는 경우 (플래그 변수로 제어)

---

### ⚙️ 4단계: 수평 스와이퍼 초기화의 완전한 이해

#### 왜 수평 스와이퍼를 먼저 초기화하나요?
수직과 수평 스와이퍼가 서로 소통해야 하는 상황에서, **수평 스와이퍼를 먼저 만들어야** 나중에 수직 스와이퍼에서 참조할 수 있습니다. 이는 마치 집을 지을 때 기초부터 차례대로 쌓아 올리는 것과 같습니다.

#### 🎯 이 단계에서 배울 내용
1. **Swiper 생성자 함수의 완전한 이해**
2. **각 옵션의 역할과 실제 동작 원리**
3. **이벤트 핸들러 연결 방법**
4. **실무에서 자주 사용하는 옵션들**

---

#### 🏗️ 4-1: 기본 구조와 함수 선언

```javascript
// 🎯 수평 스와이퍼 초기화 함수
function initHorizontalSwiper() {
    // 여기서 수평 스와이퍼를 생성하고 설정합니다
    horizontalSwiper = new Swiper(".horizontals", {
        // 설정 옵션들이 여기에 들어갑니다
    });
}
```

**함수로 감싸는 이유:**
- **재사용성**: 필요할 때마다 다시 초기화 가능
- **순서 제어**: 원하는 시점에 실행 가능
- **에러 처리**: 초기화 실패 시 쉽게 디버깅 가능
- **코드 정리**: 관련 코드들을 한 곳에 모음

---

#### ⚙️ 4-2: Swiper 생성자 완전 분석

```javascript
function initHorizontalSwiper() {
    horizontalSwiper = new Swiper(".horizontals", {
        // 📍 1. 기본 방향 설정
        direction: "horizontal",        // 수평 방향으로 슬라이드 이동

        // 📱 2. 표시 관련 설정
        slidesPerView: 1,              // 한 번에 보여줄 슬라이드 개수
        spaceBetween: 30,              // 슬라이드 사이의 간격 (픽셀)

        // 🖱️ 3. 사용자 인터랙션 설정
        mousewheel: true,              // 마우스 휠로 슬라이드 조작 가능

        // 📍 4. 페이지네이션 (동그라미 점들) 설정
        pagination: {
            el: ".swiper-pagination",  // 페이지네이션이 표시될 요소
            clickable: true,           // 점을 클릭해서 해당 슬라이드로 이동 가능
        },

        // 🌐 5. URL 해시 네비게이션 설정
        hashNavigation: {
            watchState: true,          // URL 해시 변화를 감지하여 슬라이드 이동
        },

        // 🎯 6. 이벤트 핸들러 등록
        on: {
            reachEnd: handleHorizontalReachEnd,           // 마지막 슬라이드 도달 시
            reachBeginning: handleHorizontalReachBeginning, // 첫 번째 슬라이드 도달 시
            transitionEnd: handleHorizontalTransitionEnd   // 슬라이드 전환 완료 시
        }
    });

    // ✅ 초기화 완료 확인 (디버깅용)
    if (DEBUG_MODE) {
        console.log('🎉 수평 스와이퍼 초기화 완료!');
        console.log('📊 수평 스와이퍼 정보:', {
            direction: horizontalSwiper.params.direction,
            slidesLength: horizontalSwiper.slides.length,
            activeIndex: horizontalSwiper.activeIndex
        });
    }
}
```

---

#### 🔍 4-3: 각 옵션의 상세 분석과 실제 효과

**1. direction: "horizontal" - 슬라이드 방향 설정**

```javascript
direction: "horizontal"  // 가로 방향 (기본값)
// direction: "vertical"    // 세로 방향
```

**실제 효과:**
- **horizontal**: 왼쪽 ↔ 오른쪽으로 슬라이드 이동
- **vertical**: 위쪽 ↕ 아래쪽으로 슬라이드 이동

**언제 어떤 것을 사용하나요?**
- **가로**: 이미지 갤러리, 제품 목록, 포트폴리오
- **세로**: 풀페이지 사이트, 스토리 형태 콘텐츠

---

**2. slidesPerView: 1 - 동시 표시 슬라이드 수**

```javascript
slidesPerView: 1,        // 한 번에 1개 슬라이드만 표시 (기본값)
// slidesPerView: 2,        // 한 번에 2개 슬라이드 표시
// slidesPerView: "auto",   // 슬라이드 크기에 따라 자동 조절
// slidesPerView: 1.5,      // 1.5개 표시 (다음 슬라이드 일부 보임)
```

**실제 예시:**
```javascript
// 카드형 리스트에서 여러 개 보여주기
slidesPerView: 3,
breakpoints: {
    320: { slidesPerView: 1 },    // 모바일: 1개
    768: { slidesPerView: 2 },    // 태블릿: 2개
    1024: { slidesPerView: 3 }    // 데스크톱: 3개
}
```

---

**3. spaceBetween: 30 - 슬라이드 간격 설정**

```javascript
spaceBetween: 30,        // 30픽셀 간격
// spaceBetween: 0,         // 간격 없음 (붙어있음)
// spaceBetween: 50,        // 50픽셀 간격 (더 넓음)
```

**반응형 간격 설정:**
```javascript
spaceBetween: 30,
breakpoints: {
    320: { spaceBetween: 10 },    // 모바일: 좁은 간격
    768: { spaceBetween: 20 },    // 태블릿: 중간 간격
    1024: { spaceBetween: 30 }    // 데스크톱: 넓은 간격
}
```

---

**4. mousewheel: true - 마우스 휠 제어**

```javascript
mousewheel: true,        // 기본 마우스 휠 지원
// mousewheel: false,       // 마우스 휠 비활성화

// 고급 설정
mousewheel: {
    sensitivity: 1,          // 휠 민감도 (기본값: 1)
    eventsTarget: ".swiper", // 휠 이벤트를 받을 요소
    releaseOnEdges: false    // 끝에서 스크롤 릴리즈 여부
}
```

---

**5. pagination - 페이지네이션 상세 설정**

```javascript
pagination: {
    el: ".swiper-pagination",    // 페이지네이션 컨테이너 선택자
    clickable: true,             // 클릭 가능 여부
    type: "bullets",             // 타입: bullets(점), fraction(숫자), progressbar(바)
    dynamicBullets: false,       // 동적 불릿 (많은 슬라이드일 때 유용)
    hideOnClick: false,          // 클릭 시 숨김 여부

    // 커스텀 렌더링
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
}
```

**다양한 페이지네이션 타입:**
```javascript
// 점 형태 (기본)
pagination: { type: "bullets" }

// 숫자 형태 (1 / 4)
pagination: { type: "fraction" }

// 진행바 형태
pagination: { type: "progressbar" }

// 커스텀 형태
pagination: {
    type: "custom",
    renderCustom: function (swiper, current, total) {
        return current + ' of ' + total;
    }
}
```

---

**6. hashNavigation - URL 해시 네비게이션**

```javascript
hashNavigation: {
    watchState: true,        // URL 해시 변화 감지
    replaceState: false      // 브라우저 히스토리 관리 방식
}
```

**동작 원리:**
```javascript
// replaceState: false (기본값)
// 각 슬라이드 이동이 브라우저 히스토리에 기록됨
// 뒤로가기 버튼으로 이전 슬라이드 이동 가능

// replaceState: true
// 현재 히스토리만 교체, 뒤로가기 불가
```

---

#### 🎯 4-4: 이벤트 핸들러 등록과 활용

```javascript
on: {
    // 🏁 경계 도달 이벤트
    reachEnd: handleHorizontalReachEnd,
    reachBeginning: handleHorizontalReachBeginning,

    // 🔄 전환 관련 이벤트
    transitionStart: function() {
        console.log('🚀 가로 슬라이드 전환 시작');
    },
    transitionEnd: handleHorizontalTransitionEnd,

    // 📍 슬라이드 변경 이벤트
    slideChange: function() {
        console.log('📍 가로 슬라이드 변경:', this.activeIndex);

        // URL 해시 업데이트 확인
        if (DEBUG_MODE) {
            console.log('🌐 현재 URL 해시:', window.location.hash);
        }
    },

    // 👆 사용자 상호작용 이벤트
    touchStart: function() {
        console.log('👆 터치 시작');
    },
    touchEnd: function() {
        console.log('✋ 터치 종료');
    },

    // 🎯 특정 슬라이드 도달 이벤트
    slideChangeTransitionEnd: function() {
        // 특정 슬라이드에서 특별한 동작
        if (this.activeIndex === 2) {
            console.log('🎉 3번째 슬라이드에 도착!');
        }
    }
}
```

---

#### 🛠️ 4-5: 실무에서 자주 사용하는 추가 옵션들

```javascript
function initHorizontalSwiper() {
    horizontalSwiper = new Swiper(".horizontals", {
        // 기본 설정
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 30,

        // 🎨 시각적 효과
        effect: "slide",           // slide, fade, cube, coverflow, flip
        speed: 300,               // 전환 속도 (밀리초)

        // 🔄 자동 재생 (필요시)
        // autoplay: {
        //     delay: 3000,          // 3초마다 자동 이동
        //     disableOnInteraction: false
        // },

        // 🎯 무한 루프 (주의: 우리 프로젝트에서는 사용 안함)
        // loop: true,               // 마지막에서 첫 번째로 순환

        // 📱 터치/드래그 설정
        touchRatio: 1,            // 터치 민감도
        threshold: 5,             // 드래그 시작 임계값

        // 🖱️ 마우스 휠 고급 설정
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".horizontals"
        },

        // 📍 페이지네이션 고급 설정
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,     // 많은 슬라이드일 때 유용
            dynamicMainBullets: 3     // 메인 불릿 개수
        },

        // 🌐 해시 네비게이션
        hashNavigation: {
            watchState: true
        },

        // 🎯 이벤트 핸들러
        on: {
            init: function() {
                console.log('🎉 수평 스와이퍼 초기화 완료!');

                // 초기화 후 상태 확인
                if (DEBUG_MODE) {
                    logSwiperInfo('수평 스와이퍼', this);
                }
            },

            reachEnd: handleHorizontalReachEnd,
            reachBeginning: handleHorizontalReachBeginning,
            transitionEnd: handleHorizontalTransitionEnd,

            slideChange: function() {
                console.log(`📍 가로 슬라이드 ${this.activeIndex + 1}번으로 이동`);

                // 특정 슬라이드에서 특별한 처리
                switch(this.activeIndex) {
                    case 0:
                        console.log('🎬 첫 번째 슬라이드 - 인트로');
                        break;
                    case 3:
                        console.log('🏁 마지막 슬라이드 - 아웃트로');
                        break;
                }
            }
        }
    });
}
```

---

#### 🚨 4-6: 자주 하는 실수와 해결법

**실수 1: 잘못된 선택자 사용**
```javascript
// ❌ 잘못된 방법
new Swiper("horizontals", {  // 점(.) 빠뜨림
    // ...
});

// ✅ 올바른 방법
new Swiper(".horizontals", {  // 클래스 선택자에는 점(.) 필요
    // ...
});
```

**실수 2: 페이지네이션 요소가 없는데 설정함**
```javascript
// ❌ HTML에 .swiper-pagination이 없는데 설정
pagination: {
    el: ".swiper-pagination",  // HTML에 이 요소가 없으면 에러
    clickable: true
}

// ✅ 요소 존재 확인 후 설정
pagination: document.querySelector('.swiper-pagination') ? {
    el: ".swiper-pagination",
    clickable: true
} : false
```

**실수 3: 이벤트 핸들러 함수가 정의되지 않음**
```javascript
// ❌ 함수가 정의되기 전에 참조
on: {
    reachEnd: handleHorizontalReachEnd  // 아직 정의되지 않은 함수
}

// ✅ 함수 먼저 정의하거나 익명 함수 사용
on: {
    reachEnd: function() {
        console.log('끝에 도달!');
    }
}
```

---

#### 💡 4-7: 디버깅과 테스트 팁

```javascript
function initHorizontalSwiper() {
    // 🔍 초기화 전 요소 존재 확인
    const container = document.querySelector('.horizontals');
    if (!container) {
        console.error('❌ .horizontals 요소를 찾을 수 없습니다!');
        return;
    }

    try {
        horizontalSwiper = new Swiper(".horizontals", {
            // ... 설정들
        });

        // ✅ 초기화 성공 확인
        console.log('✅ 수평 스와이퍼 초기화 성공!');

        // 🧪 기본 동작 테스트
        if (DEBUG_MODE) {
            setTimeout(() => {
                console.log('🧪 테스트: 2번째 슬라이드로 이동');
                horizontalSwiper.slideTo(1, 500);
            }, 1000);
        }

    } catch (error) {
        console.error('❌ 수평 스와이퍼 초기화 실패:', error);
    }
}

// 🎮 브라우저 콘솔에서 테스트할 수 있는 함수들
window.testHorizontalSwiper = function() {
    if (horizontalSwiper) {
        console.log('🧪 수평 스와이퍼 테스트 시작');

        // 각 슬라이드로 순차 이동 테스트
        let index = 0;
        const testInterval = setInterval(() => {
            horizontalSwiper.slideTo(index, 300);
            console.log(`📍 ${index + 1}번째 슬라이드로 이동`);

            index++;
            if (index >= horizontalSwiper.slides.length) {
                clearInterval(testInterval);
                console.log('🎉 테스트 완료!');
            }
        }, 1000);
    } else {
        console.error('❌ 수평 스와이퍼가 초기화되지 않았습니다.');
    }
};
```

---

### 5단계: 수직 스와이퍼 초기화

```javascript
function initVerticalSwiper() {
    // 🔍 초기화 전 디버깅 - 요소 존재 확인
    const verticalContainer = document.querySelector('.verticals');
    if (!verticalContainer) {
        console.error('❌ .verticals 요소를 찾을 수 없습니다!');
        return;
    }

    console.log('🚀 수직 스와이퍼 초기화 시작...');

    try {
        verticalSwiper = new Swiper(".verticals", {
            direction: "vertical",         // 수직 방향
            slidesPerView: 1,             // 한 번에 보여줄 슬라이드 수
            mousewheel: true,             // 마우스 휠 사용
            on: {
                // 🎯 초기화 완료 확인
                init: function() {
                    console.log('✅ 수직 스와이퍼 초기화 완료!');
                    console.log('📊 수직 스와이퍼 정보:', {
                        direction: this.params.direction,
                        slidesLength: this.slides.length,
                        activeIndex: this.activeIndex,
                        mousewheel: this.mousewheel ? '활성화됨' : '비활성화됨'
                    });
                },

                slideChange: function() {
                    console.log(`📍 수직 슬라이드 변경: ${this.previousIndex} → ${this.activeIndex}`);
                    handleVerticalSlideChange.call(this);
                },

                slideChangeTransitionStart: function() {
                    console.log(`🚀 수직 전환 시작: 섹션 ${this.previousIndex + 1} → 섹션 ${this.activeIndex + 1}`);
                    handleVerticalTransitionStart.call(this);
                },

                slideChangeTransitionEnd: function() {
                    console.log(`✅ 수직 전환 완료: 현재 섹션 ${this.activeIndex + 1}`);
                    handleVerticalTransitionEnd.call(this);

                    // 🔍 전환 후 상태 디버깅
                    if (DEBUG_MODE) {
                        console.log('🔍 전환 후 상태:', {
                            currentSection: this.activeIndex + 1,
                            isHorizontalSection: this.activeIndex === HORIZONTAL_SECTION_INDEX,
                            mousewheelEnabled: this.mousewheel.enabled,
                            touchMoveEnabled: this.allowTouchMove
                        });
                    }
                }
            }
        });

        // ✅ 초기화 성공 후 추가 디버깅 정보
        console.log('🎉 수직 스와이퍼 초기화 성공!');

        // 🧪 수직 스와이퍼 기능 테스트 (개발 모드에서만)
        if (DEBUG_MODE) {
            window.testVerticalSwiper = function() {
                console.log('🧪 수직 스와이퍼 테스트 시작');

                // 각 섹션으로 순차 이동 테스트
                let sectionIndex = 0;
                const testInterval = setInterval(() => {
                    verticalSwiper.slideTo(sectionIndex, 500);
                    console.log(`📍 섹션 ${sectionIndex + 1}로 이동 테스트`);

                    sectionIndex++;
                    if (sectionIndex >= verticalSwiper.slides.length) {
                        clearInterval(testInterval);
                        console.log('🎉 수직 스와이퍼 테스트 완료!');
                        verticalSwiper.slideTo(0, 500); // 첫 번째 섹션으로 복귀
                    }
                }, 1500);
            };

            // 브라우저 콘솔에서 사용할 수 있는 디버깅 함수들
            window.debugVertical = {
                info: () => logSwiperInfo('수직 스와이퍼', verticalSwiper),
                goToSection: (index) => {
                    console.log(`📍 섹션 ${index + 1}로 강제 이동`);
                    verticalSwiper.slideTo(index, 300);
                },
                enableMousewheel: () => {
                    verticalSwiper.mousewheel.enable();
                    console.log('✅ 마우스휠 활성화됨');
                },
                disableMousewheel: () => {
                    verticalSwiper.mousewheel.disable();
                    console.log('❌ 마우스휠 비활성화됨');
                }
            };
        }

    } catch (error) {
        console.error('❌ 수직 스와이퍼 초기화 실패:', error);
        console.error('💡 해결 방법:');
        console.error('1. HTML 구조가 올바른지 확인');
        console.error('2. Swiper CSS/JS 파일이 로드되었는지 확인');
        console.error('3. 다른 JavaScript 에러가 없는지 확인');
    }
}
```

**🔍 디버깅 포인트 설명:**
- **초기화 전 검증**: DOM 요소 존재 확인으로 에러 예방
- **실시간 상태 모니터링**: 각 이벤트마다 상세한 로그 출력
- **에러 처리**: try-catch로 초기화 실패 시 구체적인 해결 방법 제시
- **테스트 함수**: 개발 중 기능 검증을 위한 자동화된 테스트
- **브라우저 콘솔 도구**: 실시간으로 스와이퍼 조작할 수 있는 함수들

**🎮 브라우저 콘솔에서 사용할 수 있는 명령어:**
```javascript
// 수직 스와이퍼 정보 확인
debugVertical.info();

// 특정 섹션으로 이동
debugVertical.goToSection(2);  // 3번째 섹션으로 이동

// 마우스휠 제어
debugVertical.enableMousewheel();   // 마우스휠 활성화
debugVertical.disableMousewheel();  // 마우스휠 비활성화

// 자동 테스트 실행
testVerticalSwiper();
```

---

### 6단계: 수평 스와이퍼 이벤트 핸들러

```javascript
// 수평 슬라이드 끝에 도달했을 때
function handleHorizontalReachEnd() {
    horizontalSwiper.canMoveToNext = true;  // 다음 이동 가능 플래그 설정
}

// 수평 슬라이드 시작에 도달했을 때
function handleHorizontalReachBeginning() {
    horizontalSwiper.canMoveToPrev = true;  // 이전 이동 가능 플래그 설정
}

// 수평 슬라이드 전환이 완료되었을 때
function handleHorizontalTransitionEnd() {
    // 끝에 도달한 상태에서 전환 완료 시 다음 섹션으로 이동
    if (horizontalSwiper.canMoveToNext && horizontalSwiper.isEnd) {
        enableVerticalScrollAndMove(function() {
            verticalSwiper.slideNext();  // 다음 수직 슬라이드로
        });
        horizontalSwiper.canMoveToNext = false;  // 플래그 초기화
    }

    // 시작에 도달한 상태에서 전환 완료 시 섹션 3으로 이동
    if (horizontalSwiper.canMoveToPrev && horizontalSwiper.isBeginning) {
        enableVerticalScrollAndMove(function() {
            verticalSwiper.slideTo(SECTION_3_INDEX);  // 섹션 3으로 직접 이동
        });
        horizontalSwiper.canMoveToPrev = false;  // 플래그 초기화
    }
}
```

**이벤트 설명:**
- **reachEnd**: 마지막 슬라이드에 도달했을 때 발생
- **reachBeginning**: 첫 번째 슬라이드에 도달했을 때 발생
- **transitionEnd**: 슬라이드 전환 애니메이션이 완료되었을 때 발생

**플래그 사용 이유:**
슬라이드가 완전히 표시된 후 수직 이동하기 위해 플래그를 사용하여 타이밍을 제어

---

### 7단계: 수직 스와이퍼 이벤트 핸들러

```javascript
// 수직 슬라이드가 변경될 때
function handleVerticalSlideChange() {
    console.log('Vertical slide changed to:', this.activeIndex);

    if (this.activeIndex === HORIZONTAL_SECTION_INDEX) {
        // 수평 슬라이드 섹션에 도달하면 수직 스크롤 비활성화
        disableVerticalScroll();
        resetHorizontalSlider(this.previousIndex);
    } else {
        // 다른 섹션에서는 수직 스크롤 활성화
        enableVerticalScroll();
        console.log('Vertical scroll enabled for section:', this.activeIndex);
    }
}

// 수직 슬라이드 전환이 시작될 때
function handleVerticalTransitionStart() {
    console.log('Transition start: from', this.previousIndex, 'to', this.activeIndex);

    // 섹션 5에서 수평 슬라이드 섹션으로 이동하는 경우
    if (isMovingFromSection5ToHorizontal(this)) {
        disableVerticalScroll();      // 수직 스크롤 비활성화
        setHorizontalToLastSlide();   // 수평 슬라이드를 마지막으로 설정
    }
}

// 수직 슬라이드 전환이 완료될 때
function handleVerticalTransitionEnd() {
    if (this.activeIndex === HORIZONTAL_SECTION_INDEX) {
        setTimeout(function() {
            // 섹션 5에서 온 경우가 아니면 수평 슬라이더 업데이트
            if (verticalSwiper.previousIndex !== SECTION_5_INDEX) {
                horizontalSwiper.update();
            }
        }, 100);
    }
}
```

**이벤트 설명:**
- **slideChange**: 슬라이드가 변경되었을 때 발생
- **slideChangeTransitionStart**: 슬라이드 전환 시작 시 발생
- **slideChangeTransitionEnd**: 슬라이드 전환 완료 시 발생

---

### 8단계: 유틸리티 함수들

```javascript
// 섹션 5에서 수평 슬라이드 섹션으로 이동하는지 확인
function isMovingFromSection5ToHorizontal(swiper) {
    return swiper.previousIndex === SECTION_5_INDEX &&
           swiper.activeIndex === HORIZONTAL_SECTION_INDEX;
}

// 수직 스크롤 비활성화
function disableVerticalScroll() {
    verticalSwiper.allowTouchMove = false;  // 터치/드래그 비활성화
    verticalSwiper.mousewheel.disable();   // 마우스 휠 비활성화
}

// 수직 스크롤 활성화
function enableVerticalScroll() {
    verticalSwiper.allowTouchMove = true;   // 터치/드래그 활성화
    verticalSwiper.mousewheel.enable();    // 마우스 휠 활성화
}

// 수직 스크롤 활성화 후 이동
function enableVerticalScrollAndMove(moveFunction) {
    enableVerticalScroll();           // 수직 스크롤 활성화
    setTimeout(moveFunction, 300);    // 300ms 후 이동 함수 실행
}

// 수평 슬라이더 리셋
function resetHorizontalSlider(previousIndex) {
    // 섹션 5에서 온 경우가 아니면 첫 번째 슬라이드로 리셋
    if (previousIndex !== SECTION_5_INDEX) {
        setTimeout(function() {
            horizontalSwiper.slideTo(0, 0);  // 첫 번째 슬라이드로, 즉시
        }, 50);
    }
}

// 수평 슬라이더를 마지막 슬라이드로 설정
function setHorizontalToLastSlide() {
    setTimeout(function() {
        horizontalSwiper.slideTo(3, 0);  // 4번째 슬라이드(인덱스 3)로, 즉시
    }, 100);
}
```

**유틸리티 함수 설명:**
- **allowTouchMove**: 터치/드래그로 슬라이드 조작 가능 여부
- **mousewheel.disable/enable()**: 마우스 휠 스크롤 제어
- **slideTo(index, speed)**: 특정 슬라이드로 이동 (인덱스, 속도)

---

### 9단계: 스와이퍼 초기화 실행

```javascript
// 스와이퍼 초기화 실행
initHorizontalSwiper();  // 수평 스와이퍼 먼저 초기화
initVerticalSwiper();    // 수직 스와이퍼 나중에 초기화
```

**초기화 순서 중요성:**
수평 스와이퍼를 먼저 초기화해야 수직 스와이퍼에서 참조할 수 있음

---

## 🔧 주요 Swiper 메서드 및 속성

### 메서드
| 메서드 | 설명 | 예시 |
|--------|------|------|
| `slideTo(index, speed)` | 특정 슬라이드로 이동 | `swiper.slideTo(2, 300)` |
| `slideNext()` | 다음 슬라이드로 이동 | `swiper.slideNext()` |
| `slidePrev()` | 이전 슬라이드로 이동 | `swiper.slidePrev()` |
| `update()` | 스와이퍼 업데이트 | `swiper.update()` |
| `mousewheel.enable()` | 마우스 휠 활성화 | `swiper.mousewheel.enable()` |
| `mousewheel.disable()` | 마우스 휠 비활성화 | `swiper.mousewheel.disable()` |

### 속성
| 속성 | 설명 | 타입 |
|------|------|------|
| `activeIndex` | 현재 활성 슬라이드 인덱스 | Number |
| `previousIndex` | 이전 슬라이드 인덱스 | Number |
| `isBeginning` | 첫 번째 슬라이드 여부 | Boolean |
| `isEnd` | 마지막 슬라이드 여부 | Boolean |
| `allowTouchMove` | 터치 이동 허용 여부 | Boolean |

### 이벤트
| 이벤트 | 발생 시점 | 용도 |
|--------|-----------|------|
| `slideChange` | 슬라이드 변경 시 | 슬라이드 변경 감지 |
| `slideChangeTransitionStart` | 전환 시작 시 | 전환 시작 시점 제어 |
| `slideChangeTransitionEnd` | 전환 완료 시 | 전환 완료 후 처리 |
| `reachBeginning` | 첫 슬라이드 도달 시 | 경계 도달 감지 |
| `reachEnd` | 마지막 슬라이드 도달 시 | 경계 도달 감지 |
| `transitionEnd` | 애니메이션 완료 시 | 애니메이션 완료 후 처리 |

---

## 💡 핵심 포인트

### 1. 이벤트 타이밍 제어
- `reachEnd/reachBeginning`: 경계 도달 감지
- `transitionEnd`: 애니메이션 완료 후 실행
- 플래그를 사용한 조건부 실행

### 2. 스크롤 제어
- `allowTouchMove`: 터치/드래그 제어
- `mousewheel`: 마우스 휠 제어
- 수평 슬라이드 활성화 시 수직 스크롤 비활성화

### 3. 슬라이드 이동
- `slideTo(index, speed)`: 직접 이동
- `slideNext/slidePrev()`: 순차 이동
- 타이밍 조절을 위한 `setTimeout` 활용

---

## 🚀 응용 과제

1. **난이도 ★☆☆**: 슬라이드 개수를 6개로 늘려보기
2. **난이도 ★★☆**: 각 섹션에 다른 배경색 적용하기
3. **난이도 ★★★**: 수평 슬라이드에서 세로 방향으로도 이동 가능하게 만들기

---

## 📝 정리

이 강의를 통해 다음을 학습했습니다:
- Swiper 라이브러리의 기본 설정 및 초기화
- 수직/수평 슬라이더 연동 방법
- 이벤트 핸들러를 활용한 인터랙션 구현
- 스크롤 제어 및 슬라이드 이동 메서드 활용

복잡해 보이지만 단계별로 나누어 생각하면 이해하기 쉽습니다! 🎉

---

## 📂 완성 코드

### HTML 전체 코드
```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8" />
    <title>Swiper demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <!-- Link Swiper's CSS -->
    <style>
        @import url(https://qwerewqwerew.github.io/source/style/reset.css);
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <!-- Demo styles -->
    <style>
        html,
        body {
            position: relative;
            height: 100%;
        }

        section.vh100 {
            width: 100%;
            height: 100vh;
            background: #ccc;
        }

        .swiper {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <div class="swiper verticals">
        <div class="swiper-wrapper">
            <section class="vh100 swiper-slide"> 1 </section>
            <section class="vh100 swiper-slide"> 2 </section>
            <section class="vh100 swiper-slide"> 3 </section>
            <section class="swiper horizontals swiper-slide">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" data-hash="slide1">Slide 1</div>
                    <div class="swiper-slide" data-hash="slide2">Slide 2</div>
                    <div class="swiper-slide" data-hash="slide3">Slide 3</div>
                    <div class="swiper-slide" data-hash="slide4">Slide 4</div>
                </div>
                <div class="swiper-pagination"></div>
            </section>
            <section class="vh100 swiper-slide"> 5 </section>
        </div>
    </div>
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <!-- Initialize Swiper -->
    <script>
        // 전역 변수
        let verticalSwiper;
        let horizontalSwiper;

        // 상수 정의
        const HORIZONTAL_SECTION_INDEX = 3;
        const SECTION_5_INDEX = 4;
        const SECTION_3_INDEX = 2;

        // 수평 스와이퍼 초기화
        function initHorizontalSwiper() {
            horizontalSwiper = new Swiper(".horizontals", {
                direction: "horizontal",
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                hashNavigation: {
                    watchState: true,
                },
                on: {
                    reachEnd: handleHorizontalReachEnd,
                    reachBeginning: handleHorizontalReachBeginning,
                    transitionEnd: handleHorizontalTransitionEnd
                }
            });
        }

        // 수직 스와이퍼 초기화
        function initVerticalSwiper() {
            verticalSwiper = new Swiper(".verticals", {
                direction: "vertical",
                slidesPerView: 1,
                mousewheel: true,
                on: {
                    slideChange: handleVerticalSlideChange,
                    slideChangeTransitionStart: handleVerticalTransitionStart,
                    slideChangeTransitionEnd: handleVerticalTransitionEnd
                }
            });
        }

        // 수평 스와이퍼 이벤트 핸들러
        function handleHorizontalReachEnd() {
            horizontalSwiper.canMoveToNext = true;
        }

        function handleHorizontalReachBeginning() {
            horizontalSwiper.canMoveToPrev = true;
        }

        function handleHorizontalTransitionEnd() {
            if (horizontalSwiper.canMoveToNext && horizontalSwiper.isEnd) {
                enableVerticalScrollAndMove(function() {
                    verticalSwiper.slideNext();
                });
                horizontalSwiper.canMoveToNext = false;
            }

            if (horizontalSwiper.canMoveToPrev && horizontalSwiper.isBeginning) {
                enableVerticalScrollAndMove(function() {
                    verticalSwiper.slideTo(SECTION_3_INDEX);
                });
                horizontalSwiper.canMoveToPrev = false;
            }
        }

        // 수직 스와이퍼 이벤트 핸들러
        function handleVerticalSlideChange() {
            console.log('Vertical slide changed to:', this.activeIndex);

            if (this.activeIndex === HORIZONTAL_SECTION_INDEX) {
                disableVerticalScroll();
                resetHorizontalSlider(this.previousIndex);
            } else {
                enableVerticalScroll();
                console.log('Vertical scroll enabled for section:', this.activeIndex);
            }
        }

        function handleVerticalTransitionStart() {
            console.log('Transition start: from', this.previousIndex, 'to', this.activeIndex);

            if (isMovingFromSection5ToHorizontal(this)) {
                disableVerticalScroll();
                setHorizontalToLastSlide();
            }
        }

        function handleVerticalTransitionEnd() {
            if (this.activeIndex === HORIZONTAL_SECTION_INDEX) {
                setTimeout(function() {
                    if (verticalSwiper.previousIndex !== SECTION_5_INDEX) {
                        horizontalSwiper.update();
                    }
                }, 100);
            }
        }

        // 유틸리티 함수
        function isMovingFromSection5ToHorizontal(swiper) {
            return swiper.previousIndex === SECTION_5_INDEX &&
                   swiper.activeIndex === HORIZONTAL_SECTION_INDEX;
        }

        function disableVerticalScroll() {
            verticalSwiper.allowTouchMove = false;
            verticalSwiper.mousewheel.disable();
        }

        function enableVerticalScroll() {
            verticalSwiper.allowTouchMove = true;
            verticalSwiper.mousewheel.enable();
        }

        function enableVerticalScrollAndMove(moveFunction) {
            enableVerticalScroll();
            setTimeout(moveFunction, 300);
        }

        function resetHorizontalSlider(previousIndex) {
            if (previousIndex !== SECTION_5_INDEX) {
                setTimeout(function() {
                    horizontalSwiper.slideTo(0, 0);
                }, 50);
            }
        }

        function setHorizontalToLastSlide() {
            setTimeout(function() {
                horizontalSwiper.slideTo(3, 0);
            }, 100);
        }

        // 스와이퍼 초기화 실행
        initHorizontalSwiper();
        initVerticalSwiper();
    </script>
</body>

</html>
```
