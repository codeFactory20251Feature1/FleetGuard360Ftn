'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRutasService } from '@/services/routesService';
import { toast } from 'sonner';

export default function EditarRutaPage() {
  const { id } = useParams();
  const router = useRouter();
  const { obtenerRuta, actualizarRuta } = useRutasService();

  const [form, setForm] = useState({
    nombre: '',
    origen: '',
    destino: '',
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchRuta = async () => {
      try {
        const ruta = await obtenerRuta(Number(id));
        setForm({
          nombre: ruta.nombre,
          origen: ruta.origen,
          destino: ruta.destino,
        });
      } catch {
        toast.error('No se pudo obtener la ruta');
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchRuta();
  }, [id, obtenerRuta]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await actualizarRuta(Number(id), { id: Number(id), ...form });
      toast.success('Ruta actualizada con éxito');
      router.push('/rutas');
    } catch {
      toast.error('Error al actualizar la ruta');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p className="text-center p-6">Cargando datos de la ruta...</p>;

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Editar Ruta #{id}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nombre</Label>
            <Input name="nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div>
            <Label>Origen</Label>
            <Input name="origen" value={form.origen} onChange={handleChange} required />
          </div>
          <div>
            <Label>Destino</Label>
            <Input name="destino" value={form.destino} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
