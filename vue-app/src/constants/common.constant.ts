export const weekday = [
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
    'Chủ Nhật',
]

export const birthYears = (() => {
    const currentYear = new Date().getFullYear();

    const startYear = currentYear - 100; // Change this to set the range of years

    const years: number[] = [];
    for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
    }

    return years;
})();

export const amountMonth = Array.from({ length: 12 }, (_, index) => index + 1);

export const yearOlds = Array.from({ length: 80 }, (_, index) => index + 18);

export const educations = ['Tốt nghiệp lớp 12', 'Sinh Viên', 'Cử Nhân/Kỹ Sư', 'Học Viên Cao Học','Thạc Sĩ', 'Tiến Sĩ', 'Phó Giáo Sư', 'Giáo Sư']

export const workingExperience = ['1 Năm', '2 Năm', '3 Năm', '4 Năm', '5 Năm', 'Nhiều Hơn 6 Năm']

export const teachingExperience = ['1 Năm', '2 Năm', '3 Năm', '4 Năm', '5 Năm', 'Nhiều Hơn 6 Năm']