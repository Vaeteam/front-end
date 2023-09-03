export interface PostInterface {
    id: number;
    title: string;
}

export interface PostFilterInterface {
    page: number;
    subjectIds: number | null;
    provinceIds: number | null;
    districtIds: number | null;
    wardIds: number | null;
    fromTime: string | null;
    toTime: string | null;
}
