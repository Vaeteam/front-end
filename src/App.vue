<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Spinner from "@/components/Spinner.vue";
</script>

<template>
  <Toast/>
  <RouterView></RouterView>
  <Spinner/>
</template>

<style scoped></style>
