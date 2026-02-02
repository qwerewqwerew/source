# GSAP ScrollTrigger 완벽 가이드

> GreenSock Animation Platform의 ScrollTrigger 플러그인을 활용한 스크롤 기반 애니메이션 학습 교안

---

## 목차

1. [기본 개념](#1-기본-개념)
2. [ScrollTrigger 기초](#2-scrolltrigger-기초)
3. [Timeline과 ScrollTrigger](#3-timeline과-scrolltrigger)
4. [섹션 고정 (Pin)](#4-섹션-고정-pin)
5. [패럴랙스 효과](#5-패럴랙스-효과)
6. [네비게이션 연동](#6-네비게이션-연동)
7. [수평 스크롤](#7-수평-스크롤)
8. [고급 텍스트 애니메이션](#8-고급-텍스트-애니메이션)

---

## 1. 기본 개념

### 1.1 필수 라이브러리

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
```

### 1.2 GSAP 기본 문법

```javascript
// gsap.to() - 현재 상태에서 목표 상태로 애니메이션
gsap.to(target, { duration: 2, x: 500, rotation: 360 });

// gsap.from() - 시작 상태에서 현재 상태로 애니메이션
gsap.from(target, { y: 100, autoAlpha: 0 });

// gsap.fromTo() - 시작과 끝 상태 모두 지정
gsap.fromTo(target, { x: -100 }, { x: 100 });
```

---

## 2. ScrollTrigger 기초

> **파일 참조:** `js/01.js`

### 2.1 기본 트리거

요소가 뷰포트에 들어오면 애니메이션이 시작됩니다.

```javascript
gsap.to('.box', {
    duration: 2,
    x: 500,
    rotation: 360,
    scrollTrigger: {
        trigger: '.box',  // 트리거 대상 요소
    },
});
```

### 2.2 toggleActions

스크롤 방향에 따른 4가지 상태를 제어합니다.

```javascript
gsap.to('.box', {
    x: 500,
    rotation: 360,
    scrollTrigger: {
        trigger: '.box',
        toggleActions: 'play none reverse none',
        // 순서: onEnter, onLeave, onEnterBack, onLeaveBack
        // 값: play, pause, resume, reset, restart, complete, reverse, none
    },
});
```

| 이벤트 | 설명 |
|--------|------|
| `onEnter` | 스크롤 내려서 트리거 영역 진입 |
| `onLeave` | 스크롤 내려서 트리거 영역 이탈 |
| `onEnterBack` | 스크롤 올려서 트리거 영역 재진입 |
| `onLeaveBack` | 스크롤 올려서 트리거 영역 이탈 |

### 2.3 start / end

애니메이션 시작과 끝 위치를 정의합니다.

```javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top 50%',      // 요소의 top이 뷰포트 50% 위치에 도달 시
    end: 'bottom 20%',     // 요소의 bottom이 뷰포트 20% 위치에 도달 시
    markers: true,          // 디버깅용 마커 표시
}
```

**위치 값 형식:** `'요소위치 뷰포트위치'`
- 요소 위치: `top`, `center`, `bottom`, `px값`, `%값`
- 뷰포트 위치: `top`, `center`, `bottom`, `px값`, `%값`

### 2.4 scrub

스크롤 위치와 애니메이션 진행률을 동기화합니다.

```javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top 50%',
    end: 'bottom 20%',
    scrub: true,    // 즉시 반응
    // scrub: 1,    // 1초 지연
    // scrub: 0.5,  // 0.5초 지연 (부드러운 효과)
}
```

### 2.5 pin

애니메이션 구간 동안 요소를 화면에 고정합니다.

```javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top 50%',
    end: 'bottom 200px',
    scrub: true,
    pin: true,  // 요소 고정
}
```

### 2.6 toggleClass

트리거 활성화 시 클래스를 토글합니다.

```javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    end: 'bottom 20%',
    toggleClass: 'active',
    // 또는 상세 설정
    toggleClass: {
        className: 'active',
        targets: '.target-element'
    }
}
```

### 2.7 콜백 함수

스크롤 이벤트에 따른 콜백을 실행합니다.

```javascript
scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    end: 'bottom 20%',
    scrub: true,

    onEnter: () => console.log("진입"),
    onLeave: () => console.log("이탈"),
    onEnterBack: () => console.log("재진입"),
    onLeaveBack: () => console.log("역방향 이탈"),

    onUpdate: (self) => {
        console.log('진행률:', self.progress.toFixed(3));
    },
    onToggle: (self) => {
        console.log('활성화 상태:', self.isActive);
    },
}
```

---

## 3. Timeline과 ScrollTrigger

> **파일 참조:** `js/02.js`

### 3.1 Timeline 기본

여러 애니메이션을 순차적으로 연결합니다.

```javascript
const ani = gsap.timeline();

ani.to('.box', { rotation: 450, scale: 0 })
   .to('.box', { rotation: 360 * 5, scale: 1 });

// 타임라인에 ScrollTrigger 연결
ScrollTrigger.create({
    animation: ani,
    trigger: '.section',
    start: 'top top',
    end: '+=2000',      // 시작점에서 2000px 스크롤 후 종료
    scrub: true,
    pin: true,
    anticipatePin: 1,   // 핀 시작 전 부드러운 전환
    markers: true,
});
```

### 3.2 순차 나타나기

```javascript
const ani = gsap.timeline();

ani.from('.i1', { y: 200, autoAlpha: 0 })
   .from('.i2', { y: 100, autoAlpha: 0 })
   .from('.i3', { y: -100, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani,
    trigger: '.section',
    start: 'top top',
    end: '+=2000',
    scrub: true,
    pin: true,
});
```

### 3.3 Stagger (순차 딜레이)

여러 요소에 시간차를 두고 애니메이션을 적용합니다.

```javascript
const ani = gsap.timeline();

ani.from('.box', {
    y: -300,
    scale: 0.5,
    autoAlpha: 0,
    ease: 'back.out(4)',
    stagger: 0.3,  // 0.3초 간격으로 순차 실행
});

// 또는 상세 설정
ani.from('.box', {
    y: -300,
    autoAlpha: 0,
    stagger: {
        amount: 3,       // 총 3초 동안
        from: 'random',  // 랜덤 순서
        // from: 'start', 'end', 'center', 'edges', 'random'
    },
});
```

### 3.4 Position Parameter (타이밍 제어)

```javascript
const ani = gsap.timeline();

// 기본: 이전 애니메이션 완료 후 시작
ani.to('.t1', { xPercent: 300 })
   .to('.t2', { xPercent: -300 }, '-=1')     // 1초 전에 시작
   .to('.t3', { xPercent: 300 }, '+=0.5')    // 0.5초 후에 시작
   .to('.t4', { xPercent: -300 }, 'text');   // 'text' 라벨과 동시 시작

// 라벨을 사용한 그룹핑 (동시 실행)
ani.to('.t1', { xPercent: 300 })
   .to('.t2', { xPercent: -300 }, 'text')
   .to('.t3', { xPercent: 300 }, 'text')
   .to('.t4', { xPercent: -300 }, 'text');
```

### 3.5 이미지/텍스트 확대 효과

```javascript
// 텍스트 확대 후 사라지기
const ani = gsap.timeline();
ani.to('.text', { scale: 60, duration: 2 })
   .to('.text', { autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani,
    trigger: '.section',
    start: 'top top',
    end: '+=4000',
    scrub: true,
    pin: true,
});
```

### 3.6 화면 밖에서 들어오기

```javascript
const ani = gsap.timeline();

ani.from('.t1', { x: innerWidth * 1 })      // 오른쪽에서
   .from('.t2', { x: innerWidth * -1 })     // 왼쪽에서
   .from('.t3', { x: innerWidth * 1 })
   .from('.box', { x: innerWidth * 1, rotation: 360, scale: 5.5 });
```

---

## 4. 섹션 고정 (Pin)

> **파일 참조:** `js/03.js`

### 4.1 단일 섹션 고정

```javascript
ScrollTrigger.create({
    trigger: '.section',
    start: 'top top',
    pin: true,
    pinSpacing: false,  // 고정 시 공간 유지 안 함
});
```

### 4.2 여러 섹션 연속 고정

```javascript
gsap.utils.toArray('.box').forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
    });
});
```

### 4.3 Snap 스크롤 (자석 효과)

```javascript
let panels = gsap.utils.toArray('.box');
let tops = panels.map((panel) =>
    ScrollTrigger.create({ trigger: panel, start: 'top top' })
);

// 각 패널 고정
panels.forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
    });
});

// Snap 설정
ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
            let panelStarts = tops.map((st) => st.start);
            let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
    },
});
```

---

## 5. 패럴랙스 효과

> **파일 참조:** `js/04.js`

### 5.1 기본 패럴랙스

서로 다른 속도로 움직여 깊이감을 표현합니다.

```javascript
gsap.to('.desc', {
    yPercent: -100,
    ease: 'none',
    scrollTrigger: {
        trigger: '.desc',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    },
});
```

### 5.2 여러 요소 패럴랙스

```javascript
gsap.utils.toArray('.desc').forEach((item) => {
    gsap.to(item, {
        yPercent: -200,
        ease: 'none',
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,  // 부드러운 지연
        },
    });
});
```

### 5.3 방향별 나타나기 애니메이션

```javascript
const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
    let x = 0, y = 0;
    let delay = item.dataset.delay;

    // 클래스에 따른 방향 설정
    if (item.classList.contains('ltr')) {        // Left to Right
        x = -100; y = 0;
    } else if (item.classList.contains('btt')) { // Bottom to Top
        x = 0; y = 100;
    } else if (item.classList.contains('ttb')) { // Top to Bottom
        x = 0; y = -100;
    } else {                                      // Right to Left (기본)
        x = 100; y = 0;
    }

    gsap.fromTo(item,
        { autoAlpha: 0, x: x, y: y },
        { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, ease: 'expo' }
    );
};

// 각 요소에 적용
gsap.utils.toArray('.reveal').forEach((item) => {
    hide(item);
    ScrollTrigger.create({
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => animate(item),
    });
});
```

**HTML 사용 예:**
```html
<div class="reveal ltr" data-delay="0.2">왼쪽에서</div>
<div class="reveal btt" data-delay="0.4">아래에서</div>
<div class="reveal ttb" data-delay="0.6">위에서</div>
```

---

## 6. 네비게이션 연동

> **파일 참조:** `js/09.js`

### 6.1 스크롤 스파이 + 부드러운 스크롤

```javascript
let links = gsap.utils.toArray('nav ul li a');

links.forEach((link) => {
    let element = document.querySelector(link.getAttribute('href'));
    let box = element.querySelector('.box');

    // 초기 상태 설정
    gsap.set(box, { scale: 0, rotation: -180, opacity: 0 });

    // 각 섹션의 시작점 저장
    let linkST = ScrollTrigger.create({
        trigger: element,
        start: 'top top',
    });

    // 스크롤 스파이
    ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
            if (self.isActive) {
                setActive(link);
                // 진입 애니메이션
                gsap.to(box, {
                    scale: 1, rotation: 0, opacity: 1,
                    duration: 0.8, ease: "back.out(1.7)"
                });
            } else {
                // 이탈 애니메이션
                gsap.to(box, {
                    scale: 0, rotation: -180, opacity: 0,
                    duration: 0.5, ease: "back.in(1.7)"
                });
            }
        }
    });

    // 클릭 시 부드러운 스크롤
    link.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: linkST.start,
            overwrite: 'auto'
        });
    });
});

function setActive(link) {
    links.forEach((el) => el.classList.remove('active'));
    link.classList.add('active');
}
```

### 6.2 고정 네비게이션 활성화

```javascript
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
        className: 'active',
        targets: 'nav',
    },
});
```

---

## 7. 수평 스크롤

> **파일 참조:** `js/12.js`, `js/13.js`, `js/14.js`, `js/15.js`

### 7.1 기본 수평 스크롤

```javascript
const sections = gsap.utils.toArray('.section');

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal',
        pin: true,
        scrub: 1,
        end: () => '+=' + document.querySelector('.horizontal').offsetWidth,
    },
});
```

### 7.2 Snap이 적용된 수평 스크롤

```javascript
const horizontal = document.querySelector('.horizontal');
const sections = gsap.utils.toArray('.horizontal > section');

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: () => '+=' + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
    },
});
```

### 7.3 수평 스크롤 내 개별 애니메이션

`containerAnimation`을 사용하여 수평 스크롤 내부 요소에 개별 트리거를 적용합니다.

```javascript
let sections = gsap.utils.toArray('.section');

// 메인 수평 스크롤
let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.horizontal').offsetWidth,
    },
});

// 수평 스크롤 내 개별 요소 애니메이션
gsap.set('.box-1, .box-2', { y: 100 });

gsap.to('.box-1', {
    y: -130,
    duration: 2,
    ease: 'elastic',
    scrollTrigger: {
        trigger: '.box-1',
        containerAnimation: scrollTween,  // 핵심!
        start: 'left center',
        toggleActions: 'play none none reset',
    },
});

gsap.to('.box-2', {
    y: -120,
    rotate: 750,
    backgroundColor: '#1e90ff',
    scrollTrigger: {
        trigger: '.box-2',
        containerAnimation: scrollTween,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true,
    },
});

// toggleClass도 가능
ScrollTrigger.create({
    trigger: '.box-3',
    containerAnimation: scrollTween,
    toggleClass: 'active',
    start: 'center 60%',
});
```

---

## 8. 고급 텍스트 애니메이션

> **파일 참조:** `js/17.js`

### 8.1 endTrigger 활용

시작과 끝 트리거를 다른 요소로 지정합니다.

```javascript
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.trigger-1',      // 시작 트리거
        start: 'top top',
        endTrigger: '.trigger-3',   // 끝 트리거 (다른 요소)
        end: 'top top',
        scrub: 3,
        markers: true,
    },
});

// 텍스트가 아래에서 올라와서 위로 사라짐
tl.to('.my-headline span', {
    y: '0%',
    ease: 'power2.out',
    stagger: 0.3,
});

tl.to('.my-headline span', {
    y: '-100%',
    ease: 'power2.out',
    stagger: 0.3,
}, 0.8);  // 0.8초 위치에서 시작
```

---

## 주요 옵션 요약

### ScrollTrigger 옵션

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `trigger` | 트리거 요소 | - |
| `start` | 시작 위치 | `"top bottom"` |
| `end` | 종료 위치 | `"bottom top"` |
| `scrub` | 스크롤 동기화 | `false` |
| `pin` | 요소 고정 | `false` |
| `pinSpacing` | 고정 시 공간 유지 | `true` |
| `anticipatePin` | 핀 시작 전 준비 시간 | `0` |
| `snap` | 스냅 스크롤 | `false` |
| `markers` | 디버깅 마커 | `false` |
| `toggleActions` | 상태별 동작 | `"play none none none"` |
| `toggleClass` | 클래스 토글 | - |
| `containerAnimation` | 컨테이너 애니메이션 | - |
| `invalidateOnRefresh` | 새로고침 시 재계산 | `false` |

### 자주 사용하는 Ease

| Ease | 설명 |
|------|------|
| `"none"` | 일정한 속도 |
| `"power1"` ~ `"power4"` | 부드러운 가감속 |
| `"back.out(1.7)"` | 튕기는 효과 |
| `"elastic"` | 탄성 효과 |
| `"expo"` | 강한 가감속 |

---

## 참고 자료

- [GSAP 공식 문서](https://greensock.com/docs/)
- [ScrollTrigger 문서](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Ease Visualizer](https://greensock.com/docs/v3/Eases)
