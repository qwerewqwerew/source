// 마우스 커서 효과
// 마우스를 따라다니는 커스텀 커서 효과

// 커서 효과 실행
(function() {
    // 커서 요소 생성
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

    // 마우스 움직임에 따라 커서 이동
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,    // 마우스 X 좌표에서 10px 빼기 (중앙 정렬)
            y: e.clientY - 10,    // 마우스 Y 좌표에서 10px 빼기 (중앙 정렬)
            duration: 0.1         // 0.1초 동안 부드럽게 이동
        });
    });

    // 호버 가능한 요소들에 커서 크기 변경 효과
    document.querySelectorAll('a, .reveal-image').forEach(el => {
        // 마우스가 요소 위에 올라갔을 때
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 2,           // 커서 크기 2배로
                duration: 0.3       // 0.3초 동안
            });
        });

        // 마우스가 요소에서 벗어났을 때
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,           // 커서 크기 원래대로
                duration: 0.3       // 0.3초 동안
            });
        });
    });

    console.log('🖱️ 커스텀 커서 효과 설정 완료!');
})();
