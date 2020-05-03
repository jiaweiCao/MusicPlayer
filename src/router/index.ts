import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/recommend',
    component: () => import(/* webpackChunkName: "MusicPlayer" */ '../views/Home/Home.vue')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MusicPlayer" */ '../views/recommend/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
