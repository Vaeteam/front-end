<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  errorList?: Array<String>
}>();
</script>

<template>
  <small class="text-danger" v-for="(item, index) in errorList" :key="index">
    {{ item }}
  </small>
</template>