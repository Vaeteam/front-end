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
import ActiveAccount from "@/views/Auth/ActiveAccount.vue";
import { useUserStore } from "@/stores/user";

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
          meta: { requireAuth: true }
        },
        {
          path: "about",
          component: AboutView,
        },
        {
          path: "profile",
          component: ProfileView,
          meta: { requireAuth: true }
        },
        {
          path: "list-teacher",
          component: ListTeacherView,
          meta: { requireAuth: true }
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
          path: "%5Eemail/account/reset/:token1/:token2/:symbol",
          component: ResetPasswordView,
        },
        {
          path: "forgot-password",
          component: ForgotPasswordView,
        },
        {
          path: "%5Eemail/confirmation/activate/:token1/:token2/:symbol",
          component: ActiveAccount,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const requireAuth = to.meta.requireAuth;
  const isLoggedIn = userStore.isLoggedIn;

  if (requireAuth) {
    if(!isLoggedIn) {
      const isLoggedInLocalStorage = userStore.isLoggedInLocalStorage;
      if(!isLoggedInLocalStorage) {
        return next('/auth/login');
      }
    }
    return next();
  }
  
  if (!requireAuth) {
    if(isLoggedIn) {
      return next('/');
    }

    const isLoggedInLocalStorage = userStore.isLoggedInLocalStorage;
    if(isLoggedInLocalStorage) {
      return next('/');
    }
    return next();
  }

  return next()
});

export default router;
