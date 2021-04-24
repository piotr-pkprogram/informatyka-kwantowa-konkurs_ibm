const headerLogoImg = document.querySelector('.header__logo-img');
const headerTitle = document.querySelector('.header__title');
const headerSpan = document.querySelector('.header__span-title');
const header = document.querySelector('.header');

const menuAnimation = () => {
    const main = document.querySelector('main')

    if (window.pageYOffset >= 354 && document.body.offsetWidth >= 954) {
        header.classList.add('bg-steel-900', 'z-10');
        header.classList.add('top-0', 'animate-menuAnimation');
        headerLogoImg.classList.add('w-auto', 'max-h-28', 'min-w-0.5');
        headerTitle.classList.add('text-xl', 'max-h-28');
        headerSpan.classList.add('block', 'text-lg');
        main.style.marginTop = '13.5vh';
    } else if (document.body.offsetWidth > 954) {
        header.classList.remove('fixed', 'bg-steel-900', 'z-10', 'top-0', 'animate-menuAnimation');
        headerLogoImg.classList.remove('w-auto', 'max-h-28', 'min-w-0.5');
        headerTitle.classList.remove('text-xl', 'max-h-28');
        headerSpan.classList.remove('block', 'text-lg');
        main.style.marginTop = '0';

    }
}