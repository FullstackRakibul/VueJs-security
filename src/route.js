import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import WorkPage from "./pages/WorkPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/work",
    name: "work",
    component: WorkPage,
  },
];

const Router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default Router;
