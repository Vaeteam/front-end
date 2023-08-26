import type { TreeNode } from 'primevue/tree/Tree';
import type { AdministrativeUnit } from '@/interfaces/common.interface'
import apiService from './api.service';

class CommonService {
    async getCourses():Promise<TreeNode[]> {
        const response = await apiService.get('/common/subjects');
        return response.data;
    }

    async getAdministrativeUnit(pk: number):Promise<AdministrativeUnit[]> {
        const response = await apiService.get(`/common/administrative_unit/${pk}`);
        return response.data;
    }
}

export default new CommonService();
