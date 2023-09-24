<script setup lang="ts">
    // import type { PostInterface } from '@/interfaces/post.interface'

    const pros = defineProps<{
        postDetail: any;
        teachingProvince: any;
        teachingDistrict: any;
        teachingWard: any;
        teachers: any;
        subjects: any;
        rangeTimes: any;
    }>() 
</script>

<template>
    <div class="col-12 mb-4">
        <div class="card rounded overflow-hidden shadow">
            <div class="row g-0">
                <!-- Image -->
                <div class="col-4">
                    <img src="@/assets/images/courses/4by3/03.jpg" alt="card image">
                </div>

                <!-- Card body -->
                <div class="col-8">
                    <div class="card-body">
                        <!-- subjects -->
                        <div class="d-flex justify-content-start mb-3">
                            <a 
                                class="badge bg-success bg-opacity-10 text-success border border-success fs-6 me-3"
                                v-for="(subject, index) in subjects" :key="index"
                            >{{subject.name}}</a>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <!-- learner name -->
                                <div class="d-flex justify-content-between mb-2">
                                    <h5 class="card-title mb-0 fs-4">{{ postDetail.learner_name }}</h5>
                                </div>
                                <!-- Address -->
                                <div class="mb-2">
                                    <span class="fs-6">{{ postDetail.teaching_address }}, </span>
                                    <span class="fs-6">{{ teachingWard?.name }}, </span>
                                    <span class="fs-6">{{ teachingDistrict?.name }}, </span>
                                    <span class="fs-6">{{ teachingProvince?.name }}</span>
                                </div>
                            </div>
                            <!-- Fee -->
                            <div class="col-6">
                                <label class="badge bg-success bg-opacity-10 text-success w-100 h-75 d-flex justify-content-center border border-success">
                                    <span class="d-flex align-items-center">
                                        <span class="text-success mb-0 h4 me-3 ">{{ postDetail.teaching_fee }}đ</span>
                                        <span class="badge bg-dark text-white">{{ postDetail.teaching_fee_unit }}</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <ul 
                                class="col-6 d-flex align-items-center list-inline mb-0 avatar-group"
                                v-if="teachers.length > 0"
                            >
                                <li class="avatar" v-for="(teacher, index) in teachers" :key="index">
                                    <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="avatar">
                                </li>
                                <li> 
                                    <span class="badge ms-3 fs-6 bg-success bg-opacity-10 text-success border border-success">{{ teachers.length }}+</span>
                                </li>
                            </ul>
                            <ul
                                class="col-6 d-flex align-items-center list-inline mb-0 avatar-group"
                                v-else
                            >
                                <li> 
                                    <span class="badge ms-3 fs-6 text-bg-warning ">Hãy là người đầu tiên ứng tuyển.</span>
                                </li>
                            </ul>
                            <div class="col-6 d-flex justify-content-end">
                                <a class="btn btn-success-soft me-2" href="#">Ứng tuyển</a>
                                <a class="btn btn-info-soft" href="#">Xem Chi Tiết</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
