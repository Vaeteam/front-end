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
import CreatePost from "@/views/Post/CreatePost.vue";
import ActiveAccount from "@/views/Auth/ActiveAccount.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/post",
      children: [
        {
          path: "create",
          name: "create-post",
          component: CreatePost
        }
      ]
    },
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
          path: "email/account/reset/:token1/:token2",
          component: ResetPasswordView,
        },
        {
          path: "forgot-password",
          component: ForgotPasswordView,
        },
        {
          path: "email/confirmation/activate/:token1/:token2",
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
    if(isLoggedIn && to.path.includes('auth')) {
      return next('/');
    }

    const isLoggedInLocalStorage = userStore.isLoggedInLocalStorage;
    if(isLoggedInLocalStorage && to.path.includes('auth')) {
      return next('/');
    }
    return next();
  }

  return next()
});

export default router;
