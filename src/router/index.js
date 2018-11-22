import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path    : '/',
            redirect: '/onemap'
        },
        {
            path     : '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children : [
                {
                    path     : '/onemap',
                    component: resolve => require(['../components/page/OneMap.vue'], resolve),
                    meta     : { title: '一张图' }
                },
                {
                    path     : '/xhgl',
                    component: resolve => require(['../components/page/XhGl.vue'], resolve),
                    meta     : { title: '巡河管理' }
                },
                {
                    path     : '/wtcl',
                    component: resolve => require(['../components/page/wtcl.vue'], resolve),
                    meta     : { title: '问题处理' }
                },
                {
                    path     : '/shengbs',
                    component: resolve => require(['../components/page/shengbs.vue'], resolve),
                    meta     : { title: '省级报送' }
                },
                {
                    path     : '/shibs',
                    component: resolve => require(['../components/page/shibs.vue'], resolve),
                    meta     : { title: '市级报送' }
                },
                {
                    path     : '/xjbs',
                    component: resolve => require(['../components/page/xjbs.vue'], resolve),
                    meta     : { title: '县级报送' }
                },
            ]
        },
        {
            path     : '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path     : '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path     : '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path    : '*',
            redirect: '/404'
        }
    ]
})
