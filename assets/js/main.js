const menuBtnEl = document.querySelector(".menu__btn");
const menuMobileEl = document.querySelector(".header__menu--list");


menuBtnEl.addEventListener('click',() =>{
  menuMobileEl.classList.toggle('menu--open')
});