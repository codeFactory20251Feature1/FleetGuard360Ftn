import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

export const useAxiosAuth = () => {
  const { token } = useAuth();

  const instance = axios.create({
    baseURL: 'https://fleetguard360-feat1-backend.onrender.com/api',
  });

  instance.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
};
