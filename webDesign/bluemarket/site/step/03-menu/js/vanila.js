const depth1 = document.querySelector('.depth1');
depth1.addEventListener('mouseover', function () {
  depth1.querySelectorAll('.depth2').forEach((el) => {
    el.style.display = "block"
  })
  document.querySelector('header').classList.add('on');
})
depth1.addEventListener('mouseout', function () {
  depth1.querySelectorAll('.depth2').forEach((el) => {
    el.style.display = "none"
  })
  document.querySelector('header').classList.remove('on');
})