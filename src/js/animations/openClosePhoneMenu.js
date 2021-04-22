const burgerButton = document.querySelector('.phone-header__burger-menu');
const phoneMenu = document.querySelector('.phone-menu');
let openClosePhoneMenuCounter = 0;
const burgerButtonElements = Array.from(burgerButton.children);

const openClosePhoneMenu = () => {

    if (openClosePhoneMenuCounter === 0) {
        phoneMenu.setAttribute('style', '');

        phoneMenu.classList.remove('animate-closePhoneMenu');
        phoneMenu.classList.add('animate-openPhoneMenu');

        burgerButtonElements[0].classList.add('animate-burgerElement1');
        burgerButtonElements[0].classList.remove('animate-unAnimateBurgerElement1');

        burgerButtonElements[2].classList.add('animate-burgerElement3');
        burgerButtonElements[2].classList.remove('animate-unAnimateBurgerElement3');

        setTimeout(() => {
            burgerButtonElements[1].classList.add('animate-hiddenBurgerElement2');
            burgerButtonElements[1].classList.remove('animate-appearBurgerElement2');
        }, 125);

        openClosePhoneMenuCounter++;
    } else {
        phoneMenu.setAttribute('style', '');
        phoneMenu.classList.add('animate-closePhoneMenu');
        phoneMenu.classList.remove('animate-openPhoneMenu');

        burgerButtonElements[0].classList.add('animate-unAnimateBurgerElement1');
        burgerButtonElements[0].classList.remove('animate-burgerElement1');

        burgerButtonElements[2].classList.add('animate-unAnimateBurgerElement3');
        burgerButtonElements[2].classList.remove('animate-burgerElement3');

        setTimeout(() => {
            burgerButtonElements[1].classList.add('animate-appearBurgerElement2');
            burgerButtonElements[1].classList.remove('animate-hiddenBurgerElement2');
        }, 125);

        openClosePhoneMenuCounter--;
    }
}