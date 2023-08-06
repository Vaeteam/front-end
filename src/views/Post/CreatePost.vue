<script setup lang='ts'>
    import { ref } from 'vue';
    import Tree from 'primevue/tree';
    import CommonService from "@/service/common.service";
    import { weekday, amountMonth, birthYears, yearOlds, educations, workingExperience, teachingExperience } from '@/constants/common.constant'
    import { emptyShift } from '@/interfaces/common.interface'
    import Calendar from 'primevue/calendar';
    import { commonStore } from '@/stores/common';

    const store = commonStore();
    let postData = ref({
        learnerName: '',
        learnerGender: false,
        learnerbirthYear: '',
        learnerEmail: '',
        learnerPhoneNumber: '',
        learnerLearningSchool: '',
        teachingMethod: '',
        subjects: [],
        shifts: [{...emptyShift}],
        totalExpectedTeachingTime: '',
        totalExpectedTeachingUnit: '',
        teachingFee: '',
        teachingFreeUnit: '',
        requestFromAge: null,
        requestToAge: null,
        requestTeacherGender: '',
        requestEducation: '',
        requestWorkingExp: '',
        requestTeachingExp: '',
        extraNote: ''
    });

    const subjects = store.subjects;
    const validationMessage = ref('');

    const addRow = () => {
        postData.value.shifts.push({...emptyShift});
    }

    const removeRow = (index:number) => {
        postData.value.shifts.splice(index, 1);
    };

    function formatCurrency(event:any) {
        const cleanedValue = event.target.value.replace(/\D/g, '');
        const parsedValue = parseFloat(cleanedValue);
        const formattedValue = parsedValue.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        postData.value.teachingFee = formattedValue;
    }

    function checkAgeRange() {
        if (postData.value.requestFromAge && postData.value.requestToAge && postData.value.requestFromAge >= postData.value.requestToAge) {
            validationMessage.value = 'Invalid age range';
        } else {
            validationMessage.value = '';
        }
    }

    function handleSubmit() {
        // Access the form values
        console.log(postData.value);
    }

</script>

<template>
<!-- Admission form START -->
<div class="col-md-8 mx-auto">
    <!-- Title -->
    <h2 class="mb-3">Tạo Bài Đăng Tuyển Gia sư.</h2>
    <p>Hãy điền các thông tin bên dưới để tìm gia sư phù hợp với bạn nhất.</p>
    <p>
        <span class="text-danger">Email</span> và <span class="text-danger">Số điện thoại</span> 
        của bạn sẽ được bảo mật, chỉ giao sư được bạn chọn mới có được thông tin liên lạc với bạn
    </p>
    <p>Các ô có dấu <span class="text-danger">*</span> là bắt buộc phải điền.</p>

    <form class="row g-3" @submit.prevent="handleSubmit">
        <h5 class="mb-0">Thông tin người học</h5>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Tên <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="name" name="name" v-model="postData.learnerName">
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Giới tính <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <div class="d-flex">
                        <div class="form-check radio-bg-light me-4">
                            <input class="form-check-input" type="radio" name="isMale" id="isMale" checked value="male" v-model="postData.learnerGender">
                            <label class="form-check-label" for="isMale">
                                Nam
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input class="form-check-input" type="radio" name="isFemale" id="isFemale" value="female" v-model="postData.learnerGender">
                            <label class="form-check-label" for="isFemale">
                                Nữ
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Năm sinh</h6>
                </div>
            
                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-4">
                            <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.learnerbirthYear">
                                <option value="" disabled selected>Năm Sinh</option>
                                <option v-for="year in birthYears" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Email <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email" v-model="postData.learnerEmail">
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Số điện thoại <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="phoneNumber" v-model="postData.learnerPhoneNumber">
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Trường đang học <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="learningSchool" v-model="postData.learnerLearningSchool">
                </div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="my-5">

        <!-- Parent detail -->
        <h5 class="mt-0">Thông tin buổi dạy</h5>
        
        <!-- Gender -->
        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Phương thức<span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <div class="d-flex">
                        <div class="form-check radio-bg-light me-4">
                            <input class="form-check-input" type="radio" id="MethodOffline" value="offline" checked v-model="postData.teachingMethod">
                            <label class="form-check-label" for="MethodOffline">
                                Dạy tại nhà
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input class="form-check-input" type="radio" id="MethodOnline" value="online" v-model="postData.teachingMethod">
                            <label class="form-check-label" for="MethodOnline">
                                Dạy online
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Môn học<span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <Tree
                        v-model:selectionKeys="postData.subjects" 
                        :value="subjects"
                        selectionMode="multiple" 
                        :filter="true"
                        filterMode="lenient"
                        :metaKeySelection="false"
                    />
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center justify-content-end">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0"> Các buổi học mỗi tuần</h6>
                </div>
            
                <div class="col-lg-8" v-for="(shift, index) in postData.shifts" :key="index">
                    <div class="row g-2 g-sm-4">
                        <div class="col-3">
                            <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm" v-model="shift.weekday">
                                <option value="" disabled selected>Chọn ngày</option>
                                <option v-for="day in weekday" :key="day" :value="day">{{ day }}</option>
                            </select>
                        </div>
                        <div class="col-3 flex-auto">
                            <Calendar id="calendar-startTime" class="h75" v-model="postData.shifts[index].startTime" timeOnly />
                        </div>
                        <div class="col-3 flex-auto">
                            <Calendar id="calendar-endTime" v-model="shift.endTime" timeOnly />
                        </div>
                        <div class="col-3" v-if="index != 0">
                            <button class="btn btn-danger-soft" type="button" @click="removeRow(index)">Xóa</button>
                        </div>
                        <div class="col-3" v-else>
                            <button class="btn btn-success-soft" type="button" @click="addRow">Thêm buổi</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


        <!-- Home address -->
        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Tổng thời gian học dự kiến <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-6">
                            <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm" v-model="postData.totalExpectedTeachingTime">
                                <option value="" disabled selected> Khoảng thời gian</option>
                                <option v-for="amount in amountMonth" :key="amount" :value="amount">{{ amount }}</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm" v-model="postData.totalExpectedTeachingUnit">
                                <option value="" disabled selected>Đơn vị thời gian</option>
                                <option>Tháng</option>
                                <option>Năm</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Học Phí<span class="text-danger">*</span></h6>
                </div>

                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-8">
                            <input
                                id="teachingFee"
                                type="text" 
                                class="form-control" 
                                v-model="postData.teachingFee" 
                                @input="formatCurrency"
                            >
                        </div>
                        <div class="col-4">
                            <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm" v-model="postData.teachingFreeUnit">
                                <option value="" selected disabled>Theo</option>
                                <option>Mỗi buổi</option>
                                <option>Mỗi tháng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="my-5">

        <h5 class="mt-0">Yêu cầu về gia sư</h5>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Giới tính gia sư<span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <div class="d-flex">
                        <div class="form-check radio-bg-light me-4">
                            <input class="form-check-input" type="radio" name="requestMale" id="requestMale" value="male" checked v-model="postData.requestTeacherGender" >
                            <label class="form-check-label" for="requestMale">
                                Nam
                            </label>
                        </div>
                        <div class="form-check radio-bg-light me-4">
                            <input class="form-check-input" type="radio" name="requestFemale" id="requestFemale" value="female" v-model="postData.requestTeacherGender">
                            <label class="form-check-label" for="requestFemale">
                                Nữ
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input class="form-check-input" type="radio" name="requestAnyGender" id="requestAnyGender" value="any" v-model="postData.requestTeacherGender">
                            <label class="form-check-label" for="requestAnyGender">
                                Nam/Nữ
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Tuổi</h6>
                </div>
            
                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-3 flex-auto">
                            <select id="fromAge" v-model="postData.requestFromAge" class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                                <option value="null" disabled selected>Từ</option>
                                <option v-for="year in yearOlds" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <select id="toAge" v-model="postData.requestToAge" class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" @input="checkAgeRange">
                                <option value="null" disabled selected>Đến</option>
                                <option v-for="year in yearOlds" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="validationMessage" class="text-danger">{{ validationMessage }}</div>
                </div>
                
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Học vấn và kinh nghiệm<span class="text-danger">*</span></h6>
                </div>
                <div class="d-flex col-lg-8">
                    <div class="col-lg-3 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestEducation">
                            <option value="" disabled selected>Học Vấn</option>
                            <option v-for="education in educations" :key="education" :value="education">{{ education }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestWorkingExp">
                            <option value="" disabled selected>Kinh Nghiệp Làm Việc</option>
                            <option v-for="workingexp in workingExperience" :key="workingexp" :value="workingexp">{{ workingexp }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestTeachingExp">
                            <option value="" disabled selected>Kinh Nghiệp Dạy học</option>
                            <option v-for="teachingExp in teachingExperience" :key="teachingExp" :value="teachingExp">{{ teachingExp }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- School or college address -->
        <div class="col-12">
            <div class="row g-xl-0">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Ghi chú thêm</h6>
                </div>
                <div class="col-lg-8">
                    <textarea class="form-control" rows="3" placeholder="" v-model="postData.extraNote"></textarea>
                </div>
            </div>
        </div>

        <!-- Button -->
        <div class="col-12 text-sm-end">
            <button class="btn btn-primary mb-0" type="submit">Submit</button>
        </div>
    </form>
    <!-- Form END -->
</div>
<!-- Admission form END -->

</template>
<style lang="css" scoped>
    .p-calendar {
        height: 40px;
    }
</style>