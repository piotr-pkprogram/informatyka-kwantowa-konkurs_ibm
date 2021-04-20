class AbstractView {
    /**
     * @param {string} title
     * @param {string} prefix
     */
    constructor(prefix, title) {
        this.title = title;
        this.prefix = prefix;
    }

    getHtml() {
        const html = document.createDocumentFragment();

        return html;
    }

    setTitle() {
        document.title = this.title;
    }
}