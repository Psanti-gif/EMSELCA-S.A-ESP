import express from 'express';
import db from '../config/db.js';
import transporter from '../config/email.js';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Crear tabla si no existe
const createTableIfNotExists = async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS pqrs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tipo VARCHAR(50) NOT NULL,
        nombre VARCHAR(255) NOT NULL,
        direccion VARCHAR(255) NOT NULL,
        codigo VARCHAR(80),
        email VARCHAR(255) NOT NULL,
        telefono VARCHAR(50),
        asunto VARCHAR(255) NOT NULL,
        mensaje TEXT NOT NULL,
        estado VARCHAR(50) DEFAULT 'pendiente',
        fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
        alerta_enviada BOOLEAN DEFAULT FALSE
      )
    `);
    console.log('Tabla PQRS verificada/creada');
  } catch (error) {
    console.error('Error al crear tabla PQRS:', error);
  }
};

// Ejecutar creación de tabla al iniciar
createTableIfNotExists();

// Verificar PQRS pendientes con más de 5 días
const checkOldPQRS = async () => {
  try {
    const [pqrs] = await db.execute(`
      SELECT * FROM pqrs 
      WHERE estado = 'pendiente' 
      AND alerta_enviada = FALSE
      AND fecha_creacion <= DATE_SUB(NOW(), INTERVAL 5 DAY)
    `);

    for (const item of pqrs) {
      // Enviar alerta al administrador
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `⚠️ ALERTA: PQRS #${item.id} sin responder por más de 5 días`,
        html: `
          <h1>PQRS Pendiente por más de 5 días</h1>
          <p><strong>Número de radicado:</strong> ${item.id}</p>
          <p><strong>Tipo:</strong> ${item.tipo}</p>
          <p><strong>Nombre:</strong> ${item.nombre}</p>
          <p><strong>Dirección:</strong> ${item.direccion}</p>
          <p><strong>Código:</strong> ${item.codigo}</p>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Asunto:</strong> ${item.asunto}</p>
          <p><strong>Fecha de creación:</strong> ${new Date(item.fecha_creacion).toLocaleString()}</p>
          <p>Por favor, dar prioridad a esta solicitud.</p>
        `
      };

      await transporter.sendMail(adminMailOptions);

      // Marcar como alerta enviada
      await db.execute(
        'UPDATE pqrs SET alerta_enviada = TRUE WHERE id = ?',
        [item.id]
      );
    }
  } catch (error) {
    console.error('Error al verificar PQRS antiguos:', error);
  }
};

// Ejecutar verificación cada 24 horas
setInterval(checkOldPQRS, 24 * 60 * 60 * 1000);
// Ejecutar verificación al iniciar el servidor
checkOldPQRS();

// Ruta para crear un nuevo PQRS
router.post('/pqrs', async (req, res) => {
  try {
    const { tipo, nombre, direccion, codigo, email, telefono, asunto, mensaje } = req.body;

    // Validar campos requeridos
    if (!tipo || !nombre || !direccion  || !codigo || !email || !asunto || !mensaje) {
      return res.status(400).json({ 
        error: 'Todos los campos son requeridos excepto el teléfono' 
      });
    }

    // Insertar en la base de datos
    const [result] = await db.execute(
      'INSERT INTO pqrs (tipo, nombre, direccion, codigo, email, telefono, asunto, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [tipo, nombre, direccion, codigo, email, , telefono, asunto, mensaje]
    );

    // Enviar correo al usuario
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de PQRS - EMSELCA',
      html: `
        <h1>Confirmación de PQRS</h1>
        <p>Estimado(a) ${nombre},</p>
        <p>Con la direccion: ${direccion},</p>
        <p>Código de factura: ${codigo}</p>	
        <p>Hemos recibido su ${tipo} exitosamente. A continuación el detalle de su solicitud:</p>
        <ul>
          <li><strong>Número de radicado:</strong> ${result.insertId}</li>
          <li><strong>Tipo:</strong> ${tipo}</li>
          <li><strong>Asunto:</strong> ${asunto}</li>
          <li><strong>Fecha:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <p>Nos pondremos en contacto con usted pronto.</p>
        <p>Atentamente,<br>Equipo EMSELCA</p>
      `
    };

    // Enviar correo al administrador
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Nuevo PQRS recibido - ${tipo.toUpperCase()}`,
      html: `
        <h1>Nuevo PQRS Recibido</h1>
        <p><strong>Número de radicado:</strong> ${result.insertId}</p>
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Código:</strong> ${codigo || 'No proporcionado'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    };

    // Enviar ambos correos
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    res.status(201).json({ 
      message: 'PQRS creado exitosamente',
      id: result.insertId 
    });

  } catch (error) {
    console.error('Error al procesar PQRS:', error);
    res.status(500).json({ 
      error: 'Error al procesar su solicitud. Por favor intente nuevamente.' 
    });
  }
});

router.get('/pqrs', async (req, res) => {
  try {
    const [results] = await db.execute('SELECT * FROM pqrs');
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener PQRS' });
  }
});


export default router;

