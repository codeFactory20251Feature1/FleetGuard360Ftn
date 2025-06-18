'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useConductoresService } from '@/services/driverService';
import { toast } from 'sonner';

export function EliminarConductorForm() {
  const { eliminarConductor } = useConductoresService();
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await eliminarConductor(parseInt(id));
      toast.success('Conductor eliminado correctamente');
      setId('');
    } catch (err) {
      toast.error('Error al eliminar el conductor - ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Eliminar Conductor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleDelete} className="space-y-4">
          <div>
            <Label htmlFor="id">ID del Conductor</Label>
            <Input id="id" type="number" value={id} onChange={(e) => setId(e.target.value)} required />
          </div>
          <Button type="submit" variant="destructive" className="w-full" disabled={loading}>
            {loading ? 'Eliminando...' : 'Eliminar Conductor'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
