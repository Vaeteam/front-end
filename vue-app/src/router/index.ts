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
import StudentSubscriptionView from "@/views/Profile/StudentSubscriptionView.vue";
import StudentCourseListView from "@/views/Profile/StudentCourseListView.vue";
import StudentCourseResumeView from "@/views/Profile/StudentCourseResumeView.vue";
import StudentPaymentView from "@/views/Profile/StudentPaymentView.vue";
import StudentBookmarkView from "@/views/Profile/StudentBookmarkView.vue";
import StudentQuizView from "@/views/Profile/StudentQuizView.vue";
import TeacherCourseListView from "@/views/Profile/TeacherCourseListView.vue";
import TeacherQuizView from "@/views/Profile/TeacherQuizView.vue";
import TeacherEarningView from "@/views/Profile/TeacherEarningView.vue";
import TeacherOrderView from "@/views/Profile/TeacherOrderView.vue";
import TeacherReviewView from "@/views/Profile/TeacherReviewView.vue";
import TeacherPayoutView from "@/views/Profile/TeacherPayoutView.vue";
import StudentListView from "@/views/Profile/TeacherStudentsListView.vue"
import ListTeacherView from "@/views/ListTeacherView.vue";
import ActiveAccount from "@/views/Auth/ActiveAccount.vue";
import NotFound from "@/views/NotFound.vue";


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
    {
      path: "/profile",
      component: LayoutWithNavbar,
      children: [
        {
          path: "student/subscriptions",
          component: StudentSubscriptionView,
        },
        {
          path: "student/courseView",
          component: StudentCourseListView,
        },
        {
          path: "student/courseResume",
          component: StudentCourseResumeView,
        },
        {
          path: "student/quiz",
          component: StudentQuizView,
        },
        {
          path: "student/payment",
          component: StudentPaymentView,
        },
        {
          path: "student/bookmark",
          component: StudentBookmarkView,
        },
        {
          path: "courses",
          component: TeacherCourseListView,
        },
        {
          path: "quiz",
          component: TeacherQuizView,
        },
        {
          path: "earnings",
          component: TeacherEarningView,
        },
        {
          path: "students",
          component: StudentListView,
        },
        {
          path: "orders",
          component: TeacherOrderView,
        },
        {
          path: "reviews",
          component: TeacherReviewView,
        },
        {
          path: "payouts",
          component: TeacherPayoutView,
        }
      ],
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
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
