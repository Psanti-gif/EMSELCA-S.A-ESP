import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import pqrsRoutes from './routes/pqrs.js';

// Configurar dotenv
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Definir la aplicación Express
const app = express();



app.use(cors({
  origin: ['http://localhost:3002'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' http://localhost:3002; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
  );
  next();
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', pqrsRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Puerto
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
