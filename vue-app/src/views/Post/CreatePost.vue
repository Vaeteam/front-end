<script setup lang='ts'>
import { ref } from 'vue';
import Tree from 'primevue/tree';
import CommonService from "@/service/common.service";
import { weekday, amountMonth, birthYears, yearOlds, educations, workingExperience, teachingExperience } from '@/constants/common.constant.ts'
import type { ShiftInterface } from '@/interfaces/common.interface.ts'
import { emptyShift } from '@/interfaces/common.interface.ts'
import Calendar from 'primevue/calendar';


const courses = ref(CommonService.getCourses());
const selectedYear = ref<number | null>(null);
let teachingFee = ref('');
const teachingMethod = ref<string>('');
const selectedCourse = ref([]);
let shifts = ref<ShiftInterface[]>([{ ...emptyShift }]);

const addRow = () => {
    shifts.value.push({ ...emptyShift });
}

const removeRow = (index: number) => {
    shifts.value.splice(index, 1);
};

function formatCurrency(event: any) {
    const cleanedValue = event.target.value.replace(/\D/g, '');
    const parsedValue = parseFloat(cleanedValue);
    const formattedValue = parsedValue.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    teachingFee.value = formattedValue;
}


const fromAge = ref(null);
const toAge = ref(null);
const validationMessage = ref('');
function checkAgeRange() {
    if (fromAge.value && toAge.value && fromAge.value >= toAge.value) {
        validationMessage.value = 'Invalid age range';
    } else {
        validationMessage.value = '';
    }
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

        <form class="row g-3">
            <h5 class="mb-0">Thông tin người học</h5>

            <div class="col-12">
                <div class="row g-xl-0 align-items-center">
                    <div class="col-lg-4">
                        <h6 class="mb-lg-0">Tên <span class="text-danger">*</span></h6>
                    </div>
                    <div class="col-lg-8">
                        <input type="text" class="form-control" id="firstName">
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    checked>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Nam
                                </label>
                            </div>
                            <div class="form-check radio-bg-light">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label" for="flexRadioDefault2">
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
                                <select class="form-select js-choice z-index-9 border-0 bg-light"
                                    aria-label=".form-select-sm">
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
                        <input type="email" class="form-control" id="email">
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row g-xl-0 align-items-center">
                    <div class="col-lg-4">
                        <h6 class="mb-lg-0">Số điện thoại <span class="text-danger">*</span></h6>
                    </div>
                    <div class="col-lg-8">
                        <input type="text" class="form-control" id="phoneNumber">
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row g-xl-0 align-items-center">
                    <div class="col-lg-4">
                        <h6 class="mb-lg-0">Trường đang học <span class="text-danger">*</span></h6>
                    </div>
                    <div class="col-lg-8">
                        <input type="text" class="form-control" id="learningSchool">
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
                                <input class="form-check-input" type="radio" v-model="teachingMethod" id="MethodOffline"
                                    value="offline" checked>
                                <label class="form-check-label" for="MethodOffline">
                                    Dạy tại nhà
                                </label>
                            </div>
                            <div class="form-check radio-bg-light">
                                <input class="form-check-input" type="radio" v-model="teachingMethod" id="MethodOnline"
                                    value="online">
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
                        <Tree v-model:selectionKeys="selectedCourse" :value="courses" selectionMode="multiple"
                            :filter="true" filterMode="lenient" :metaKeySelection="false" />
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row g-xl-0 align-items-center justify-content-end">
                    <div class="col-lg-4">
                        <h6 class="mb-lg-0"> Các buổi học mỗi tuần</h6>
                    </div>

                    <div class="col-lg-8" v-for="(shift, index) in shifts" :key="index">
                        <div class="row g-2 g-sm-4">
                            <div class="col-3">
                                <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm"
                                    v-model="shift.weekday">
                                    <option value="" disabled selected>Chọn ngày</option>
                                    <option v-for="day in weekday" :key="day" :value="day">{{ day }}</option>
                                </select>
                            </div>
                            <div class="col-3 flex-auto">
                                <Calendar id="calendar-startTime" v-model="shifts[index].startTime" timeOnly />
                            </div>
                            <div class="col-3 flex-auto">
                                <Calendar id="calendar-endTime" v-model="shift.endTime" timeOnly />
                            </div>
                            <div class="col-3" v-if="index != 0">
                                <button class="btn btn-danger-soft" type="button" @click="removeRow(index)">Xóa</button>
                            </div>
                            <div class="col-3" v-else>
                                <button class="btn btn-success-soft float-right" type="button" @click="addRow">Thêm
                                    buổi</button>
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
                                <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm">
                                    <option value="" disabled selected>Chọn thời gian</option>
                                    <option v-for="amount in amountMonth" :key="amount" :value="amount">{{ amount }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-6">
                                <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm">
                                    <option value="" disabled selected>Chọn thời gian</option>
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
                                <input id="teachingFee" type="text" class="form-control" v-model="teachingFee"
                                    @input="formatCurrency">
                            </div>
                            <div class="col-4">
                                <select class="form-select js-choice border-0 bg-light" aria-label=".form-select-sm">
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    checked>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Nam
                                </label>
                            </div>
                            <div class="form-check radio-bg-light me-4">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Nữ
                                </label>
                            </div>
                            <div class="form-check radio-bg-light">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label" for="flexRadioDefault2">
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
                            <div class="col-1">
                                Từ
                            </div>
                            <div class="col-3 flex-auto">
                                <select id="fromAge" v-model="fromAge"
                                    class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                                    <option v-for="year in yearOlds" :key="year" :value="year">{{ year }}</option>
                                </select>
                            </div>
                            <div class="col-1">
                                Đến
                            </div>
                            <div class="col-3">
                                <select id="toAge" v-model="toAge" class="form-select js-choice z-index-9 border-0 bg-light"
                                    aria-label=".form-select-sm" @input="checkAgeRange">
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
                    <div class="col-lg-2 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                            <option value="" disabled selected>Học Vấn</option>
                            <option v-for="education in educations" :key="education" :value="education">{{ education }}
                            </option>
                        </select>
                    </div>
                    <div class="col-lg-2 me-4">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                            <option value="" disabled selected>Kinh Nghiệm Làm Việc</option>
                            <option v-for="education in educations" :key="education" :value="education">{{ education }}
                            </option>
                        </select>
                    </div>
                    <div class="col-lg-2">
                        <select class="form-select js-choice z-index-9 border-0 bg-light" aria-label=".form-select-sm">
                            <option value="" disabled selected>Kinh Nghiệm Dạy học</option>
                            <option v-for="education in educations" :key="education" :value="education">{{ education }}
                            </option>
                        </select>
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
                        <textarea class="form-control" rows="3" placeholder=""></textarea>
                    </div>
                </div>
            </div>

            <!-- Button -->
            <div class="col-12 text-sm-end">
                <button class="btn btn-primary mb-0">Submit</button>
            </div>
        </form>
        <!-- Form END -->
    </div>
    <!-- Admission form END -->
</template>

<style scoped>
.col-1 {
    padding-top: 0.5rem
}
</style>