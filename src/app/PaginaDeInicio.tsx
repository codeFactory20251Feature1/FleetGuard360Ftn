'use client';

import CardInfo from '@/components/login/CardInfo';
import { LoginForm } from '@/components/login/LoginForm';
import React from 'react';

const PaginaDeInicio = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-svh w-full items-center justify-center gap-6 p-6 md:p-10">
      {/* CardInfo - 70% */}
      <div className="w-full md:w-[60%] flex justify-center">
        <div className="w-full max-w-[800px]">
          <CardInfo />
        </div>
      </div>

      {/* LoginForm - 30% */}
      <div className="w-full md:w-[40%] flex justify-center">
        <div className="w-full max-w-[400px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default PaginaDeInicio;
