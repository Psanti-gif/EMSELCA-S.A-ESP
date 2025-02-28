import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaSync } from 'react-icons/fa';

export default function SocialMediaFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [instagramPosts, setInstagramPosts] = useState([]);

  // Función para cargar los feeds de las redes sociales
  useEffect(() => {
    const loadFeeds = async () => {
      setIsLoading(true);
      try {
        // Llamar al backend para obtener las publicaciones de Instagram
        const response = await fetch('https://emselca.com.co/instagramFeed.php');
        const data = await response.json();
        setInstagramPosts(data.data); // Asumimos que la respuesta es un objeto con una propiedad `data`
      } catch (error) {
        console.error('Error loading social feeds:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    loadFeeds();
    const interval = setInterval(loadFeeds, 300000); // Actualizar cada 5 minutos
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await fetch('https://emselca.com.co/instagramFeed.php');
      const data = await response.json();
      setInstagramPosts(data.data); // Actualizar las publicaciones
    } catch (error) {
      console.error('Error refreshing social feeds:', error);
    } finally {
      setTimeout(() => setRefreshing(false), 1500);
    }
  };

  return (
    <div className="space-y-12">
      {/* Encabezado */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-emselca-green mb-4">
          Nuestras Redes Sociales
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mantente informado de nuestras últimas noticias y actualizaciones
        </p>
      </div>

      {/* Contenedor de feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feed de Facebook */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Encabezado de Facebook */}
          <div className="bg-[#1877F2] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaFacebook className="text-white text-2xl" />
                <h3 className="text-xl font-bold text-white">EMSELCA en Facebook</h3>
              </div>
              <a 
                href="https://www.facebook.com/p/Empresa-de-servicios-publico-de-Acandi-Emselca-SA-ESP-100076014273396"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-[#1877F2] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Seguir
              </a>
            </div>
          </div>
          
          {/* Contenido de Facebook */}
          <div className="p-4 min-h-[600px]">
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/p/Empresa-de-servicios-publico-de-Acandi-Emselca-SA-ESP-100076014273396"
              data-tabs="timeline"
              data-width=""
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            ></div>
          </div>
        </div>

        {/* Feed de Instagram */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Encabezado de Instagram */}
          <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaInstagram className="text-white text-2xl" />
                <h3 className="text-xl font-bold text-white">EMSELCA en Instagram</h3>
              </div>
              <a 
                href="https://www.instagram.com/emselca/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-[#E4405F] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Seguir
              </a>
            </div>
          </div>
          
          {/* Contenido de Instagram */}
          <div className="p-4 min-h-[600px]">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              instagramPosts.map((post) => (
                <div key={post.id} className="mb-4">
                  <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={post.media_url} 
                      alt={post.caption} 
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Botón de actualización */}
      <div className="flex justify-center">
        <button
          onClick={handleRefresh}
          disabled={refreshing || isLoading}
          className={`
            flex items-center space-x-2 px-6 py-3 
            ${(refreshing || isLoading) ? 'bg-gray-400' : 'bg-emselca-blue hover:bg-emselca-blue-light'} 
            text-white rounded-full font-medium shadow-lg transition-all duration-300 transform hover:scale-105
          `}
        >
          <FaSync className={`${(refreshing || isLoading) ? 'animate-spin' : ''}`} />
          <span>{refreshing ? 'Actualizando...' : 'Actualizar'}</span>
        </button>
      </div>
    </div>
  );
}
