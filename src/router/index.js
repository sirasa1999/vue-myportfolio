import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../views/OverviewPage.vue'
import EducationPage from '../views/EducationPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: OverviewPage
  },
  {
    path: '/',
    name: 'education',
    component: EducationPage
  },
//   {
//     path: '/Overview',
//     name: 'Overview',
//     // route level code-splitting
//     // this generates a separate chunk (Overview.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "Overview" */ '../views/OverviewView.vue')
//   },

//   {
//     path: '/practise',
//     name: 'practisepractise',
//     // route level code-splitting
//     // this generates a separate chunk (practise.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "practise" */ '../views/PractisePractise.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
