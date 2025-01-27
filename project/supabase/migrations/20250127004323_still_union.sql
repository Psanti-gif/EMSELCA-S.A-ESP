-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS emselca_db;

-- Usar la base de datos
USE emselca_db;

-- Crear la tabla PQRS
CREATE TABLE IF NOT EXISTS pqrs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(20) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  asunto VARCHAR(200) NOT NULL,
  mensaje TEXT NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente',
  alerta_enviada BOOLEAN DEFAULT false,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);