import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import Supper from '@/view/supper'
import Map from '@/view/map'
import Location from '@/view/location'

import Home from '@/view/Footer/home/home'
import Class from '@/view/Footer/class/class'
import Vip from '@/view/Footer/vip/vip'
import Cart from '@/view/Footer/cart/cart'
import Login from '@/view/Footer/my/login'
import My from '@/view/Footer/my/my'

import HomeSupermarket from '@/view/Footer/home/supermarket/supermarket'
import HomeGlobal from '../view/Footer/home/global/global'

import ClassSupermarket from '../view/Footer/class/supermarket/supermarket'
import ClassGlobal from '../view/Footer/class/global/global'

import AddAddress from '../view/addAddress'
import SearchStreet from '../view/serchStreet'

import OrderInfo from '../view/Footer/cart/orderInfo'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      component: Map
    }, {
      path:'/location',
      name:'location',
      component: Location
    }, {
      path: '/supper',
      name: 'supper',
      component: Supper,
      children:[{
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
          path: '/home',
          redirect: '/home/supermarket'
        }, {
          path: '/home/supermarket',
          name: 'supermarket',
          component: HomeSupermarket
        }, {
          path: '/home/global',
          name: 'global',
          component: HomeGlobal
        }]
      }, {
        path: '/class',
        name: 'class',
        component: Class,
        children: [{
          path: '/class',
          redirect: '/class/supermarket'
        },{
          path: '/class/supermarket',
          name: 'supermarket',
          component: ClassSupermarket
        }, {
          path: '/class/global',
          name: 'global',
          component: ClassGlobal
        }]
      }, {
        path: '/vip',
        name: 'vip',
        component: Vip,
      }, {
        path: '/cart',
        name: 'cart',
        component: Cart,
      }, {
        path: '/my',
        name: 'my',
        component: My,
      }]
    }, {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress,
    }, {
      path: '/searchStreet',
      name: 'SearchStreet',
      component: SearchStreet,
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/orderInfo',
      name: 'orderInfo',
      component: OrderInfo,
    }
  ]
})
