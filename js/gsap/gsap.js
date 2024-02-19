
//애니메이션 해야할 대상이 많으므로 전체 타임라인에 부모요소를 추가한다
let scroll_tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.factsContainer',
    markers: true,
    start: "top top",//시작점 설정 윗방향기준 뷰포드 중앙에서 시작
    end: "+=300",//300px 떨어진거리에서 끝
    scrub: true,
  }
})
let facts = document.querySelectorAll('.fact');
let factW = document.querySelector('.factsContainer_sm').clientWidth;
console.log(factW);
scroll_tl.to('.factsContainer h2', {
  scale: 1.5,
  duration: 1,
  ease: "slow"
})
scroll_tl.to(facts, {
  xPercent: -85 * (facts.length - 1),//x이동거리
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "center center",
    pin: true,
    scrub: 1,
    snap: 1 / (facts.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => `+=${smallFactsContainer.offsetWidth}`
    end: () => `+=${factW}`
  }
});
gsap.config({ trialWarn: false });
