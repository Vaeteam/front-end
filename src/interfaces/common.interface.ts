import type { AxiosResponse } from 'axios';



export interface TreeNode {
    key: number;
    label: string;
    data: string;
    children?: any;
}

export interface ShiftInterface {
    weekday: string;
    startTime: string;
    endTime: string;
}

export const emptyShift: ShiftInterface = {
    weekday: '',
    startTime: '',
    endTime: ''
}

export interface ApiResponse extends AxiosResponse {
    data: any;
    message: string;
    details: string;
}

export interface AdministrativeUnit {
    id: number;
    name : string;
    codename : string;
    code : number;
    division_type : number;
    root : number;
}
