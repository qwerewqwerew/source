const main = document.querySelector("main");
main.appendChild(
  Object.assign(document.createElement("div"), {
    innerText: "🐨",
    className: "coalaTop",
  })
);

const topBt = document.querySelector(".coalaTop");

const handleScroll = () => {
  topBt.classList.toggle("on", window.scrollY <= document.documentElement.scrollHeight - window.innerHeight - 100);
};

topBt.addEventListener("click", () => window.scroll({ top: 100, behavior: "smooth" }));
window.addEventListener("scroll", handleScroll);
