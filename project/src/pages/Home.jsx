import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBolt, FaIndustry, FaStore } from 'react-icons/fa';
import SocialMediaFeed from '../components/SocialMediaFeed';
import StreetView from '../components/StreetView';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const navigate = useNavigate();
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

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[calc(75vh-4rem)] flex items-center justify-center">
        <Slider {...sliderSettings} className="absolute inset-0 w-full h-full">
          <div className="w-full h-full">
            <img src="/2.png" alt="Carousel 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full">
            <img src="/Desklan.png" alt="Carousel 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full">
            <img src="/2.png" alt="Carousel 3" className="w-full h-full object-cover" />
          </div>
        </Slider>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          <img
            src="/logo-hero.svg"
            alt="EMSELCA SAS"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[550px] animate-float"
          />
        </div>
      </div>

      {/* Servicios */}
      <div
        ref={servicesRef}
        className="py-16 sm:py-20 md:py-24 bg-gray-50 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-emselca-blue">
            Servicios Energéticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Residencial */}
            <div
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaBolt className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Residencial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Suministro confiable de energía para hogares con medición inteligente.
              </p>
            </div>

            {/* Comercial */}
            <div
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaStore className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Comercial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Soluciones energéticas para negocios con tarifas competitivas.
              </p>
            </div>

            {/* Industrial */}
            <div
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/servicios')}
            >
              <div className="bg-emselca-blue/5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <FaIndustry className="h-8 w-8 sm:h-10 sm:w-10 text-emselca-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emselca-blue">Energía Industrial</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Alta tensión y soluciones personalizadas para industrias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialMediaFeed />
        </div>
      </div>

      {/* Ubicación */}
      <div
        ref={mapRef}
        className="py-16 sm:py-20 md:py-24 bg-gray-50 opacity-0 translate-y-[50px] transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-emselca-blue mb-4 sm:mb-6">Nuestra Ubicación</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Visítanos en nuestra oficina principal.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div>
            <StreetView streetViewUrl="https://www.google.com/maps/@8.5132301,-77.2776136,3a,75y,146.11h,90t/data=!3m8!1e1!3m6!1sAF1QipOTlnveT87vC4NVJbsRLhNMC6i2yfk5i2cf82JM!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOTlnveT87vC4NVJbsRLhNMC6i2yfk5i2cf82JM%3Dw900-h600-k-no-pi0-ya139.11311914833212-ro0-fo100!7i6144!8i3072?hl=es&entry=ttu" />

            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 sm:py-20 md:py-24 bg-emselca-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">
            ¿Necesitas ayuda con tu servicio eléctrico?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/pqrs"
              className="bg-white text-emselca-blue px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reportar Falla
            </Link>
            <Link
              to="/contacto"
              className="bg-emselca-blue text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium border-2 border-white hover:bg-emselca-blue-light transition-all duration-300 transform hover:scale-105"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}