const botaoMenu = document.querySelector('.header__button-menu')
const menu = document.querySelector('.menu-list')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
})