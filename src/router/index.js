import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../components/Login')
const Register = () => import('../components/Register')
const Manage = () => import('../components/Manage')
const index = () => import('../components')
const User = () => import('../components/user')
const Gallery = () => import('../components/gallery')

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
                }
            ]
        }
    ]
})

export default router