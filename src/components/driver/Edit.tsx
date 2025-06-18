'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useConductoresService } from '@/services/driverService';
import { toast } from 'sonner';

export function EditarConductorForm() {
  const { actualizarConductor } = useConductoresService();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    documentoIdentidad: '',
    telefono: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const idNum = parseInt(form.id);
    await actualizarConductor(idNum, {
      ...form,
      id: idNum,
    });
    toast.success('Conductor editado correctamente');
  } catch (err) {
    toast.error('Error al editar el conductor - ' + (err as Error).message);
  } finally {
    setLoading(false);
  }
};

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Editar Conductor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="id">ID del Conductor</Label>
            <Input id="id" name="id" type="number" value={form.id} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="documentoIdentidad">Documento de Identidad</Label>
            <Input id="documentoIdentidad" name="documentoIdentidad" value={form.documentoIdentidad} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="telefono">Teléfono</Label>
            <Input id="telefono" name="telefono" value={form.telefono} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Editando...' : 'Editar Conductor'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
