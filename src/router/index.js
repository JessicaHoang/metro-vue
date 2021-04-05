// This page handles the routing and provides routing-links.
// It is currently using vue and vue-router to create these routing-links.

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // routing for the station
  {
    path: '/StationOneInfo',
    name: 'StationOneInfo',
    component: () => import(/* webpackChunkName: "Station one" */ '../views/StationOneInfo.vue')
  }
]

// This is an instance of VueRouter used to make routing links.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
