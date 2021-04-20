//@ts-nocheck
const navigationAside = document.querySelector('.navigation-aside__list');
const articleContainer = document.querySelector('.article-container');

const fixedNavigationAside = () => {
    if (window.pageYOffset >= 497) {
        navigationAside.classList.add('fixed', 'top-48');
        articleContainer.style.marginLeft = '328.5px';
    } else {
        articleContainer.style.marginLeft = '0';
        navigationAside.classList.remove('fixed', 'top-48');
    }
}