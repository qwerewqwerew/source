// 갤러리 커튼 효과
// 이미지 위의 좌우 커튼이 열리며 이미지가 나타나는 효과

// 갤러리 커튼 애니메이션 실행
(function() {
    // 필요한 요소들 찾기
    const img = document.querySelector('.main-reveal-image');
    if (!img) {
        console.log('⚠️ 메인 이미지 요소를 찾을 수 없습니다.');
        return;
    }

    const content = img.querySelector('.image-content');
    const leftCurtain = img.querySelector('.reveal-curtain-left');
    const rightCurtain = img.querySelector('.reveal-curtain-right');

    // 1. 배경 패럴랙스 효과 (배경이 천천히 움직임)
    gsap.to('.gallery-section', {
        backgroundPosition: '100% 50%',  // 배경 위치 변경
        ease: 'none',                    // 일정한 속도
        scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top bottom',         // 섹션이 화면 아래에서 시작
            end: 'bottom top',           // 섹션이 화면 위로 벗어날 때 끝
            scrub: 1                     // 스크롤과 동기화
        }
    });

    // 2. 갤러리 제목 애니메이션
    gsap.fromTo('.gallery-title',
        { opacity: 0, y: 50 },          // 시작: 투명하고 아래에 위치
        {
            opacity: 1, y: 0,           // 끝: 불투명하고 원래 위치
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.gallery-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // 3. 갤러리 부제목 애니메이션 (제목보다 조금 늦게)
    gsap.fromTo('.gallery-subtitle',
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2,                  // 0.2초 늦게 시작
            scrollTrigger: {
                trigger: '.gallery-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // 4. 이미지 줌아웃 효과 (스크롤하면서 천천히 줌아웃)
    if (content) {
        gsap.set(content, { scale: 1.2 }); // 처음에는 확대되어 있음

        gsap.fromTo(content,
            { scale: 1.2 },              // 시작: 확대
            {
                scale: 1.0,              // 끝: 원래 크기
                ease: 'none',
                scrollTrigger: {
                    trigger: img,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1             // 스크롤과 동기화
                }
            }
        );
    }

    // 5. 왼쪽 커튼 열기 (왼쪽으로 사라짐)
    if (leftCurtain) {
        gsap.fromTo(leftCurtain,
            { x: '0%' },                 // 시작: 원래 위치
            {
                x: '-100%',              // 끝: 왼쪽으로 완전히 사라짐
                ease: 'none',
                scrollTrigger: {
                    trigger: img,
                    start: 'top 80%',    // 이미지 상단이 화면 80% 위치
                    end: 'top 20%',      // 이미지 상단이 화면 20% 위치
                    scrub: 1             // 스크롤과 동기화
                }
            }
        );
    }

    // 6. 오른쪽 커튼 열기 (오른쪽으로 사라짐)
    if (rightCurtain) {
        gsap.fromTo(rightCurtain,
            { x: '0%' },                 // 시작: 원래 위치
            {
                x: '100%',               // 끝: 오른쪽으로 완전히 사라짐
                ease: 'none',
                scrollTrigger: {
                    trigger: img,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1
                }
            }
        );
    }

    console.log('🎭 갤러리 커튼 효과 설정 완료!');
})();
