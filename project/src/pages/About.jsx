import React, { useEffect, useRef } from 'react';
import { FaCheckCircle, FaUsers, FaHandshake, FaLeaf } from 'react-icons/fa';

export default function About() {
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Para las tarjetas de valores
            const cards = entry.target.querySelectorAll('.animate-in-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 content-wrapper">
      {/* Introducción */}
      <div 
        ref={el => observerRefs.current[0] = el}
        className="text-center mb-16 opacity-0 translate-y-12 transition-all duration-1000"
      >
        <h1 className="text-4xl font-bold mb-6 text-emselca-green">
          Sobre EMSELCA S.A. E.S.P
        </h1>
        <div className="relative max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="EMSELCA Edificio"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
          />
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La Empresa de Servicios Públicos de Acandí S.A. E.S.P (EMSELCA S.A. E.S.P) es una sociedad de economía mixta 
            constituida mediante escritura pública N° 168 el 15 de diciembre de 1996, con registro mercantil 29017696-4 del 
            27 de enero de 1997, expedido por la Cámara de Comercio de Quibdó.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {/* Misión - Entra desde la izquierda */}
        <div 
          ref={el => observerRefs.current[1] = el}
          className="opacity-0 -translate-x-24 transition-all duration-1000 ease-out"
        >
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Misión EMSELCA"
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-emselca-blue">Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Consolidarse como la empresa líder en servicios públicos domiciliarios en el Darién Colombiano, 
                enfocándose en la administración, operación y mantenimiento de servicios de energía eléctrica y 
                otros servicios públicos. EMSELCA busca satisfacer las necesidades de sus usuarios con eficacia, 
                calidad y transparencia, promoviendo el desarrollo socioeconómico sostenible.
              </p>
            </div>
          </div>
        </div>

        {/* Visión - Entra desde la derecha */}
        <div 
          ref={el => observerRefs.current[2] = el}
          className="opacity-0 translate-x-24 transition-all duration-1000 ease-out"
        >
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Visión EMSELCA"
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-emselca-blue">Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser una empresa reconocida por su compromiso con el bienestar de la ciudadanía, mejorando la calidad 
                de vida mediante la prestación de servicios públicos con altos estándares de satisfacción. EMSELCA 
                aspira a generar desarrollo socioeconómico en su entorno, contribuyendo al progreso del municipio 
                de Acandí y logrando una sólida sostenibilidad financiera.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Valores Corporativos */}
      <div 
        ref={el => observerRefs.current[3] = el}
        className="opacity-0 translate-y-24 transition-all duration-1000"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-emselca-green">
          Valores Corporativos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Excelencia */}
          <div className="animate-in-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-emselca-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-emselca-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Excelencia</h3>
            <p className="text-gray-600 text-center">
              Buscamos la mejora continua en todos nuestros procesos para brindar servicios de la más alta calidad.
            </p>
          </div>

          {/* Compromiso Social */}
          <div className="animate-in-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-emselca-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="w-8 h-8 text-emselca-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Compromiso Social</h3>
            <p className="text-gray-600 text-center">
              Trabajamos por y para nuestra comunidad, entendiendo sus necesidades y buscando soluciones efectivas.
            </p>
          </div>

          {/* Integridad */}
          <div className="animate-in-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-emselca-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHandshake className="w-8 h-8 text-emselca-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Integridad</h3>
            <p className="text-gray-600 text-center">
              Actuamos con honestidad, transparencia y ética en todas nuestras operaciones y relaciones.
            </p>
          </div>

          {/* Sostenibilidad */}
          <div className="animate-in-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-emselca-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLeaf className="w-8 h-8 text-emselca-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Sostenibilidad</h3>
            <p className="text-gray-600 text-center">
              Promovemos el desarrollo sostenible mediante prácticas responsables con el medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}