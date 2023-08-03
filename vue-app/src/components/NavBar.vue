<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore();
const logOut = () => {
  userStore.logout();
  router.push('/auth/login')
}
</script>

<template>
  <header class="navbar-light navbar-sticky">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img
            class="light-mode-item navbar-brand-item"
            src="../assets/images/logo/logo36.png"
            alt="logo"
          />
        </router-link>
        <div class="navbar-collapse w-100 collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/auth/login">Log In</router-link>
            </li>
            <li class="nav-item" @click="logOut">
              <div class="nav-link">Log Out</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
