const logo = document.querySelector("#logo");
const html = document.documentElement;

const main = document.querySelector("main");

logo.addEventListener("click", () => {
  main.classList.add("sweet");
});
