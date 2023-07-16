<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from "vue-router";
import authService from "@/service/auth.service";

const queryReturn = ref({
  success: 'false',
  message: 'The account active link is wrong or expired, please re-register!'
})

const route = useRoute();
const router = useRouter();
const activeAccount = async (path: string) => {
  try{
    const response = await authService.activeAccount(path);
    queryReturn.value = {
      success: 'true',
      message: response.message
    }
  } catch (error: any) {
    console.log(error);
  }
  router.push({ path: '/auth/login', query: queryReturn.value})
}

onMounted(async () => {
  const path = route.path.replace('/auth', '');
  await activeAccount(path);
})

</script>

<template>
  <!-- Pre loader -->
  <div class="preloader">
    <div class="preloader-item">
      <div class="spinner-grow text-primary"></div>
    </div>
  </div>
</template>