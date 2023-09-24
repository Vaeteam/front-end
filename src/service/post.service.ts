import type { PostFilterInterface } from '@/interfaces/post.interface'
import type { ApiResponse } from '@/interfaces/common.interface';
import { objectToQueryString } from '@/constants/common.constant';
import apiService from './api.service';

class PostService {
    async getPost(queryData: PostFilterInterface): Promise<ApiResponse> {
       return await apiService.get(`/post/list/?${objectToQueryString(queryData)}`);
    }

    async createPost(payload:any): Promise<ApiResponse> {
        return await apiService.post('/post/create/', payload);
    }
}

export default new PostService();
