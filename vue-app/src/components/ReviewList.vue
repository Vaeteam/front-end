<script setup lang="ts">
</script>

<template>
    <div class="col-12">
        <div class="card bg-transparent border">

            <!-- Card header START -->
            <div class="card-header border-bottom bg-light">
                <h5 class="mb-0">All Reviews</h5>
            </div>
            <!-- Card header END -->

            <!-- Card body START -->
            <div class="card-body pb-0">
                <!-- Table START -->
                <div class="table-responsive border-0">
                    <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
                        <!-- Table head -->
                        <thead>
                            <tr>
                                <th scope="col" class="border-0 rounded-start">Student Name</th>
                                <th scope="col" class="border-0">Course Name</th>
                                <th scope="col" class="border-0">Rating</th>
                                <th scope="col" class="border-0 rounded-end">Action</th>
                            </tr>
                        </thead>

                        <!-- Table body START -->
                        <tbody>
                            <!-- Table row -->
                            <tr>
                                <!-- Table data -->
                                <td>
                                    <div class="d-flex align-items-center position-relative">
                                        <!-- Image -->
                                        <div class="avatar avatar-xs mb-2 mb-md-0">
                                            <img src="assets/images/avatar/09.jpg" class="rounded-circle" alt="">
                                        </div>
                                        <div class="mb-0 ms-2">
                                            <!-- Title -->
                                            <h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>
                                        </div>
                                    </div>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <h6 class="table-responsive-title mb-0"><a href="#">Building Scalable APIs with GraphQL</a></h6>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    </ul>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                                </td>
                            </tr>

                            <!-- Table row -->
                            <tr>
                                <!-- Table data -->
                                <td>
                                    <div class="d-flex align-items-center position-relative">
                                        <!-- Image -->
                                        <div class="avatar avatar-xs mb-2 mb-md-0">
                                            <img src="assets/images/avatar/01.jpg" class="rounded-circle" alt="">
                                        </div>
                                        <div class="mb-0 ms-2">
                                            <!-- Title -->
                                            <h6 class="mb-0"><a href="#" class="stretched-link">Carolyn Ortiz</a></h6>
                                        </div>
                                    </div>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <h6 class="table-responsive-title mb-0"><a href="#">Graphic Design Masterclass</a></h6>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    </ul>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                                </td>
                            </tr>

                            <!-- Table row -->
                            <tr>
                                <!-- Table data -->
                                <td>
                                    <div class="d-flex align-items-center position-relative">
                                        <!-- Image -->
                                        <div class="avatar avatar-xs mb-2 mb-md-0">
                                            <img src="assets/images/avatar/03.jpg" class="rounded-circle" alt="">
                                        </div>
                                        <div class="mb-0 ms-2">
                                            <!-- Title -->
                                            <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
                                        </div>
                                    </div>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <h6 class="table-responsive-title mb-0"><a href="#">Deep Learning with React-Native</a></h6>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                    </ul>
                                </td>
                                <!-- Table data -->
                                <td>
                                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                                </td>
                            </tr>

                            <!-- Table row -->
                            <tr>
                                <!-- Table data -->
                                <td>
                                    <div class="d-flex align-items-center position-relative">
                                        <!-- Image -->
                                        <div class="avatar avatar-xs mb-2 mb-md-0">
                                            <img src="assets/images/avatar/04.jpg" class="rounded-circle" alt="">
                                        </div>
                                        <div class="mb-0 ms-2">
                                            <!-- Title -->
                                            <h6 class="mb-0"><a href="#" class="stretched-link">Billy Vasquez</a></h6>
                                        </div>
                                    </div>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <h6 class="table-responsive-title mb-0"><a href="#">Bootstrap 5 From Scratch</a></h6>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                    </ul>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                                </td>
                            </tr>

                            <!-- Table row -->
                            <tr>
                                <!-- Table data -->
                                <td>
                                    <div class="d-flex align-items-center position-relative">
                                        <!-- Image -->
                                        <div class="avatar avatar-xs mb-2 mb-md-0">
                                            <img src="assets/images/avatar/05.jpg" class="rounded-circle" alt="">
                                        </div>
                                        <div class="mb-0 ms-2">
                                            <!-- Title -->
                                            <h6 class="mt-2"><a href="#" class="stretched-link">Jacqueline Miller</a></h6>
                                        </div>
                                    </div>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <h6 class="table-responsive-title mb-0"><a href="#">Learn Invision</a></h6>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                        <li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
                                    </ul>
                                </td>

                                <!-- Table data -->
                                <td>
                                    <a href="#" class="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
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