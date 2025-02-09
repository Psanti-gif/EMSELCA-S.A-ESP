import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-emselca-green">Contacto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="md:pl-8 lg:pl-16">
          <h2 className="text-2xl font-semibold mb-6 text-emselca-blue">Información de Contacto</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3 text-emselca-green">Dirección Principal</h3>
              <p className="text-gray-600">
                [Dirección de la oficina principal]<br />
                Chocó, Colombia
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-emselca-green">Teléfonos</h3>
              <p className="text-gray-600">
                Línea de Atención: (+57) XXX XXX XXXX<br />
                Emergencias: (+57) XXX XXX XXXX
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-emselca-green">Correo Electrónico</h3>
              <p className="text-gray-600">
                Atención al Cliente: contacto@emselca.com.co<br />
                PQRS: pqrs@emselca.com.co
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-emselca-green">Horario de Atención</h3>
              <p className="text-gray-600">
                Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                Sábados: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="md:pr-8 lg:pr-16">
          <h2 className="text-2xl font-semibold mb-6 text-emselca-blue">Envíenos un Mensaje</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-emselca-green bg-emselca-yellow hover:bg-emselca-yellow-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emselca-yellow transition-colors"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}