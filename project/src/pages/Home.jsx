import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaClipboardList, FaFileAlt } from 'react-icons/fa';
import NewsList from '../components/NewsList';
import EventsList from '../components/EventsList';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Bienvenidos a EMSELCA S.A. ESP
          </h1>
          <p className="text-xl text-white text-center mb-8">
            Trabajando juntos por el desarrollo y bienestar de nuestra región
          </p>
          <div className="flex justify-center">
            <Link
              to="/nosotros"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700"
            >
              Conoce Más
            </Link>
          </div>
        </div>
      </div>

      {/* Servicios Municipales */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicios Municipales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicios</h3>
              <p className="text-gray-600 mb-4">
                Conoce nuestros servicios públicos
              </p>
              <Link to="/servicios" className="text-green-600 hover:text-green-700">
                Ver más →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaUsers className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Participación Ciudadana</h3>
              <p className="text-gray-600 mb-4">
                Participa en las decisiones de tu municipio
              </p>
              <Link to="/participacion" className="text-green-600 hover:text-green-700">
                Ver más →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaClipboardList className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparencia</h3>
              <p className="text-gray-600 mb-4">
                Accede a la información pública del municipio
              </p>
              <Link to="/transparencia" className="text-green-600 hover:text-green-700">
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Noticias y Eventos */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Últimas Noticias */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">📰</span> Últimas Noticias
              </h2>
              <NewsList limit={3} />
            </div>

            {/* Próximos Eventos */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">📅</span> Próximos Eventos
              </h2>
              <EventsList limit={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}