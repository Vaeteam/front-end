<script setup lang="ts">
	import {RouterView} from 'vue-router';
	import LeftAuth from '@/components/LeftAuth.vue';
</script>

<style scoped>
@media (min-width: 990px) {
  .sidebar {
    position: fixed;
    height: 100%;
    overflow: auto;
    background-color: #f8f9fa;
  }

  .content {
    margin-left: 25%; /* Adjust this value based on the width of your sidebar */
    overflow-y: scroll;
    height: 100vh;
  }
}
</style>

<template>
	<main>
		<section class="p-0 d-flex align-items-center position-relative overflow-hidden">
			<div class="container-fluid">
				<div class="row">
					<!-- left -->
					<div class="sidebar">
						<LeftAuth></LeftAuth>
					</div>
					<!-- Right -->
					<div class="content">
						<RouterView></RouterView>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>