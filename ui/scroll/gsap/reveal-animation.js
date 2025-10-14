// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지 로드 시 초기 애니메이션
window.addEventListener('load', function() {
    // 히어로 섹션 초기 애니메이션
    const heroTl = gsap.timeline();

    heroTl
        .to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out'
        })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.6');
});

// 리빌 애니메이션 함수들
function createRevealAnimation(selector, fromProps, toProps) {
    gsap.fromTo(selector, fromProps, {
        ...toProps,
        scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            markers: false
        }
    });
}

// 왼쪽에서 나타나는 애니메이션
createRevealAnimation('.reveal-item.from-left',
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' }
);

// 오른쪽에서 나타나는 애니메이션
createRevealAnimation('.reveal-item.from-right',
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' }
);

// 아래에서 나타나는 애니메이션
createRevealAnimation('.reveal-item.from-bottom',
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
);

// 크기 변화 애니메이션
createRevealAnimation('.reveal-item.scale',
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1.5, ease: 'back.out(1.7)' }
);

// 갤러리 제목 애니메이션
gsap.fromTo('.gallery-title',
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.gallery-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// 이미지 그리드 애니메이션 (순차적으로)
gsap.fromTo('.image-item',
    { opacity: 0, y: 100, scale: 0.8 },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2, // 각 아이템 간격
        scrollTrigger: {
            trigger: '.image-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// 텍스트 애니메이션 (글자별로 순차 등장)
gsap.fromTo('.animated-text span',
    { opacity: 0, y: '100%' },
    {
        opacity: 1,
        y: '0%',
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1, // 각 글자 간격
        scrollTrigger: {
            trigger: '.animated-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// 패럴랙스 효과
gsap.to('[data-speed]', {
    y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
        start: 0,
        end: 'max',
        invalidateOnRefresh: true,
        scrub: 0
    }
});

// 패럴랙스 텍스트 애니메이션
gsap.fromTo('.parallax-text h2',
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.parallax-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

gsap.fromTo('.parallax-text p',
    { opacity: 0, y: 30 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
            trigger: '.parallax-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// 마지막 섹션 애니메이션 (회전하며 나타나기)
gsap.fromTo('.final-content h2',
    { opacity: 0, scale: 0.5, rotation: 180 },
    {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.final-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

gsap.fromTo('.final-content p',
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
            trigger: '.final-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    }
);

// 스크롤 인디케이터 (선택사항)
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
        // 스크롤 진행률을 콘솔에 출력 (필요에 따라 UI에 표시)
        // console.log('Scroll progress:', self.progress);
    }
});

// 부드러운 스크롤 효과 (선택사항)
gsap.registerPlugin(ScrollToPlugin);

// 페이지 새로고침 시 ScrollTrigger 재계산
ScrollTrigger.addEventListener('refresh', () => window.location.reload());

// 창 크기 변경 시 ScrollTrigger 새로고침
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// 개발용: ScrollTrigger 마커 표시/숨김 (개발 완료 후 제거)
// ScrollTrigger.defaults({ markers: true });

console.log('GSAP Reveal Animation 로드 완료! 🚀');
