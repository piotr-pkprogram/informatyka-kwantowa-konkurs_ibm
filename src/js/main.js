//@ts-nocheck

window.onload = function() {
    targetLinks();
    window.addEventListener('scroll', menuAnimation);

    articlesNavigationBtn.addEventListener('click', openArticlesNavigation);
}