# 📜 JavaScript 스크롤 값 얻어오기 완전 가이드

## 🎯 목차
- [기본 스크롤 값 얻기](#기본-스크롤-값-얻기)
- [요소별 스크롤 값](#요소별-스크롤-값)
- [스크롤 위치 및 크기 정보](#스크롤-위치-및-크기-정보)
- [실전 예제](#실전-예제)
- [스크롤 이벤트 활용](#스크롤-이벤트-활용)

---

## 🔧 기본 스크롤 값 얻기

### 1. 현재 스크롤 위치 (Y축)

```javascript
// 방법 1: window.scrollY (가장 일반적)
const scrollTop = window.scrollY;
console.log('현재 Y축 스크롤:', scrollTop);

// 방법 2: window.pageYOffset (구버전 호환)
const scrollTop2 = window.pageYOffset;
console.log('현재 Y축 스크롤:', scrollTop2);

// 방법 3: document.documentElement.scrollTop
const scrollTop3 = document.documentElement.scrollTop;
console.log('현재 Y축 스크롤:', scrollTop3);

// 방법 4: document.body.scrollTop (IE 호환)
const scrollTop4 = document.body.scrollTop;
console.log('현재 Y축 스크롤:', scrollTop4);
```

### 📊 Y축 스크롤 속성 비교표

| 속성 | 호환성 | 특징 | 권장도 | 주의사항 |
|------|--------|------|--------|----------|
| `window.scrollY` | ✅ 최신 브라우저 | 가장 직관적이고 명확 | ⭐⭐⭐⭐⭐ | IE 지원 안함 |
| `window.pageYOffset` | ✅ 구버전 포함 | 오래된 표준, 널리 지원 | ⭐⭐⭐⭐ | scrollY와 동일한 값 |
| `document.documentElement.scrollTop` | ✅ 모든 브라우저 | HTML 요소의 스크롤 | ⭐⭐⭐ | Strict 모드에서 권장 |
| `document.body.scrollTop` | ⚠️ 구버전 IE | body 요소의 스크롤 | ⭐⭐ | Quirks 모드에서만 동작 |

### 🔍 상세 차이점 분석

#### 1. **브라우저 호환성**
```javascript
// 브라우저별 지원 현황
const scrollMethods = {
    'window.scrollY': 'Chrome 1+, Firefox 1+, Safari 1+, IE ❌',
    'window.pageYOffset': 'Chrome 1+, Firefox 1+, Safari 1+, IE 9+',
    'documentElement.scrollTop': '모든 브라우저 (IE 포함)',
    'body.scrollTop': 'IE Quirks 모드, 일부 구버전 브라우저'
};
```

#### 2. **동작 방식의 차이**
```javascript
// DOCTYPE에 따른 동작 차이
function checkScrollBehavior() {
    console.log('=== 현재 문서 모드별 스크롤 값 ===');
    console.log('window.scrollY:', window.scrollY);
    console.log('pageYOffset:', window.pageYOffset);
    console.log('documentElement.scrollTop:', document.documentElement.scrollTop);
    console.log('body.scrollTop:', document.body.scrollTop);

    // Strict 모드 (DOCTYPE html)에서는:
    // - documentElement.scrollTop이 올바른 값
    // - body.scrollTop은 0

    // Quirks 모드 (DOCTYPE 없음)에서는:
    // - body.scrollTop이 올바른 값
    // - documentElement.scrollTop은 0
}
```

### 🔍 **Quirks 모드 vs Strict 모드 완전 이해**

#### **Quirks 모드란?**
**Quirks 모드(호환 모드)**는 브라우저가 웹 표준을 완전히 준수하지 않았던 과거의 웹페이지들과의 호환성을 위해 만든 렌더링 모드입니다.

#### **모드별 특징 비교**

| 구분 | Quirks 모드 | Strict 모드 |
|------|-------------|-------------|
| **DOCTYPE** | 없음 또는 불완전 | `<!DOCTYPE html>` |
| **스크롤 요소** | `document.body` | `document.documentElement` |
| **박스 모델** | IE 5.5 방식 (비표준) | W3C 표준 |
| **CSS 처리** | 관대한 처리 | 엄격한 표준 준수 |
| **레이아웃** | 구버전 브라우저 방식 | 현대적 표준 |

#### **실제 동작 차이 예제**
```javascript
// DOCTYPE에 따른 스크롤 동작 차이
function demonstrateQuirksVsStrict() {
    console.log('=== 현재 문서 모드 확인 ===');
    
    // 문서 모드 확인
    const docMode = document.compatMode;
    console.log('Document Mode:', docMode);
    // "CSS1Compat" = Strict 모드
    // "BackCompat" = Quirks 모드
    
    if (docMode === 'BackCompat') {
        console.log('🚨 Quirks 모드 감지!');
        console.log('body.scrollTop:', document.body.scrollTop);
        console.log('documentElement.scrollTop:', document.documentElement.scrollTop);
        console.log('➡️ body.scrollTop이 실제 스크롤 값');
    } else {
        console.log('✅ Strict 모드 (표준 모드)');
        console.log('body.scrollTop:', document.body.scrollTop);
        console.log('documentElement.scrollTop:', document.documentElement.scrollTop);
        console.log('➡️ documentElement.scrollTop이 실제 스크롤 값');
    }
}
```

#### **DOCTYPE별 모드 결정**
```html
<!-- ✅ Strict 모드 (권장) -->
<!DOCTYPE html>

<!-- ❌ Quirks 모드 -->
<!-- DOCTYPE이 없거나 불완전한 경우 -->

<!-- 구식 DOCTYPE들 (Quirks 모드 유발) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- 또는 DOCTYPE이 아예 없는 경우 -->
```

#### **왜 이런 차이가 생겼나요?**
1. **역사적 배경**: 
   - 초기 웹에서는 표준이 명확하지 않았음
   - 브라우저마다 다른 방식으로 구현
   - IE와 Netscape의 브라우저 전쟁 시대

2. **호환성 문제**:
   - 기존 웹사이트들이 갑자기 깨지는 것을 방지
   - 점진적 표준 적용을 위한 과도기적 방법

3. **표준화 과정**:
   - W3C 표준이 정립되면서 새로운 렌더링 방식 필요
   - 하지만 기존 사이트들과의 호환성도 유지해야 함

#### **실무에서의 대응법**
```javascript
// 🔧 안전한 크로스 모드 스크롤 값 얻기
function getSafeScrollTop() {
    // 표준 모드 우선, Quirks 모드 대비
    return window.pageYOffset || 
           document.documentElement.scrollTop || 
           document.body.scrollTop || 0;
}

function getSafeScrollLeft() {
    return window.pageXOffset || 
           document.documentElement.scrollLeft || 
           document.body.scrollLeft || 0;
}

// 🔍 모드 감지 및 적절한 요소 선택
function getScrollingElement() {
    // 표준 방법 (최신 브라우저)
    if (document.scrollingElement) {
        return document.scrollingElement;
    }
    
    // Fallback: 모드에 따른 선택
    return document.compatMode === 'CSS1Compat' 
        ? document.documentElement 
        : document.body;
}
```

#### **현대 웹 개발에서의 권장사항**
```html
<!-- ✅ 항상 이렇게 시작하세요! -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문서 제목</title>
</head>
```

#### **디버깅 팁**
```javascript
// 🔍 현재 페이지 모드 확인
function checkDocumentMode() {
    const mode = document.compatMode;
    const scrollElement = getScrollingElement();
    
    console.log('=== 문서 모드 진단 ===');
    console.log('Compatible Mode:', mode);
    console.log('Scrolling Element:', scrollElement.tagName);
    console.log('DOCTYPE:', document.doctype ? 'Present' : 'Missing');
    
    if (mode === 'BackCompat') {
        console.warn('⚠️ Quirks 모드 감지! DOCTYPE을 추가하세요.');
    } else {
        console.log('✅ 표준 모드로 동작중');
    }
}
```

### 💡 **핵심 포인트**
- **Quirks 모드**: 과거 호환성을 위한 비표준 렌더링
- **Strict 모드**: W3C 표준을 따르는 현대적 렌더링  
- **현재**: 모든 새 프로젝트는 `<!DOCTYPE html>`로 시작
- **스크롤**: 모드에 따라 `body` vs `documentElement` 차이

#### 3. **성능 비교**
```javascript
// 성능 테스트 함수
function performanceTest() {
    const iterations = 100000;

    // window.scrollY 테스트
    console.time('window.scrollY');
    for (let i = 0; i < iterations; i++) {
        const scroll = window.scrollY;
    }
    console.timeEnd('window.scrollY');

    // pageYOffset 테스트
    console.time('pageYOffset');
    for (let i = 0; i < iterations; i++) {
        const scroll = window.pageYOffset;
    }
    console.timeEnd('pageYOffset');

    // documentElement.scrollTop 테스트
    console.time('documentElement.scrollTop');
    for (let i = 0; i < iterations; i++) {
        const scroll = document.documentElement.scrollTop;
    }
    console.timeEnd('documentElement.scrollTop');
}
```

### 2. 현재 스크롤 위치 (X축)

```javascript
// 방법 1: window.scrollX (가장 일반적)
const scrollLeft = window.scrollX;
console.log('현재 X축 스크롤:', scrollLeft);

// 방법 2: window.pageXOffset (구버전 호환)
const scrollLeft2 = window.pageXOffset;
console.log('현재 X축 스크롤:', scrollLeft2);

// 방법 3: document.documentElement.scrollLeft
const scrollLeft3 = document.documentElement.scrollLeft;
console.log('현재 X축 스크롤:', scrollLeft3);
```

### 📊 X축 스크롤 속성 비교표

| 속성 | 호환성 | 특징 | 권장도 | 주의사항 |
|------|--------|------|--------|----------|
| `window.scrollX` | ✅ 최신 브라우저 | 가장 직관적이고 명확 | ⭐⭐⭐⭐⭐ | IE 지원 안함 |
| `window.pageXOffset` | ✅ 구버전 포함 | 오래된 표준, 널리 지원 | ⭐⭐⭐⭐ | scrollX와 동일한 값 |
| `document.documentElement.scrollLeft` | ✅ 모든 브라우저 | HTML 요소의 가로 스크롤 | ⭐⭐⭐ | Y축과 동일한 원리 |

### 🎯 실무에서의 선택 기준

#### **최신 프로젝트 (IE 지원 불필요)**
```javascript
// 권장: window.scrollY/scrollX 사용
const scrollY = window.scrollY;
const scrollX = window.scrollX;
```

#### **구버전 브라우저 지원 필요**
```javascript
// 권장: pageYOffset/pageXOffset 사용
const scrollY = window.pageYOffset;
const scrollX = window.pageXOffset;
```

#### **최대 호환성 필요 (IE 포함)**
```javascript
// 권장: 크로스 브라우저 함수 사용
function getScrollPosition() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        y: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}
```

### 3. 크로스 브라우저 호환 함수

```javascript
// 안전한 스크롤 Y값 얻기
function getScrollTop() {
    return window.pageYOffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop || 0;
}

// 안전한 스크롤 X값 얻기
function getScrollLeft() {
    return window.pageXOffset ||
           document.documentElement.scrollLeft ||
           document.body.scrollLeft || 0;
}

// 사용 예시
console.log('현재 스크롤 Y:', getScrollTop());
console.log('현재 스크롤 X:', getScrollLeft());
```

### 📋 기타 스크롤 관련 속성들 비교

#### **크기 관련 속성 비교표**

| 속성 | 대상 | 의미 | 스크롤바 포함 | 사용 예시 |
|------|------|------|---------------|-----------|
| `scrollHeight` | 요소 | 스크롤 가능한 전체 높이 | ❌ | `element.scrollHeight` |
| `offsetHeight` | 요소 | 테두리 포함 전체 높이 | ✅ | `element.offsetHeight` |
| `clientHeight` | 요소 | 패딩 포함, 테두리/스크롤바 제외 | ❌ | `element.clientHeight` |
| `innerHeight` | 윈도우 | 뷰포트 높이 (스크롤바 포함) | ✅ | `window.innerHeight` |
| `outerHeight` | 윈도우 | 브라우저 창 전체 높이 | ✅ | `window.outerHeight` |

#### **실제 사용 예제로 차이점 확인**
```javascript
function analyzeElementDimensions(element) {
    console.log('=== 요소 크기 분석 ===');
    console.log('scrollHeight (스크롤 전체):', element.scrollHeight);
    console.log('offsetHeight (테두리 포함):', element.offsetHeight);
    console.log('clientHeight (내용 영역):', element.clientHeight);

    console.log('\n=== 스크롤 상태 ===');
    console.log('scrollTop (현재 스크롤 위치):', element.scrollTop);
    console.log('스크롤 가능한 범위:', element.scrollHeight - element.clientHeight);
    console.log('스크롤 진행률:', (element.scrollTop / (element.scrollHeight - element.clientHeight) * 100).toFixed(1) + '%');
}

// 사용 예시
const scrollableDiv = document.querySelector('.scrollable');
analyzeElementDimensions(scrollableDiv);
```

#### **뷰포트 크기 속성 비교**
```javascript
function compareViewportProperties() {
    console.log('=== 뷰포트 크기 비교 ===');

    // 윈도우 크기 (스크롤바 포함)
    console.log('window.innerWidth:', window.innerWidth);
    console.log('window.innerHeight:', window.innerHeight);

    // 문서 클라이언트 크기 (스크롤바 제외)
    console.log('document.documentElement.clientWidth:', document.documentElement.clientWidth);
    console.log('document.documentElement.clientHeight:', document.documentElement.clientHeight);

    // 브라우저 창 전체 크기
    console.log('window.outerWidth:', window.outerWidth);
    console.log('window.outerHeight:', window.outerHeight);

    // 화면 해상도
    console.log('screen.width:', screen.width);
    console.log('screen.height:', screen.height);
}
```

#### **getBoundingClientRect vs 스크롤 속성**
```javascript
function comparePositionMethods(element) {
    // getBoundingClientRect: 뷰포트 기준 위치
    const rect = element.getBoundingClientRect();

    // 스크롤 고려한 절대 위치
    const absoluteTop = rect.top + window.pageYOffset;
    const absoluteLeft = rect.left + window.pageXOffset;

    console.log('=== 위치 정보 비교 ===');
    console.log('뷰포트 기준 위치 (rect.top):', rect.top);
    console.log('페이지 기준 절대 위치:', absoluteTop);
    console.log('현재 스크롤 위치:', window.pageYOffset);
}
```

### 💡 **속성 선택 가이드라인**

#### **스크롤 위치를 얻을 때**
- 🥇 **최우선**: `window.scrollY` / `window.scrollX` (현대적)
- 🥈 **차선**: `window.pageYOffset` / `window.pageXOffset` (호환성)
- 🥉 **최후**: `document.documentElement.scrollTop` (IE 대응)

#### **요소 크기를 확인할 때**
- 📐 **전체 콘텐츠 크기**: `scrollHeight` / `scrollWidth`
- 📏 **보이는 영역 크기**: `clientHeight` / `clientWidth`
- 📊 **테두리 포함 크기**: `offsetHeight` / `offsetWidth`

#### **성능을 고려할 때**
```javascript
// ✅ 좋음: 한 번만 접근
const scrollY = window.scrollY;
const progress = (scrollY / maxScroll) * 100;

// ❌ 나쁨: 반복 접근
const progress = (window.scrollY / maxScroll) * 100;
if (window.scrollY > 100) { /* ... */ }
```

---

## 📏 요소별 스크롤 값

### 1. 특정 요소의 스크롤 위치

```javascript
const element = document.querySelector('.scrollable-element');

// 요소 내부의 스크롤 위치
const elementScrollTop = element.scrollTop;
const elementScrollLeft = element.scrollLeft;

console.log('요소 스크롤 Y:', elementScrollTop);
console.log('요소 스크롤 X:', elementScrollLeft);
```

### 2. 요소의 스크롤 가능한 크기

```javascript
const element = document.querySelector('.scrollable-element');

// 스크롤 가능한 전체 높이/너비
const scrollHeight = element.scrollHeight;
const scrollWidth = element.scrollWidth;

// 실제 보이는 영역의 높이/너비
const clientHeight = element.clientHeight;
const clientWidth = element.clientWidth;

console.log('스크롤 가능한 높이:', scrollHeight);
console.log('보이는 영역 높이:', clientHeight);
console.log('스크롤 가능한 범위:', scrollHeight - clientHeight);
```

---

## 📐 스크롤 위치 및 크기 정보

### 1. 페이지 전체 크기

```javascript
// 페이지 전체 높이
const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
);

// 페이지 전체 너비
const pageWidth = Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.clientWidth,
    document.documentElement.scrollWidth,
    document.documentElement.offsetWidth
);

console.log('페이지 전체 높이:', pageHeight);
console.log('페이지 전체 너비:', pageWidth);
```

### 2. 뷰포트 크기

```javascript
// 뷰포트 (보이는 영역) 크기
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

// 스크롤바 제외한 뷰포트 크기
const clientHeight = document.documentElement.clientHeight;
const clientWidth = document.documentElement.clientWidth;

console.log('뷰포트 높이:', viewportHeight);
console.log('뷰포트 너비:', viewportWidth);
console.log('스크롤바 제외 높이:', clientHeight);
console.log('스크롤바 제외 너비:', clientWidth);
```

### 3. 스크롤 가능한 최대값

```javascript
// 최대 스크롤 가능한 Y값
const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

// 최대 스크롤 가능한 X값
const maxScrollX = document.documentElement.scrollWidth - window.innerWidth;

console.log('최대 Y 스크롤:', maxScrollY);
console.log('최대 X 스크롤:', maxScrollX);
```

---

## 🎯 실전 예제

### 1. 스크롤 진행률 계산

```javascript
function getScrollProgress() {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    const progress = (scrollTop / scrollableHeight) * 100;
    return Math.min(100, Math.max(0, progress));
}

// 사용 예시
window.addEventListener('scroll', () => {
    const progress = getScrollProgress();
    console.log(`스크롤 진행률: ${progress.toFixed(1)}%`);

    // 프로그레스 바 업데이트
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
});
```

### 2. 특정 요소가 화면에 보이는지 확인

```javascript
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );
}

// 부분적으로 보이는지 확인
function isElementPartiallyVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    return rect.top < windowHeight && rect.bottom > 0;
}

// 사용 예시
const targetElement = document.querySelector('.target');
window.addEventListener('scroll', () => {
    if (isElementInViewport(targetElement)) {
        console.log('요소가 완전히 보임');
    } else if (isElementPartiallyVisible(targetElement)) {
        console.log('요소가 부분적으로 보임');
    }
});
```

### 3. 스크롤 방향 감지

```javascript
let lastScrollTop = 0;

function detectScrollDirection() {
    const currentScrollTop = window.pageYOffset;
    let direction = '';

    if (currentScrollTop > lastScrollTop) {
        direction = 'down';
    } else if (currentScrollTop < lastScrollTop) {
        direction = 'up';
    }

    lastScrollTop = currentScrollTop;
    return direction;
}

// 사용 예시
window.addEventListener('scroll', () => {
    const direction = detectScrollDirection();
    if (direction) {
        console.log(`스크롤 방향: ${direction}`);
        document.body.setAttribute('data-scroll-direction', direction);
    }
});
```

### 4. 스크롤 속도 측정

```javascript
let lastScrollTime = Date.now();
let lastScrollTop = window.pageYOffset;

function calculateScrollSpeed() {
    const currentTime = Date.now();
    const currentScrollTop = window.pageYOffset;

    const timeDiff = currentTime - lastScrollTime;
    const scrollDiff = Math.abs(currentScrollTop - lastScrollTop);

    const speed = scrollDiff / timeDiff; // 픽셀/밀리초

    lastScrollTime = currentTime;
    lastScrollTop = currentScrollTop;

    return speed;
}

// 사용 예시
window.addEventListener('scroll', () => {
    const speed = calculateScrollSpeed();
    console.log(`스크롤 속도: ${(speed * 1000).toFixed(2)} px/s`);
});
```

---

## 🎪 스크롤 이벤트 활용

### 1. 스크롤 이벤트 최적화 (Throttling)

```javascript
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 최적화된 스크롤 이벤트
const optimizedScrollHandler = throttle(() => {
    const scrollY = window.pageYOffset;
    console.log('스크롤 위치:', scrollY);
}, 100); // 100ms마다 실행

window.addEventListener('scroll', optimizedScrollHandler);
```

### 2. Passive 이벤트 리스너

```javascript
// 성능 최적화를 위한 passive 이벤트
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    // 스크롤 처리 로직
}, { passive: true });
```

### 3. 스크롤 이벤트 제거

```javascript
// 이벤트 리스너 제거
function scrollHandler() {
    const scrollY = window.pageYOffset;
    console.log('스크롤:', scrollY);
}

// 이벤트 추가
window.addEventListener('scroll', scrollHandler);

// 이벤트 제거
window.removeEventListener('scroll', scrollHandler);
```

---

## 📱 모바일 대응

### 1. 모바일에서의 스크롤 감지

```javascript
// 터치 스크롤 감지
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const scrollDirection = touchStartY > touchY ? 'down' : 'up';
    console.log('터치 스크롤 방향:', scrollDirection);
});
```

### 2. iOS Safari 주소창 고려

```javascript
// iOS Safari에서 주소창 숨김/표시 고려
function getViewportHeight() {
    // iOS Safari의 동적 뷰포트 고려
    return window.visualViewport ?
           window.visualViewport.height :
           window.innerHeight;
}
```

---

## 🛠️ 유용한 유틸리티 함수들

### 1. 스크롤 위치 저장/복원

```javascript
// 스크롤 위치 저장
function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
}

// 스크롤 위치 복원
function restoreScrollPosition() {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
    }
}

// 페이지 이탈 시 저장
window.addEventListener('beforeunload', saveScrollPosition);

// 페이지 로드 시 복원
window.addEventListener('load', restoreScrollPosition);
```

### 2. 부드러운 스크롤 이동

```javascript
// 특정 위치로 부드럽게 스크롤
function smoothScrollTo(targetY, duration = 1000) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeInOutCubic 이징 함수
        const easeProgress = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * easeProgress);

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

// 사용 예시
smoothScrollTo(1000); // 1000px 위치로 부드럽게 스크롤
```

### 3. 스크롤 잠금/해제

```javascript
// 스크롤 잠금
function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.pageYOffset}px`;
}

// 스크롤 해제
function unlockScroll() {
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
```

---

## 🎨 CSS와의 연동

### 1. CSS 변수로 스크롤 값 전달

```javascript
// CSS 커스텀 프로퍼티로 스크롤 값 전달
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const progress = getScrollProgress();

    document.documentElement.style.setProperty('--scroll-y', scrollY);
    document.documentElement.style.setProperty('--scroll-progress', progress);
});
```

```css
/* CSS에서 스크롤 값 활용 */
.parallax-element {
    transform: translateY(calc(var(--scroll-y) * 0.5px));
}

.progress-indicator {
    width: calc(var(--scroll-progress) * 1%);
}
```

### 2. 스크롤 기반 애니메이션

```javascript
// 스크롤에 따른 요소 애니메이션
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 요소가 화면에 들어오는 비율 계산
        const visibleRatio = Math.max(0, Math.min(1,
            (windowHeight - rect.top) / (windowHeight + rect.height)
        ));

        // 애니메이션 적용
        element.style.opacity = visibleRatio;
        element.style.transform = `translateY(${(1 - visibleRatio) * 50}px)`;
    });
}

window.addEventListener('scroll', throttle(animateOnScroll, 16));
```

---

## ⚡ 성능 팁

1. **Throttling/Debouncing 사용**: 스크롤 이벤트는 매우 자주 발생하므로 성능 최적화 필수
2. **Passive 이벤트**: `{ passive: true }` 옵션으로 성능 향상
3. **RequestAnimationFrame 활용**: 부드러운 애니메이션을 위해 사용
4. **CSS Transform 활용**: `transform` 속성이 `top/left`보다 성능이 좋음
5. **Will-change 속성**: CSS에서 `will-change: transform` 으로 GPU 가속 활용

---

이 가이드를 통해 JavaScript로 스크롤 값을 효과적으로 다룰 수 있습니다! 🚀
