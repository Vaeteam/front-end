<script setup lang="ts">

</script>

<template>
    <!-- Right sidebar START -->
    <div class="col-lg-3 col-xxl-4">
        <!-- Responsive offcanvas body START -->
        <nav class="navbar navbar-light navbar-expand-xl mx-0">
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-body p-3 p-xl-0">
                    <form>
                        <!-- Category START -->
                        <div class="card card-body shadow p-4 mb-4">
                            <h4 class="mb-4">Địa Điểm</h4>
                            <select class="form-select js-choice z-index-9" aria-label=".form-select-sm">
                                <option value="">Địa Điểm</option>
                                <option>Free</option>
                                <option>Newest</option>
                                <option>Most popular</option>
                                <option>Most Viewed</option>
                            </select>
                        </div>
                        <!-- Category END -->
                    </form><!-- Form End -->
                </div>

                <!-- Button -->
                <div class="d-grid p-2 p-xl-0 bg-body text-center">
                    <button class="btn btn-primary mb-0">Filter Results</button>
                </div>
            </div>
        </nav>
        <!-- Responsive offcanvas body END -->
    </div>
    <!-- Right sidebar END -->
</template>
