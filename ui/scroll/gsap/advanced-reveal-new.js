// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 시 초기 설정
window.addEventListener('load', function() {
    // 플로팅 파티클 생성
    createFloatingParticles();

    // 메인 헤더 애니메이션
    initHeaderAnimation();

    // 모든 리빌 애니메이션 초기화
    initRevealAnimations();
});

// 플로팅 파티클 생성 함수
function createFloatingParticles() {
    const header = document.querySelector('.main-header');
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // 랜덤 크기와 위치
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;

        header.appendChild(particle);

        // GSAP로 파티클 애니메이션
        gsap.to(particle, {
            y: `${Math.random() * 200 - 100}px`,
            x: `${Math.random() * 200 - 100}px`,
            rotation: 360,
            duration: 10 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// 헤더 애니메이션 초기화
function initHeaderAnimation() {
    const headerTl = gsap.timeline();

    headerTl
        .to('.main-title', {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: 'back.out(1.7)'
        })
        .to('.subtitle', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out'
        }, '-=0.8');
}

// 모든 리빌 애니메이션 초기화
function initRevealAnimations() {
    // 카드 애니메이션
    initCardAnimations();

    // 텍스트 마스킹 애니메이션
    initTextMaskAnimation();

    // 갤러리 애니메이션
    initGalleryAnimation();

    // 스탯 애니메이션
    initStatsAnimation();

    // CTA 애니메이션
    initCTAAnimation();
}

// 카드 애니메이션
function initCardAnimations() {
    gsap.utils.toArray('.reveal-card').forEach((card, index) => {
        const icon = card.querySelector('.icon');

        // 카드 리빌 애니메이션
        gsap.fromTo(card,
            {
                opacity: 0,
                y: 100,
                rotationX: 45
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                ease: 'power2.out',
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // 아이콘 애니메이션
        gsap.fromTo(icon,
            {
                opacity: 0,
                scale: 0,
                rotation: -180
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: index * 0.2 + 0.3,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// 텍스트 마스킹 애니메이션
function initTextMaskAnimation() {
    const masks = gsap.utils.toArray('.masked-text .mask span');

    gsap.fromTo(masks,
        {
            y: '100%'
        },
        {
            y: '0%',
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.text-mask-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

// 갤러리 애니메이션 - 커튼 효과와 스크롤 크기 변화
function initGalleryAnimation() {
    // 배경 패럴랙스 효과
    gsap.to('.gallery-section', {
        backgroundPosition: '100% 50%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    // 갤러리 헤더 애니메이션
    gsap.fromTo('.gallery-title',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.gallery-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    gsap.fromTo('.gallery-subtitle',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: '.gallery-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // 메인 리빌 이미지 애니메이션
    const mainImage = document.querySelector('.main-reveal-image');
    const imageContent = mainImage.querySelector('.image-content');
    const leftCurtain = mainImage.querySelector('.reveal-curtain-left');
    const rightCurtain = mainImage.querySelector('.reveal-curtain-right');

    // 초기 설정
    gsap.set(imageContent, { scale: 1.2 });

    // 스크롤에 따른 이미지 크기 변화
    gsap.fromTo(imageContent,
        { scale: 1.2 },
        {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
                trigger: mainImage,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        }
    );

    // 스크롤에 따른 좌우 커튼 리빌 효과
    gsap.fromTo(leftCurtain,
        { x: '0%' },
        {
            x: '-100%',
            ease: 'none',
            scrollTrigger: {
                trigger: mainImage,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            }
        }
    );

    gsap.fromTo(rightCurtain,
        { x: '0%' },
        {
            x: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: mainImage,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            }
        }
    );
}// 스탯 애니메이션 (숫자 카운팅 포함)
function initStatsAnimation() {
    gsap.utils.toArray('.stat-item').forEach((item, index) => {
        const numberElement = item.querySelector('.stat-number');
        const targetCount = parseInt(numberElement.getAttribute('data-count'));

        // 스탯 아이템 리빌
        gsap.fromTo(item,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // 숫자 카운팅 애니메이션
        ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
                gsap.fromTo(numberElement,
                    {
                        textContent: 0
                    },
                    {
                        textContent: targetCount,
                        duration: 2,
                        ease: 'power2.out',
                        delay: index * 0.2 + 0.5,
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            numberElement.textContent = Math.ceil(this.targets()[0].textContent);
                        }
                    }
                );
            }
        });
    });
}

// CTA 애니메이션
function initCTAAnimation() {
    const ctaTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.final-cta',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    ctaTl
        .to('.cta-content', {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.7)'
        })
        .to('.cta-button', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6');
}

// 고급 인터랙션 효과들
function initAdvancedInteractions() {
    // 마우스 따라다니는 커서 효과
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1
        });
    });

    // 호버 효과로 커서 크기 변경
    document.querySelectorAll('a, .reveal-image').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
}

// 스크롤 트리거 새로고침 (반응형 대응)
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// 페이지 새로고침 시 스크롤 위치 초기화
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// 고급 인터랙션 초기화 (선택사항)
// initAdvancedInteractions();

// 디버그 모드 (개발 시에만 사용)
const DEBUG_MODE = false;

if (DEBUG_MODE) {
    ScrollTrigger.defaults({ markers: true });
    console.log('Debug mode enabled - ScrollTrigger markers visible');
}

console.log('🎨 Advanced GSAP Reveal Animations with Curtain Effects Loaded!');

// 성능 최적화를 위한 애니메이션 품질 설정
gsap.config({
    force3D: true,
    nullTargetWarn: false
});

// 모바일 성능 최적화
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    // 모바일에서는 일부 애니메이션 단순화
    gsap.globalTimeline.timeScale(1.2); // 애니메이션 속도 약간 증가
}
