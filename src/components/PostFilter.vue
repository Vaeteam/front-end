<script setup lang="ts">
    import router from "@/router/index";
    import { commonStore } from '@/stores/common';
    import { ref, watch, onMounted } from 'vue';
    import TreeSelect from 'primevue/treeselect';
    import Dropdown from 'primevue/dropdown';
    import Calendar from 'primevue/calendar';
    import { filterStore } from "@/stores/fiter"
    import type { AdministrativeUnit } from '@/interfaces/common.interface'
    import commonService from '@/service/common.service';


    const selectedSubjects = ref([]);
    const selectedAddress = ref({
        province: null as AdministrativeUnit | null,
        district: null as AdministrativeUnit | null,
        ward: null as AdministrativeUnit | null
    })
    const teachingTime = ref({
        fromTime: null as string | null,
        toTime: null as string | null,
    })

    const filterSto = filterStore();
    const commonSto = commonStore();
    onMounted(async () => {
        if(commonSto.subjects.length === 0) {
            await commonSto.fetchSubjects()
        }
        if(commonSto.administrativeUnits.length === 0) {
            await commonSto.fetchAdministrativeUnit(0)
        }
    })
    
    let administrativeDistricts = ref<AdministrativeUnit[]>([])
    let administrativeWards = ref<AdministrativeUnit[]>([])

    watch(() => selectedAddress.value.province, 
        async (newValue, oldValue) => {
            if (newValue !== null && typeof newValue.id === "number" ) {
                administrativeDistricts.value = await commonService.getAdministrativeUnit(newValue.id);
                filterSto.provinceId = newValue.id
            }
        },
        {deep: true}
    );

    watch(() => selectedAddress.value.district, 
        async (newValue, oldValue) => {
            if (newValue !== null && typeof newValue.id === "number" ) {
                administrativeWards.value = await commonService.getAdministrativeUnit(newValue.id);
                filterSto.districtId = newValue.id
            }
        },
        {deep: true}
    );

    watch(() => selectedAddress.value.ward, 
        async (newValue, oldValue) => {
            if (newValue !== null && typeof newValue.id === "number" ) {
                filterSto.wardId = newValue.id
            }
        },
        {deep: true}
    );

    watch(() => teachingTime.value.fromTime, (newValue, oldValue) => {
            filterSto.fromTime = newValue
        },
        {deep: true}
    );
    watch(() => teachingTime.value.toTime, (newValue, oldValue) => {
            filterSto.toTime = newValue
        },
        {deep: true}
    );


    watch(selectedSubjects, (newValue, oldValue) => {
        filterSto.subjectIds = Object.keys(newValue).filter(
            key => newValue[key].checked
        )
    });
    const navigateToCreatePostPage = () => {
        router.push({name: "create-post"});
    };
</script>

<template>
    <div class="col-3">
        <nav class="navbar navbar-light navbar-expand-xl mx-0">
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="d-grid p-2 p-xl-0 mb-5 bg-body text-center">
                    <button class="btn btn-danger mb-0" @click="navigateToCreatePostPage">Tuyển Gia Sư</button>
                </div>
                <div class="p-3 p-xl-0">
                    <form>
                        <div class="card card-body shadow p-4 mb-4">
                            <h4 class="mb-3">Môn Học</h4>
                            <TreeSelect 
                                v-model="selectedSubjects" 
                                :options="commonSto.subjects" 
                                selectionMode="checkbox" 
                                :metaKeySelection="false" 
                                placeholder="Chọn môn học"
                            />
                        </div>
                        <div class="card card-body shadow p-4 mb-4">
                            <h4 class="mb-3">Địa Điểm</h4>
                            <Dropdown v-if="commonSto.administrativeUnits"
                                v-model="selectedAddress.province" 
                                editable 
                                :options="commonSto.administrativeUnits" 
                                optionLabel="name" 
                                placeholder="Nhập tỉnh/thành phố" 
                                class="mb-4" 
                            />
                            <Dropdown v-if="administrativeDistricts.length > 0"
                                v-model="selectedAddress.district" 
                                editable 
                                :options="administrativeDistricts" 
                                optionLabel="name" 
                                placeholder="Nhập huyện/quận" 
                                class="mb-4" 
                            />
                            <Dropdown v-if="administrativeWards.length > 0"
                                v-model="selectedAddress.ward" 
                                editable 
                                :options="administrativeWards" 
                                optionLabel="name" 
                                placeholder="Nhập xã/phường" 
                            />
                        </div>
                        <div class="card card-body shadow p-4 mb-4">
                            <h4 class="mb-3">Giờ Học</h4>
                            <Calendar 
                                id="calendar-startTime" 
                                v-model="teachingTime.fromTime" 
                                timeOnly 
                                placeholder="Từ"
                                class="mb-4"
                            />
                            <Calendar 
                                id="calendar-startTime" 
                                v-model="teachingTime.toTime" 
                                timeOnly 
                                placeholder="Đến"
                            />
                        </div>
                    </form>
                </div>

                <!-- Button -->
                <div class="d-grid p-2 p-xl-0 bg-body text-center">
                    <button class="btn btn-primary mb-0">Tìm Kiếm</button>
                </div>
            </div>
        </nav>
        <!-- Responsive offcanvas body END -->
    </div>
</template>
