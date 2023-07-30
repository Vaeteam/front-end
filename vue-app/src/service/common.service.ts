import type { CourseInterface } from '@/interfaces/common.interface'

class CommonService {
    getCourses() {
        const mockup_data: CourseInterface[] = [
                {key: 1, label: 'Môn học', data: 'test title 1', children: [
                    {
                        key: 2, label: 'test name 2', data: 'test title 1', children: [
                            {key: 3, label: 'test name 3', data: 'test title 1'},
                            {key: 4, label: 'test name 4', data: 'test title 1'}
                        ]
                    },
                    {key: 5, label: 'test name 5', data: 'test title 1', children: [
                        {key: 6, label: 'test name 6', data: 'test title 1', children: [
                            {key: 7, label: 'test name 7', data: 'test title 1'}
                        ]},
                        {key: 8, label: 'test name 8', data: 'test title 1'}
                    ]},
                ]},
            ]

        return mockup_data
    }
}

export default new CommonService();
