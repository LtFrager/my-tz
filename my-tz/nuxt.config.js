module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'my-project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap' },
            { rel: 'stylesheet', href: '/fonts/CeraPro/stylesheet.css' },
            { rel: 'stylesheet', href: '/fonts/ProximaNova/stylesheet.css' }
        ]
    },
    plugins: ['~/plugins/vuetify.js'],
    css: ['~/assets/style/app.styl'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    // loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}