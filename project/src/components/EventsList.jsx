import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function EventsList({ limit = 3 }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .gte('event_date', new Date().toISOString())
          .order('event_date', { ascending: true })
          .limit(limit);

        if (error) throw error;
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [limit]);

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">{event.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {new Date(event.event_date).toLocaleDateString('es-CO', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
            Próximo
          </span>
        </div>
      ))}
    </div>
  );
}