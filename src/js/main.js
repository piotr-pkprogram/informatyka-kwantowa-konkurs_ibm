//@ts-nocheck

window.onload = function() {
    targetLinks();
    window.addEventListener('scroll', menuAnimation);
    window.addEventListener('scroll', appearButtonTop);

    if (articlesNavigationList != null)
        articlesNavigationBtn.addEventListener('click', openArticlesNavigation);

    buttonTop.addEventListener('click', clickButtonTop);
}