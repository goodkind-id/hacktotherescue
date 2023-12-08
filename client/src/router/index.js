import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/candidate/:id",
      name: "CandidatePage",
      component: () => import("../views/CandidatePage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
})

export default router
