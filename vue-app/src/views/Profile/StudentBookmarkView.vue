<script setup lang="ts">

import ProfileNavBarStudent from '@/components/ProfileStudentNavBar.vue'
import ProfileStudentBanner from '@/components/ProfileStudentBanner.vue'
import ProfileStudentBookmark from '@/components/ProfileStudentBookmark.vue'

</script>

<template>
    <section class="pt-0">
        <ProfileStudentBanner />
    </section>

    <section class="pt-0">
        <div class="container">
            <div class="row">
                <ProfileNavBarStudent />
                <ProfileStudentBookmark />
            </div>
        </div>
    </section>
</template>

