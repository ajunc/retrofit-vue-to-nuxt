import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
export default() => {
    Vue.use(VueLazyload, {
        error: '/src/assets/imgs/imgerror.jpg',
        loading: '/src/assets/imgs/imgloading.gif',
        preLoad: 1,
        attempt: 1
    });
}