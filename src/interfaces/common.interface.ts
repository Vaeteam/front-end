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