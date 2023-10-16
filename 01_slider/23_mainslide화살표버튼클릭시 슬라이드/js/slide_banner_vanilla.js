//변수선언
const visual = document.querySelectorAll("#brandVisual>ul>li"); // 슬라이드 이미지
const button = document.querySelectorAll("#buttonList>li"); // 버튼
const leftBtn = document.querySelector(".btnImg .prev");
const rightBtn = document.querySelector(".btnImg .next");
let current = 0; // 현재 보이는 이미지
let setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함

const timer=(()=>{
  setInterval(() => {
    visual.forEach(element,index => {
      console.log(index,element);
     // var prev=element[];
      move(prev, 0, '-100%');
    
      current++;
      
      if(current == visual.lenght-1) current=0;
      
      var next=element[current];
      move(next, '100%',0);
    });


  }, 100);
})

const move = (tg, start, end) => {
  console.log(tg,start,end);
	//tg.style.left = start;
	//tg.animate([{ left: start },{ left: end }], { duration: 500 });
};
timer();