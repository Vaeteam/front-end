import { defineStore } from 'pinia';
import PostService from "@/service/post.service";
import type { ApiResponse } from '@/interfaces/common.interface'


export const filterStore = defineStore('filter', {
    state: () => ({
        page: 1,
        subjectIds: [] as string[],
        provinceId: null as number | null,
        districtId: null as number | null,
        wardId: null as number | null,
        fromTime: null as string | null,
        toTime: null as string | null,
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
