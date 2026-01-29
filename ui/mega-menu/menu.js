const nav = document.querySelector('.nav');
const items = document.querySelectorAll('.item');

// 마우스 오버로 메뉴 열기
items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // 다른 메뉴 닫기
    items.forEach(i => i.classList.remove('on'));
    // 현재 메뉴 열기
    item.classList.add('on');
  });
});

// nav 영역 벗어나면 모두 닫기
nav.addEventListener('mouseleave', () => {
  items.forEach(item => item.classList.remove('on'));
});

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    items.forEach(item => item.classList.remove('on'));
  }
});