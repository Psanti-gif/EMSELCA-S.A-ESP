import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h1>
      
      <div className="prose max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">¿Quiénes Somos?</h2>
          <p className="text-gray-600 mb-4">
            EMSELCA SAS es la Empresa de Servicios Públicos del Chocó, dedicada a proporcionar servicios esenciales 
            de alta calidad a nuestra comunidad. Nuestra misión es mejorar la calidad de vida de los habitantes 
            del Chocó a través de la prestación eficiente de servicios públicos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-gray-600 mb-4">
            Brindar servicios públicos de calidad, garantizando la satisfacción de nuestros usuarios y contribuyendo 
            al desarrollo sostenible de la región, mediante una gestión eficiente y transparente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-gray-600 mb-4">
            Ser reconocidos como la empresa líder en la prestación de servicios públicos en el Chocó, 
            caracterizada por la excelencia operativa, la innovación y el compromiso con el medio ambiente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Valores</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Transparencia en la gestión</li>
            <li>Compromiso con la comunidad</li>
            <li>Responsabilidad ambiental</li>
            <li>Eficiencia en el servicio</li>
            <li>Integridad en nuestras acciones</li>
          </ul>
        </section>
      </div>
    </div>
  );
}