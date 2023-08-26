import type { TreeNode } from 'primevue/tree/Tree';
import type { AdministrativeUnit } from '@/interfaces/common.interface'
import { defineStore } from 'pinia';
import CommonService from "@/service/common.service"; 

export const commonStore = defineStore('common', {
    state: () => ({
        subjects: [] as TreeNode[],
        administrativeUnits: [] as AdministrativeUnit[],
    }),
    actions: {
        async fetchSubjects() {
            const subjects: TreeNode[] = await CommonService.getCourses();
            this.subjects = subjects;
        },
        async fetchAdministrativeUnit(pk: number) {
            const administrativeUnits: AdministrativeUnit[] = await CommonService.getAdministrativeUnit(pk);
            this.administrativeUnits = administrativeUnits;
        },
    },
});
