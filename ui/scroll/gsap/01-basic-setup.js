// 기본 설정 및 초기화
// GSAP와 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 페이지가 완전히 로드되면 실행
window.addEventListener('load', function() {
    console.log('🎨 기본 GSAP 설정 완료!');

    // 성능 최적화 설정
    gsap.config({
        force3D: true,      // 3D 하드웨어 가속 사용
        nullTargetWarn: false  // 빈 타겟 경고 끄기
    });

    // 모바일 기기 체크 및 최적화
    const mobile = window.innerWidth <= 768;
    if (mobile) {
        // 모바일에서는 애니메이션 속도를 빠르게
        gsap.globalTimeline.timeScale(1.2);
        console.log('📱 모바일 최적화 적용');
    }
});

// 화면 크기 변경 시 스크롤 트리거 새로고침
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// 페이지 새로고침 시 맨 위로 스크롤
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
