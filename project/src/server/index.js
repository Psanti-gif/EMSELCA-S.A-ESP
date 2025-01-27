import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import pqrsRoutes from './routes/pqrs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', pqrsRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

const PORT = process.env.PORT || 3002; // Cambiado a 3002

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});