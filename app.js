const menuButton = document.querySelector('.navigation__menu-bars')
const menu = document.querySelector('.navigation__menu')
const logo = document.querySelector('.logo')
const year = document.getElementById('year')

year.textContent = getYear()

menuButton.addEventListener("click", openMenu)
logo.addEventListener("click", closeMenu)
menu.addEventListener("click", (e) => {
    const isMenuItem = e.target.classList.contains("navigation__menu__item")
    if (isMenuItem) closeMenu()
})

function openMenu() {
    menu.classList.toggle('open')
}

function closeMenu() {
    menu.classList.remove('open')
}

function getYear() {
    const date = new Date()
    return date.getFullYear()
}