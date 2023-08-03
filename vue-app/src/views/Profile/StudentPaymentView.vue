<template>
    <section class="pt-0">
        <ProfileStudentBanner />
    </section>

    <section class="pt-0">
        <div class="container">
            <div class="row">
                <ProfileNavBarStudent />
                <ProfileStudentPaymentInfo />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProfileNavBarStudent from '@/components/ProfileStudentNavBar.vue'
import ProfileStudentBanner from '@/components/ProfileStudentBanner.vue'
import ProfileStudentPaymentInfo from '@/components/ProfileStudentPaymentInfo.vue';
</script>

<style scoped></style>