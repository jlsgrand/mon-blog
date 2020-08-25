module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('assets');

    // Pour que les tags d'un dossier parent soient appliqués au dossier enfant
    eleventyConfig.setDataDeepMerge(true);

    return {
        dir: {
            input: './',
            output: './_site',
            layouts: './_layouts',
        },
        templateFormats: [
            'html',
            'liquid',
            'md',
        ],
        pathPrefix: '/mon-blog/', // oubliez cette ligne si vous utilisez un domaine perso
    };
}