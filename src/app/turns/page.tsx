'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockTurnos } from '@/mocks/mockTurnos';

export default function TablaMocksPage() {
  return (
    <div className="grid gap-10 p-6">
      

      <Card>
        <CardHeader>
          <CardTitle>Turnos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Inicio</TableHead>
                <TableHead>Fin</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Conductor ID</TableHead>
                <TableHead>Ruta ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTurnos.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{new Date(t.inicio).toLocaleString()}</TableCell>
                  <TableCell>{new Date(t.fin).toLocaleString()}</TableCell>
                  <TableCell>{t.estado}</TableCell>
                  <TableCell>{t.conductorId}</TableCell>
                  <TableCell>{t.rutaId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
