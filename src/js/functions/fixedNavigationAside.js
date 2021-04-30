//@ts-nocheck
const navigationAside = document.querySelector('.navigation-aside__list');
const articleContainer = document.querySelector('.article-container');

const fixedNavigationAside = () => {
    if (document.body.offsetWidth > 972) {
        const articleContainer = document.querySelector('.article-container');
        const navigationAside = document.querySelector('.navigation-aside__list');
        if (!navigationAside)
            return;
        const navigationAsideWidth = window.getComputedStyle(navigationAside).getPropertyValue('width');

        if (window.pageYOffset >= 650) {
            navigationAside.classList.add('fixed', 'top-48');
            navigationAside.style.width = navigationAsideWidth;
            articleContainer.style.marginLeft = parseInt(navigationAsideWidth + 5) + 'px';
        } else {
            articleContainer.style.marginLeft = '0';
            navigationAside.style.width = 'auto';
            navigationAside.classList.remove('fixed', 'top-48');
        }
    } else
        return;
}