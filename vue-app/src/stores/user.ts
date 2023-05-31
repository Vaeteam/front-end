// src/store/user.ts

import { defineStore } from 'pinia';

interface UserState {
  access_token: string | null;
  refresh_token: string | null;
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
  } | null;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    access_token: null,
    refresh_token: null,
    user: null,
  }),
  getters: {
    isLoggedIn(state): boolean {
      return !!state.access_token;
    },
    isLoggedInLocalStorage(state): boolean {
      let userLocal = localStorage.getItem('user');
      if(userLocal) {
        const { access_token, refresh_token, user } = JSON.parse(userLocal);
        state.access_token = access_token;
        state.refresh_token = refresh_token;
        state.user = user;
        return true;
      }
      return false;
    }
  },
  actions: {
    login(access_token: string, refresh_token: any, user: any): void {
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.user = user;

      localStorage.setItem('user', JSON.stringify({access_token, refresh_token, user}));
    },
    logout(): void {
      this.access_token = null;
      this.refresh_token = null;
      this.user = null;

      localStorage.clear()
    },
  },
});
