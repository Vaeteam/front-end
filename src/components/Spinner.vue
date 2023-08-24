<script setup lang="ts">
  import ProgressSpinner from 'primevue/progressspinner';
</script>

<template>
  <div class="fullscreen-overlay"></div>
  <div class="centered-content">
    <ProgressSpinner />
  </div>
</template>

<style scoped>
.centered-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* Đảm bảo nằm trên background đen */
}
.fullscreen-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9998; /* Đảm bảo nằm dưới nội dung chính giữa */
}
</style>
<style>
/* .p-progress-spinner-circle {
  animation: white 1.5s ease-in-out infinite, white 6s ease-in-out infinite !important;
} */
@keyframes p-progress-spinner-color {
  100%, 0% {
    stroke: var(--bs-gray-300);
  }
}
</style>