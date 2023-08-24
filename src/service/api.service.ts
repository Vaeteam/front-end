// src/services/api.ts

import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router';
import { commonStore } from '@/stores/common';
import { app } from '@/main';

interface ApiResponse extends AxiosResponse {
  data: any;
}

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    this.axiosInstance.interceptors.request.use(this.handleRequest);
    this.axiosInstance.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
    // Add any request modifications here, e.g., authentication headers
    return config;
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    this.hideLoading();
    if (response.data) {
      const { message, detail } = response.data as any;
      if( message && detail ) {
        let details = detail;
        if (detail instanceof Array<string>) {
          details = detail.join('\n');
        }
        app.config.globalProperties.$toast.add({ severity: 'success', summary: message, detail: details, life: 3000 });
      }
    }
    // Handle response, e.g., logging or data manipulation
    return response;
  }

  private handleError(error: any): Promise<any> {
    this.hideLoading()
    // show toast when have message and detail
    if (error.response.data) {
      const { message, detail } = error.response.data;
      if( message && detail ) {
        let details = detail;
        if (detail instanceof Array<string>) {
          details = detail.join('\n');
        }
        app.config.globalProperties.$toast.add({ severity: 'error', summary: message, detail: details, life: 3000 });
      }
    }
    // Handle errors, e.g., logging or user notifications
    if(error.response.status === 401) {
      const userStore = useUserStore();
      const router = useRouter();
      userStore.logout();
      router.push('/auth/login');
    }
    return Promise.reject(error);
  }

  public async get(url: string, config?: AxiosRequestConfig): Promise<ApiResponse> {
    return this.axiosInstance.get(url, config);
  }

  public async getWithLoading(url: string, config?: AxiosRequestConfig): Promise<ApiResponse> {
    this.showLoading();
    return this.axiosInstance.get(url, config);
  }

  public async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse> {
    return this.axiosInstance.post(url, data, config);
  }

  public async postWithLoading(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse> {
    this.showLoading();
    return this.axiosInstance.post(url, data, config);
  }
  // Add other HTTP methods (put, delete, etc.) here if needed
  private showLoading() {
    const useCommonStore = commonStore();
    useCommonStore.loading(true);
  }

  private hideLoading() {
    const useCommonStore = commonStore();
    useCommonStore.loading(false);
  }
}

// Replace 'https://api.example.com' with your API base URL
const baseURL = import.meta.env.VITE_API_URL;
const apiService = new ApiService(baseURL);

export default apiService;