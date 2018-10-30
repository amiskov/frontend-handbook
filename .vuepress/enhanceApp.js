import VueYandexMetrika from '../node_modules/vue-yandex-metrika'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueYandexMetrika, {
        id: 47298378,
        options: {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        },
        router: router,
        env: process.env.NODE_ENV
    });
}