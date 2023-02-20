import { createRouter, createWebHistory } from "vue-router";
import LoginScreen from "../users/screens/LoginScreen.vue";
import issuesRoute from "@/issues/routes/issuesRoute";
import issueDetailsRoute from "@/issues/routes/issueDetailsRoute";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginScreen,
  },
  issuesRoute,
  issueDetailsRoute,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
