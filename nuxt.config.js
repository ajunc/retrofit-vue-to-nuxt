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
            { src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js', type: 'text/javascript', charset: 'utf-8' }
        ]
    },

    router: {
        middleware: ['redirect']
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'iview/dist/styles/iview.css',
        'element-ui/lib/theme-default/index.css',
        './assets/css/public/reset.css'
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
        '@nuxtjs/axios',
    ],
    axios: {
        proxy: true
    },
    proxy: {
        "/api": "http://localhost:8080"
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
