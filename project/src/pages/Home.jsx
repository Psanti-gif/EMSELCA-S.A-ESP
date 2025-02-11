import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBolt, FaIndustry, FaStore } from 'react-icons/fa';
import SocialMediaFeed from '../components/SocialMediaFeed';

export default function Home() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[calc(75vh-4rem)] flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          <img 
            src="/logo-hero.svg" 
            alt="EMSELCA SAS" 
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[200px] animate-float"
          />
        </div>
      </div>

      {/* Servicios */}
      <div 
        ref={servicesRef}
        className="py-16 sm:py-20 md:py-24 bg-gray-50 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-emselca-blue">
            Servicios Energéticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Residencial */}
            <div 
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaBolt className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Residencial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Suministro confiable de energía para hogares con medición inteligente.
              </p>
            </div>

            {/* Comercial */}
            <div 
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaStore className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Comercial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Soluciones energéticas para negocios con tarifas competitivas.
              </p>
            </div>

            {/* Industrial */}
            <div 
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaIndustry className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Industrial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Alta tensión y soluciones personalizadas para industrias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialMediaFeed />
        </div>
      </div>

      {/* Ubicación */}
      <div 
        ref={mapRef} 
        className="py-16 sm:py-20 md:py-24 bg-gray-50 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-emselca-blue mb-4 sm:mb-6">Nuestra Ubicación</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Visítanos en nuestra oficina principal.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4981814274456!2d-77.28028279999999!3d8.5139279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e511d1de9f255b1%3A0x31640bfc1f6e4ac4!2sEMSELCA%20S.A%20E.S.P!5e0!3m2!1ses!2sco!4v1706901234567!5m2!1ses!2sco"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full sm:h-[500px] md:h-[600px]"
              title="Ubicación de EMSELCA"
            ></iframe>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 sm:py-20 md:py-24 bg-emselca-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">
            ¿Necesitas ayuda con tu servicio eléctrico?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/pqrs"
              className="bg-white text-emselca-blue px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reportar Falla
            </Link>
            <Link
              to="/contacto"
              className="bg-emselca-blue text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium border-2 border-white hover:bg-emselca-blue-light transition-all duration-300 transform hover:scale-105"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}