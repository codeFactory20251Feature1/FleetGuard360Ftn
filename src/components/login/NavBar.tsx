// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, LogOut } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  // No mostrar en login
  if (pathname === '/') return null;

  return (
    <nav className="w-full bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <Link href="/index" className="hover:underline">Inicio</Link>
        <Link href="/turns" className="hover:underline">Turnos</Link>
        <Link href="/drivers" className="hover:underline">Conductores</Link>
        <Link href="/routes" className="hover:underline">Rutas</Link>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <LogOut className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
