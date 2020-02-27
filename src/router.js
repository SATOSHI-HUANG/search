import Vue from 'vue'
import Router from 'vue-router'
import List from './components/list/index.vue'
import Inside from './components/inside/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
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
