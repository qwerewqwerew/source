// 헤더 제목 애니메이션
// 페이지 상단의 메인 제목과 부제목에 등장 효과

// 헤더 애니메이션 실행
(function() {
    // 타임라인 생성 (여러 애니메이션을 순서대로 실행)
    const tl = gsap.timeline();

    // 1단계: 메인 제목 애니메이션
    tl.to('.main-title', {
        opacity: 1,              // 투명 → 불투명
        scale: 1,                // 크기 정상화
        rotation: 0,             // 회전 정상화
        duration: 1.5,           // 1.5초 동안
        ease: 'back.out(1.7)'    // 튕기는 효과
    })

    // 2단계: 부제목 애니메이션 (메인 제목과 겹쳐서 실행)
    .to('.subtitle', {
        opacity: 1,              // 투명 → 불투명
        y: 0,                    // 아래에서 위로
        duration: 1.2,           // 1.2초 동안
        ease: 'power2.out'       // 부드러운 감속
    }, '-=0.8');                 // 0.8초 전에 시작 (겹쳐서 실행)

    console.log('🎯 헤더 애니메이션 시작!');
})();
