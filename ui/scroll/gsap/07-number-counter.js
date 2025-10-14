// 숫자 카운팅 애니메이션
// 통계 숫자가 0부터 목표값까지 올라가는 효과

// 스탯 카운팅 애니메이션 실행
(function() {
    // 모든 '.stat-item' 요소들 찾아서 하나씩 처리
    gsap.utils.toArray('.stat-item').forEach((item, i) => {
        // 숫자를 표시할 요소 찾기
        const numEl = item.querySelector('.stat-number');
        if (!numEl) return; // 숫자 요소가 없으면 건너뛰기

        // 목표 숫자 가져오기 (data-count 속성에서)
        const target = parseInt(numEl.getAttribute('data-count')) || 100;

        // 1. 스탯 아이템 등장 애니메이션
        gsap.fromTo(item,
            // 시작 상태
            {
                opacity: 0,    // 투명
                y: 50          // 아래쪽에 위치
            },
            // 끝 상태
            {
                opacity: 1,    // 불투명
                y: 0,          // 원래 위치
                duration: 1,   // 1초 동안
                ease: 'power2.out',
                delay: i * 0.2, // 각 아이템마다 0.2초씩 지연
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',  // 아이템 상단이 화면 90% 위치에 올 때
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // 2. 숫자 카운팅 애니메이션
        ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {  // 화면에 들어올 때 실행
                // 숫자를 0부터 목표값까지 카운팅
                gsap.fromTo(numEl,
                    {
                        textContent: 0  // 시작: 0
                    },
                    {
                        textContent: target,    // 끝: 목표값
                        duration: 2,            // 2초 동안
                        ease: 'power2.out',
                        delay: i * 0.2 + 0.5,   // 아이템 애니메이션보다 0.5초 늦게
                        snap: { textContent: 1 }, // 정수로 반올림
                        onUpdate: function() {
                            // 애니메이션 중에 숫자 업데이트
                            numEl.textContent = Math.ceil(this.targets()[0].textContent);
                        }
                    }
                );
            }
        });
    });

    console.log('📊 숫자 카운팅 애니메이션 설정 완료!');
})();
