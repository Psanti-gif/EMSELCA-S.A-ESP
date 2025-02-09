import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function NewsDetail() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`http://localhost:3002/api/news/${slug}`);
        const data = await response.json();
        if (response.ok) {
          setNews(data);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-center">Noticia no encontrada</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <div className="mb-8">
          <Link to="/" className="text-green-600 hover:text-green-700 inline-flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Inicio
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {news.categoria && (
            <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
              {news.categoria}
            </span>
          )}
          {news.municipio && (
            <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
              {news.municipio} - Región {news.region}
            </span>
          )}
        </div>

        <h1 className="text-4xl font-bold mb-4">{news.titulo}</h1>
        <p className="text-gray-600 mb-8">
          {new Date(news.fecha_publicacion).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>

        {news.imagen_url && (
          <img
            src={news.imagen_url}
            alt={news.titulo}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="prose max-w-none">
          {news.contenido.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}