import type { PostInterface } from '@/interfaces/post.interface'
import type { ApiResponse } from '@/interfaces/common.interface';
import apiService from './api.service';

class PostService {
    getPage(page_number: number) {
        const mockup_data: PostInterface[] = [
                {id: 1, title: 'test title 1'},
                {id: 2, title: 'test title 2'},
                {id: 3, title: 'test title 3'},
                {id: 4, title: 'test title 4'},
                {id: 5, title: 'test title 5'},
            ]

        return mockup_data
    }

    async createPost(payload:any): Promise<ApiResponse> {
        return await apiService.post('/post/create/', payload);
    }
}

export default new PostService();
