//@ts-nocheck
const navigateTo = ( /** @type {string} */ url) => {
    const locationPathNameBeforePushState = location.pathname;
    history.pushState(null, null, url)
    router(locationPathNameBeforePushState);
}

const substringOfHrefAttributes = (prefix) => {
    const header = document.querySelector('.header');
    const phoneHeader = document.querySelector('.phone-header');
    const phoneMenu = document.querySelector('.phone-menu');
    const footer = document.querySelector('.footer');

    const aLinks = [Array.from(header.querySelectorAll('a')), Array.from(phoneHeader.querySelectorAll('a')), Array.from(phoneMenu.querySelectorAll('a')), Array.from(footer.querySelectorAll('a'))].flat();

    aLinks.forEach(aLink => {
        const hrefAttr = aLink.getAttribute('href');
        const indexOfPrefix = hrefAttr.indexOf(prefix);
        const prefixOfALink = hrefAttr.slice(0, indexOfPrefix + prefix.length);
        const targetOfALink = aLink.getAttribute('target');

        if (indexOfPrefix === -1 && prefixOfALink !== '#') {
            if (targetOfALink !== '_blank') {
                switch (prefix) {
                    case './':
                        const newHrefAttr = hrefAttr.replace(/..\/..\//, './').replace(/..\//, './');
                        aLink.setAttribute('href', newHrefAttr);
                        break;
                    case '../':
                        const newHrefAttr2 = hrefAttr.replace(/..\/..\//, '../').replace(/.\//, '../');
                        aLink.setAttribute('href', newHrefAttr2);
                        break;
                    case '../../':
                        const newHrefAttr3 = hrefAttr.replace(/..\//, '../../').replace(/.\//, '../../');
                        aLink.setAttribute('href', newHrefAttr3);
                        break;

                }
            }
        } else if (prefix === './' && prefixOfALink !== '#' && targetOfALink !== '_blank') {
            const newHrefAttr = hrefAttr.replace(/..\/..\//, './').replace(/..\//, './');
            aLink.setAttribute('href', newHrefAttr);
        }
    });

}

const router = async( /** @type {string} */ locationPathNameBeforePushState) => {
    const routes = [
        { path: '/', view: new AbstractLinkArticlesView('Informatyka kwantowa dla każdego', [new Article('Wprowadzenie do', 'introduction_to_quantum_compiuting', 'Informatyki kwantowej', new Section('Co to jest informatyka kwantowa?', 'whatIsTheQuantumCompiuting.html')), new Article('Obliczenia i Obwody', 'computing_and_Quantum_Circuits', 'kwantowe', new Section('Wprowadzenie', 'introdaction.html')), new Article('Algorytmy', 'quantum_algorithms', 'kwantowe', new Section('Wprowadzenie', 'introdaction.html'))], './', 'Informatyka kwantowa dla każdego - konkurs IBM') },
        { path: '/index.html', view: new AbstractLinkArticlesView('Informatyka kwantowa dla każdego', [new Article('Wprowadzenie do', 'introduction_to_quantum_compiuting', 'Informatyki kwantowej', new Section('Co to jest informatyka kwantowa?', 'whatIsTheQuantumCompiuting.html')), new Article('Obliczenia i Obwody', 'computing_and_Quantum_Circuits', 'kwantowe', new Section('Wprowadzenie', 'introdaction.html')), new Article('Algorytmy', 'quantum_algorithms', 'kwantowe', new Section('Wprowadzenie', 'introdaction.html'))], './', 'Informatyka kwantowa dla każdego - konkurs IBM') },
        { path: '/subpages/for_organisers.html', view: new AbstractLinkArticlesView('Dla Organizatorów', [], '../', 'Dla Organizatorów - konkurs IBM Informatyka kwantowa dla każdego') },
        { path: '/subpages/about_me.html', view: new AbstractLinkArticlesView('O Mnie', [], '../', 'O Mnie - konkurs IBM Informatyka kwantowa dla każdego') },
        { path: '/articles/introduction_to_quantum_compiuting/', view: new AbstractSectionsView(new Article('Wprowadzenie do', 'introduction_to_quantum_compiuting', 'Informatyki kwantowej', new Section('Co to jest informatyka kwantowa?', 'whatIsTheQuantumCompiuting.html', 'introduction.md'), new Section('Czym jest qubit?', 'whatIsAQubit.html', 'whatIsAQubit.md'), new Section('Co to jest splątanie kwantowe?', 'whatIsAQuantumEntanglement.html', 'whatIsAQuantumEntanglement.md'), new Section('Czym jest komputer kwantowy i jak działa?', 'whatIsAQuantumComputer.html', 'whatIsAQuantumComputer.md'), new Section('Jak zbudowany jest komputer kwantowy?', 'howAQuantumComputerIsBuilt.html', 'howAQuantumComputerIsBuilt.md')), '../../', 'Wprowadzenie do Informatyki kwantowej - konkurs IBM') },
        { path: '/articles/computing_and_Quantum_Circuits/', view: new AbstractSectionsView(new Article('Obliczenia i Obwody', 'computing_and_Quantum_Circuits', 'kwantowe', new Section('Wprowadzenie', 'introdaction.html', 'introdaction.md'), new Section('Bramka Not', 'not_gate.html', 'not_gate.md'), new Section('Tworzenie superpozycji i interferencji za pomocą bramki Hadamarda', 'H_gate.html', 'H_gate.md'), new Section('Faza kwantowa i kąt fazowy qubitu', 'phase_angle.html', 'phase_angle.md'), new Section('Bramki ROT', 'ROT_gates.html', 'ROT_gates.md'), new Section('Więcej o bramkach negujących', 'moreOfNegatingGates.html', 'moreOfNegatingGates.md'), new Section('Identyczność i bramka Unitary', 'I_and_U_gate.html', 'I_and_U_gate.md'), new Section('Splątania kwantowe w bramkach - CNOT i Toffoly', 'entanglement_in_quantum_gates.html', 'entanglement_in_quantum_gates.md'), new Section('Zamiana wartości stanów qubitów - SWAP i CS SWAP', 'Swap_and_Csswap_gates.html', 'Swap_and_Csswap_gates.md')), '../../', 'Obliczenia i Obwody kwantowe - konkurs IBM') },
        { path: '/articles/quantum_algorithms/', view: new AbstractSectionsView(new Article('Algorytmy kwantowe', 'quantum_algorithms', '', new Section('Wprowadzenie', 'introdaction.html', 'introdaction.md'), new Section('Algorytm Deutscha-Jozsy', 'deutscha-jozsy-algorithm.html', 'deutscha-jozsy-algorithm.md')), '../../', 'Algorytmy kwantowe - konkurs IBM') },
    ];

    const potentialMatches = routes.map(route => {
        if (route.path !== '/') {
            return {
                route: route,
                isMatch: location.pathname === route.path || location.pathname.indexOf(route.path) !== -1,
            }
        } else {
            return {
                route: route,
                isMatch: location.pathname === route.path,
            }
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[1],
            isMatch: true,
        }
    }

    const view = match.route.view;

    if (match.route.path.indexOf('/articles/') !== -1 && locationPathNameBeforePushState.indexOf(match.route.path) !== -1) {
        const pathArticleValue = location.pathname.slice(match.route.path.length);
        const articleContainer = document.querySelector('.article-container');
        const articleChildren = Array.from(articleContainer.children);

        for (let i = 0; i < articleChildren.length; i++) {
            articleChildren[i].remove();
        }

        await view.getArticleValue(pathArticleValue);
        articleContainer.innerHTML = articleContainer.innerHTML + view.articleValue;

    } else {
        const main = document.querySelector('main');
        const mainChildren = Array.from(main.children);

        for (let i = 0; i < mainChildren.length; i++) {
            mainChildren[i].remove();
        }

        if (match.route.path.indexOf('/articles/') !== -1) {
            const html = await view.getHtml('introduction.html');
            main.appendChild(html);
            view.setTitle();
        } else {
            const html = await view.getHtml();
            main.appendChild(html);
            view.setTitle();
        }

    }

    if (locationPathNameBeforePushState !== match.route.path)
        substringOfHrefAttributes(view.prefix);

    if (document.body.offsetWidth <= 972) {
        const phoneMenu = document.querySelector('.phone-menu');
        phoneMenu.setAttribute('style', 'transform: translateX(100%) !important;')
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
        openClosePhoneMenuCounter = 0;
    }
}