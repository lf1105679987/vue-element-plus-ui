import Vue from 'vue'
import Router from 'vue-router'
import home from '@/exmple/home'
import upload from '@/exmple/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path: '/', component: upload}
      ],
      
    }
  ]
})
