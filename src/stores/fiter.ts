import { defineStore } from 'pinia';
import PostService from "@/service/post.service";
import type { ApiResponse } from '@/interfaces/common.interface'


export const filterStore = defineStore('filter', {
    state: () => ({
        page: 1,
        subjectIds: null,
        provinceIds: null,
        districtIds: null,
        wardIds: null,
        fromTime: null,
        toTime: null,
    }),
    actions: {
        async fetchPost(){
            try {
                const res = await PostService.getPost(this.$state);
                this.page++;
                return res.data.data;
            } catch (error) {
                return [];
            }
        },
    },
});
