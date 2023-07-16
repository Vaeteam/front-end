// src/services/api.ts

import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router';


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
    this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleError);
  }

  private handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
    // Add any request modifications here, e.g., authentication headers
    return config;
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    // Handle response, e.g., logging or data manipulation
    return response;
  }

  private handleError(error: any): Promise<any> {
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

  public async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse> {
    return this.axiosInstance.post(url, data, config);
  }

  // Add other HTTP methods (put, delete, etc.) here if needed
}

// Replace 'https://api.example.com' with your API base URL
const baseURL = import.meta.env.VITE_API_URL;
const apiService = new ApiService(baseURL);

export default apiService;