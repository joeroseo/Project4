import { createWebHistory, createRouter } from "vue-router";
import UpdateDelete from './components/UpdateDelete.vue'
import Notes from './components/Notes'

const routes =  [
  {
    path: "/",
    alias: "/results",
    name: "results",
    component: () => import("./components/Results")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddForm")
  },
  {
    path: "/results",
    name: "Results",
    component: () => import("./components/Results"),
    props: true
  },
  {
    path: "/updatedelete",
    name: "UpdateDelete",
    component: UpdateDelete,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;