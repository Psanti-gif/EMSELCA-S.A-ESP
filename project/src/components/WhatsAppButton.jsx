import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '573225945357';
  const message = 'Hola, Te gustaría obtener más información sobre los servicios de EMSELCA.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center">
      {/* Panel desplegable */}
      <div 
        className={`
          bg-white rounded-lg shadow-lg p-4 mr-4 transform transition-all duration-300
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-start space-y-3">
          <p className="text-gray-700 font-medium">¿Necesitas ayuda?</p>
          <p className="text-sm text-gray-600">Contáctanos por WhatsApp</p>
          <button
            onClick={handleClick}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
          >
            <FaWhatsapp />
            <span>Iniciar chat</span>
          </button>
        </div>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
        `}
        aria-label={isOpen ? 'Cerrar WhatsApp' : 'Contactar por WhatsApp'}
      >
        {isOpen ? (
          <FaTimes className="text-3xl text-white" />
        ) : (
          <FaWhatsapp className="text-3xl text-white" />
        )}
      </button>
    </div>
  );
}