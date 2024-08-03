"use strict";

/////////////////////
/* OPEN MODAL WINDOW AND OVERLAY */

const btnShowModal = document.querySelectorAll(".opinion-box");
const btnCloseModal = document.querySelector(".btn-close-modal");
const modalImg = document.querySelector(".img-testimonial");
const modal = document.querySelector(".modal-opinion-window");
const overlay = document.querySelector(".overlay");

const changeModalSrc = function () {
  const [text, num] = this.id.split("-");
  console.log(num);
  modalImg.src = `img/testimonials/t-${num}.png`;
  openModal();
};

const openModal = function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShowModal.forEach((btn) => btn.addEventListener("click", changeModalSrc));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////
/* EMPHASIZE FREE LESSON */
const freeLessonBtn = document.querySelector(".nav-cta-btn");
const inputBox = document.querySelector(".footer-box-data");

const inputAddClass = function () {
  inputBox.classList.add("input-emphasize");
};

const emphasizeInputBox = function () {
  setTimeout(inputAddClass, 1000);
};

freeLessonBtn.addEventListener("click", emphasizeInputBox);

window.addEventListener("scroll", function () {
  if (inputBox.classList.contains("input-emphasize")) {
    inputBox.classList.remove("input-emphasize");
  }
});

////////////////////////////
/* EMPHASIZE PHONE NUMBER */

const phoneBtn = document.querySelectorAll(".btn-phone");
const phoneBox = document.querySelector("#phone-box");

const addClass = function () {
  phoneBox.classList.add("phone-emphasize");
};

const emphasizePhoneNumber = function () {
  setTimeout(addClass, 1000);
};

phoneBtn.forEach((btn) => btn.addEventListener("click", emphasizePhoneNumber));

window.addEventListener("scroll", function () {
  if (phoneBox.classList.contains("phone-emphasize")) {
    phoneBox.classList.remove("phone-emphasize");
  }
});

/////////////////////
/* STICKY NAVIGATION*/

const header = document.querySelector(".section-header");
const navBox = document.querySelector(".header");

const navHeight = navBox.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) navBox.classList.add("sticky");
  else navBox.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/////////////////////
/* MOBILE NAVIGATION*/

const hamburgerOpenBtn = document.querySelector(".hamburger-open");
const hamburgerCloseBtn = document.querySelector(".hamburger-close");
const mobileNavContainer = document.querySelector(".hamburger-menu-container");
const mobileNavOpenBtn = document.querySelector(".hamburger-open");
const mobileNavCloseBtn = document.querySelector(".hamburger-close");

const openMobileNav = function () {
  mobileNavContainer.style.display = "flex";
  hamburgerOpenBtn.style.display = "none";
  hamburgerCloseBtn.style.display = "flex";
};

const closeMobileNav = function () {
  mobileNavContainer.style.display = "none";
  hamburgerOpenBtn.style.display = "flex";
  hamburgerCloseBtn.style.display = "none";
};

mobileNavOpenBtn.addEventListener("click", openMobileNav);
mobileNavCloseBtn.addEventListener("click", closeMobileNav);
