import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AddProject from "../views/AddTask.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddTask",
    component: AddProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
