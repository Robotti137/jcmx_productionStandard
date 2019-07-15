import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/Login')
const Register = () => import('../components/Register')
const Manage = () => import('../components/Manage')
const index = () => import('../components')
const User = () => import('../components/user')
const Gallery = () => import('../components/gallery')

//order
const OrderProject = () => import('../components/order/project')
const OrderHouse = () => import('../components/order/house')
const OrderLocation = () => import('../components/order/location')
const OrderProjectTemplate = () => import('../components/order/project/Template')

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
            path: '/order/project/template',
            component: OrderProjectTemplate
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
                    path: '/manage/order/project',
                    component: OrderProject,
                    meta: {
                        '首页': '/manage/index',
                        '项目制作单': '',
                        '项目开工单': '/manage/order/project'
                    }
                },
                {
                    path: '/manage/order/house',
                    component: OrderHouse,
                    meta: {
                        '首页': '/manage/index',
                        '项目制作单': '',
                        '户型开工单': '/manage/order/house'
                    }
                },
                {
                    path: '/manage/order/location',
                    component: OrderLocation,
                    meta: {
                        '首页': '/manage/index',
                        '项目制作单': '',
                        '区位开工单': '/manage/order/location'
                    }
                },
            ]
        }
    ]
})

export default router