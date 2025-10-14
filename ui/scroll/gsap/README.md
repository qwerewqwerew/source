# GSAP 애니메이션 효과별 분리 파일

이 폴더에는 GSAP 애니메이션 효과를 종류별로 분리한 파일들이 있습니다.

## 📁 파일 구조

### JavaScript 파일들 (JS)
1. **01-basic-setup.js** - GSAP 기본 설정 및 초기화
2. **02-floating-particles.js** - 배경에 떠다니는 파티클 효과
3. **03-header-animation.js** - 헤더 제목과 부제목 등장 효과
4. **04-card-animation.js** - 카드들의 스크롤 연동 등장 효과
5. **05-text-mask.js** - 텍스트 마스킹 슬라이딩 효과
6. **06-gallery-curtain.js** - 이미지 커튼 열기 효과
7. **07-number-counter.js** - 숫자 카운팅 애니메이션
8. **08-cta-button.js** - 행동 유도 버튼의 등장 효과
9. **09-cursor-effect.js** - 커스텀 마우스 커서 효과 (선택사항)

### CSS 파일
- **demo-style.css** - 모든 스타일이 포함된 CSS 파일

### HTML 파일들 (효과별 분리)
- **html-header.html** - 헤더 섹션 HTML
- **html-cards.html** - 카드 섹션 HTML
- **html-text-mask.html** - 텍스트 마스킹 섹션 HTML
- **html-gallery.html** - 갤러리 커튼 섹션 HTML
- **html-stats.html** - 스탯 섹션 HTML
- **html-cta.html** - CTA 섹션 HTML

### 데모 파일들
- **demo.html** - 모든 효과를 확인할 수 있는 완전한 데모 페이지
- **demo-header.html** - 헤더 애니메이션만 확인하는 데모
- **demo-cards.html** - 카드 애니메이션만 확인하는 데모
- **demo-gallery.html** - 갤러리 커튼 효과만 확인하는 데모
- **demo-stats.html** - 숫자 카운팅 애니메이션만 확인하는 데모

## 🚀 사용 방법

### 1. 모든 효과 사용하기
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP 애니메이션</title>
    <link rel="stylesheet" href="demo-style.css">
</head>
<body>
    <!-- HTML 내용 -->

    <!-- GSAP 라이브러리 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <!-- 필요한 효과들만 선택 -->
    <script src="01-basic-setup.js"></script>
    <script src="04-card-animation.js"></script>
    <script src="07-number-counter.js"></script>
</body>
</html>
```

### 2. 개별 효과만 사용하기
각 `demo-*.html` 파일을 참고하여 원하는 효과만 선택적으로 사용할 수 있습니다.

### 3. HTML 조각 활용하기
- `html-*.html` 파일들을 복사해서 원하는 섹션만 사용
- 필요한 CSS 클래스와 JavaScript 파일도 함께 포함

## 💡 초보자를 위한 팁

### 기본 원리
- 모든 애니메이션은 `즉시실행함수` 형태로 작성됨
- 함수 선언과 실행을 분리하지 않아 간단함
- 각 파일은 독립적으로 동작 가능

### 주요 GSAP 메서드
- `gsap.to()` - 현재 상태에서 목표 상태로
- `gsap.fromTo()` - 시작 상태에서 목표 상태로
- `ScrollTrigger` - 스크롤 기반 애니메이션

### 자주 사용하는 속성
- `opacity` - 투명도 (0~1)
- `x, y` - 위치 이동
- `scale` - 크기 변경
- `rotation` - 회전

## 🎯 커스터마이징

각 파일의 숫자 값들을 변경해서 원하는 효과로 조정할 수 있습니다:

```javascript
duration: 1.2,        // 애니메이션 지속 시간
delay: 0.2,          // 지연 시간
ease: 'power2.out'   // 이징 효과
```

## 🔧 문제 해결

1. **애니메이션이 작동하지 않을 때:**
   - HTML 클래스명 확인
   - GSAP 라이브러리 로드 확인
   - 콘솔 에러 메시지 확인

2. **성능 문제가 있을 때:**
   - 불필요한 효과 파일 제거
   - 모바일에서는 복잡한 효과 단순화

3. **반응형 문제:**
   - CSS 미디어 쿼리로 모바일 대응
   - `window.innerWidth` 체크 추가

## 📋 파일별 의존성

| 효과 | 필수 JS 파일 | 필수 CSS 클래스 |
|------|-------------|----------------|
| 헤더 애니메이션 | 01, 02, 03 | .main-header, .main-title, .subtitle |
| 카드 애니메이션 | 01, 04 | .reveal-card, .icon |
| 텍스트 마스킹 | 01, 05 | .text-mask-section, .masked-text, .mask |
| 갤러리 커튼 | 01, 06 | .gallery-section, .main-reveal-image |
| 숫자 카운팅 | 01, 07 | .stats-section, .stat-item, .stat-number |
| CTA 버튼 | 01, 08 | .final-cta, .cta-content, .cta-button |
