<script setup lang="ts">
</script>

<template>
<div class="col-12">
    <div class="card bg-transparent border h-100">

<!-- Card header -->
<div class="card-header bg-light border-bottom">
    <h5 class="mb-0">Courses List</h5>
</div>

<!-- Card body START -->
<div class="card-body pb-0">
    <!-- Table START -->
    <div class="table-responsive border-0">
        <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">

            <!-- Table head -->
            <thead>
                <tr>
                    <th scope="col" class="border-0 rounded-start">Course Name</th>
                    <th scope="col" class="border-0">Enrolled</th>
                    <th scope="col" class="border-0">Status</th>
                    <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
            </thead>

            <!-- Table body START -->
            <tbody>
                <!-- Table row -->
                <tr>
                    <!-- Table data -->
                    <td class="d-flex align-items-center position-relative">
                        <div class="w-60px"><img src="assets/images/courses/4by3/08.jpg" class="rounded" alt=""></div>
                        <h6 class="table-responsive-title mb-0 ms-2"><a href="#" class="stretched-link">Building Scalable APIs with GraphQL</a></h6>
                    </td>

                    <!-- Table data -->
                    <td>412</td>

                    <!-- Table data -->
                    <td>
                        <span class="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>

                    <!-- Table data -->
                    <td>
                        <a href="#" class="btn btn-sm btn-info-soft mb-0">View</a>
                    </td>
                </tr>

                <!-- Table row -->
                <tr>
                    <!-- Table data -->
                    <td class="d-flex align-items-center position-relative">
                        <div class="w-60px"><img src="assets/images/courses/4by3/02.jpg" class="rounded" alt=""></div>
                        <h6 class="table-responsive-title mb-0 ms-2"><a href="#" class="stretched-link">Graphic Design Masterclass</a></h6>
                    </td>

                    <!-- Table data -->
                    <td>254</td>

                    <!-- Table data -->
                    <td>
                        <span class="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>

                    <!-- Table data -->
                    <td>
                        <a href="#" class="btn btn-sm btn-info-soft mb-0">View</a>
                    </td>
                </tr>

                <!-- Table row -->
                <tr>
                    <!-- Table data -->
                    <td class="d-flex align-items-center position-relative">
                        <div class="w-60px"><img src="assets/images/courses/4by3/04.jpg" class="rounded" alt=""></div>
                        <h6 class="table-responsive-title mb-0 ms-2"><a href="#" class="stretched-link">Learn Invision</a></h6>
                    </td>

                    <!-- Table data -->
                    <td>0</td>

                    <!-- Table data -->
                    <td>
                        <span class="badge bg-warning bg-opacity-15 text-warning">Pending</span>
                    </td>

                    <!-- Table data -->
                    <td>
                        <a href="#" class="btn btn-sm btn-info-soft mb-0">View</a>
                    </td>
                </tr>

                <!-- Table row -->
                <tr>
                    <!-- Table data -->
                    <td class="d-flex align-items-center position-relative">
                        <div class="w-60px"><img src="assets/images/courses/4by3/07.jpg" class="rounded" alt=""></div>
                        <h6 class="table-responsive-title mb-0 ms-2"><a href="#" class="stretched-link">Deep Learning with React-Native</a></h6>
                    </td>

                    <!-- Table data -->
                    <td>98</td>

                    <!-- Table data -->
                    <td>
                        <span class="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>

                    <!-- Table data -->
                    <td>
                        <a href="#" class="btn btn-sm btn-info-soft mb-0">View</a>
                    </td>
                </tr>

                <!-- Table row -->
                <tr>
                    <!-- Table data -->
                    <td class="d-flex align-items-center position-relative">
                        <div class="w-60px"><img src="assets/images/courses/4by3/10.jpg" class="rounded" alt=""></div>
                        <h6 class="table-responsive-title mb-0 ms-2"><a href="#" class="stretched-link">Bootstrap 5 From Scratch</a></h6>
                    </td>

                    <!-- Table data -->
                    <td>58</td>

                    <!-- Table data -->
                    <td>
                        <span class="badge bg-danger bg-opacity-15 text-danger">Cancel</span>
                    </td>

                    <!-- Table data -->
                    <td>
                        <a href="#" class="btn btn-sm btn-info-soft mb-0">View</a>
                    </td>
                </tr>
            </tbody>
            <!-- Table body END -->
        </table>
    </div>
    <!-- Table END -->
</div>
<!-- Card body END -->

<!-- Card footer START -->
<div class="card-footer bg-transparent">
    <!-- Pagination START -->
    <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
        <!-- Content -->
        <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
        <!-- Pagination -->
        <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
            <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                <li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
            </ul>
        </nav>
    </div>
    <!-- Pagination END -->
</div>
<!-- Card footer END -->
</div>
</div>
</template>