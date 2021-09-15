const btnHamburger = document.querySelector('#btn-hamburger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const navbar = document.querySelector('.header__nav');
const log_sign = document.querySelector('.log-sign');

btnHamburger.addEventListener('click', function() {
    if(mobileMenu.classList.contains('d-none')) {
        mobileMenu.classList.remove('d-none');
    }
    else {
        mobileMenu.classList.add('d-none');
    }
});