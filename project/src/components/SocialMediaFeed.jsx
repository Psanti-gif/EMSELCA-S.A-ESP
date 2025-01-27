import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialMediaFeed() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Cargar el SDK de Facebook
    const loadFacebookSDK = () => {
      return new Promise((resolve) => {
        if (window.FB) {
          window.FB.XFBML.parse();
          resolve();
        } else {
          window.fbAsyncInit = function() {
            window.FB.init({
              xfbml: true,
              version: 'v18.0'
            });
            resolve();
          };

          const script = document.createElement('script');
          script.src = 'https://connect.facebook.net/es_LA/sdk.js';
          script.async = true;
          script.defer = true;
          script.crossOrigin = 'anonymous';
          document.body.appendChild(script);
        }
      });
    };

    // Cargar el SDK de Instagram
    const loadInstagramSDK = () => {
      return new Promise((resolve) => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://www.instagram.com/embed.js';
          script.async = true;
          script.onload = () => {
            if (window.instgrm) {
              window.instgrm.Embeds.process();
            }
            resolve();
          };
          document.body.appendChild(script);
        }
      });
    };

    const initializeSocialFeeds = async () => {
      await Promise.all([loadFacebookSDK(), loadInstagramSDK()]);
      setKey(prev => prev + 1);
    };

    initializeSocialFeeds();

    // Recargar los feeds cada 5 minutos
    const interval = setInterval(() => {
      initializeSocialFeeds();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8" key={key}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feed de Facebook */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h3 className="text-xl font-semibold text-emselca-blue flex items-center">
              <FaFacebook className="mr-2 text-[#1877F2]" />
              Facebook
            </h3>
            <a
              href="https://www.facebook.com/profile.php?id=100041505426580"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-[#1877F2] text-white font-medium rounded-lg hover:bg-[#1664d9] transition-colors text-sm"
            >
              <FaFacebook className="mr-2" />
              Seguir
            </a>
          </div>
          <div className="aspect-[4/3] sm:aspect-auto">
            <div 
              className="fb-page w-full h-full min-h-[500px]" 
              data-href="https://www.facebook.com/profile.php?id=100041505426580"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              data-lazy="false"
            >
              <blockquote 
                cite="https://www.facebook.com/profile.php?id=100041505426580" 
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=100041505426580">
                  EMSELCA SAS ESP
                </a>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Feed de Instagram */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h3 className="text-xl font-semibold text-emselca-blue flex items-center">
              <FaInstagram className="mr-2 text-[#E4405F]" />
              Instagram
            </h3>
            <a
              href="https://www.instagram.com/junior__parra/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium rounded-lg hover:from-[#7232a8] hover:via-[#e41a1a] hover:to-[#e56b2f] transition-all text-sm"
            >
              <FaInstagram className="mr-2" />
              Seguir
            </a>
          </div>
          <div className="aspect-[4/3] sm:aspect-auto">
            <div className="instagram-embed-container w-full h-full min-h-[500px]">
              <blockquote 
                className="instagram-media w-full" 
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/C2xKjE_RLQJ/"
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  padding: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/C2xKjE_RLQJ/" 
                    style={{ 
                      background: '#FFFFFF',
                      lineHeight: 0,
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de actualización manual */}
      <div className="text-center">
        <button
          onClick={() => {
            setKey(prevKey => prevKey + 1);
            if (window.FB) window.FB.XFBML.parse();
            if (window.instgrm) window.instgrm.Embeds.process();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emselca-blue text-white font-medium rounded-lg hover:bg-emselca-blue-light transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Actualizar Feeds
        </button>
      </div>
    </div>
  );
}