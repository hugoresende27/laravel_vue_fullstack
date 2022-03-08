import { createRouter, createWebHistory } from "vue-router";



import firstPage from './components/pages/myFirstVuePage'
import main from './components/ExampleComponent'
import newRoute from './components/pages/newRoute'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

const routes = [

    //project routes
    {
        path:'/',
        component:main,
        name:'home',
        meta:{

        }
    },
    //basic tutorial routes
    {
        path:'/about',
        component:firstPage
    },
    {
        path:'/newroute',
        component:newRoute
    },

    //vue hooks
    {
        path:'/hooks',
        component:hooks
    },
    //more basics
    {
        path:'/methods',
        component:methods
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})