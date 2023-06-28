import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'izbornik',
    component: () => import(/* webpackChunkName: "about" */ '../views/IzbornikView.vue'),
  },
  {
    path: '/naslovnica',
    name: 'naslovnica',
    component: () => import(/* webpackChunkName: "about" */ '../views/NaslovnicaView.vue'),
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrijavaView.vue')
  },
  {
    path: '/kalkulator',
    name: 'kalkulator',
    component: () => import(/* webpackChunkName: "about" */ '../views/KalkulatorView.vue')
},
{
  path: '/search',
  name: 'search',
  component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router