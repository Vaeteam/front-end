<script setup lang="ts">
import { RouterLink } from "vue-router";
function loginGoogle() {
  console.log('login google');
}
function loginFacebook() {
  console.log('login facebook');
}
</script>

<template>
  <div class="col-12 col-lg-6 m-auto">
    <div class="row my-5">
      <div class="col-sm-10 col-xl-8 m-auto">
        <!-- Title -->
        <span class="mb-0 fs-1">👋</span>
        <h1 class="fs-2">Login into Eduport!</h1>
        <p class="lead mb-4">Nice to see you! Please log in with your account.</p>

        <!-- Form START -->
        <form>
          <!-- Email -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email address *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-envelope" /></span>
              <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                id="exampleInputEmail1" required>
            </div>
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label for="inputPassword5" class="form-label">Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="password"
                id="inputPassword5" required>
            </div>
          </div>
          <!-- Check box -->
          <div class="mb-4 d-flex justify-content-between mb-4">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <div class="text-primary-hover">
              <RouterLink to="/auth/forgot-password" class="text-secondary">
                <u>Forgot password?</u>
              </RouterLink>
            </div>
          </div>
          <!-- Button -->
          <div class="align-items-center mt-0">
            <div class="d-grid">
              <button class="btn btn-primary mb-0" type="button">Login</button>
            </div>
          </div>
        </form>
        <!-- Form END -->

        <!-- Social buttons and divider -->
        <div class="row">
          <!-- Divider with text -->
          <div class="position-relative my-4">
            <hr>
            <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
          </div>

          <!-- Social btn -->
          <div class="col-xxl-6 d-grid">
            <button @click="loginGoogle" class="btn bg-google mb-2 mb-xxl-0"><font-awesome-icon class="me-2"
                icon="fa-brands fa-google" />Login with Google</button>
          </div>
          <!-- Social btn -->
          <div class="col-xxl-6 d-grid">
            <button @click="loginFacebook" class="btn bg-facebook mb-0"><font-awesome-icon class="me-2"
                icon="fa-brands fa-facebook-f" />Login with
              Facebook</button>
          </div>
        </div>

        <!-- Sign up link -->
        <div class="mt-4 text-center">

          <span>Don't have an account?
            <RouterLink to="/auth/sign-up">
              Signup here
            </RouterLink>
          </span>
        </div>
      </div>
    </div> <!-- Row END -->
  </div>
</template>
