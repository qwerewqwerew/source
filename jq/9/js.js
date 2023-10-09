let win = window,
  winSct,
  sections = document.querySelectorAll(".section"),
  gnb = document.querySelectorAll(".gnb li"),
  sideNav = document.querySelectorAll(".sideNav>li");

const gnbOff = () => {
  gnb.forEach((o) => {
    o.classList.remove("on");
  });
};
const navOff = () => {
  sideNav.forEach((o) => {
    o.classList.remove("on");
  });
};

gnb.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    gnbOff();
    el.classList.add("on");
  });
});
sideNav.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navOff();
    el.classList.add("on");
  });
});

win.addEventListener("scroll", function (e) {
  e.preventDefault();
  winSct = this.scrollY;
  winSct >= 400
    ? document.querySelector("nav").classList.add("sticky")
    : document.querySelector("nav").classList.remove("sticky");
  scrollOn(winSct);
});

const scrollOn = (sct) => {
  if (sct >= sections[0].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(1)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(1)").classList.add("on");
	sections[0].classList.add("on");
  }
  if (sct >= sections[1].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(2)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(2)").classList.add("on");
	sections[1].classList.add("on");

  }
  if (sct >= sections[2].offsetTop - 700) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(3)").classList.add("on");
	sections[2].classList.add("on");

  }
  if (sct >= sections[3].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(4)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(4)").classList.add("on");
  }
  if (sct >= sections[4].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(5)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(5)").classList.add("on");
  }
  if (sct >= sections[5].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(6)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(6)").classList.add("on");
  }
  if (sct >= sections[6].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(7)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(7)").classList.add("on");
  }
  if (sct >= sections[7].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(8)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(8)").classList.add("on");
  }
  if (sct >= sections[8].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(9)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(2)").classList.add("on");
  }
};
