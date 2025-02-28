import React, { useState } from 'react';

export default function PQRS() {
  const [formData, setFormData] = useState({
    tipo: 'peticion',
    nombre: '',
    direccion: '',
    codigo: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://emselca.com.co/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Asegúrate de que el contenido sea en formato x-www-form-urlencoded
        },
        body: new URLSearchParams(formData),  // Convertimos los datos a un formato adecuado para el servidor
      });

      const data = await response.json();
      console.log('Datos recibidos:', data);

      if (data.status === 'success') {
        setSubmitStatus({
          type: 'success',
          message: 'Su PQRS ha sido enviada exitosamente. Recibirá un correo de confirmación.'
        });
        setFormData({
          tipo: 'peticion',
          nombre: '',
          direccion: '',
          codigo: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: '',
        });
      } else {
        throw new Error(data.message || 'Error al enviar PQRS');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar su PQRS. Por favor intente nuevamente.'
      });
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-emselca-green">
          Sistema de PQRS
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Presente sus Peticiones, Quejas, Daños, Reclamos o Sugerencias
        </p>

        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Solicitud
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            >
              <option value="peticion">Petición</option>
              <option value="queja">Queja</option>
              <option value="daños">Daños</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre Completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dirección Residencia
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Código
            </label>
            <input
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asunto
            </label>
            <input
              type="text"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emselca-blue focus:ring-emselca-blue"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-emselca-green bg-emselca-yellow hover:bg-emselca-yellow-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emselca-yellow transition-colors"
            >
              Enviar PQRS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
