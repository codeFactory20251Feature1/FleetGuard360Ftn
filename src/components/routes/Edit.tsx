'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRutasService } from '@/services/routesService';
import { toast } from 'sonner';

export function EditarRutaForm() {
  const { actualizarRuta } = useRutasService();
  const [form, setForm] = useState({ id: '', nombre: '', origen: '', destino: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const idNum = parseInt(form.id);
      await actualizarRuta(idNum, { ...form, id: idNum });
      toast.success('Ruta actualizada correctamente');
    } catch {
      toast.error('Error al actualizar la ruta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader><CardTitle>Editar Ruta</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Label>ID</Label>
          <Input name="id" type="number" value={form.id} onChange={handleChange} required />
          <Label>Nombre</Label>
          <Input name="nombre" value={form.nombre} onChange={handleChange} required />
          <Label>Origen</Label>
          <Input name="origen" value={form.origen} onChange={handleChange} required />
          <Label>Destino</Label>
          <Input name="destino" value={form.destino} onChange={handleChange} required />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Actualizando...' : 'Actualizar Ruta'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
