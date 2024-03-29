import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AddTask from "../views/AddTask.vue";
import EditTask from "../views/EditTask.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddTask",
    component: AddTask,
  },
  {
    path: "/tasks/:id",
    name: "EditTask",
    component: EditTask,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
