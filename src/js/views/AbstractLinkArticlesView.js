class AbstractLinkArticlesView extends AbstractView {
    /**
     * @param {string} title
     * @param {Article[]} articles
     * @param {string} prefix
     * @param {string} sectionTitle 
     */
    constructor(sectionTitle, articles, prefix, title) {
        super(prefix, title);
        this.articles = articles;
        this.sectionTitle = sectionTitle;
        this.i = 0;
    }

    getHtml() {
        const html = document.createDocumentFragment();

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');
        titleContainer.innerHTML = `<h1 class="title-container__title">${this.sectionTitle}</h1>
        <button class="title-container__btn">
            <img src="${this.prefix}img/south_white_24dp.svg" class="title-container__arrow" alt=""/>
        </button>`;

        const sectionArticles = document.createElement('div');
        sectionArticles.classList.add('.section-articles');

        this.articles.forEach(article => {
            const newArticle = this.createArticle(article.title, article.span, article.url, article.sections[0].url);

            sectionArticles.appendChild(newArticle);
        });

        html.appendChild(titleContainer);
        html.appendChild(sectionArticles);

        return html;
    }


    /**
     * @param {string} title
     * @param {string} span
     * @param {string} url
     * @param {string} firstSectionTitle
     */
    createArticle(title, span, url, firstSectionTitle) {

        if (this.i === 0) {

            const article = document.createElement('div');
            article.classList.add('section-articles__link-article-container');
            article.innerHTML = `<div class="section-articles__title-container">
                <h2 class="section-articles__title-link"> ${title} </h2>
                <span class="section-articles__span"> ${span} </span>
            </div>
            <a class="section-articles__link" href="${this.prefix}${url}/${firstSectionTitle}">
                <img src="${this.prefix}img/chevron_right-24px.svg" class="section-articles__img"></img>
            </a>`;

            this.i++;
            return article;
        } else {

            const article = document.createElement('div');
            article.classList.add('section-articles__link-article-container', 'section-articles__link-article-container--right');
            article.innerHTML = `<div class="section-articles__title-container">
                <h2 class="section-articles__title-link"> ${title} </h2>
                <span class="section-articles__span section-articles__span--right"> ${span} </span>
            </div>
            <a class="section-articles__link section-articles__link--right" href="${this.prefix}${url}/${firstSectionTitle}">
                <img src="${this.prefix}img/chevron_right-24px.svg" class="section-articles__img section-articles__img--right"></img>
            </a>`;

            this.i--;
            return article;
        }
    }
}