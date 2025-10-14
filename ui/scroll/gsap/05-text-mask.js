// 텍스트 마스킹 애니메이션
// 텍스트가 아래에서 위로 슬라이딩되며 나타나는 효과

// 텍스트 마스킹 애니메이션 실행
(function() {
    // 마스킹된 텍스트의 span 요소들 찾기
    const masks = gsap.utils.toArray('.masked-text .mask span');

    if (masks.length === 0) {
        console.log('⚠️ 마스킹 텍스트 요소를 찾을 수 없습니다.');
        return;
    }

    // 텍스트 슬라이딩 애니메이션
    gsap.fromTo(masks,
        // 시작 상태 (텍스트가 아래에 숨어있음)
        {
            y: '100%'    // 아래쪽에 완전히 숨김
        },
        // 끝 상태 (텍스트가 보임)
        {
            y: '0%',           // 원래 위치로
            duration: 1.5,     // 1.5초 동안
            ease: 'power4.out', // 강한 감속 효과
            stagger: 0.1,      // 각 글자마다 0.1초씩 지연
            scrollTrigger: {
                trigger: '.text-mask-section',  // 트리거 요소
                start: 'top 70%',              // 섹션 상단이 화면 70% 위치에 올 때
                toggleActions: 'play none none reverse'
            }
        }
    );

    console.log('🎭 텍스트 마스킹 애니메이션 설정 완료!');
})();
