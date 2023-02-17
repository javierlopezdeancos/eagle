import { createRouter, createWebHistory } from "vue-router";
import LoginScreen from "../users/screens/LoginScreen.vue";
import IssuesScreen from "../issues/screens/IssuesScreen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginScreen,
  },
  {
    path: "/issues",
    name: "Issues",
    component: IssuesScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
