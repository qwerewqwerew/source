// ========== 스와이퍼 인스턴스 저장 변수 ==========
let swiper1, swiper2, swiper3;

// ========== 페이지 로드 시 실행 ==========
$(function () {
  // 모든 스와이퍼 인스턴스를 미리 생성
  swiper1 = new Swiper('#content1 .swiper', {
    slidesPerView: 2,        // 한 번에 2개 슬라이드 보기
    spaceBetween: 10,        // 슬라이드 간격
    loop: true,              // 무한 루프
    autoplay: {
      delay: 3000,           // 3초마다 자동 슬라이드
      disableOnInteraction: false,  // 사용자 상호작용 후에도 자동재생 유지
    },
    pagination: {
      el: '#content1 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#content1 .swiper-button-next',
      prevEl: '#content1 .swiper-button-prev',
    },
  });

  swiper2 = new Swiper('#content2 .swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#content2 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#content2 .swiper-button-next',
      prevEl: '#content2 .swiper-button-prev',
    },
  });

  swiper3 = new Swiper('#content3 .swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#content3 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#content3 .swiper-button-next',
      prevEl: '#content3 .swiper-button-prev',
    },
  });

  // 처음에는 첫 번째 탭만 자동재생, 나머지는 정지
  swiper2.autoplay.stop();
  swiper3.autoplay.stop();


});

// ========== 탭 클릭 이벤트 ==========
$('.tab-button').on('click', function () {
  // 클릭된 탭 확인
  var tabId = $(this).attr('id');

  // 모든 탭에서 active 제거
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('active');

  // 클릭된 탭 활성화
  $(this).addClass('active');

  // 탭별로 처리하고 스와이퍼 업데이트
  if (tabId === 'tab1') {
    $('#content1').addClass('active');
    // 현재 탭의 스와이퍼만 자동재생 시작
    swiper1.autoplay.start();
    swiper1.update();
    // 다른 탭의 스와이퍼는 정지
    swiper2.autoplay.stop();
    swiper3.autoplay.stop();
  }
  else if (tabId === 'tab2') {
    $('#content2').addClass('active');
    // 현재 탭의 스와이퍼만 자동재생 시작
    swiper2.autoplay.start();
    swiper2.update();
    // 다른 탭의 스와이퍼는 정지
    swiper1.autoplay.stop();
    swiper3.autoplay.stop();
  }
  else if (tabId === 'tab3') {
    $('#content3').addClass('active');
    // 현재 탭의 스와이퍼만 자동재생 시작
    swiper3.autoplay.start();
    swiper3.update();
    // 다른 탭의 스와이퍼는 정지
    swiper1.autoplay.stop();
    swiper2.autoplay.stop();
  }
});
