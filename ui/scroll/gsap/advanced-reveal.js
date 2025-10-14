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

// 리빌 갤러리 애니메이션
function initGalleryAnimation() {
    gsap.utils.toArray('.reveal-image').forEach((container, index) => {
        const overlay = container.querySelector('.reveal-overlay');
        const imageContent = container.querySelector('.image-content');

        // 컨테이너 초기 설정
        gsap.set(container, { scale: 0.8, opacity: 0 });
        gsap.set(imageContent, { scale: 1.3 });

        // 컨테이너 나타나기
        gsap.to(container, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });

        // 리빌 효과 (오버레이 제거)
        if (overlay.classList.contains('slide-right')) {
            gsap.to(overlay, {
                x: '100%',
                duration: 1.2,
                ease: 'power2.inOut',
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        } else if (overlay.classList.contains('slide-left')) {
            gsap.to(overlay, {
                x: '-100%',
                duration: 1.2,
                ease: 'power2.inOut',
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        } else if (overlay.classList.contains('slide-up')) {
            gsap.to(overlay, {
                y: '-100%',
                duration: 1.2,
                ease: 'power2.inOut',
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        } else if (overlay.classList.contains('slide-down')) {
            gsap.to(overlay, {
                y: '100%',
                duration: 1.2,
                ease: 'power2.inOut',
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        } else if (overlay.classList.contains('scale-center')) {
            gsap.to(overlay, {
                scale: 0,
                duration: 1.2,
                ease: 'power2.inOut',
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        } else if (overlay.classList.contains('split-horizontal')) {
            // 수평 분할 리빌 효과
            gsap.set(overlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            });

            const tl = gsap.timeline({
                delay: index * 0.1 + 0.3,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.to(overlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
                duration: 0.6,
                ease: 'power2.inOut'
            })
            .to(overlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: 0.6,
                ease: 'power2.inOut'
            });
        }

        // 이미지 줌아웃 효과
        gsap.to(imageContent, {
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.1 + 0.5,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// 스탯 애니메이션 (숫자 카운팅 포함)
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
    document.querySelectorAll('a, .gallery-item').forEach(el => {
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

console.log('🎨 Advanced GSAP Reveal Animations Loaded Successfully!');

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
