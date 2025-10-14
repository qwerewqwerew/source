// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 후 애니메이션 시작
window.addEventListener('load', function() {
    initCurtainAnimation();
});

function initCurtainAnimation() {
    // 모든 섹션에 대해 커튼 애니메이션 적용
    gsap.utils.toArray('.section').forEach((section, index) => {
        const leftCurtain = section.querySelector('.curtain-left');
        const rightCurtain = section.querySelector('.curtain-right');
        const image = section.querySelector('.image');
        const text = section.querySelector('.content div:first-child');

        // 좌측 커튼 애니메이션 (왼쪽으로 이동하며 사라짐)
        gsap.fromTo(leftCurtain,
            {
                x: '0%'
            },
            {
                x: '-100%',
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );

        // 우측 커튼 애니메이션 (오른쪽으로 이동하며 사라짐)
        gsap.fromTo(rightCurtain,
            {
                x: '0%'
            },
            {
                x: '100%',
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );

        // 이미지 스케일 애니메이션
        gsap.fromTo(image,
            {
                scale: 0.5
            },
            {
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                }
            }
        );

        // 두 번째 섹션의 텍스트 스케일 애니메이션
        if (index === 1) { // 두 번째 섹션 (index는 0부터 시작)
            gsap.fromTo(text,
                {
                    scale: 1
                },
                {
                    scale: 8,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                    }
                }
            );
        }
    });
}

console.log('� Simple Curtain Animation Loaded!');