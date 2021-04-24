//@ts-nocheck

window.onload = function() {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        } else if (e.target.matches('[data-img]')) {
            e.preventDefault();
            const parent = e.target.parentNode;
            const parentHref = parent.getAttribute('href');

            navigateTo(parentHref);
        } else if (e.target.matches('[data-start]')) {
            e.preventDefault();
            navigateTo('/');
        }
    });

    window.addEventListener('popstate', (e) => {
        navigateTo(e.target.href);
    });

    if (sectionButtons) {
        sectionButtons.forEach(sectionButton => {
            sectionButton.addEventListener('click', clickedSectionButtons);
        });
    }

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