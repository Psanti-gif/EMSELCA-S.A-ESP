import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-footer text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención Ciudadana</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pqrs" className="hover:text-emselca-yellow transition-colors">PQRS</Link>
              </li>
              <li>
                <Link to="/directorio" className="hover:text-emselca-yellow transition-colors">Directorio</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-emselca-yellow transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="hover:text-emselca-yellow transition-colors">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Transparencia</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/presupuesto" className="hover:text-emselca-yellow transition-colors">Presupuesto</Link>
              </li>
              <li>
                <Link to="/contratacion" className="hover:text-emselca-yellow transition-colors">Contratación</Link>
              </li>
              <li>
                <Link to="/control-interno" className="hover:text-emselca-yellow transition-colors">Control Interno</Link>
              </li>
              <li>
                <Link to="/rendicion-cuentas" className="hover:text-emselca-yellow transition-colors">Rendición de Cuentas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <p className="mb-4">Mantente informado de las últimas noticias y eventos del municipio.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-emselca-yellow hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-emselca-yellow hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-emselca-yellow hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} EMSELCA SAS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">

              <Link href="https://www.google.com/maps/place/EMSELCA+S.A+E.S.P/@8.5139279,-77.2802828,1045m/data=!3m1!1e3!4m6!3m5!1s0x8e511d1de9f255b1:0x31640bfc1f6e4ac4!8m2!3d8.513232!4d-77.2768777!16s%2Fg%2F11j2nzvqrb!5m1!1e1?hl=es&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" className="hover:text-emselca-yellow transition-colors">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}