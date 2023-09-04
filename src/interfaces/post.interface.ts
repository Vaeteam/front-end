export interface PostInterface {
    id: number;
    title: string;
}

export interface PostFilterInterface {
    page: number;
    subjectIds: string[] | null;
    provinceId: number | null;
    districtId: number | null;
    wardId: number | null;
    fromTime: string | null;
    toTime: string | null;
}
