<script setup lang='ts'>
    import { computed, ref, watch } from 'vue';
    import { useRouter } from "vue-router";

    import Dropdown from 'primevue/dropdown';
    import InputNumber from 'primevue/inputnumber';
    import TreeSelect from 'primevue/treeselect';
    import Calendar from 'primevue/calendar';
    import InputText from 'primevue/inputtext';
    import type { TreeNode } from 'primevue/tree/Tree';

    import PostService from "@/service/post.service";
    import { weekday, amountMonth, birthYears, yearOlds, educations, yearExperience } from '@/constants/common.constant'
    import { emptyShift } from '@/interfaces/common.interface'
    import type { ShiftInterface, AdministrativeUnit } from '@/interfaces/common.interface'
    import { commonStore } from '@/stores/common';
    import commonService from '@/service/common.service';


    const store = commonStore();

    const isFormSubmitted = ref(false);
    const isSubjectSelected = computed(() => {
      return postData.value.selected_subjects.length > 0;
    })
    const router = useRouter()

    let postData = ref({
        learnerName: '',
        learnerSex: false,
        learnerbirthYear: '',
        learnerEmail: '',
        learnerPhoneNumber: '',
        learnerLearningSchool: '',
        teachingProvince: '',
        teachingDistrict: '',
        teachingWard: '',
        learnerAddress: '',
        teachingLocation: '',
        selected_subjects: [] as TreeNode[],
        shifts: [{...emptyShift}],
        totalTeachingTime: '',
        totalTeachingTimeUnit: '',
        teachingFee: null,
        teachingFeeUnit: '',
        requestTeacherSex: '',
        requestTeacherAgeFrom: null,
        requestTeacherAgeTo: null,
        requestTeacherEducation: '',
        requestTeacherWorkingExp: '',
        requestTeacherTeachingExp: '',
        note: ''
    });

    const subjects = store.subjects as TreeNode[];
    const administrativeUnits = ref(store.administrativeUnits)
    let administrativeDistricts = ref<AdministrativeUnit[]>([])
    let administrativeWards = ref<AdministrativeUnit[]>([])
    const validationMessage = ref<string>('');

    const addRow = () => {
        postData.value.shifts.push({...emptyShift});
    }

    const removeRow = (index:number) => {
        postData.value.shifts.splice(index, 1);
    };

    function validateAgeRange() {
        if (!postData.value.requestTeacherAgeFrom && !postData.value.requestTeacherAgeTo) {
            validationMessage.value = '';
            return true
        } else if (!postData.value.requestTeacherAgeFrom || !postData.value.requestTeacherAgeTo) {
            validationMessage.value = 'Tuổi bên trái và tuổi bên phải phải được chọn cả 2';
            return false
        } else if (postData.value.requestTeacherAgeFrom >= postData.value.requestTeacherAgeTo) {
            validationMessage.value = 'Tuổi bên trái phải nhỏ hơn Tuổi bên phải';
            return false
        } 
        validationMessage.value = '';
        return true
    }

    function isShiftValid(shift:ShiftInterface) {
        return shift.weekday && shift.startTime && shift.endTime
    }

    const processteachingProvince = computed( async () => {
        if (postData.value.teachingProvince.id) {
            administrativeDistricts.value = await commonService.getAdministrativeUnit(postData.value.teachingProvince.id);
        };
    });

    const processteachingDistrict = computed( async () => {
        if (postData.value.teachingDistrict.id) {
            administrativeWards.value = await commonService.getAdministrativeUnit(postData.value.teachingDistrict.id);
        };
    });


    const isAddressValid = () => {
        return postData.value.teachingLocation.includes('learner_home')
        && postData.value.teachingProvince
        && postData.value.teachingDistrict
        && postData.value.teachingWard
        && postData.value.learnerAddress
    }

    const isFormValid = computed(() => {
        return isSubjectSelected 
        && isAddressValid()
        && validateAgeRange()
        && postData.value.shifts.every((shift) => isShiftValid(shift))
        && postData.value.learnerName 
        && postData.value.learnerSex
        && postData.value.learnerbirthYear
        && postData.value.teachingLocation
        && postData.value.totalTeachingTime
        && postData.value.totalTeachingTimeUnit
        && postData.value.teachingFee
        && postData.value.teachingFeeUnit
        && postData.value.requestTeacherSex 
    })

    async function handleSubmit() {
        isFormSubmitted.value = true;
        if (!isFormValid) {
            return
        }
        const response = await PostService.createPost(postData.value);
        if (response.status < 300) {
            router.push('/');
        }
    }
    watch(processteachingProvince, () => {});
    watch(processteachingDistrict, () => {});
    watch(isFormValid, () => {});
</script>

<template>
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
                    <h6 class="mb-lg-0">Tên người học<span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        name="name" 
                        v-model="postData.learnerName" 
                        placeholder="Nhập tên người học"
                        :class="{ 'is-invalid': isFormSubmitted && !postData.learnerName }"
                    >
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
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="isMale" 
                                id="isMale" 
                                value="male" 
                                v-model="postData.learnerSex"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.learnerSex }"
                            >
                            <label class="form-check-label" for="isMale">
                                Nam
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="isFemale" 
                                id="isFemale" 
                                value="female" 
                                v-model="postData.learnerSex"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.learnerSex }"
                            >
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
                    <h6 class="mb-lg-0">Năm sinh <span class="text-danger">*</span></h6>
                </div>
            
                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-4">
                            <select 
                                class="form-select js-choice z-index-9 border-0 bg-light" 
                                aria-label=".form-select-sm" 
                                v-model="postData.learnerbirthYear"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.learnerbirthYear }"
                            >
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
                    <h6 class="mb-lg-0">Email</h6>
                </div>
                <div class="col-lg-8">
                    <input type="email" class="form-control" id="email" v-model="postData.learnerEmail">
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Số điện thoại</h6>
                </div>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="phoneNumber" v-model="postData.learnerPhoneNumber">
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Trường đang học</h6>
                </div>
                <div class="col-lg-8">
                    <input type="text" class="form-control" id="learningSchool" v-model="postData.learnerLearningSchool" placeholder="Nhập trường học viên đang học">
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
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                id="locationLearnerHome" 
                                value="learner_home"  
                                v-model="postData.teachingLocation"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.teachingLocation }"
                            >
                            <label class="form-check-label" for="locationLearnerHome">
                                Dạy tại nhà học viên
                            </label>
                        </div>
                        <div class="form-check radio-bg-light me-4">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                id="locationTeacherHome" 
                                value="teacher_home" 
                                v-model="postData.teachingLocation"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.teachingLocation }"
                            >
                            <label class="form-check-label" for="locationTeacherHome">
                                Dạy tại nhà giáo viên
                            </label>
                        </div>
                        <div class="form-check radio-bg-light me-4">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                id="locationOnline" 
                                value="online" 
                                v-model="postData.teachingLocation"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.teachingLocation }"
                            >
                            <label class="form-check-label" for="locationOnline">
                                Dạy online
                            </label>
                        </div>
                        <div class="form-check radio-bg-light me-4">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                id="locationTeacherHomeHybrid" 
                                value="teacher_home_hibrid" 
                                v-model="postData.teachingLocation"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.teachingLocation }"
                            >
                            <label class="form-check-label" for="locationTeacherHomeHybrid">
                                Dạy online và tại nhà giáo viên
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                id="locationLeanerHomeHybrid" 
                                value="learner_home_hibrid" 
                                v-model="postData.teachingLocation"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.teachingLocation }"
                            >
                            <label class="form-check-label" for="locationLeanerHomeHybrid">
                                Dạy online và tại nhà học viên
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="postData.teachingLocation.includes('learner_home')" class="col-12">
            <div class="row g-xl-0 justify-content-start">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Địa chỉ dạy học</h6>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-4">
                            <Dropdown 
                                v-model="postData.teachingProvince" 
                                editable 
                                :options="administrativeUnits" 
                                optionLabel="name" 
                                placeholder="Nhập tỉnh/thành phố" 
                                class="w-full md:w-14rem" 
                            />
                        </div>
                        <div v-if="postData.teachingProvince" class="col-lg-4">
                            <Dropdown 
                                v-model="postData.teachingDistrict" 
                                editable 
                                :options="administrativeDistricts" 
                                optionLabel="name" 
                                placeholder="Nhập huyện/quận" 
                                class="w-full md:w-14rem" 
                            />
                        </div>
                        <div v-if="postData.teachingDistrict" class="col-lg-4">
                            <Dropdown 
                                v-model="postData.teachingWard" 
                                editable 
                                :options="administrativeWards" 
                                optionLabel="name" 
                                placeholder="Nhập xã/phường" 
                                class="w-full md:w-14rem" 
                            />
                        </div>
                    </div>
                    <div v-if="postData.teachingWard" class="mt-3">
                        <InputText 
                            v-model="postData.learnerAddress" 
                            type="text" 
                            placeholder="Địa chỉ nhà"
                            class="w-100"
                        />
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
                    <TreeSelect 
                        v-model="postData.selected_subjects" 
                        :options="subjects" 
                        selectionMode="checkbox" 
                        :metaKeySelection="false" 
                        placeholder="Chọn môn học" 
                        :class="['w-100', { 'p-invalid': !isSubjectSelected }]" 
                    />
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0 align-items-center justify-content-end">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0"> Các buổi học mỗi tuần <span class="text-danger">*</span></h6>
                </div>
            
                <div class="col-lg-8" v-for="(shift, index) in postData.shifts" :key="index">
                    <div class="row g-2 g-sm-4">
                        <div class="col-3">
                            <select 
                                class="form-select js-choice border-0 bg-light" 
                                aria-label=".form-select-sm" 
                                v-model="shift.weekday"
                                :class="{ 'is-invalid': isFormSubmitted && !isShiftValid(shift) }"
                            >
                                <option value="" disabled selected>Thứ ...</option>
                                <option v-for="day in weekday" :key="day" :value="day">{{ day }}</option>
                            </select>
                        </div>
                        <div class="col-3 flex-auto">
                            <Calendar 
                            id="calendar-startTime" 
                            class="h75" 
                            v-model="postData.shifts[index].startTime" 
                            timeOnly 
                            placeholder="Bắt đầu lúc"
                            :class="{ 'p-invalid': isFormSubmitted && !isShiftValid(shift) }"
                            />
                        </div>
                        <div class="col-3 flex-auto">
                            <Calendar 
                            id="calendar-endTime" 
                            v-model="shift.endTime" 
                            timeOnly 
                            placeholder="Kết thúc lúc"
                            :class="{ 'p-invalid': isFormSubmitted && !isShiftValid(shift) }"
                            />
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

        <div class="col-12">
            <div class="row g-xl-0 align-items-center">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Tổng thời gian học dự kiến <span class="text-danger">*</span></h6>
                </div>
                <div class="col-lg-8">
                    <div class="row g-2 g-sm-4">
                        <div class="col-6">
                            <select 
                                class="form-select js-choice border-0 bg-light" 
                                aria-label=".form-select-sm" 
                                v-model="postData.totalTeachingTime"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.totalTeachingTime }"
                            >
                                <option value="" disabled selected> Khoảng thời gian</option>
                                <option v-for="amount in amountMonth" :key="amount" :value="amount">{{ amount }}</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <select 
                                class="form-select js-choice border-0 bg-light" 
                                aria-label=".form-select-sm" 
                                v-model="postData.totalTeachingTimeUnit"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.totalTeachingTimeUnit }"
                            >
                                <option value="" disabled selected>Đơn vị thời gian</option>
                                <option>Buổi</option>
                                <option>Tháng</option>
                                <option>Tuần</option>
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
                            <InputNumber 
                                v-model="postData.teachingFee" 
                                inputId="currency-us" 
                                mode="currency" 
                                currency="VND" 
                                locale="us-US"
                                placeholder="Nhập học phí cho từng buổi, tuần hoặc tháng"
                                :class="['w-100', { 'is-invalid': isFormSubmitted && !postData.teachingFee }]"
                            />
                        </div>
                        <div class="col-4">
                            <select 
                            class="form-select js-choice border-0 bg-light" 
                            aria-label=".form-select-sm" 
                            v-model="postData.teachingFeeUnit"
                            :class="{ 'is-invalid': isFormSubmitted && !postData.teachingFeeUnit }"
                            >
                                <option value="" selected disabled>Đơn vị thời gian</option>
                                <option>Buổi</option>
                                <option>Tuần</option>
                                <option>Tháng</option>
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
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="requestMale" 
                                id="requestMale" 
                                value="male"  
                                v-model="postData.requestTeacherSex"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.requestTeacherSex }"
                            >
                            <label class="form-check-label" for="requestMale">
                                Nam
                            </label>
                        </div>
                        <div class="form-check radio-bg-light me-4">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="requestFemale" 
                                id="requestFemale" 
                                value="female" 
                                v-model="postData.requestTeacherSex"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.requestTeacherSex }"
                            >
                            <label class="form-check-label" for="requestFemale">
                                Nữ
                            </label>
                        </div>
                        <div class="form-check radio-bg-light">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="requestAnyGender" 
                                id="requestAnyGender" 
                                value="any"
                                v-model="postData.requestTeacherSex"
                                :class="{ 'is-invalid': isFormSubmitted && !postData.requestTeacherSex }"
                            >
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
                            <select 
                                id="fromAge" 
                                v-model="postData.requestTeacherAgeFrom" 
                                class="form-select js-choice z-index-9 border-0 bg-light" 
                                aria-label=".form-select-sm" @change="validateAgeRange">
                                <option value="null" disabled selected>Từ</option>
                                <option v-for="year in yearOlds" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <select 
                                id="toAge" 
                                v-model="postData.requestTeacherAgeTo" 
                                class="form-select js-choice z-index-9 border-0 bg-light" 
                                aria-label=".form-select-sm" @change="validateAgeRange">
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
                    <h6 class="mb-lg-0">Học vấn và kinh nghiệm</h6>
                </div>
                <div class="d-flex col-lg-8">
                    <div class="col-lg-3 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestTeacherEducation">
                            <option value="" disabled selected>Học Vấn</option>
                            <option v-for="education in educations" :key="education" :value="education">{{ education }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestTeacherWorkingExp">
                            <option value="" disabled selected>Kinh Nghiệm Làm Việc</option>
                            <option v-for="workingexp in yearExperience" :key="workingexp" :value="workingexp">{{ workingexp }}</option>
                        </select>
                    </div>
                    <div class="col-lg-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm" v-model="postData.requestTeacherTeachingExp">
                            <option value="" disabled selected>Kinh Nghiệm Dạy học</option>
                            <option v-for="teachingExp in yearExperience" :key="teachingExp" :value="teachingExp">{{ teachingExp }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-xl-0">
                <div class="col-lg-4">
                    <h6 class="mb-lg-0">Ghi chú thêm</h6>
                </div>
                <div class="col-lg-8">
                    <textarea class="form-control" rows="3" placeholder="" v-model="postData.note"></textarea>
                </div>
            </div>
        </div>

        <div class="col-12 text-sm-end">
            <button class="btn btn-primary mb-0" type="submit">Tạo</button>
        </div>
    </form>
</div>

</template>
<style lang="css" scoped>
    .p-calendar {
        height: 40px;
    }
    .error-message {
        color: red;
        margin-top: 5px;
    }
    .is-invalid {
        border-color: red;
    }
</style>