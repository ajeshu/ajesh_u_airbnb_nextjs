'use client';

import dynamic from 'next/dynamic';

const CatFilter = dynamic(() => import('./CatFilter'));
const ExperiencesSection = dynamic(() => import('./ExperiencesSection'));
const FeatureListing = dynamic(() => import('./FeatureListing'));
const HostingSection = dynamic(() => import('./HostingSection'));
const SearchTab = dynamic(() => import('./SearchTab'));

export default function Home() {
  return (
    <div>
      <SearchTab />
      <CatFilter />
      <FeatureListing />
      <HostingSection />
      <ExperiencesSection />
    </div>
  );
}
