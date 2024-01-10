import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/recherchemarche",
    component: () => import("@/components/RechercheMarche.vue"),
    children: [
      {
        path: "",
        name: "RechercheMarche",
        component: () => import("@/components/RechercheMarche.vue"),
      },
    ],
  },
  {
    path: "/Producteurs",
    component: () => import("@/components/Producteurs.vue"),
    children: [
      {
        path: "",
        name: "Producteurs",
        component: () => import("@/components/Producteurs.vue"),
      },
    ],
  },
  {
    path: "/Marches",
    component: () => import("@/components/Marches.vue"),
    children: [
      {
        path: "",
        name: "Marches",
        component: () => import("@/components/Marches.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
