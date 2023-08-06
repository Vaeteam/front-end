import { defineStore } from 'pinia';
import type { TreeNode } from '@/interfaces/common.interface'
import CommonService from "@/service/common.service"; 

export const commonStore = defineStore('common', {
    state: () => ({
        subjects: null as TreeNode[] | null,
    }),
    actions: {
        async fetchSubjects() {
            const subjects: TreeNode[] = await CommonService.getCourses();
            this.subjects = subjects;
        },
    },
});
