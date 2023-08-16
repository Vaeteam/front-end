<script setup lang="ts">
  import { useUserStore } from "@/stores/user";
  import { useRouter } from "vue-router";
  import { ref, computed } from "vue";
  import { navs } from "@/constants/navs.constant";

  const router = useRouter();
  const userStore = useUserStore();
  const isLogin = computed(() => userStore.isLoggedIn);
  // for navbar
  const isExpand = ref(false);
  const isShow = ref(false);
  const isCollapsing = ref(false);
  const height = ref(0);
  const togleNav = () => {
    isShow.value = false;
    isCollapsing.value = true;
    isExpand.value = !isExpand.value;
    setTimeout(() => {
      if (!isExpand.value) {
        height.value = 0;
      } else {
        isShowProfile.value = false;
        height.value = navs.length * 50 + 100 + (isLogin.value ? 0 : 50);
      }
    }, 50);

    setTimeout(() => {
      isCollapsing.value = false;
      isShow.value = isExpand.value;
    }, 200);
  };

  // for profile
  const isShowProfile = ref(false);
  const toggleProfile = () => {
    isShowProfile.value = !isShowProfile.value;
    if(isShowProfile.value && isExpand.value) {
      togleNav()
    }
  }

  const changeRoute = (path: string) => {
    router.push(path);
  };
  const logOut = () => {
    userStore.logout()
  }
</script>

<template>
  <header class="navbar-light navbar-sticky header-static">
    <!-- Logo Nav START -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-3 px-xl-5">
        <!-- Responsive navbar toggler -->
        <div class="d-flex">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            @click="togleNav"
            :aria-expanded="isExpand"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <!-- Logo START -->
          <a class="navbar-brand" href="index.html">
            <img
              class="light-mode-item navbar-brand-item"
              src="../assets/images/logo.svg"
              alt="logo"
            />
            <img
              class="dark-mode-item navbar-brand-item"
              src="../assets/images/logo-light.svg"
              alt="logo"
            />
          </a>
        </div>
        <!-- Logo END -->

        <!-- Main navbar START -->
        <div
          class="navbar-collapse w-100"
          :class="{
            show: isShow,
            collapsing: isCollapsing,
            collapse: !isCollapsing,
          }"
          id="navbarCollapse"
          :style="'height:' + height + 'px'"
        >
          <!-- Nav Main menu START -->
          <ul class="navbar-nav navbar-nav-scroll me-auto">
            <!-- Nav item 1 Demos -->
            <li v-for="(item, index) in navs" :key="index" class="nav-item">
              <a class="nav-link" @click="changeRoute(item.path)"> {{ item.name }} </a>
            </li>
            <li class="nav-item" v-if="!isLogin">
              <a class="nav-link" @click="changeRoute('/auth/login')"> Login </a>
            </li>
          </ul>
          <!-- Nav Main menu END -->

          <!-- Nav Search START -->
          <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
            <div class="nav-item w-100">
              <form class="position-relative">
                <input
                  class="form-control pe-5 bg-transparent"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                  type="submit"
                >
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
          <!-- Nav Search END -->
        </div>
        <!-- Main navbar END -->

        <!-- Profile START -->
        <div v-if="!isLogin" class="d-flex">
          <button
            class="btn btn-login navbar-collapse collapse"
            type="button"
            @click="changeRoute('/auth/login')"
          >
            Log in
          </button>
          <button class="btn btn-primary" type="button" @click="changeRoute('/auth/sign-up')">
            Sign up
          </button>
        </div>
        <div class="dropdown ms-1 ms-lg-0" v-else>
          <a
            class="avatar avatar-sm p-0"
            id="profileDropdown"
            @click="toggleProfile"
          >
            <img
              class="avatar-img rounded-circle"
              src="../assets/images/avatar/01.jpg"
              alt="avatar"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
            :class="{'show': isShowProfile}"
            aria-labelledby="profileDropdown"
          >
            <!-- Profile info -->
            <li class="px-3">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar me-3">
                  <img
                    class="avatar-img rounded-circle shadow"
                    src="../assets/images/avatar/01.jpg"
                    alt="avatar"
                  />
                </div>
                <div>
                  <a class="h6" href="#">Lori Ferguson</a>
                  <p class="small m-0">example@gmail.com</p>
                </div>
              </div>
              <hr />
            </li>
            <!-- Links -->
            <li>
              <a class="dropdown-item" href="#"
                ><font-awesome-icon icon="fa-solid fa-user" class="bi bi-gear fa-fw me-2" />Edit Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><font-awesome-icon icon="fa-solid fa-gear" class="bi bi-gear fa-fw me-2" />Account Settings</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><font-awesome-icon icon="fa-solid fa-circle-info" class="bi bi-gear fa-fw me-2" />Help</a
              >
            </li>
            <li>
              <a class="dropdown-item bg-danger-soft-hover" href="#" @click="logOut"
                ><font-awesome-icon icon="fa-solid fa-power-off" class="bi bi-gear fa-fw me-2" />Sign Out</a
              >
            </li>
          </ul>
        </div>
        <!-- Profile START -->
      </div>
    </nav>
    <!-- Logo Nav END -->
  </header>
</template>

<style lang="css" scoped>
  .nav-link {
    font-weight: 400 !important;
    font-size: 17px;
  }
  .navbar-toggler {
    padding-left: 0 !important;
    margin-right: 10px;
  }
  .btn {
    font-size: 17px;
  }
  .btn-login {
    display: flex;
    align-items: center;
    color: black;
    margin-right: 10px;
  }
  .btn-login::after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    margin-left: 22px;
    border-radius: 50%;
    background-color: #0d0c22;
  }
</style>
