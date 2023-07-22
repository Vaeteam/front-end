<script setup lang="ts">
  import { ref } from 'vue';
  import authService from '@/service/auth.service';
  import InputError from '@/components/InputError.vue';

  const submitSuccess = ref(false);
  const isLoading = ref(false);
  
  const payload = ref({
    email: ""
  });

  const messageError = ref({
    email: [],
    data: ""  
  })

  const resetPass = async () => {
    try {
      isLoading.value = true;
      const response = await authService.resetPass(payload.value);
      messageError.value = {
        email: [],
        data: ""  
      }
      submitSuccess.value = true
    } catch(error: any) {
      messageError.value = {
        email: [],
        data: ""
      }
      
      messageError.value = { ...messageError.value,...error.response.data.data};
    }
    isLoading.value = false;
  }
</script>

<template>
  <div class="col-12 col-lg-6 d-flex justify-content-center m-auto">
    <div class="row my-5">
      <div class="col-sm-10 col-xl-12 m-auto">

        <!-- Title -->
        <span class="mb-0 fs-1">🤔</span>
        <h1 class="fs-2">Forgot Password?</h1>
        <h5 class="fw-light mb-4">To receive a new password, enter your email address below.</h5>

        <p class="mb-4 text-center text-danger" v-if="messageError.data">{{ messageError.data }}</p>
        <p class="lead mb-4 text-center text-black" v-if="submitSuccess">
          <font-awesome-icon icon="fa-solid fa-check-circle" class="text-success"/>
          Email reset password has been sent to your email. Please check your email.
        </p>
        <!-- Form START -->
        <form @submit.prevent="resetPass" :disabled="isLoading" v-else>
          <!-- Email -->
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email address *</label>
            <div class="input-group input-group-lg">
              <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><font-awesome-icon
                  icon="fa-solid fa-envelope" /></span>
              <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                id="exampleInputEmail1" required v-model="payload.email">
            </div>
            <InputError :error-list="messageError.email"></InputError>
          </div>
          <!-- Button -->
          <div class="align-items-center">
            <div class="d-grid">
              <button class="btn btn-primary mb-0" type="submit" :disabled="isLoading">Reset password</button>
            </div>
          </div>
        </form>
        <!-- Form END -->
      </div>
    </div> <!-- Row END -->
  </div>
</template>
