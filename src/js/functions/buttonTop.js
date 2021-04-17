const buttonTop = document.querySelector('.buttonTop');

const clickButtonTop = () => {
    window.scrollBy(0, -1 * window.pageYOffset);
}

const appearButtonTop = () => {
    if (window.pageYOffset >= 370) {
        buttonTop.classList.remove('animate-hidden');
        buttonTop.classList.add('block', 'animate-appear')
    } else {
        buttonTop.classList.add('animate-hidden');
        buttonTop.classList.remove('block', 'animate-appear')
    }
}