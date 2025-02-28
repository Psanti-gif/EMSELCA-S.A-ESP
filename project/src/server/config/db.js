import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'u808992278_emselcaweb',
  password: process.env.DB_PASSWORD || '1qazxs2*-A',
  database: process.env.DB_NAME || 'u808992278_emselca_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

// Test the connection
const testConnection = async () => {
  try {
    const [result] = await pool.query('SELECT 1');
    console.log('Conexión exitosa a MySQL');
    return true;
  } catch (error) {
    console.error('Error conectando a MySQL:', error);
    return false;
  }
};

testConnection();

export default pool;