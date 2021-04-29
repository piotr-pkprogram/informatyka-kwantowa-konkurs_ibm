const articlesNavigationBtn = document.querySelector('.navigation-aside__open-btn');
const articlesNavigationList = document.querySelector('.navigation-aside__list');
let openArticlesNavigationCounter = 0;

const openArticlesNavigation = () => {
    const articlesNavigationList = document.querySelector('.navigation-aside__list');

    if (openArticlesNavigationCounter === 0) {
        articlesNavigationList.classList.add('block', 'animate-appear');
        articlesNavigationList.classList.remove('opacity-1', 'animate-hidden', 'hidden');
        openArticlesNavigationCounter++;
    } else {
        articlesNavigationList.classList.add('opacity-1', 'animate-hidden');
        setTimeout(() => {
            articlesNavigationList.classList.add('hidden');
        }, 1000);
        articlesNavigationList.classList.remove('animate-appear');
        openArticlesNavigationCounter--;
    }

};