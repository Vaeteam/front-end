<script setup lang="ts">
  import LayoutProfile from '@/layout/LayoutProfile.vue';
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="page-content">
    <NavBar></NavBar>
    <div class="page-content-wrapper border">
      <!-- Title -->
      <div class="row">
        <div class="col-12 mb-3">
          <h1 class="h3 mb-2 mb-sm-0">Instructor detail</h1>
        </div>
      </div>
      <div class="row g-4">
        <LayoutProfile></LayoutProfile>
        <div class="col-xxl-5">
          <div class="row g-4">
          </div>
        </div>
      </div> <!-- Row END -->
    </div>
</div>
</template>