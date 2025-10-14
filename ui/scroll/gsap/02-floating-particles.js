// 플로팅 파티클 애니메이션
// 배경에 떠다니는 작은 원형 파티클들을 생성

// 파티클을 만들고 움직이는 함수
(function() {
    // 파티클을 넣을 헤더 요소 찾기
    const header = document.querySelector('.main-header');
    if (!header) return; // 헤더가 없으면 종료

    const count = 15; // 파티클 개수

    // 15개의 파티클을 반복해서 만들기
    for (let i = 0; i < count; i++) {
        // 새로운 div 요소 생성
        const p = document.createElement('div');
        p.className = 'particle';

        // 랜덤 크기 (5px~25px)
        const size = Math.random() * 20 + 5;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;

        // 랜덤 위치 (0%~100%)
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;

        // 랜덤 애니메이션 시작 시간
        p.style.animationDelay = `${Math.random() * 6}s`;

        // 헤더에 파티클 추가
        header.appendChild(p);

        // GSAP로 파티클을 움직이게 하기
        gsap.to(p, {
            y: `${Math.random() * 200 - 100}px`,    // 위아래로 움직임
            x: `${Math.random() * 200 - 100}px`,    // 좌우로 움직임
            rotation: 360,                          // 한 바퀴 회전
            duration: 10 + Math.random() * 10,      // 10~20초 지속
            repeat: -1,                             // 무한 반복
            yoyo: true,                             // 왔다갔다
            ease: 'sine.inOut'                      // 부드러운 움직임
        });
    }

    console.log('✨ 플로팅 파티클 생성 완료!');
})();
