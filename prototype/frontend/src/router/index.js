import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import NewProduct from '@/components/NewProduct'
import Header from '@/components/Header'
import scan from '@/view/scan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
