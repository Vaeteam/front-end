
class PostService {
    getPage(page_number: number) {
        const mockup_data = {
            data: [
                {id: 1, title: 'test title 1'},
                {id: 2, title: 'test title 2'},
                {id: 3, title: 'test title 3'},
                {id: 4, title: 'test title 4'},
                {id: 5, title: 'test title 5'},
            ]
        }
        return mockup_data
    }
}

export default new PostService();
