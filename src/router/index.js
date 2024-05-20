import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Services from '../views/Services.vue'
import Partner from '../views/Partner.vue'
import Impressum from '../views/Impressum.vue'
import Explore from '../views/Explore.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/partner',
    name: 'partner',
    component: Partner
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
