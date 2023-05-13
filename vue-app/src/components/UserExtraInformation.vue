<script setup lang="ts">
</script>

<template>
    <div class="col-md-6 col-xxl-12">
        <div class="card bg-transparent border overflow-hidden">
            <!-- Card header -->
            <div class="card-header bg-light border-bottom">
                <h5 class="card-header-title mb-0">Active Students</h5>
            </div>
            <!-- Card body -->
            <div class="card-body p-0">
                <div class="d-sm-flex justify-content-between p-4">
                    <h4 class="text-blue mb-0">984</h4>
                    <p class="mb-0"><span class="text-success me-1">0.20%<i class="bi bi-arrow-up"></i></span>vs last Week</p>
                </div>
                <!-- Apex chart -->
                <div id="activeChartstudent"></div>
            </div>
        </div>
    </div>
</template>