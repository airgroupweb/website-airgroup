const hamMenu = document.querySelector('.ham_menu');
const hiddenNav = document.querySelector('.hidden_nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenNav.classList.toggle('active');
})