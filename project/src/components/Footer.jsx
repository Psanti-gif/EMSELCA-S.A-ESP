import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención Ciudadana</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pqrs" className="hover:text-green-200">PQRS</Link>
              </li>
              <li>
                <Link to="/directorio" className="hover:text-green-200">Directorio</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-green-200">Contacto</Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="hover:text-green-200">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Transparencia</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/presupuesto" className="hover:text-green-200">Presupuesto</Link>
              </li>
              <li>
                <Link to="/contratacion" className="hover:text-green-200">Contratación</Link>
              </li>
              <li>
                <Link to="/control-interno" className="hover:text-green-200">Control Interno</Link>
              </li>
              <li>
                <Link to="/rendicion-cuentas" className="hover:text-green-200">Rendición de Cuentas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <p className="mb-4">Mantente informado de las últimas noticias y eventos del municipio.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-green-200">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-green-200">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} EMSELCA S.A. ESP. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
              <Link to="/terminos" className="hover:text-green-200">Términos y Condiciones</Link>
              <Link to="/privacidad" className="hover:text-green-200">Política de Privacidad</Link>
              <Link to="/mapa-sitio" className="hover:text-green-200">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}