/*
  # Create News and Events Tables

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `published_at` (timestamp)
      - `slug` (text, unique)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `event_date` (timestamp)
      - `location` (text)
      - `created_at` (timestamp)
      - `slug` (text, unique)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  published_at timestamptz DEFAULT now(),
  slug text UNIQUE NOT NULL,
  CHECK (length(title) > 0)
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now(),
  slug text UNIQUE NOT NULL,
  CHECK (length(title) > 0)
);

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies for news
CREATE POLICY "Allow public read access for news" ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin write access for news" ON news
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');

-- Create policies for events
CREATE POLICY "Allow public read access for events" ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin write access for events" ON events
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');