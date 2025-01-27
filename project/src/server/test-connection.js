import db from './config/db.js';

async function testConnection() {
  try {
    const [result] = await db.execute('SELECT 1');
    console.log('Conexión exitosa a la base de datos');
    process.exit(0);
  } catch (error) {
    console.error('Error de conexión:', error);
    process.exit(1);
  }
}

testConnection();