export const weekday = [
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
    'Chủ Nhật',
]

const getRangeArray = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const currentYear = new Date().getFullYear();

export const birthYears = getRangeArray(currentYear - 100, currentYear);

export const amountMonth = getRangeArray(1, 12);

export const yearOlds = getRangeArray(18, 97);

export const educations = ['Tốt nghiệp lớp 12', 'Sinh Viên', 'Cử Nhân/Kỹ Sư', 'Học Viên Cao Học','Thạc Sĩ', 'Tiến Sĩ', 'Phó Giáo Sư', 'Giáo Sư']

export const workingExperience = ['1 Năm', '2 Năm', '3 Năm', '4 Năm', '5 Năm', 'Nhiều Hơn 6 Năm']

export const teachingExperience = ['1 Năm', '2 Năm', '3 Năm', '4 Năm', '5 Năm', 'Nhiều Hơn 6 Năm']