import { useAxiosAuth } from '@/hooks/useAxiosAuth';

export interface Conductor {
  id?: number;
  nombre: string;
  documentoIdentidad: string;
  telefono: string;
  email: string;
  password: string;
}

export const useConductoresService = () => {
  const axios = useAxiosAuth();

  return {
    crearConductor: async (data: Omit<Conductor, 'id'>): Promise<Conductor> => {
      const res = await axios.post('/conductores/crear', data);
      return res.data;
    },

    actualizarConductor: async (id: number, data: Conductor): Promise<Conductor> => {
      const res = await axios.put(`/conductores/${id}`, data);
      return res.data;
    },

    eliminarConductor: async (id: number): Promise<void> => {
      await axios.delete(`/conductores/${id}`);
    },
  };
};
