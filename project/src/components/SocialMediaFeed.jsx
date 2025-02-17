import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaSync } from 'react-icons/fa';

export default function SocialMediaFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const loadFeeds = async () => {
      setIsLoading(true);
      try {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      } catch (error) {
        console.error('Error loading social feeds:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    loadFeeds();
    const interval = setInterval(loadFeeds, 300000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
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
            <div className="instagram-media">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/emselca/"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '99.375%',
                  height: '600px'
                }}
              ></blockquote>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}