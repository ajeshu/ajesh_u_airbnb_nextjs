'use client';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const SearchComp = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <button
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        className="bg-rose-500 text-white p-4 rounded-full shadow-lg hover:bg-rose-600 transition-colors cursor-pointer"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchComp;
