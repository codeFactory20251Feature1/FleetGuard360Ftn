
// src/app/drivers/[id]/page.tsx

import React from 'react';

export default function DriverPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Driver ID: {params.id}</h1>
    </div>
  );
}
