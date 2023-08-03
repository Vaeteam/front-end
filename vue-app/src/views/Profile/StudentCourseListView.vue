<script setup lang="ts">

import ProfileNavBarStudent from '@/components/ProfileStudentNavBar.vue'
import ProfileStudentBanner from '@/components/ProfileStudentBanner.vue'
import ProfileStudentDashboard from '@/components/ProfileStudentDashboard.vue'

</script>

<template>
    <section class="pt-0">
        <ProfileStudentBanner />
    </section>

    <section class="pt-0">
        <div class="container">
            <div class="row">
                <ProfileNavBarStudent />
                <ProfileStudentDashboard />
            </div>
        </div>
    </section>
</template>

