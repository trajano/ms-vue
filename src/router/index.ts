import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/cb',
      name: 'Callback',
      meta: {
        permit_all: true
      },
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        permit_all: true
      },
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})

router.beforeEach((to, from, next:Function) => {
  if (!sessionStorage.getItem("access_token") && !to.meta.permit_all) {
    sessionStorage.setItem("requested_uri", to.fullPath)
    next("/login")
  } else {
    next()
  }
})

export default router
