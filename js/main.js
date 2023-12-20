let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burgerMenu.classList.toggle("show");
});