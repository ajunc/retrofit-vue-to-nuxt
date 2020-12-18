export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    mode: 'universal',
    srcDir: 'src/',
    head: {
        title: 'toutiao',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: '/rem/flexible.js', type: 'text/javascript', charset: 'utf-8' }
        ]
    },

    router: {
        middleware: ['redirect']
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'iview/dist/styles/iview.css',
        'element-ui/lib/theme-default/index.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@plugins/iview',
        '@plugins/element-ui.js',
        '@plugins/vue-lazyload'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
