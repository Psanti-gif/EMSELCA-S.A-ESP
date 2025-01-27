-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS emselca_db;
USE emselca_db;

-- Crear tabla de PQRS
CREATE TABLE IF NOT EXISTS pqrs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('peticion', 'queja', 'reclamo', 'sugerencia') NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  asunto VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  estado ENUM('pendiente', 'en_proceso', 'resuelto') DEFAULT 'pendiente',
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  alerta_enviada BOOLEAN DEFAULT FALSE
);