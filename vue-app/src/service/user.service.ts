import axios from 'axios';

import { User } from './user';

const api = 'api';

class UserService {
  constructor() {
    console.log('creating new instance of user.service');
  }

  deleteHero(user: User) {
    return axios.delete(`${api}/user/${user.id}`);
  }
  getHeroes() {
    return axios.get<User[]>(`${api}/users`);
  }
  addHero(user: User) {
    return axios.post(`${api}/user/`, { user });
  }
  updateHero(user: User) {
    return axios.put(`${api}/user/${user.id}`, { user });
  }
}

// Export a singleton instance in the global namespace
export const userService = new UserService();