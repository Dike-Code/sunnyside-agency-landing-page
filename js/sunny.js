/** @format */

const menu = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", function () {
   menu.classList.toggle("is-acive");
   nav.classList.toggle("active");
});