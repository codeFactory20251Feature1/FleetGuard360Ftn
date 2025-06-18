'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTurnosService } from '@/services/turnsService';
import { toast } from 'sonner';

export default function CrearTurnoPage() {
  const { crearTurno } = useTurnosService();

  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');
  const [estado, setEstado] = useState('');
  const [conductorId, setConductorId] = useState('');
  const [rutaId, setRutaId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await crearTurno({
        inicio,
        fin,
        estado,
        conductorId: Number(conductorId),
        rutaId: Number(rutaId),
      });
      toast.success('Turno creado con éxito');
    } catch {
      toast.error('Error al crear el turno');
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Crear Turno</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="inicio">Inicio</Label>
            <Input
              id="inicio"
              type="datetime-local"
              value={inicio}
              onChange={(e) => setInicio(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="fin">Fin</Label>
            <Input
              id="fin"
              type="datetime-local"
              value={fin}
              onChange={(e) => setFin(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="estado">Estado</Label>
            <Input
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="conductorId">Conductor ID</Label>
            <Input
              id="conductorId"
              type="number"
              value={conductorId}
              onChange={(e) => setConductorId(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="rutaId">Ruta ID</Label>
            <Input
              id="rutaId"
              type="number"
              value={rutaId}
              onChange={(e) => setRutaId(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Crear Turno
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
