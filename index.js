const html = document.documentElement;
const body = document.body;
const dropdownBtn = document.querySelector(".dropdown-open");

//buttons
const btnLight = document.querySelector(".btn-light");
const btnNight = document.querySelector(".btn-night");
const btnSolar = document.querySelector(".btn-solar");

btnLight.addEventListener("click", () => {
  body.classList.replace("night", "light");
  window.localStorage.setItem("theme", "light");
  console.log(window.localStorage.getItem("theme"));
});
btnNight.addEventListener("click", () => {
  body.classList.replace("light", "night");
  window.localStorage.setItem("theme", "night");
  console.log(window.localStorage.getItem("theme"));
});

btnSolar.addEventListener("click", () => {
  const solar = window.localStorage.getItem("solar");

  if (solar) {
    btnSolar.textContent = "Solar";
    body.classList.remove("solar");
    window.localStorage.removeItem("solar");
    console.log(window.localStorage.getItem("solar"));
  } else {
    btnSolar.textContent = "Normal";
    body.classList.add("solar");
    window.localStorage.setItem("solar", "true");
    console.log(window.localStorage.getItem("solar"));
  }
});
