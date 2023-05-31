<script setup lang="ts">
import { ref } from 'vue';
import authService from '@/service/auth.service';
import InputError from '@/components/InputError.vue';

const isLoading = ref(false);
const signUpSuccess = ref(false);

const userRegister = ref({
  first_name: "", 
  last_name: "",
  password: "", 
  confirm_password: "", 
  email: ""
});

const userRegisterError = ref({
  data: "",
  first_name: [], 
  last_name: [],
  password: [], 
  confirm_password: [], 
  email: []
});

const signUpNormal = async () => {
  try {
    isLoading.value = true;
    const response = await authService.signUp(userRegister.value);
    userRegisterError.value = {
      data: "",
      first_name: [], 
      last_name: [],
      password: [], 
      confirm_password: [], 
      email: []
    }
    signUpSuccess.value = true;
  } catch(error: any) {
    userRegisterError.value = {
      data: "",
      first_name: [], 
      last_name: [],
      password: [], 
      confirm_password: [], 
      email: []
    }
    userRegisterError.value = {...userRegisterError.value, ...error.response.data.data}
  }
  isLoading.value = false;
}
</script>

<template>
  <div class="col-12 col-lg-6 m-auto">
    <div class="row my-5">
      <div class="col-sm-10 col-xl-8 m-auto" v-if="!signUpSuccess">
        <!-- Title -->
        <img src="../../assets/images/element/03.svg" class="h-40px mb-2" alt="">
        <h2>Sign up for your account!</h2>
        <p class="lead mb-4">Nice to see you! Please Sign up with your account.</p>

        <p class="mb-4 text-center text-danger" v-if="userRegisterError.data">{{ userRegisterError.data }}</p>
        <!-- Form START -->
        <form @submit.prevent="signUpNormal" :disabled="isLoading">
          <!-- First Name -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">First name *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-user" /></span>
              <input type="text" class="form-control border-0 bg-light rounded-end ps-1" placeholder="First name"
                id="firstName" required v-model="userRegister.first_name">
            </div>
            <InputError :error-list="userRegisterError.first_name"></InputError>
          </div>
          <!-- Last Name -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Last name *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-user" /></span>
              <input type="text" class="form-control border-0 bg-light rounded-end ps-1" placeholder="Last name"
                id="lastName" required v-model="userRegister.last_name">
            </div>
            <InputError :error-list="userRegisterError.last_name"></InputError>
          </div>
          <!-- Email -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email address *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-envelope" /></span>
              <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                id="exampleInputEmail1" required v-model="userRegister.email">
            </div>
            <InputError :error-list="userRegisterError.email"></InputError>
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label for="inputPassword5" class="form-label">Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********"
                id="inputPassword5" required v-model="userRegister.password">
            </div>
            <InputError :error-list="userRegisterError.password"></InputError>
          </div>
          <!-- Confirm Password -->
          <div class="mb-4">
            <label for="inputPassword6" class="form-label">Confirm Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********"
                id="inputPassword6" required v-model="userRegister.confirm_password">
            </div>
            <InputError :error-list="userRegisterError.confirm_password"></InputError>
          </div>
          <!-- Check box -->
          <!-- <div class="mb-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="checkbox-1">
                      <label class="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms
                          of service</a></label>
                    </div>
                  </div> -->
          <!-- Button -->
          <div class="align-items-center mt-0">
            <div class="d-grid">
              <button class="btn btn-primary mb-0" type="submit" :disabled="isLoading">Sign Up</button>
            </div>
          </div>
        </form>
        <!-- Form END -->

        <!-- Social buttons -->
        <!-- <div class="row"> -->
          <!-- Divider with text -->
          <!-- <div class="position-relative my-4">
            <hr>
            <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
          </div> -->
          <!-- Social btn -->
          <!-- <div class="col-xxl-6 d-grid">
            <button @click="signUpGoogle" class="btn bg-google mb-2 mb-xxl-0" :disabled="isLoading"><font-awesome-icon class="me-2"
                icon="fa-brands fa-google" />Signup with Google</button>
          </div> -->
          <!-- Social btn -->
          <!-- <div class="col-xxl-6 d-grid">
            <button @click="signUpFaceBook" class="btn bg-facebook mb-0" :disabled="isLoading"><font-awesome-icon class="me-2"
                icon="fa-brands fa-facebook-f" />Signup with
              Facebook</button>
          </div> -->
        <!-- </div> -->
      </div>
      <div class="col-sm-10 col-xl-8 m-auto" v-else>
        <!-- Title -->
        <img src="../../assets/images/element/03.svg" class="h-40px mb-2" alt="">
        <h2>Sign up for your account!</h2>
        <p class="lead mb-4">Nice to see you! Please Sign up with your account.</p>
        <p class="lead mb-4 text-center text-black">
          <font-awesome-icon icon="fa-solid fa-check-circle" class="text-success"/>
          You have successfully registered. Please check your email to activate your account!
        </p>
      </div>
      <!-- Sign up link -->
      <div class="mt-4 text-center">
          <span>Already have an account?
            <RouterLink to="/auth/login">
              Sign in here
            </RouterLink>
          </span>
        </div>
    </div>
  </div>
</template>
