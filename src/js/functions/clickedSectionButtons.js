const sectionButtons = document.querySelectorAll('.navigation-aside__list-element');

function clickedSectionButtons() {
    const sectionButtons = document.querySelectorAll('.navigation-aside__list-element');

    sectionButtons.forEach(sectionButton => {
        sectionButton.classList.remove('navigation-aside__list-element--clicked');
    });

    this.classList.add('navigation-aside__list-element--clicked');
}