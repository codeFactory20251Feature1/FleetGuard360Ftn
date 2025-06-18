'use client';

import { useEffect, useState } from 'react';
import { useRutasService, Ruta } from '@/services/routesService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function ListarRutas() {
  const { listarRutas, eliminarRuta } = useRutasService();
  const [rutas, setRutas] = useState<Ruta[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listarRutas();
        setRutas(data);
      } catch (err) {
        toast.error('Error al cargar las rutas - ' + (err as Error).message);
      }
    };
    fetchData();
  }, []);

  const handleEliminar = async (id: number) => {
    try {
      await eliminarRuta(id);
      setRutas((prev) => prev.filter((ruta) => ruta.id !== id));
      toast.success('Ruta eliminada');
    } catch {
      toast.error('No se pudo eliminar');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Rutas</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Nombre</th>
              <th className="text-left p-2">Origen</th>
              <th className="text-left p-2">Destino</th>
              <th className="text-left p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rutas.map((ruta) => (
              <tr key={ruta.id} className="border-b">
                <td className="p-2">{ruta.id}</td>
                <td className="p-2">{ruta.nombre}</td>
                <td className="p-2">{ruta.origen}</td>
                <td className="p-2">{ruta.destino}</td>
                <td className="p-2 flex gap-2">
                  <Button
                    onClick={() => router.push(`/rutas/editar/${ruta.id}`)}
                    variant="default"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleEliminar(ruta.id)}
                    variant="destructive"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
