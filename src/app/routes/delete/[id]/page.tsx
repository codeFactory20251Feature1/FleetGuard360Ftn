'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRutasService } from '@/services/routesService';
import { toast } from 'sonner';
import Link from 'next/link';

export default function EliminarRutaPage() {
  const { id } = useParams();
  const { obtenerRuta, eliminarRuta } = useRutasService();

  const [rutaNombre, setRutaNombre] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRuta = async () => {
      try {
        const ruta = await obtenerRuta(Number(id));
        setRutaNombre(ruta.nombre);
      } catch {
        toast.error('No se pudo obtener la ruta');
      }
    };
    if (id) fetchRuta();
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await eliminarRuta(Number(id));
      toast.success('Ruta eliminada con éxito');
    } catch {
      toast.error('Error al eliminar la ruta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Eliminar Ruta</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>¿Estás seguro de que deseas eliminar la ruta &quot;{rutaNombre}&quot;?</p>

        <div className="flex gap-4">
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>
            {loading ? 'Eliminando...' : 'Eliminar'}
          </Button>
          <Link href="/routes">
            <Button variant="outline">
              Cancelar
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
