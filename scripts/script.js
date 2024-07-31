"use strict";

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

// const opinion_0 = document.querySelector("#opinion-0");
// opinion_0.addEventListener("click", function () {
//   const tmpIdNum = opinion_0.id[opinion_0.id.length - 1];
//   console.log(tmpIdNum);
// });
// const opinion_1 = document.querySelector("#opinion-1");
// opinion_1.addEventListener("click", function () {
//   const tmpIdNum = opinion_1.id[opinion_1.id.length - 1];
//   console.log(tmpIdNum);
// });
// const opinion_2 = document.querySelector("#opinion-2");
// opinion_2.addEventListener("click", function () {
//   const tmpIdNum = opinion_2.id[opinion_2.id.length - 1];
//   console.log(tmpIdNum);
// });
// const opinion_3 = document.querySelector("#opinion-3");
// opinion_3.addEventListener("click", function () {
//   const tmpIdNum = opinion_3.id[opinion_3.id.length - 1];
//   console.log(tmpIdNum);
// });
