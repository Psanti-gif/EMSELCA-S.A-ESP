import React from 'react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Servicio de Agua Potable */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Agua Potable</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Suministro continuo de agua potable</li>
            <li>• Control de calidad del agua</li>
            <li>• Mantenimiento de redes</li>
            <li>• Atención de emergencias 24/7</li>
          </ul>
        </div>

        {/* Servicio de Alcantarillado */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Alcantarillado</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Mantenimiento del sistema</li>
            <li>• Limpieza de redes</li>
            <li>• Tratamiento de aguas residuales</li>
            <li>• Gestión de conexiones</li>
          </ul>
        </div>

        {/* Servicio de Aseo */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Aseo</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Recolección de residuos</li>
            <li>• Barrido de calles</li>
            <li>• Gestión de residuos especiales</li>
            <li>• Programas de reciclaje</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Horarios de Atención</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Lunes a Viernes</span>
              <span className="text-gray-600">8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Sábados</span>
              <span className="text-gray-600">8:00 AM - 12:00 PM</span>
            </div>
            <div className="flex justify-between items-center text-red-600">
              <span className="font-medium">Emergencias</span>
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}