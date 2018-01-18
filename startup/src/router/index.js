import Vue from 'vue'
import Router from 'vue-router'
import CarouselDemo from '@/views/CarouselDemo'
import ModalDemo from '@/views/ModalDemo'
import ListDemo from '@/views/ListDemo'
import MixinDemo from '@/views/MixinDemo'
import Moment from '@/views/Moment'
// import Login from '@/views/Login'
import Todo from '@/views/Todo'
import Calendar from '@/views/Calendar'

const Login = () => import(/* webpackChunkName: "user" */'../views/Login')

// 预渲染
const About = () => import(/* webpackChunkName: "static" */'../views/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/carousel',
      name: 'carousel',
      component: CarouselDemo
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalDemo
    },
    {
      path: '/list',
      name: 'list',
      component: ListDemo
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: MixinDemo
    },
    {
      path: '/moment',
      name: 'moment',
      component: Moment
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    // 预渲染
    {
      path: '/about/:index',
      name: 'About',
      component: About
    }
  ]
})
