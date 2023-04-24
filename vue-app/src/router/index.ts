import { createRouter, createWebHistory } from "vue-router";
// import Layout
import LayoutWithNavbar from "../layout/LayoutWithNavbar.vue";
import LayoutWithoutNavbar from "../layout/LayoutWithoutNavbar.vue";
import LayoutAuth from "@/layout/LayoutAuth.vue";
// import View
import LogInView from "../views/Auth/LogInView.vue";
import SignUpView from "../views/Auth/SignUpView.vue";
import ResetPasswordView from "@/views/Auth/ResetPasswordView.vue";
import ForgotPasswordView from "@/views/Auth/ForgotPasswordView.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import ProfileView from "@/views/Profile/ProfileView.vue";
import ListTeacherView from "@/views/ListTeacherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutWithNavbar,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "about",
          component: AboutView,
        },
        {
          path: "profile",
          component: ProfileView,
        },
        {
          path: "list-teacher",
          component: ListTeacherView,
        },
      ],
    },
    {
      path: "/auth",
      component: LayoutAuth,
      children: [
        {
          path: "login",
          component: LogInView,
        },
        {
          path: "sign-up",
          component: SignUpView,
        },
        {
          path: "reset-password",
          component: ResetPasswordView,
        },
        {
          path: "forgot-password",
          component: ForgotPasswordView,
        },
      ],
    },
  ],
});

export default router;
