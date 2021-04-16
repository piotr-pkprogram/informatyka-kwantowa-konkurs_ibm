const targetLinks = () => {
    const targetLinks = document.querySelectorAll('a[href$="target=_blank"]');

    targetLinks.forEach(link => {
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer');

        const href = link.getAttribute('href').replace('target=_blank', '').replace('?', '').trim();
        link.setAttribute('href', href);

    })
}