'use client';

import React from 'react';
import Link from 'next/link';
import { IoPersonSharp } from 'react-icons/io5';
import { FaRoute } from 'react-icons/fa';
import { MdEditCalendar } from 'react-icons/md';

const DashboardPage = () => {
  const cards = [
    {
      title: 'Conductores',
      icon: <IoPersonSharp size={32} />,
      href: '/drivers',
    },
    {
      title: 'Rutas',
      icon: <FaRoute size={32} />,
      href: '/routes',
    },
    {
      title: 'Turnos',
      icon: <MdEditCalendar size={32} />,
      href: '/turns',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition"
          >
            <div className="mb-4 text-primary">{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
