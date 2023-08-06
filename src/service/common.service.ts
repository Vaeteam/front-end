import type { TreeNode } from 'primevue/tree/Tree';
import apiService from './api.service';

class CommonService {
    async getCourses():Promise<TreeNode[]> {
        const response = await apiService.get('/common/subjects');
        return response.data;
    }
}

export default new CommonService();
