function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typed = new Typed("#element", {
  strings: ["  is a journey, not a destination"],
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

const wakeshopBtn = document.querySelector(".close-wakeshop");

wakeshopBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("wakeshopModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openwakeshop = document.querySelector(".open-wakeshop");
openwakeshop.addEventListener("click", function (e) {
  const modal = document.getElementById("wakeshopModal");
  console.log(modal);
  modal.classList.remove("d-none");
});

const jobshopBtn = document.querySelector(".close-jobshop");

jobshopBtn.addEventListener("click", function (e) {
  const modal = document.getElementById("jobshopModal");
  console.log(modal);
  modal.classList.add("d-none");
});

const openJobshop = document.querySelector(".open-jobshop");
openJobshop.addEventListener("click", function (e) {
  const modal = document.getElementById("jobshopModal");
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
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
