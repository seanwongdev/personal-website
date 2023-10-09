function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed("#element", {
  strings: [
    "Learning is a life long process",
    "Learning coding is a long process",
    "...Coding is <strong>Life</strong>",
  ],
  startDelay: 1000,
  backDelay: 1500,
  typeSpeed: 20,
  loop: true,
});
