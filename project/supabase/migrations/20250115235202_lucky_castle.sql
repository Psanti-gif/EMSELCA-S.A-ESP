/*
  # Add Chocó-specific categories and locations

  1. New Tables
    - `news_categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text)
    
    - `choco_municipalities`
      - `id` (uuid, primary key)
      - `name` (text)
      - `region` (text)

  2. Updates to existing tables
    - Add category and municipality references to news and events
    
  3. Security
    - Enable RLS on new tables
    - Add policies for public read access
*/

-- Create news categories table
CREATE TABLE IF NOT EXISTS news_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL
);

-- Create Chocó municipalities table
CREATE TABLE IF NOT EXISTS choco_municipalities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  region text NOT NULL
);

-- Add columns to news table
ALTER TABLE news 
ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES news_categories(id),
ADD COLUMN IF NOT EXISTS municipality_id uuid REFERENCES choco_municipalities(id);

-- Add columns to events table
ALTER TABLE events 
ADD COLUMN IF NOT EXISTS municipality_id uuid REFERENCES choco_municipalities(id);

-- Enable RLS
ALTER TABLE news_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE choco_municipalities ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access for categories" ON news_categories
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access for municipalities" ON choco_municipalities
  FOR SELECT TO public USING (true);

-- Insert default categories
INSERT INTO news_categories (name, slug) VALUES
  ('Desarrollo Social', 'desarrollo-social'),
  ('Infraestructura', 'infraestructura'),
  ('Cultura y Turismo', 'cultura-turismo'),
  ('Medio Ambiente', 'medio-ambiente'),
  ('Servicios Públicos', 'servicios-publicos'),
  ('Educación', 'educacion'),
  ('Salud', 'salud'),
  ('Economía Local', 'economia-local');

-- Insert Chocó municipalities
INSERT INTO choco_municipalities (name, region) VALUES
  ('Quibdó', 'Central'),
  ('Alto Baudó', 'Baudó'),
  ('Bajo Baudó', 'Baudó'),
  ('Bojayá', 'Atrato'),
  ('Istmina', 'San Juan'),
  ('Condoto', 'San Juan'),
  ('Tadó', 'San Juan'),
  ('Nuquí', 'Pacífico Norte'),
  ('Bahía Solano', 'Pacífico Norte'),
  ('Acandí', 'Urabá'),
  ('Unguía', 'Urabá'),
  ('Riosucio', 'Urabá'),
  ('Carmen del Darién', 'Atrato'),
  ('Medio Atrato', 'Atrato'),
  ('Lloró', 'Atrato'),
  ('Bagadó', 'Atrato'),
  ('Medio Baudó', 'Baudó'),
  ('Río Quito', 'Atrato'),
  ('Cantón de San Pablo', 'San Juan'),
  ('Cértegui', 'San Juan'),
  ('Medio San Juan', 'San Juan'),
  ('Nóvita', 'San Juan'),
  ('San José del Palmar', 'San Juan'),
  ('Sipí', 'San Juan'),
  ('El Carmen de Atrato', 'Atrato'),
  ('Unión Panamericana', 'San Juan'),
  ('Río Iró', 'San Juan'),
  ('Juradó', 'Pacífico Norte'),
  ('Atrato', 'Atrato'),
  ('Litoral del San Juan', 'San Juan');