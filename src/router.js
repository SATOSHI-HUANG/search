import Vue from 'vue'
import Router from 'vue-router'
import List from './components/list/index.vue'
import Inside from './components/inside/index.vue'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};


const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '',
            redirect: '/search'
        },
        {
            path: '/search',
            name: 'list',
            component: List
        },
        {
            path: '/inside',
            name: 'inside',
            component: Inside
        }
    ]
})

export default router;
