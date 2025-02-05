import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialMediaFeed() {
  useEffect(() => {
    const loadFeeds = () => {
      if (window.FB) window.FB.XFBML.parse();
      if (window.instgrm) window.instgrm.Embeds.process();
    };

    loadFeeds();
    const interval = setInterval(loadFeeds, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-emselca-green mb-4">Nuestras Redes Sociales</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Mantente informado de nuestras últimas noticias y actualizaciones</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="bg-[#1877F2] p-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center">
              <FaFacebook className="mr-2 text-2xl" /> Facebook
            </h3>
            <a href="https://www.facebook.com/p/Empresa-de-servicios-publico-de-Acandi-Emselca-SA-ESP-100076014273396/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-[#1877F2] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Seguir</a>
          </div>
          <div className="p-4">
            <div className="fb-page" data-href="https://www.facebook.com/p/Empresa-de-servicios-publico-de-Acandi-Emselca-SA-ESP-100076014273396/" data-tabs="timeline" data-width="" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center">
              <FaInstagram className="mr-2 text-2xl" /> Instagram
            </h3>
            <a href="https://www.instagram.com/emselca/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-[#E4405F] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Seguir</a>
          </div>
          <div className="p-4">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/emselca/" data-instgrm-version="14" style={{ width: '100%' }}></blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
