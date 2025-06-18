import { useAxiosAuth } from '@/hooks/useAxiosAuth';

export interface Turno {
  inicio: string; // formato ISO
  fin: string;
  estado: string;
  conductorId: number;
  rutaId: number;
}

export const useTurnosService = () => {
  const axios = useAxiosAuth();

  return {
    crearTurno: async (data: Turno): Promise<Turno> => {
      const res = await axios.post('/turnos', data);
      return res.data;
    },
  };
};
