const menuIcon = document.querySelector(".header__menu__icon");
const menuBody = document.querySelector(".header__menu__body");

if (menuIcon && menuBody) {
    menuIcon.addEventListener("click", event => {
        menuIcon.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}