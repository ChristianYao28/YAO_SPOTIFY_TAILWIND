const toggle = document.querySelector(".toggle__menu");
const head = document.querySelector(".header__nav");

toggle.addEventListener("click", ()=> {
    toggle.classList.toggle("open");
    head.classList.toggle("open");
})