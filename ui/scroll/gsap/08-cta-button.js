// CTA 버튼 애니메이션
// 마지막 행동 유도 버튼의 등장 효과

// CTA 애니메이션 실행
(function() {
    // 타임라인 생성 (여러 애니메이션을 순서대로)
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.final-cta',      // CTA 섹션이 트리거
            start: 'top 80%',           // 섹션 상단이 화면 80% 위치에 올 때
            toggleActions: 'play none none reverse'
        }
    });

    // 1단계: CTA 콘텐츠 등장
    tl.to('.cta-content', {
        opacity: 1,                     // 투명 → 불투명
        scale: 1,                       // 크기 정상화
        duration: 1.2,                  // 1.2초 동안
        ease: 'back.out(1.7)'          // 튕기는 효과
    })

    // 2단계: CTA 버튼 등장 (콘텐츠와 겹쳐서 실행)
    .to('.cta-button', {
        opacity: 1,                     // 투명 → 불투명
        y: 0,                          // 아래에서 위로
        duration: 0.8,                  // 0.8초 동안
        ease: 'power2.out'             // 부드러운 감속
    }, '-=0.6');                       // 0.6초 전에 시작 (겹쳐서 실행)

    console.log('🎯 CTA 애니메이션 설정 완료!');
})();
