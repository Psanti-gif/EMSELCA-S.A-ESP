import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaClipboardList, FaFileAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaAward, FaHandshake, FaLeaf } from 'react-icons/fa';
import SocialMediaFeed from '../components/SocialMediaFeed';

export default function Home() {
  const navigate = useNavigate();
  const statsRef = useRef(null);
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

    if (statsRef.current) observer.observe(statsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (path) => {
    return (e) => {
      const card = e.currentTarget;
      card.classList.add('scale-95', 'bg-gray-50');
      setTimeout(() => {
        card.classList.remove('scale-95', 'bg-gray-50');
        setTimeout(() => {
          navigate('/servicios');
        }, 150);
      }, 150);
    };
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-hero min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative animate-fade-in-down">
          <img 
            src="/logo-hero.svg" 
            alt="EMSELCA SAS" 
            className="w-[300px] md:w-[400px] lg:w-[500px] animate-float"
          />
        </div>
      </div>

      {/* Servicios Principales */}
      <div 
        ref={servicesRef}
        className="py-16 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-emselca-green">
            Nuestros Servicios Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={handleServiceClick('/servicios')}
            >
              <div className="bg-emselca-blue/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="h-8 w-8 text-emselca-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Agua Potable</h3>
              <p className="text-gray-600 text-center mb-4">
                Suministro continuo de agua potable con los más altos estándares de calidad.
              </p>
              <Link to="/servicios" className="text-emselca-blue hover:text-emselca-blue-light transition-colors block text-center">
                Ver más →
              </Link>
            </div>
            <div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={handleServiceClick('/servicios')}
            >
              <div className="bg-emselca-blue/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaUsers className="h-8 w-8 text-emselca-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Alcantarillado</h3>
              <p className="text-gray-600 text-center mb-4">
                Mantenimiento y gestión eficiente del sistema de alcantarillado.
              </p>
              <Link to="/servicios" className="text-emselca-blue hover:text-emselca-blue-light transition-colors block text-center">
                Ver más →
              </Link>
            </div>
            <div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={handleServiceClick('/servicios')}
            >
              <div className="bg-emselca-blue/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaClipboardList className="h-8 w-8 text-emselca-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-emselca-green">Aseo</h3>
              <p className="text-gray-600 text-center mb-4">
                Servicios integrales de aseo y gestión de residuos.
              </p>
              <Link to="/servicios" className="text-emselca-blue hover:text-emselca-blue-light transition-colors block text-center">
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="py-16 bg-emselca-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-emselca-green">
            Síguenos en Redes Sociales
          </h2>
          <SocialMediaFeed />
        </div>
      </div>

      {/* Ubicación */}
      <div 
        ref={mapRef} 
        className="py-16 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emselca-green mb-4">Nuestra Ubicación</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visítanos en nuestra oficina principal. Estamos estratégicamente ubicados para brindarte la mejor atención.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emselca-blue via-emselca-green to-emselca-yellow rounded-lg opacity-75 blur"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1706901234567!6m8!1m7!1sCAoSLEFGMVFpcE1QWkNkRGpfWHZkNmRqWHhKWXRfbVNhbEJfbEFqWF9IYWpqWXJK!2m2!1d6.2342439!2d-75.5698637!3f180!4f0!5f0.7"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            ¿Necesitas ayuda con nuestros servicios?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Estamos aquí para atenderte. Contáctanos o reporta cualquier incidencia a través de nuestro sistema PQRS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pqrs"
              className="bg-emselca-yellow text-emselca-green px-8 py-4 rounded-md font-medium hover:bg-emselca-yellow-light transition-colors"
            >
              Presentar PQRS
            </Link>
            <Link
              to="/contacto"
              className="bg-white text-emselca-green px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}