'use client';

import dynamic from 'next/dynamic';

const HeaderComponent = dynamic(() => import('./Header'));
const FooterSection = dynamic(() => import('./FooterSection'));
const SearchComp = dynamic(() => import('./SearchComp'));

const LayoutWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />
      <SearchComp />
      {children}
      <FooterSection />
    </div>
  );
};

export default LayoutWrapper;
