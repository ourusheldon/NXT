const menu =document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar__menu')

menu.addEventListener('click', fuction() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})