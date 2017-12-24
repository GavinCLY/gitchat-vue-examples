import Vue from 'vue'
import Router from 'vue-router'
import CarouselDemo from '@/views/CarouselDemo'
import ModalDemo from '@/views/ModalDemo'
import ListDemo from '@/views/ListDemo'
import MixinDemo from '@/views/MixinDemo'
import Moment from '@/views/Moment'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
