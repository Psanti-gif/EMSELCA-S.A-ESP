import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function NewsList({ limit = 3, categoryId = null }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        let query = supabase
          .from('news')
          .select(`
            *,
            news_categories (name),
            choco_municipalities (name)
          `)
          .order('published_at', { ascending: false });

        if (categoryId) {
          query = query.eq('category_id', categoryId);
        }

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [limit, categoryId]);

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {news.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="flex items-center gap-2 mb-2">
            {item.news_categories && (
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
                {item.news_categories.name}
              </span>
            )}
            {item.choco_municipalities && (
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
                {item.choco_municipalities.name}
              </span>
            )}
          </div>
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {new Date(item.published_at).toLocaleDateString('es-CO', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <Link
            to={`/noticias/${item.slug}`}
            className="text-green-600 hover:text-green-700 text-sm inline-flex items-center"
          >
            Leer más 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}