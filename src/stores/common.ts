import { defineStore } from 'pinia';
import type { TreeNode } from '@/interfaces/common.interface'
import CommonService from "@/service/common.service"; 

export const commonStore = defineStore('common', {
    state: () => ({
        subjects: null as TreeNode[] | null,
        isLoading: false,
    }),
    actions: {
        async fetchSubjects() {
            const subjects: TreeNode[] = await CommonService.getCourses();
            this.subjects = subjects;
        },
        loading(isLoading: boolean) {
            this.isLoading = isLoading;
        }
    },
});
