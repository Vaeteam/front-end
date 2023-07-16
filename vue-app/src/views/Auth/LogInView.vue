<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from "vue-router";
import authService from "@/service/auth.service";
import { useUserStore } from "@/stores/user";
import InputError from '@/components/InputError.vue';
import router from '@/router';

let FB: any;

const route = useRoute()
const userStore = useUserStore();
const isLoading = ref(false);
const user = ref({
  email: "",
  password: "",
});

const messageError = ref({
  email: [],
  password: [],
  data: "" 
});

const clearMessageError = () => {
  messageError.value = {
    email: [],
    password: [],
    data: "" 
  }
}

const messageSuccess = ref("");

onMounted(() => {
  if (typeof FB !== 'undefined') {
        initializeFacebookSDK();
  }
  initializeFacebookSDK()
  const { success, message } = route.query;
  if(success === 'true') {
    messageSuccess.value = message ? message as string : "";
  } else if ( success === 'false' ) {
    messageError.value.data = message ? message as string : "";
  }
})

const loginNormal = async () => {
  try{
    isLoading.value = true;
    const response = await authService.signIn(user.value);
    clearMessageError();
    saveLoginInfo(response.data);
  } catch (error: any) {
    clearMessageError();
    messageError.value = {...messageError.value, ...error.response.data.data};
  }
  isLoading.value = false;
}

const initializeFacebookSDK = () => {
  // Xử lý sự kiện tải SDK của Facebook
  (window as any).fbAsyncInit = () => {
    FB.init({
      appId            : '941220900526368',
      autoLogAppEvents : true,
      xfbml            : true,
      version: 'v17.0'
    });
  };

  // Tải SDK của Facebook
  (function (d, s, id) {
    var js: any,
      fjs: any = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src =
        'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

const loginGoogle = async (response: any) => {
  try {
    const { code } = response;
    const payload = {
      auth_token: code
    }
    const res = await authService.signInGoogle(payload);
    clearMessageError();
    saveLoginInfo(res)
  } catch (error: any) {
    clearMessageError();
    messageError.value = {...messageError.value, ...error.response.data.data};
  }
}

const loginFacebook = () => {
  FB.login((response: any) => {
    console.log(response)
    if (response.authResponse) {
      const { accessToken } = response.authResponse;
      const payload = {
        fb_access_token: accessToken
      }
      authService.signInFacebook(payload)
        .then((res) => {
          clearMessageError();
          saveLoginInfo(res)
        })
        .catch((error: any) => {
          clearMessageError();
          messageError.value = {...messageError.value, ...error.response.data.data};
        })
    }
  });
}

const saveLoginInfo = (res: any) => {
  const { access_token, refresh_token } = res;
  userStore.login(access_token, refresh_token);
  router.push('/');
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
        <p class="lead mb-4 text-center text-black" v-if="messageSuccess">
          <font-awesome-icon icon="fa-solid fa-check-circle" class="text-success"/>
          {{ messageSuccess }}
        </p>
        <p class="mb-4 text-center text-danger" v-if="messageError.data">{{ messageError.data }}</p>
        <!-- Form START -->
        <form @submit.prevent="loginNormal" :disabled="isLoading">
          <!-- Email -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email address *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text rounded-start border-0 text-secondary px-3" :class="isLoading ? 'bg-muted' : 'bg-light'"><font-awesome-icon
                  icon="fa-solid fa-envelope" /></span>
              <input type="email" class="form-control border-0 rounded-end ps-1" :class="isLoading ? 'bg-muted' : 'bg-light'" placeholder="E-mail"
                id="exampleInputEmail1" required v-model="user.email" :disabled="isLoading">
            </div>
            <InputError :error-list="messageError.email"></InputError>
          </div>
          <!-- Password -->
          <div class="mb-4">
            <label for="inputPassword5" class="form-label">Password *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text rounded-start border-0 text-secondary px-3" :class="isLoading ? 'bg-muted' : 'bg-light'"><font-awesome-icon
                  icon="fa-solid fa-lock" /></span>
              <input type="password" class="form-control border-0 rounded-end ps-1" :class="isLoading ? 'bg-muted' : 'bg-light'" placeholder="password"
                id="inputPassword5" required v-model="user.password" :disabled="isLoading">
            </div>
            <InputError :error-list="messageError.password"></InputError>
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
              <button class="btn btn-primary mb-0" type="submit" :disabled="isLoading">Login</button>
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
            <GoogleLogin class="btn bg-google mb-2 mb-xxl-0" :callback="loginGoogle" prompt><font-awesome-icon class="me-2"
                icon="fa-brands fa-google" />Login with Google</GoogleLogin>
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
