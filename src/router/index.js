import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
