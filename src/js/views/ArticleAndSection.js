class Section {
    /**
     * @param {string} title
     * @param {string} url
     * @param {string} linkValue
     */
    constructor(title, url, linkValue) {
        this.title = title;
        this.url = url;
        this.linkValue = linkValue;
    }
}

class Article {
    /**
     * @param {string} title
     * @param {string} url
     * @param {string} span
     * @param {Section[]} sections
     */
    constructor(title, url, span, ...sections) {
        this.title = title;
        this.url = url;
        this.span = span;
        this.sections = sections;
    }
}