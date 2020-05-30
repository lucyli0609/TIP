import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import NewProduct from '@/components/NewProduct'
import Header from '@/components/Header'
import scan from '@/view/scan'
import home from '@/view/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/NewProduct',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/scan',
      name: 'scan',
      component: scan
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
