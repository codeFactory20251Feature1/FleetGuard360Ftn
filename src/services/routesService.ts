import { useAxiosAuth } from '@/hooks/useAxiosAuth';

export interface Ruta {
  id: number;
  nombre: string;
  origen: string;
  destino: string;
}

export const useRutasService = () => {
  const axios = useAxiosAuth();

  return {
    listarRutas: async (): Promise<Ruta[]> => {
      const res = await axios.get('/rutas');
      return res.data;
    },

    obtenerRuta: async (id: number): Promise<Ruta> => {
      const res = await axios.get(`/rutas/${id}`);
      return res.data;
    },

    crearRuta: async (ruta: Omit<Ruta, 'id'>): Promise<Ruta> => {
      const res = await axios.post('/rutas', ruta);
      return res.data;
    },

    actualizarRuta: async (id: number, ruta: Ruta): Promise<Ruta> => {
      const res = await axios.put(`/rutas/${id}`, ruta);
      return res.data;
    },

    eliminarRuta: async (id: number): Promise<void> => {
      await axios.delete(`/rutas/${id}`);
    },
  };
};
