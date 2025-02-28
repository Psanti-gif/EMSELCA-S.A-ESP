import React from 'react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Facturacion y Pagos</h3>
            
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Tarifas y Subsidios</h3>
            
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Solicitudes y Trámites</h3>
          <ul className="space-y-2 text-gray-600">
            
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Suspensiones y Reconexiones</h3>
          <ul className="space-y-2 text-gray-600">
            
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Horarios de Atención</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Lunes a Viernes</span>
              <span className="text-gray-600">8:00 AM - 12:00 PM | 2:00 PM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}