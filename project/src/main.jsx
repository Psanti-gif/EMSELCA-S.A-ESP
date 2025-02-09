import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

// Importar páginas
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Transparency from './pages/Transparency'
import PQRS from './pages/PQRS'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<About />} />
      <Route path="servicios" element={<Services />} />
      <Route path="transparencia" element={<Transparency />} />
      <Route path="pqrs" element={<PQRS />} />
      <Route path="contacto" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)