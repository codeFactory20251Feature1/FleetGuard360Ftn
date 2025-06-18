import axios from 'axios';

const baseURL = 'https://fleetguard360-feat1-backend.onrender.com/api';

const axiosInstance = axios.create({ baseURL });

// Optional: puedes añadir interceptores aquí si el token se guarda globalmente

export default axiosInstance;
