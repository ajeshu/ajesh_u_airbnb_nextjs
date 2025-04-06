'use client';
import React from 'react';

const CatFilter = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-24 relative z-10">
      <div className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar">
        {[
          { name: 'Beach', icon: '🏖️' },
          { name: 'Mountain View', icon: '⛰️' },
          { name: 'Cabins', icon: '🏡' },
          { name: 'Amazing Pools', icon: '🏊' },
          { name: 'Tiny Homes', icon: '🏠' },
          { name: 'Camping', icon: '⛺' },
          { name: 'Luxe', icon: '✨' },
          { name: 'Castles', icon: '🏰' },
          { name: 'Islands', icon: '🏝️' },
          { name: 'Villas', icon: '🏨' },
        ].map((category) => (
          <button
            key={category.name}
            aria-label={category.name}
            title={category.name}
            type="button"
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-xl min-w-max hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2 hover:scale-120 transition-transform">{category.icon}</div>
            <span className="text-sm font-medium text-gray-700">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
    );
  };
  
  export default CatFilter;