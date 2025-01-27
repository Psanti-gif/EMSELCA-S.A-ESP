-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS emselca_db;
USE emselca_db;

-- Tabla de PQRS
CREATE TABLE IF NOT EXISTS pqrs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo ENUM('peticion', 'queja', 'reclamo', 'sugerencia') NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  asunto VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  estado ENUM('pendiente', 'en_proceso', 'resuelto', 'cerrado') DEFAULT 'pendiente',
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  alerta_enviada BOOLEAN DEFAULT FALSE,
  respuesta TEXT,
  fecha_respuesta DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de Noticias
CREATE TABLE IF NOT EXISTS noticias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT NOT NULL,
  imagen_url VARCHAR(255),
  fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  autor VARCHAR(100),
  estado ENUM('borrador', 'publicado', 'archivado') DEFAULT 'borrador'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de Eventos
CREATE TABLE IF NOT EXISTS eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  fecha_evento DATETIME NOT NULL,
  lugar VARCHAR(255) NOT NULL,
  imagen_url VARCHAR(255),
  estado ENUM('programado', 'en_curso', 'finalizado', 'cancelado') DEFAULT 'programado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de Usuarios Administrativos
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol ENUM('admin', 'editor', 'operador') NOT NULL,
  ultimo_acceso DATETIME,
  estado BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;