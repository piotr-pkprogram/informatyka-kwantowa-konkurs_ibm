// @ts-nocheck
class AbstractSectionsView extends AbstractView {
    /**
     * @param {string} title
     * @param {string} description
     * @param {string} site_name
     * @param {string} url
     * @param {string[]} keywords
     * @param {Article} article
     * @param {string} prefix
     */
    constructor(article, prefix, title) {
        super(prefix, title);
        this.article = article;
    }

    getHtml() {
        const html = document.createDocumentFragment();

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');
        titleContainer.innerHTML = `<h1 class="title-container__title">${this.article.sections[this.sectionIndex].title}</h1>
        <button class="title-container__btn">
            <img src="${this.prefix}img/south_white_24dp.svg" class="title-container__arrow" alt=""/>
        </button>`;

        const articleAndMenu = document.createElement('div');
        articleAndMenu.classList.add('article-and-menu');

        const navigationAside = document.createElement('aside');
        navigationAside.classList.add('navigation-aside');
        const navigationAsideOpenBtn = document.createElement('button');
        navigationAsideOpenBtn.classList.add('navigation-aside__open-btn')
        navigationAsideOpenBtn.innerHTML = `<img class="navigation-aside__img" src="${this.prefix}img/sort.svg" alt="" />`;
        const hr = document.createElement('hr');

        const navigationAsideList = document.createElement('ul');
        navigationAsideList.classList.add('navigation-aside__list');

        this.article.sections.map(({ title, url }) => {
            const newLinkSection = this.createLinkSection(title, url);

            return newLinkSection;
        });

        this.article.sections.forEach(section => { navigationAsideList.appendChild(section); });

        navigationAside.appendChild(navigationAsideOpenBtn);
        navigationAside.appendChild(hr);
        navigationAside.appendChild(navigationAsideList);

        const articleContainer = document.createElement('article');
        articleContainer.classList.add('article-container');

        this.getArticleValue();
        articleContainer.innerHTML = this.articleValue;

        articleAndMenu.appendChild(navigationAside);
        articleAndMenu.appendChild(articleContainer);

        html.appendChild(titleContainer);
        html.appendChild(articleAndMenu);

        return html;
    }

    /**
     * @param {string} title
     * @param {string} url
     */
    createLinkSection(title, url) {
        const sectionLink = document.createElement('li');
        sectionLink.classList.add('navigation-aside__list-element');
        sectionLink.innerHTML = `<a class="navigation-aside__link" href="./${url}"> ${title} </a> `;

        return sectionLink;
    }

    async getArticleValue(articleName, sectionName) {

        const params = new URLSearchParams({
            articleName,
            sectionName
        });

        const url = `/articleValue?${ params.toString() }`;

        const articleValue = await fetch(url, { method: 'POST' })
            .then(res => {
                if (res.status != 200)
                    throw new Error('Wystąpił błąd');
                else
                    return res.json();
            })
            .then(json => Array.from(json.articleValue))
            .catch(res => {
                throw new Error(`Wystąpił błąd`);
            });

        this.articleValue = articleValue;

    }
}