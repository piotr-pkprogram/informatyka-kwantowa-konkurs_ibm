const { Remarkable } = require('remarkable');
const fs = require('fs');

const compileMarkdownArticle = (req, res) => {

    const regex = new RegExp(/articleName=([^&]*)&sectionName=([^&]*)/);

    const match = req._parsedOriginalUrl.query.match(regex);

    try {

        fs.readFile(`./app/markdown/${match[1]}/${match[2]}`, 'utf8', (err, data) => {

            if (err) {
                if (err.code === 'ENOENT') {
                    res.status(404).send(err);
                    throw err;
                }

                res.status(500).send(err);
                throw err;
            }

            const markdownCompiler = new Remarkable({
                html: true
            });

            const htmlArticleValue = markdownCompiler.render(data);

            const articleValue = htmlArticleValue.replace(/~\^/g, '<sup>').replace(/~~/g, '</sup>')

            res.status(200).send({ articleValue });
        });

    } catch (e) {
        return;
    }

}

module.exports = compileMarkdownArticle;