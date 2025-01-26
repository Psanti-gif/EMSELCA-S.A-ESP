import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/logo.svg" 
        alt="EMSELCA SAS" 
        className="h-12 w-auto md:h-14 md:w-auto lg:h-16 lg:w-[200px] transition-all duration-200"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
        }}
      />
    </Link>
  );
}