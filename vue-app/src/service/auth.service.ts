import apiService from './api.service';
import axios from 'axios';

interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface SignInPayload {
  email: string;
  password: string;
}

interface SignInGooglePayload {
  auth_token: string;
}

interface ResetPassPayload {
  email: string;
}

interface ResetPasswordPayload {
  password: string;
}

class AuthService {
  async signUp(payload: SignUpPayload): Promise<any> {
    const response = await apiService.post('/user/signup/', payload);
    return response.data;
  }

  async signIn(payload: SignInPayload): Promise<any> {
    const response = await apiService.post('/user/login/', payload);
    return response.data;
  }

  async getIdTokenGG(code: string): Promise<any> {
    const response = await axios.post(`https://oauth2.googleapis.com/token?code=${code}&redirect_uri=http://localhost:5173&client_id=${import.meta.env.VITE_GG_CLIENT_ID}&client_secret=${import.meta.env.VITE_GG_SECRET_ID}&grant_type=authorization_code`);
    return response.data;
  }

  async signInGoogle(payload: SignInGooglePayload): Promise<any> {
    const response = await apiService.post('/social_auth/google/', payload);
    return response.data;
  }

  async signInFacebook(payload: SignInGooglePayload): Promise<any> {
    const response = await apiService.post('/social_auth/google/', payload);
    return response.data;
  }

  async activeAccount(path: string): Promise<any> {
    const response = await apiService.get(`${path}`);
    return response.data;
  }

  async resetPass(payload: ResetPassPayload): Promise<any> {
    const response = await apiService.post('/user/reset_pass/', payload);
    return response.data;
  }

  async resetPassword(path: string, payload: ResetPasswordPayload): Promise<any> {
    const response = await apiService.post(`${path}`, payload);
    return response.data;
  }
}

const authService = new AuthService();

export default authService;