'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRutasService } from '@/services/routesService';
import { toast } from 'sonner';

export function CrearRutaForm() {
  const { crearRuta } = useRutasService();
  const [form, setForm] = useState({ nombre: '', origen: '', destino: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await crearRuta(form);
      toast.success('Ruta creada correctamente');
      setForm({ nombre: '', origen: '', destino: '' });
    } catch {
      toast.error('Error al crear la ruta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader><CardTitle>Crear Ruta</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Label>Nombre</Label>
          <Input name="nombre" value={form.nombre} onChange={handleChange} required />
          <Label>Origen</Label>
          <Input name="origen" value={form.origen} onChange={handleChange} required />
          <Label>Destino</Label>
          <Input name="destino" value={form.destino} onChange={handleChange} required />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Ruta'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
