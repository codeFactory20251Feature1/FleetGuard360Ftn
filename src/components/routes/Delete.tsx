'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRutasService } from '@/services/routesService';
import { toast } from 'sonner';

export function EliminarRutaForm() {
  const { eliminarRuta } = useRutasService();
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await eliminarRuta(parseInt(id));
      toast.success('Ruta eliminada correctamente');
      setId('');
    } catch {
      toast.error('Error al eliminar la ruta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader><CardTitle>Eliminar Ruta</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleDelete} className="space-y-4">
          <Label>ID de la Ruta</Label>
          <Input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
          <Button type="submit" variant="destructive" className="w-full" disabled={loading}>
            {loading ? 'Eliminando...' : 'Eliminar Ruta'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
