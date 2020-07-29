module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('assets');

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