import apiService from './api.service';

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

interface SignInFacebookPayload {
  fb_access_token: string;
}

interface ResetPassPayload {
  email: string;
}

interface ResetPasswordPayload {
  password: string;
}

class AuthService {
  async signUp(payload: SignUpPayload): Promise<any> {
    const response = await apiService.postWithLoading('/user/signup/', payload);
    return response.data;
  }

  async signIn(payload: SignInPayload): Promise<any> {
    const response = await apiService.postWithLoading('/user/login/', payload);
    return response.data;
  }

  async signInGoogle(payload: SignInGooglePayload): Promise<any> {
    const response = await apiService.postWithLoading('/social_auth/google/', payload);
    return response.data;
  }

  async signInFacebook(payload: SignInFacebookPayload): Promise<any> {
    const response = await apiService.postWithLoading('/social_auth/facebook/', payload);
    return response.data;
  }

  async activeAccount(path: string): Promise<any> {
    const response = await apiService.getWithLoading(`${path}`);
    return response.data;
  }

  async resetPass(payload: ResetPassPayload): Promise<any> {
    const response = await apiService.postWithLoading('/user/reset_pass/', payload);
    return response.data;
  }

  async resetPassword(path: string, payload: ResetPasswordPayload): Promise<any> {
    const response = await apiService.postWithLoading(`${path}`, payload);
    return response.data;
  }
}

const authService = new AuthService();

export default authService;