// 카드 애니메이션
// 스크롤 시 카드들이 하나씩 나타나는 효과

// 스크롤에 따른 카드 애니메이션 실행
(function() {
    // 모든 '.reveal-card' 요소들을 찾아서 하나씩 처리
    gsap.utils.toArray('.reveal-card').forEach((card, i) => {
        // 카드 안의 아이콘 찾기
        const icon = card.querySelector('.icon');

        // 카드 등장 애니메이션
        gsap.fromTo(card,
            // 시작 상태 (보이지 않음)
            {
                opacity: 0,      // 투명
                y: 100,          // 아래쪽에 위치
                rotationX: 45    // X축으로 45도 회전
            },
            // 끝 상태 (보임)
            {
                opacity: 1,      // 불투명
                y: 0,            // 원래 위치
                rotationX: 0,    // 회전 없음
                duration: 1.2,   // 1.2초 동안
                ease: 'power2.out',
                delay: i * 0.2,  // 카드마다 0.2초씩 지연
                scrollTrigger: {
                    trigger: card,              // 이 카드가 트리거
                    start: 'top 85%',          // 카드 상단이 화면 85% 위치에 올 때
                    toggleActions: 'play none none reverse' // 스크롤 시 재생, 되돌아갈 때 역재생
                }
            }
        );

        // 아이콘 애니메이션 (카드보다 조금 늦게)
        if (icon) {
            gsap.fromTo(icon,
                // 시작 상태
                {
                    opacity: 0,        // 투명
                    scale: 0,          // 크기 0
                    rotation: -180     // 반시계방향 180도 회전
                },
                // 끝 상태
                {
                    opacity: 1,        // 불투명
                    scale: 1,          // 원래 크기
                    rotation: 0,       // 회전 없음
                    duration: 0.8,     // 0.8초 동안
                    ease: 'back.out(1.7)', // 튕기는 효과
                    delay: i * 0.2 + 0.3,   // 카드 애니메이션보다 0.3초 늦게
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });

    console.log('🃏 카드 애니메이션 설정 완료!');
})();
