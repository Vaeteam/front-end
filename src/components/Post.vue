<script setup lang="ts">
    import { defineProps } from 'vue';
    import type { PostInterface } from '@/interfaces/post.interface'

    const pros = defineProps<{
        post: PostInterface
    }>() 
</script>

<template>
    <!-- Card list START -->
    <div class="col-12">
    <div class="card shadow overflow-hidden p-2">
        <div class="row g-0">
            <div class="col-md-5 overflow-hidden">
                <img src="@/assets/images/courses/4by3/06.jpg" class="rounded-2" alt="Card image">
                <!-- Ribbon -->
                <div class="card-img-overlay">
                    <div class="ribbon"><span>Free</span></div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <!-- Badge and rating -->
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <!-- Badge -->
                        <a href="#" class="badge bg-primary text-white mb-2 mb-sm-0">Development</a>
                        <!-- Rating and wishlist -->
                        <div>
                            <span class="h6 fw-light me-3"><i class="fas fa-star text-warning me-1"></i>4.5</span>
                            <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
                        </div>
                    </div>

                    <!-- Title -->
                    <h5 class="card-title"><a href="#">{{ pros.post.title }}</a></h5>
                    <p class="text-truncate-2 d-none d-lg-block">Satisfied conveying a dependent contented he gentleman agreeable do be. dependent contented he</p>

                    <!-- Info -->
                    <ul class="list-inline">
                        <li class="list-inline-item h6 fw-light mb-1 mb-sm-0"><i class="far fa-clock text-danger me-2"></i>21h 56m</li>
                        <li class="list-inline-item h6 fw-light mb-1 mb-sm-0"><i class="fas fa-table text-orange me-2"></i>52 lectures</li>
                        <li class="list-inline-item h6 fw-light"><i class="fas fa-signal text-success me-2"></i>Intermediate</li>
                    </ul>

                    <!-- Price and avatar -->
                    <div class="d-sm-flex justify-content-sm-between align-items-center">
                        <!-- Avatar -->
                        <div class="d-flex align-items-center">
                            <div class="avatar">
                                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/06.jpg" alt="avatar">
                            </div>
                            <p class="mb-0 ms-2"><a href="#" class="h6 fw-light">Jacqueline Miller</a></p>
                        </div>
                        <!-- Price -->
                        <div class="mt-3 mt-sm-0">
                            <a href="#" class="btn btn-dark">View more</a>    
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Card list END -->
</template>
