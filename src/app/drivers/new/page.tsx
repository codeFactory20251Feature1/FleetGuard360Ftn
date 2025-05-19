'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const NuevoConductorPage = () => {

    const router = useRouter();

    const [form, setForm] = useState({
      nombre: '',
      cedula: '',
      licencia: '',
      correo: '',
    });
  
    const [error, setError] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Validación básica
      if (!form.nombre || !form.cedula || !form.licencia) {
        setError('Por favor completa los campos obligatorios');
        return;
      }
  
      try {
        const res = await fetch('/api/conductores', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
  
        if (!res.ok) throw new Error('Error al registrar conductor');
  
        router.push('/conductores');
      } catch (err) {
        console.error('Error al registrar conductor:', err);
        setError('No se pudo registrar el conductor');
      }
    }

  return (
    <div className="max-w-xl mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4">Registrar Nuevo Conductor</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-600">{error}</p>}

      <input
        name="nombre"
        type="text"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        name="cedula"
        type="text"
        placeholder="Cédula"
        value={form.cedula}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        name="licencia"
        type="text"
        placeholder="Número de licencia"
        value={form.licencia}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <input
        name="correo"
        type="text"
        placeholder="Email"
        value={form.correo}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Registrar
      </button>
      <button
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Cancelar
      </button>
    </form>
  </div>
  )
}
export default NuevoConductorPage

