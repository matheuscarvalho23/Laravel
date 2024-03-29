
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('header-cone', require('./components/Header.vue'));
Vue.component('painel', require('./components/Painel.vue'));
Vue.component('box', require('./components/Box.vue'));
Vue.component('page', require('./components/Page.vue'));
Vue.component('table-list', require('./components/TableList.vue'));
Vue.component('crumb', require('./components/Crumbs.vue'));
Vue.component('modal', require('./components/modal/Modal.vue'));
Vue.component('modal-link', require('./components/modal/ModalLink.vue'));
Vue.component('forms', require('./components/Form.vue'));

const app = new Vue({
    el: '#app'
});
