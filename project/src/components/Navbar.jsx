import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Noticias', href: '/noticias' },
];

const topBarLinks = [
  { name: 'PQRS', href: '/pqrs', icon: FaEnvelope },
  { name: 'Transparencia', href: '/transparencia', icon: FaFileAlt },
  { name: 'Contáctenos', href: '/contacto', icon: FaPhone },
];

export default function Navbar() {
  const location = useLocation();
  const [isTopBarOpen, setIsTopBarOpen] = useState(false);

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Toggle button for top bar - Desktop version */}
      <button
        onClick={() => setIsTopBarOpen(!isTopBarOpen)}
        className="absolute hidden sm:flex left-1/2 -translate-x-1/2 top-0 bg-green-700 text-white px-4 py-1 rounded-b-lg hover:bg-green-600 transition-colors items-center space-x-2 z-50"
      >
        <span className="text-sm font-medium">Información de Contacto</span>
        {isTopBarOpen ? (
          <FaChevronUp className="h-3 w-3" />
        ) : (
          <FaChevronDown className="h-3 w-3" />
        )}
      </button>

      {/* Toggle button for top bar - Mobile version */}
      <button
        onClick={() => setIsTopBarOpen(!isTopBarOpen)}
        className="sm:hidden fixed left-0 top-1/2 -translate-y-1/2 bg-green-700 text-white px-2 py-4 rounded-r-lg hover:bg-green-600 transition-colors z-50"
      >
        {isTopBarOpen ? (
          <FaTimes className="h-5 w-5" />
        ) : (
          <FaBars className="h-5 w-5" />
        )}
      </button>

      {/* Top bar - Desktop version */}
      <div className="hidden sm:block">
        <Transition
          show={isTopBarOpen}
          enter="transition-transform duration-300 ease-out"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-300 ease-in"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          className="relative"
        >
          <div className="bg-green-700 text-white pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-2 text-sm group">
                      <FaPhone className="text-green-200 group-hover:text-white transition-colors" />
                      <a href="tel:+576726789" className="hover:text-green-200 transition-colors">
                        (+57) 6726789
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm group">
                      <FaMapMarkerAlt className="text-green-200 group-hover:text-white transition-colors" />
                      <span className="hover:text-green-200 transition-colors">
                        Chocó, Colombia
                      </span>
                    </div>
                    <div className="hidden lg:flex items-center space-x-2 text-sm group">
                      <FaClock className="text-green-200 group-hover:text-white transition-colors" />
                      <span className="hover:text-green-200 transition-colors">
                        Lun - Vie: 8:00 - 17:00
                      </span>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex justify-center sm:justify-end space-x-6">
                    {topBarLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-1 text-sm group hover:text-green-200 transition-colors"
                      >
                        <link.icon className="h-4 w-4 text-green-200 group-hover:text-white transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      {/* Top bar - Mobile version */}
      <div className="sm:hidden">
        <Transition
          show={isTopBarOpen}
          enter="transition-transform duration-300 ease-out"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-in"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-y-0 left-0 w-64 bg-green-700 text-white shadow-lg z-40">
            <div className="p-4 space-y-6">
              <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm group">
                  <FaPhone className="text-green-200 group-hover:text-white transition-colors" />
                  <a href="tel:+576726789" className="hover:text-green-200 transition-colors">
                    (+57) 6726789
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm group">
                  <FaMapMarkerAlt className="text-green-200 group-hover:text-white transition-colors" />
                  <span className="hover:text-green-200 transition-colors">
                    Chocó, Colombia
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm group">
                  <FaClock className="text-green-200 group-hover:text-white transition-colors" />
                  <span className="hover:text-green-200 transition-colors">
                    Lun - Vie: 8:00 - 17:00
                  </span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
                {topBarLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 text-sm group hover:text-green-200 transition-colors"
                    onClick={() => setIsTopBarOpen(false)}
                  >
                    <link.icon className="h-4 w-4 text-green-200 group-hover:text-white transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Transition>
      </div>

      {/* Overlay for mobile */}
      <Transition
        show={isTopBarOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="sm:hidden"
      >
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsTopBarOpen(false)}
        />
      </Transition>

      {/* Main navbar - Responsive */}
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <span className="text-xl sm:text-2xl font-bold text-green-700">EMSELCA S.A. ESP</span>
                  </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        isCurrentPath(item.href)
                          ? 'text-green-700 border-b-2 border-green-700'
                          : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-700'
                      } px-3 py-2 text-sm font-medium transition-all duration-200`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700 transition-colors">
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={`${
                        isCurrentPath(item.href)
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                      } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}