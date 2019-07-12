import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/Login')
const Register = () => import('../components/Register')
const Manage = () => import('../components/Manage')
const index = () => import('../components')
const User = () => import('../components/user')
const Gallery = () => import('../components/gallery')
const Add = () => import('../components/order/add')
const List = () => import('../components/order/list')
const Template = () => import('../components/order/Template')

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path:'/template',
            component: Template
        },
        {
            path: '/manage',
            component: Manage,
            children: [{
                    path: '/manage/index',
                    component: index,
                    meta: {
                        '首页': '/manage/index'
                    }
                },
                {
                    path: '/manage/user',
                    component: User,
                    meta: {
                        '首页': '/manage/index',
                        '用户管理': '/manage/user'
                    }
                },
                {
                    path: '/manage/gallery',
                    component: Gallery,
                    meta: {
                        '首页': '/manage/index',
                        '图库管理': '/manage/gallery'
                    }
                },
                {
                    path: '/manage/order/add',
                    component: Add,
                    meta: {
                        '首页': '/manage/index',
                        '项目制作单': '',
                        '添加项目制作单': '/manage/order'
                    }
                },
                {
                    path: '/manage/order/list',
                    component: List,
                    meta: {
                        '首页': '/manage/index',
                        '项目制作单': '',
                        '项目制作单列表': '/manage/list'
                    }
                }
            ]
        }
    ]
})

export default router