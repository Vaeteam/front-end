<template>
    <div class="container">
        <ProfileTeacherBanner />
    </div>
    <section class="pt-0">
        <div class="container">
            <div class="row">
                <ProfileTeacherNavBar />
                <ProfileTeacherEarning />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProfileTeacherNavBar from '@/components/ProfileTeacherNavBar.vue'
import ProfileTeacherBanner from '@/components/ProfileTeacherBanner.vue'
import ProfileTeacherEarning from '@/components/ProfileTeacherEarning.vue';
</script>

<style scoped></style>