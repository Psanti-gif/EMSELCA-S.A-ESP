/*
  # PQRS System Setup

  1. New Tables
    - `pqrs`
      - `id` (uuid, primary key)
      - `tipo` (text, enum via check constraint)
      - `nombre` (text)
      - `email` (text)
      - `telefono` (text, nullable)
      - `asunto` (text)
      - `mensaje` (text)
      - `estado` (text, enum via check constraint)
      - `alerta_enviada` (boolean)
      - `fecha_creacion` (timestamptz)
      - `fecha_actualizacion` (timestamptz)

  2. Security
    - Enable RLS on `pqrs` table
    - Add policies for public submission and admin access
*/

-- Create enum types using check constraints
CREATE TABLE pqrs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo text NOT NULL CHECK (tipo IN ('peticion', 'queja', 'reclamo', 'sugerencia')),
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text,
  asunto text NOT NULL,
  mensaje text NOT NULL,
  estado text NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'en_proceso', 'resuelto')),
  alerta_enviada boolean DEFAULT false,
  fecha_creacion timestamptz DEFAULT now(),
  fecha_actualizacion timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX idx_pqrs_estado ON pqrs(estado);
CREATE INDEX idx_pqrs_fecha_creacion ON pqrs(fecha_creacion);
CREATE INDEX idx_pqrs_email ON pqrs(email);

-- Enable Row Level Security
ALTER TABLE pqrs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to create PQRS"
  ON pqrs
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read all PQRS"
  ON pqrs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update PQRS"
  ON pqrs
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);