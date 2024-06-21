import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/StartView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/user-research',
      name: 'user-research',
      component: () => import('../views/UserResearchView.vue.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/DesignView.vue')
    },
    {
      path: '/frontend-development',
      name: 'frontend-development',
      component: () => import('../views/FrontEndDevelopmentView.vue')
    },
    {
      path: '/user-evaluation',
      name: 'user-evaluation',
      component: () => import('../views/UserEvaluationView.vue')
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue')
    // }

  ]
})

export default router
