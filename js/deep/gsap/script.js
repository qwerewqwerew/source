gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
    duration: 5,
    repeat: 2,//-1 무한반복
    repeatDelay: 3,
    yoyo: true,//트윈을 앞뒤로 반복하여 실행
    ease: "power1.inOut",
    motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5] //패스선의 기준점
    }
});