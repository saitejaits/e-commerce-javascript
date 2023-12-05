const barEl = document.getElementById("bar");
const navbarEl = document.getElementById("navbar");
const closeEl = document.getElementById("close");

if (bar) {
  barEl.addEventListener("click", () => {
    navbarEl.classList.add("active");
  });
}

if (close) {
  closeEl.addEventListener("click", () => {
    navbarEl.classList.remove("active");
  });
}
