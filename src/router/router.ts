import { createRouter, createWebHashHistory } from "vue-router";
import LoginScreen from "../screens/Login/LoginScreen.vue";
import IssuesScreen from "../screens/Issues/IssuesScreen.vue";

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
  history: createWebHashHistory(),
  routes,
});

export default router;
