const logo = document.querySelector("#logo");
const html = document.documentElement;
const body = document.body;

const main = document.querySelector("section-a");

logo.addEventListener("click", () => {
  const theme = window.localStorage.getItem("theme");

  if (theme === "light") {
    console.log(theme);
    body.classList.replace("light", "night");
    window.localStorage.setItem("theme", "night");
    console.log(window.localStorage.getItem("theme"));
  } else {
    body.classList.replace("night", "light");
    window.localStorage.setItem("theme", "light");
    console.log(window.localStorage.getItem("theme"));
  }
  //   html.style.setProperty(
  //     "--bg-gradient",
  //     "linear-gradient(to right, #500, #700)"
  //   );
  //   html.style.setProperty("--color-text", "#fff");
  //   html.style.setProperty("--bg-secondary", "#700");
});
