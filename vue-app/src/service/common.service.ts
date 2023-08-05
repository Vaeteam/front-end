import type { TreeNode } from '@/interfaces/common.interface'
import apiService from './api.service';

class CommonService {
    async getCourses():Promise<TreeNode[]> {
        const response = await apiService.get('/common/subjects');
        return response.data;
    }
}

export default new CommonService();
