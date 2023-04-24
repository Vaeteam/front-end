<script setup lang="ts">
	import {RouterView} from 'vue-router';
	import LeftAuth from '@/components/LeftAuth.vue';
</script>

<template>
	<main>
		<section class="p-0 d-flex align-items-center position-relative overflow-hidden">
			<div class="container-fluid">
				<div class="row">
					<!-- left -->
					<LeftAuth></LeftAuth>
					<!-- Right -->
					<RouterView></RouterView>
				</div>
			</div>
		</section>
	</main>
</template>