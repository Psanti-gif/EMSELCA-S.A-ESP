import db from './config/db.js';

async function insertTestPQRS() {
  try {
    // Insertar un PQRS con fecha de hace 6 días
    const [result] = await db.execute(`
      INSERT INTO pqrs (
        tipo, 
        nombre, 
        direccion,
        codigo,
        email, 
        telefono, 
        asunto, 
        mensaje, 
        fecha_creacion
      ) VALUES (
        'peticion',
        'Usuario Prueba',
        'Calle 123, 456',
        '12345',
        'test@example.com',
        '1234567890',
        'Prueba de alerta',
        'Este es un PQRS de prueba para verificar el sistema de alertas',
        DATE_SUB(NOW(), INTERVAL 6 DAY)
      )
    `);

    console.log('PQRS de prueba insertado correctamente');
    console.log('ID:', result.insertId);
    
    // Forzar la verificación de PQRS antiguos
    const [oldPqrs] = await db.execute(`
      SELECT * FROM pqrs 
      WHERE estado = 'pendiente' 
      AND alerta_enviada = FALSE
      AND fecha_creacion <= DATE_SUB(NOW(), INTERVAL 5 DAY)
    `);

    console.log('PQRS antiguos encontrados:', oldPqrs.length);
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

insertTestPQRS();