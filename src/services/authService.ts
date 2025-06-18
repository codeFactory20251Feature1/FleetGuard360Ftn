import axiosInstance from '@/lib/axios';

interface LoginPayload {
  correo: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const res = await axiosInstance.post('/auth/login', data);
  return res.data;
};
