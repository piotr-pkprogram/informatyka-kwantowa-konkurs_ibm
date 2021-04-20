//@ts-nocheck

window.onload = function() {
    console.log(history.state);

    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    targetLinks();
    window.addEventListener('scroll', menuAnimation);
    window.addEventListener('scroll', appearButtonTop);
    if (articlesNavigationList != null)
        window.addEventListener('scroll', fixedNavigationAside);

    if (articlesNavigationList != null)
        articlesNavigationBtn.addEventListener('click', openArticlesNavigation);

    buttonTop.addEventListener('click', clickButtonTop);
    burgerButton.addEventListener('click', openClosePhoneMenu);
}