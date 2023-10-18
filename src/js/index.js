function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed("#element", {
  strings: [
    "  is the bridge between us and the machines",
    "  is like solving puzzles, but you can't see the picture",
    "  is a journey, not a destination",
  ],
  startDelay: 1500,
  backDelay: 3000,
  typeSpeed: 30,
  loop: false,
});

/*     All of the DOM for open and closing modals    */
const infogenieBtn = document.querySelector(".close-infogenie");

infogenieBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("infogenieModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openInfogenie = document.querySelector(".open-infogenie");
openInfogenie.addEventListener("click", function (e) {
  const modal = document.getElementById("infogenieModal");
  console.log(modal);
  modal.classList.remove("d-none");
});

const memoryBtn = document.querySelector(".close-memory");

memoryBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("memoryModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openMemory = document.querySelector(".open-memory");
openMemory.addEventListener("click", function (e) {
  const modal = document.getElementById("memoryModal");
  console.log(modal);
  modal.classList.remove("d-none");
});

const propertyBtn = document.querySelector(".close-property");

propertyBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("propertyModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openProperty = document.querySelector(".open-property");
openProperty.addEventListener("click", function (e) {
  const modal = document.getElementById("propertyModal");
  console.log(modal);
  modal.classList.remove("d-none");
});

const calculatorBtn = document.querySelector(".close-calculator");

calculatorBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("calculatorModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openCalculator = document.querySelector(".open-calculator");
openCalculator.addEventListener("click", function (e) {
  const modal = document.getElementById("calculatorModal");
  console.log(modal);
  modal.classList.remove("d-none");
});

/*   Swiper JS      */

const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  slidesPerView: 2,

  spaceBetween: 80,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
